Ext.define('EMSPEED.reporting.controller.reportingInteractiveController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.reporting.model.reportingProjectsModel',

        'EMSPEED.reporting.view.reportingInteractiveDetailPanel',
        'EMSPEED.reporting.view.reportingCdpSummaryPanel',
        'EMSPEED.stature.view.statureBasePanel'
    ],

    init: function () {
        this.control({
            '#reportingInteractiveDetailPanel': { activate: this.reportingInteractiveDetailPanel_activate },
            '#btnLogInteractiveReportRequest': { click: this.btnLogInteractiveReportRequest_click },
            '#btnInteractiveBack': { click: this.btnInteractiveBack_click },
            '#reportingProgramProjects > reportingProgramProjectTreeGrid': { checkchange: this.reportingInteractiveProgramProjectTreeGrid_checkchange },
            '#reportingInteractiveDetailPanel > reportingProgramProjects > reportingProgramProjectTreeGrid > reportingProgramProjectTreeGridToolbar > button': { toggle: this.btnInteractiveProgramProjectAllClear_toggle }
        });
    },

    reportingInteractiveDetailPanel_activate: function (panel, e, eOpts) {
        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        var reportingProgramProjects = Ext.getCmp('reportingInteractiveDetailPanel').down('reportingProgramProjects');;
        var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
        var cbxRiskThreshold = reportingProgramProjects.down('combobox');

        var getMasterLayoutParms = { "reportTypeId": reporting.selectedReportType.data.id, "contextId": com.getProjectId() };
        Ext.Ajax.request({
            url: reporting.getMasterLayoutUrl,
            method: reporting.getMasterLayoutMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: getMasterLayoutParms,
            success: function (response, opts) {
                var DetailPanel = Ext.getCmp('reportingInteractiveDetailPanel');
                var response = Ext.decode(response.responseText);
                DetailPanel.masterLayout = response;

                if (DetailPanel.masterLayout.project.timeSpanFromLastUpdate === null) {
                    com.showErrorFromTry2('This project is not yet available on the EMSPEED portal.');
                    Ext.getCmp('reportingBasePanel').setLoading(false);
                }
                else 
                {
                        var testStore = Ext.create('Ext.data.TreeStore', {
                            model: 'EMSPEED.reporting.model.reportingProjectsModel',
                            defaultRootProperty: 'projects',
                            proxy: {
                                type: 'memory',
                                data: DetailPanel.masterLayout.projects,
                                reader: {
                                    type: 'json',
                                    root: 'projects'
                                }
                            },
                            root:
                            {
                                expanded: true
                            }
                        });

                        reportingProgramProjectTreeGrid.bindStore(testStore);

                        cbxRiskThreshold.store = Ext.create('Ext.data.Store', {
                            fields: ['id', 'name', 'color', 'image','lowerBoundary', 'upperBoundary', 'sequence'],
                            data: DetailPanel.masterLayout.riskThresholds
                        });

                        reportingProgramProjectTreeGrid.getRootNode().cascadeBy(function () {
                            this.set('checked', true);
                        });

                        Ext.getCmp('reportingBasePanel').setLoading(false);

                 }
            },
            failure: function (response, opts) {
                com.showError(response, opts);
                Ext.getCmp('reportingBasePanel').setLoading(false);
            }
        });
    },

    btnLogInteractiveReportRequest_click: function (button, e, eOpts) {
        Ext.getCmp('reportingBasePanel').setLoading('Working...');

        var theObject = {};
        var DetailPanel = Ext.getCmp('reportingInteractiveDetailPanel');
        var configuration = this.getConfigurationObjectForSave(DetailPanel.masterLayout.reportTypeId, DetailPanel.masterLayout.reportTypeName, DetailPanel.masterLayout.project);

        var logInteractiveReportRequestObject = {};
        logInteractiveReportRequestObject.contextId = com.getProjectId();
        logInteractiveReportRequestObject.siteRoot = 'n/a';
        logInteractiveReportRequestObject.reportTitle = 'Interactive Report';
        logInteractiveReportRequestObject.fileFormatId = 1; //Dummy Value, fileFormatId not needed
        logInteractiveReportRequestObject.reportTypeId = DetailPanel.masterLayout.reportTypeId;
        logInteractiveReportRequestObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        logInteractiveReportRequestObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        logInteractiveReportRequestObject.reportTypeName = DetailPanel.masterLayout.reportTypeName;
        logInteractiveReportRequestObject.generateSnapshot = false;
        logInteractiveReportRequestObject.zippedFile = false;
        logInteractiveReportRequestObject.configurationId = 0;
        logInteractiveReportRequestObject.configuration = configuration;

        theObject.reportRequest = logInteractiveReportRequestObject;

        Ext.Ajax.request({
            url: reporting.logInteractiveReportRequestUrl,
            method: reporting.logInteractiveReportRequestMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: theObject,
            success: function (response, opts) {

                var theItems = Ext.getCmp('projectApplication').items.items;
                var interactiveBasePanel = 'interactiveBasePanel';
                var found = false;
                for (var i = 0; i < theItems.length; i++) {
                    if (interactiveBasePanel === theItems[i].xtype) {
                        found = true;
                    }
                }
                if (found === false) {
                    Ext.getCmp('projectApplication').add({ xtype: interactiveBasePanel });
                }
                project.interactiveReporting = true;
                Ext.getCmp('projectApplication').setActivePanel(interactiveBasePanel);

                Ext.getCmp('reportingBasePanel').setLoading(false);
            },
            failure: function (response, opts) {
                com.showError(response, opts);
                Ext.getCmp('reportingBasePanel').setLoading(false);
            }
        });
    },

    btnInteractiveBack_click: function (panel, eOpts) {
        Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
    },

    reportingInteractiveProgramProjectTreeGrid_checkchange: function (node, checked, eOpts)
    {
        var parentNode = node.parentNode;
        var changeOccurred = true;
        if (checked)
        {
            while (parentNode)
            {
                parentNode.set('checked', true);
                parentNode = parentNode.parentNode;
            }
        }
    
        if (!checked && node.data.isParent)
        {
            var childChecked = false;
            node.cascadeBy(function () {
                if (this.get('checked')) {
                    childChecked = true;
                }
            })
    
            if (childChecked) {
                node.set('checked', true);
                var newMsg = 'A project may not be deselected while it has selected sub projects';
                Ext.Msg.alert('Validation Error', newMsg, Ext.emptyFn);
                changeOccurred = false;
            }
        }
    
        if (changeOccurred) {
            reporting.setChangedMessage();
        }

        var reportingProgramProjects = Ext.getCmp('reportingInteractiveDetailPanel').down('reportingProgramProjects');
        var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
        var btnProgramProjectAllClear = reportingProgramProjectTreeGrid.down('reportingProgramProjectTreeGridToolbar').down();
            
        var isAllChecked = this.isTreePanelAllChecked(reportingProgramProjectTreeGrid);
    
        if (isAllChecked) {
            reportingProgramProjectTreeGrid.store.clearFilter(false);
            btnProgramProjectAllClear.pressed = true;
            btnProgramProjectAllClear.setText('Clear');
        }
        else {
            btnProgramProjectAllClear.pressed = false;
            btnProgramProjectAllClear.setText('All');
        }
    },

    btnInteractiveProgramProjectAllClear_toggle: function (button, pressed, eOpts)
    {
        var reportingProgramProjectTreeGrid = Ext.getCmp('reportingInteractiveDetailPanel').down('reportingProgramProjectTreeGrid');

        var store = reportingProgramProjectTreeGrid.getStore();
        if (pressed) {
            store.clearFilter(false);
            button.setText('Clear');
        }
        else {
            button.setText('All');
        }

        reportingProgramProjectTreeGrid.getRootNode().cascadeBy(function () {
            this.set('checked', button.pressed);
        });

        reporting.setChangedMessage();
    },

    isTreePanelAllChecked: function (treePanel) {
        var treePanelRootNode = treePanel.getRootNode();
        var isAllChecked = true;

        treePanelRootNode.cascadeBy(function () {
            if (!this.get('checked')) {
                isAllChecked = false;
            }
        });

        return isAllChecked;
    },

    getConfigurationObjectForSave: function (reportTypeId, reportTypeName, project) {
        var reportingProgramProjects = Ext.getCmp('reportingInteractiveDetailPanel').down('reportingProgramProjects');;
        var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
        var cbxRiskThreshold = reportingProgramProjects.down('combobox');

        var theObject = {};
        theObject = {};
        theObject.id = 0;//Dummy Value since no configuration is used
        theObject.name = 'Interactive Report';
        theObject.reportTypeId = reportTypeId;
        theObject.riskThresholdIdSelected = cbxRiskThreshold.getValue();;
        theObject.isDefault = false;
        theObject.contextsSelected = [];

        var theRootContext = {};
        var idNumber = 1;
        theRootContext.id = idNumber;
        theRootContext.contextId = com.getProjectId();
        theRootContext.configurationId = 0;//Dummy Value since no configuration is used
        theRootContext.contextName = project.projectName;
        theRootContext.pddNumber = project.pddNumber;
        theRootContext.parentContextId = 0;
        theRootContext.parentContextName = 'n/a';
        theRootContext.level = project.level;
        theRootContext.isChild = project.isChild;
        theRootContext.isParent = project.isParent;
        theRootContext.projectManager = project.projectManager;
        theRootContext.productChampion = project.productChampion;
        theRootContext.productGroupId = project.productGroupId;
        theRootContext.productGroupCode = project.productGroupCode;

        theObject.contextsSelected.push(theRootContext);

        reportingProgramProjectTreeGrid.getRootNode().cascadeBy(function () {
            if (this.get('checked') && this.get('projectId') != 0) {
                var theSubContext = {};
                theSubContext.id = idNumber;
                theSubContext.contextId = this.get('projectId');
                theSubContext.configurationId = 0;//Dummy Value since no configuration is used
                theSubContext.contextName = this.get('projectName');
                theSubContext.pddNumber = this.get('pddNumber');
                theSubContext.parentContextId = this.get('parentProjectId');
                theSubContext.parentContextName = this.get('parentProjectName');
                theSubContext.level = this.get('level');
                theSubContext.isChild = this.get('isChild');
                theSubContext.isParent = this.get('isParent');
                theSubContext.projectManager = this.get('projectManager');
                theSubContext.productChampion = this.get('productChampion');
                theSubContext.productGroupId = this.get('productGroupId');
                theSubContext.productGroupCode = this.get('productGroupCode');
                theObject.contextsSelected.push(theSubContext);
                idNumber++;
            }
        });

        return theObject;
    }

});
