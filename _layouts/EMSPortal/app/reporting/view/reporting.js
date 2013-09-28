Ext.define('EMSPEED.reporting.view.reporting', {
    singleton: true,
    alternateClassName: 'reporting',

    constructor: function () {
        if (typeof enableGenerateReport === 'undefined') {
            this.enableGenerateReport = true;
        }
        else {
            this.enableGenerateReport = enableGenerateReport;
        }

        this.imagesFolder = com.appFolder + '/reporting' + '/resources/images/';
        this.siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
        this.serviceRoot = 'http://' + location.hostname + ':8095/';
        this.getProjectsUrl = com.appFolder + '/reporting/data/projects.jso';
        this.getReportTypesUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/GetReportTypes';
        this.getReportTypesMethod = 'POST';
        this.getMasterLayoutUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/GetMasterLayout';
        this.getMasterLayoutMethod = 'POST';
        this.getConfigurationUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/GetConfiguration';
        this.getConfigurationMethod = 'POST';
        this.saveConfigurationUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/SaveConfiguration';
        this.saveConfigurationMethod = 'POST';
        this.deleteConfigurationUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/DeleteConfiguration';
        this.deleteConfigurationMethod = 'POST';
        this.generateReportUrl = this.serviceRoot + 'ReportGenerationService.svc/json/GenerateReport';
        this.generateReportMethod = 'POST';
        this.generateRawDataReportUrl = this.serviceRoot + 'RawDataGenerationService.svc/json/GenerateRawDataReport';
        this.generateRawDataReportMethod = 'POST';
        this.logInteractiveReportRequestUrl = this.serviceRoot + 'ReportGenerationService.svc/json/LogInteractiveReportRequest';
        this.logInteractiveReportRequestMethod = 'POST';

        this.callParent(arguments);
    },

    changeMessage: 'You have unsaved changes to the report configuration',

    reportGenerationObject: {},

    eventType: 'No Event',
    isSelected: false,
    shouldIgnoreChangeEvents: false,
    theReportTypes: null,
    theDetailPanels: null,
    theSummaryPanels: null,
    selectedReportType: null,
    reportingBasePanelMask: null,

    quickTips: function () {
        Ext.tip.QuickTipManager.init();
        Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
            //maxWidth: 200,
            //minWidth: 200,
            dismissDelay: 0,
            showDelay: 0      // Show 50ms after entering target
        });
    },

    createReportHtmlForm: function () {
        Ext.getBody().createChild({
            tag: 'form',
            id: 'theReportGenerationForm',
            method: reporting.generateReportMethod,
            action: reporting.generateReportUrl,
            cls: 'x-hidden',
            children: [
                {
                    tag: 'input',
                    id: 'reportGeneration',
                    name: 'reportGeneration',
                    type: 'hidden'
                }
            ]
        });
    },

    createRawReportHtmlForm: function () {
        Ext.getBody().createChild({
            tag: 'form',
            id: 'theRawDataGenerationForm',
            method: reporting.generateRawDataReportMethod,
            action: reporting.generateRawDataReportUrl,
            cls: 'x-hidden',
            children: [
            {
                tag: 'input',
                id: 'rawDataGeneration',
                name: 'rawDataGeneration',
                type: 'hidden'
            }
        ]
        });
    },

    resetGridToolbar: function () {
        Ext.getCmp('btnReportSectionsAllClear').toggle(false, true);
        Ext.getCmp('btnReportSectionsAllClear').setText('All');
        Ext.getCmp('btnReportSectionsShowHide').toggle(false, true);
        Ext.getCmp('btnReportSectionsShowHide').setText('Hide Unselected Sections');
        //var store = Ext.getCmp('grdReportSections').getStore();
        //store.clearFilter(true);
        setTimeout(function () {
            var store = Ext.getCmp('grdReportSections').getStore();
            store.clearFilter(false);
        }, 150);

    },

    setChangedMessage: function () {
        var changeMessage = this.changeMessage;
        var theMessage = '';

        if (Ext.getCmp('txtConfigurationName').Begin != Ext.getCmp('txtConfigurationName').getValue()) {
            theMessage = changeMessage;
            Ext.get('txtConfigurationName-inputEl').applyStyles('backgroundColor: yellow');
        }
        else {
            Ext.get('txtConfigurationName-inputEl').applyStyles('backgroundColor: white');
        }

        if (Ext.getCmp('grdReportSections').store.getModifiedRecords().length > 0) {
            theMessage = changeMessage;
        }

        var reportingProgramProjects = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjects');;
        var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
        var cbxRiskThreshold = reportingProgramProjects.down('combobox');

        if (reportingProgramProjectTreeGrid.store.getModifiedRecords().length > 0) {
            theMessage = changeMessage;
        }

        if (cbxRiskThreshold.Begin != cbxRiskThreshold.getValue()) {
            theMessage = changeMessage;
        }

        var thePanel = Ext.getCmp('reportingCdpFieldsetGlobalFilters');
        var globalFiltersParentContainer = thePanel.down('#globalFiltersParentContainer');
        var globalFiltersSelected = reporting.filters.getFilterValues(globalFiltersParentContainer);

        if (Ext.encode(globalFiltersSelected) != Ext.encode(reporting.filters.globalFiltersSelected)) {
            theMessage = changeMessage;
        }

        Ext.getCmp('lblError').setText(theMessage);
    },

    clearChangedMessage: function () {
        Ext.getCmp('lblError').setText('');
    },

    drawSummary: function (theGridStoreItems) {
        var theSummary = '';
        theSummary += '<br>';
        var allowsSnapshot = false;
        for (key in theGridStoreItems) {
            if (theGridStoreItems[key].get('enabled') === true) {
                theSummary += '<br>' + '' + theGridStoreItems[key].get('name') + '';
                if (theGridStoreItems[key].get('allowsSnapshot') === true) {
                    allowsSnapshot = true;
                }
            }
        }

        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
        if (allowsSnapshot === true && DetailPanel.masterLayout.projectEntitlements.AllowSnapshot === true) {
            Ext.getCmp('chkCreateSnapshot').setDisabled(false);
        }
        else {
            Ext.getCmp('chkCreateSnapshot').setDisabled(true);
        }

        Ext.getCmp('lblCdpSection').setText(theSummary, false);
    }

});
