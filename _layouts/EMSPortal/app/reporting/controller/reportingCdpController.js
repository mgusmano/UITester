Ext.define('EMSPEED.reporting.controller.reportingCdpController', {
    extend: 'Ext.app.Controller',

    requires: [

            'EMSPEED.reporting.model.reportingSectionsModel',
            'EMSPEED.reporting.model.reportingProjectsModel',

            'EMSPEED.reporting.view.reportingCdpDetailPanel',
            'EMSPEED.reporting.view.reportingCdpFieldsetGenerateReport',
            'EMSPEED.reporting.view.reportingCdpFieldsetCustomConfigurations',
            'EMSPEED.reporting.view.reportingCdpFieldsetConfigurationActions',
            'EMSPEED.reporting.view.reportingCdpFieldsetGlobalFilters',
            'EMSPEED.reporting.view.reportingCdpFieldsetReportSections',
            'EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsToolbar',
            'EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsSortGroupsColumn',
            'EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsFiltersColumn',
            'EMSPEED.reporting.view.reportingProgramProjectTreeGrid',
            'EMSPEED.reporting.view.reportingProgramProjectTreeGridToolbar',
            'EMSPEED.reporting.view.reportingProgramProjects',
            'EMSPEED.reporting.view.reportingCdpSummaryPanel',
            'EMSPEED.reporting.view.reportingCdpCheckColumn',
            'EMSPEED.reporting.view.reportingCommonFieldSet',
            'EMSPEED.reporting.view.reportingCommonGenerateConfirm'
    ],

    init: function () {
        this.control({
            '#reportingCdpDetailPanel': { activate: this.reportingCdpDetailPanel_activate },

            '#cbxCDP': { select: this.cbxCDP_select, change: this.cbxCDP_change },
            '#cbxConfigurations': { select: this.cbxConfigurations_select, beforeselect: this.cbxConfigurations_beforeselect },
            '#cbxOutputType': { select: this.cbxOutputType_select },
            '#cbxRiskThreshold': { select: this.cbxRiskThreshold_select},
            '#btnGenerateReport': { click: this.btnGenerateReport_click },
            '#reportingProgramProjects > reportingProgramProjectTreeGrid': { checkchange: this.reportingProgramProjectTreeGrid_checkchange },
            '#reportingProgramProjects > reportingProgramProjectTreeGrid > reportingProgramProjectTreeGridToolbar > button': { toggle: this.btnCdpProgramProjectAllClear_toggle },

            '#txtConfigurationName': { change: this.txtConfigurationName_change },
            '#btnSaveConfiguration': { click: this.btnSaveConfiguration_click },
            '#btnSaveAsConfiguration': { click: this.btnSaveAsConfiguration_click },
            '#btnDeleteConfiguration': { click: this.btnDeleteConfiguration_click },

            '#cbxEnabled': { checkchange: this.cbxEnabled_checkchange },

            '#btnCdpBack': { click: this.btnCdpBack_click }
        });
    },

    reportingCdpDetailPanel_activate: function (panel, e, eOpts) {
        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        reporting.resetGridToolbar();
        Ext.getCmp('lblCdpSummary').setVisible(true);
        var reportingProgramProjects = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjects');;
        var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
        var cbxRiskThreshold = reportingProgramProjects.down('combobox');
        var cbxCDP = Ext.getCmp('cbxCDP');
        var txtCdpReportTitle = Ext.getCmp('txtCdpReportTitle');

        if (reporting.selectedReportType.data.id === 4) {
            cbxCDP.setVisible(false);
            reportingProgramProjects.setVisible(true);
            txtCdpReportTitle.width = 625;
        }
        else {
            cbxCDP.setVisible(true);
            reportingProgramProjects.setVisible(false);
            txtCdpReportTitle.width = 390;
        }

        var getMasterLayoutParms = { "reportTypeId": reporting.selectedReportType.data.id, "contextId": com.getProjectId() };
        Ext.Ajax.request({
            url: reporting.getMasterLayoutUrl,
            method: reporting.getMasterLayoutMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: getMasterLayoutParms,
            success: function (response, opts) {
                var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
                var cbxConfigurations = Ext.getCmp('cbxConfigurations');
                var cbxOutputType = Ext.getCmp('cbxOutputType');
                var chkCreateSnapshot = Ext.getCmp('chkCreateSnapshot');

                var response = Ext.decode(response.responseText);
                DetailPanel.masterLayout = response;

                if (DetailPanel.masterLayout.project.timeSpanFromLastUpdate === null) {
                    com.showErrorFromTry2('This project is not yet available on the EMSPEED portal.');
                }
                else {

                    cbxCDP.store = Ext.create('Ext.data.Store', {
                        fields: ['id', 'name'],
                        data: DetailPanel.masterLayout.reportTypeItems
                    });

                    cbxConfigurations.store = Ext.create('Ext.data.Store', {
                        fields: ['id', 'name'],
                        data: DetailPanel.masterLayout.configurations
                    }),
                    cbxConfigurations.setValue(DetailPanel.masterLayout.configurationId);

                    cbxOutputType.store = Ext.create('Ext.data.Store', {
                        fields: ['id', 'name'],
                        data: DetailPanel.masterLayout.fileFormats
                    }),
                    cbxOutputType.setValue(1);

                    if (DetailPanel.masterLayout.reportTypeId === 4) {

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

                        txtCdpReportTitle.setValue(DetailPanel.masterLayout.project.projectId + ' - ' + DetailPanel.masterLayout.project.projectName);
                    }

                    this.getConfigurationFromServer(true, DetailPanel.masterLayout.reportTypeId, DetailPanel.masterLayout.configurationId, DetailPanel.masterLayout.isL2Support);

                }


            },
            failure: function (response, opts) {
                com.showError(response, opts);
            }
        });
    },

    cbxCDP_select: function (combobox, newVal, oldVal, eOpts) {
        var valueField = newVal[0].data.id
        var displayField = newVal[0].raw.name;

        this.cbxCDP_change(combobox, valueField, displayField, eOpts);
    },
    cbxCDP_change: function (combobox, valueField, displayField, eOpts) {
        reporting.resetGridToolbar();
        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
        DetailPanel.masterLayout.currentReportTypeItemId = valueField;

        var store = combobox.getStore();
        store.each(function (rec, index, count) {
            if (rec.get('id') === valueField) {
                displayField = rec.get('name');
            }
        });

        if (DetailPanel.masterLayout.reportTypeId == 1) {
            var theRecommendedSectionIds;
            for (var r = 0; r < DetailPanel.masterLayout.reportTypeItems.length; r++) {
                if (valueField === DetailPanel.masterLayout.reportTypeItems[r].id) {
                    theRecommendedSectionIds = DetailPanel.masterLayout.reportTypeItems[r].recommendedSectionIds;
                    break;
                }
            }
            var store = Ext.getCmp('grdReportSections').getStore();
            store.each(function (rec, index, count) {

                var i = -1;
                var obj = rec.get('id');
                for (var j = 0; j < theRecommendedSectionIds.length; j++) {
                    if (theRecommendedSectionIds[j] == obj) {
                        i = j;
                    }
                }
                //var i = theRecommendedSectionIds.indexOf(rec.get('id'));

                if (i === -1) {
                    rec.set('cdp', '');
                }
                else {
                    rec.set('cdp', 'x');
                }
            });

            Ext.getCmp('txtCdpReportTitle').setValue(DetailPanel.masterLayout.project.projectId + ' - ' + DetailPanel.masterLayout.project.projectName + ' - ' + displayField);
        };


    },
    cbxConfigurations_select: function (combobox, newVal, oldVal) {

        reporting.resetGridToolbar();

        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
        this.getConfigurationFromServer(false, DetailPanel.masterLayout.reportTypeId, newVal[0].data.id);
        DetailPanel.masterLayout.configurationId = newVal[0].data.id;
    },

    cbxConfigurations_beforeselect: function (combo, record, index, eOpts) {
        if (Ext.getCmp('lblError').text === 'You have unsaved changes to the report configuration') {
            var answer;
            answer = window.confirm('You have unsaved changes to the report configuration\n\nClick OK to continue without saving changes\n\nClick CANCEL to retrun to unsaved configuration');

            if (answer === true) {
                return true;
            }
            else {
                combo.collapse();
                return false;
            }
        }
        else {
            return true;
        }
    },

    cbxOutputType_select: function (combobox, newVal, oldVal) {
        //alert('select: ' + oldVal);
    },

    btnGenerateReport_click: function (button, e, eOpts) {
        reporting.eventType = 'Generate Report';
        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');

        var reportGenerationObject = {};
        reportGenerationObject.contextId = com.getProjectId();
        reportGenerationObject.siteRoot = reporting.siteRoot;
        reportGenerationObject.reportTitle = Ext.getCmp('txtCdpReportTitle').getValue();
        reportGenerationObject.fileFormatId = Ext.getCmp('cbxOutputType').getValue(); ; // need to figure this out getComboText('cbxOutputType');
        reportGenerationObject.reportTypeId = DetailPanel.masterLayout.reportTypeId;
        reportGenerationObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        reportGenerationObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        reportGenerationObject.reportTypeName = DetailPanel.masterLayout.reportTypeId;
        reportGenerationObject.generateSnapshot = Ext.getCmp('chkCreateSnapshot').getValue();  //need to get this
        reportGenerationObject.zippedFile = Ext.getCmp('chkZip').getValue(); //bool
        reportGenerationObject.configuration = {};
        if (Ext.getCmp('lblError').text === '') {
            reportGenerationObject.configurationId = DetailPanel.masterLayout.configurationId;
        }
        else {
            reportGenerationObject.configurationId = 0;
            reportGenerationObject.configuration = this.getConfigurationObjectForSave(DetailPanel.masterLayout.reportTypeId, Ext.getCmp('txtConfigurationName').getValue(), DetailPanel.masterLayout.configurationId, DetailPanel.masterLayout.project);
        }
        var reportGenerationString = Ext.encode(reportGenerationObject);
        reporting.reportGenerationObject = reportGenerationObject;
        Ext.create("EMSPEED.reporting.view.reportingCommonGenerateConfirm", {}).show();
        if (reporting.enableGenerateReport === true) {
            Ext.getDom('reportGeneration').setAttribute("value", reportGenerationString);
            Ext.getDom('theReportGenerationForm').submit();
        }
    },

    txtConfigurationName_change: function (textbox, newValue, oldValue, eOpts) {
        if (reporting.isSelected === false) {
            reporting.setChangedMessage();
        }
        else {
            if (Ext.getCmp('lblError').text === 'You have unsaved changes to the report configuration') {
                alert('warning, unsaved changes...');
            }
            Ext.getCmp('lblError').setText('');
            Ext.get('txtConfigurationName-inputEl').applyStyles('backgroundColor: white');
        }
    },

    btnSaveConfiguration_click: function (button, e, eOpts) {
        reporting.eventType = 'Edit Configuration';
        var theName = Ext.getCmp('txtConfigurationName').rawValue;
        var combo = Ext.getCmp('cbxConfigurations');
        var currentName = this.getSelectedComboBoxItemValue(combo);
        var isGood = true;
        if (Ext.isEmpty(theName)) {
            var newMsg = '<span style="color:red">Please enter a value for your configuration name</span>';
            Ext.Msg.alert('Validation Error', newMsg, Ext.emptyFn);
            isGood = false;
        }
        if (this.checkConfigurationNameForDuplicates(theName) && theName != currentName) {
            var newMsg = '<span style="color:red">Please enter a unique name for your configuration</span>';
            Ext.Msg.alert('Validation Error', newMsg, Ext.emptyFn);
            isGood = false;
        }
        //other checks to see if this name already used
        if (isGood === true) {

            Ext.getCmp('reportingBasePanel').setLoading('Working...');
            var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
            var theConfigurationObject = {};
            theConfigurationObject.configuration = this.getConfigurationObjectForSave(DetailPanel.masterLayout.reportTypeId, theName, DetailPanel.masterLayout.configurationId);
            var s = Ext.encode(theConfigurationObject);
            Ext.Ajax.request({
                url: reporting.saveConfigurationUrl,
                method: reporting.saveConfigurationMethod,
                withCredentials: com.usesWithCredentials,
                scope: this,
                jsonData: theConfigurationObject,
                success: function (response, opts) {
                    var response = Ext.decode(response.responseText);
                    var cbxConfigurations = Ext.getCmp('cbxConfigurations');
                    var theStore = Ext.create('Ext.data.Store', {
                        fields: ['id', 'name'],
                        data: response.configurations
                    });
                    cbxConfigurations.bindStore(theStore);
                    cbxConfigurations.setValue(response.configurationId);
                    DetailPanel.masterLayout.configurations = response.configurations;
                    this.getConfigurationFromServer(false, DetailPanel.masterLayout.reportTypeId, response.configurationId, DetailPanel.masterLayout.isL2Support);
                    Ext.getCmp('reportingBasePanel').setLoading(false);
                },
                failure: function (response, opts) {
                    com.showError(response, opts);
                }
            });
        }
    },

    btnSaveAsConfiguration_click: function (button, e, eOpts) {
        reporting.eventType = 'Save New Configuration';
        var theName = Ext.getCmp('txtConfigurationName').rawValue;
        Ext.Msg.prompt('New Configuration', 'Enter a name for your new configuration:', function (btn, text, cfg) {

            var isGood = true;
            if (btn == 'ok') {
                if (Ext.isEmpty(text)) {
                    var newMsg = '<span style="color:red">Enter a name for your new configuration:</span>';
                    Ext.Msg.show(Ext.apply({}, { msg: newMsg }, cfg));
                    isGood = false;
                }
                if (this.checkConfigurationNameForDuplicates(text)) {
                    var newMsg = '<span style="color:red">Enter a name for your new configuration:</span>';
                    Ext.Msg.show(Ext.apply({}, { msg: newMsg }, cfg));
                    isGood = false;
                }
                //other checks to see if this name already used
                if (isGood === true) {

                    var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
                    var isL2Support = DetailPanel.masterLayout.isL2Support;
                    var defaultConfigMsg = 'Is ' + text + ' a new configuration?';
                    //                    if (isL2Support) {
                    //                        Ext.Msg.show({
                    //                            title: 'Default Configuration?',
                    //                            msg: defaultConfigMsg,
                    //                            buttons: Ext.Msg.YESNOCANCEL,
                    //                            fn: processResult,
                    //                            icon: Ext.window.MessageBox.INFO
                    //                        });
                    //                    }


                    Ext.getCmp('reportingBasePanel').setLoading('Working...');
                    var theConfigurationObject = {};
                    theConfigurationObject.configuration = this.getConfigurationObjectForSave(DetailPanel.masterLayout.reportTypeId, text, 0);
                    //var s = Ext.encode(theConfigurationObject);
                    Ext.Ajax.request({
                        url: reporting.saveConfigurationUrl,
                        method: reporting.saveConfigurationMethod,
                        withCredentials: com.usesWithCredentials,
                        scope: this,
                        jsonData: theConfigurationObject,
                        success: function (response, opts) {

                            var response = Ext.decode(response.responseText);
                            var cbxConfigurations = Ext.getCmp('cbxConfigurations');
                            var theStore = Ext.create('Ext.data.Store', {
                                fields: ['id', 'name'],
                                data: response.configurations
                            });
                            cbxConfigurations.bindStore(theStore);
                            cbxConfigurations.setValue(response.configurationId);
                            DetailPanel.masterLayout.configurations = response.configurations;
                            //DetailPanel.masterLayout.configurationId = response.data.configurationId;
                            this.getConfigurationFromServer(false, DetailPanel.masterLayout.reportTypeId, response.configurationId, DetailPanel.masterLayout.isL2Support);

                            Ext.getCmp('reportingBasePanel').setLoading(false);
                        },
                        failure: function (response, opts) {
                            com.showError(response, opts);
                        }
                    });
                }
            }



        }, this, false, theName);
    },

    btnDeleteConfiguration_click: function (button, e, eOpts) {
        reporting.eventType = 'Delete Configuration';
        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
        var configurationId = Ext.getCmp('cbxConfigurations').getValue();
        var s = { "reportTypeId": reporting.selectedReportType.data.id, "configurationId": configurationId };
        Ext.Ajax.request({
            url: reporting.deleteConfigurationUrl,
            method: reporting.deleteConfigurationMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: s,
            success: function (response, opts) {
                var response = Ext.decode(response.responseText);
                var cbxConfigurations = Ext.getCmp('cbxConfigurations');
                var theStore = Ext.create('Ext.data.Store', {
                    fields: ['id', 'name'],
                    data: response.configurations
                });
                cbxConfigurations.bindStore(theStore);
                cbxConfigurations.setValue(response.configurationId);

                DetailPanel.masterLayout.configurations = response.configurations;
                //DetailPanel.masterLayout.configurationId = response.data.configurationId;
                this.getConfigurationFromServer(false, DetailPanel.masterLayout.reportTypeId, response.configurationId, DetailPanel.masterLayout.isL2Support);

                Ext.getCmp('reportingBasePanel').setLoading(false);
            },
            failure: function (response, opts) {
                com.showError(response, opts);
            }
        });
    },

    cbxEnabled_checkchange: function (column, recordIndex, checked) {
        reporting.setChangedMessage();
        reporting.drawSummary(Ext.getCmp('grdReportSections').store.data.items);
    },

    btnCdpBack_click: function (panel, eOpts) {
        if (Ext.getCmp('lblError').text === reporting.changeMessage) {
            var answer;
            answer = window.confirm('You have unsaved changes to the report configuration\n\nClick OK to continue without saving changes\n\nClick CANCEL to retrun to unsaved configuration');
            if (answer === true) {
                Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
                Ext.getCmp('lblCdpDesc').setVisible(true);
                Ext.getCmp('lblCdpSummary').setVisible(false);
            }
        }
        else {
            Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
            Ext.getCmp('lblCdpDesc').setVisible(true);
            Ext.getCmp('lblCdpSummary').setVisible(false);
        }
    },

    getConfigurationObjectForSave: function (reportTypeId, reportName, configurationId, project) {
        var theObject = {};
        theObject = {};
        theObject.id = configurationId;
        theObject.name = reportName;
        theObject.reportTypeId = reportTypeId;
        theObject.isDefault = false;
        theObject.contextsSelected = [];
        theObject.sectionsSelected = [];

        var thePanel = Ext.getCmp('reportingCdpFieldsetGlobalFilters');
        var globalFiltersParentContainer = thePanel.down('#globalFiltersParentContainer');
        var globalFiltersSelected = reporting.filters.getFilterValues(globalFiltersParentContainer);

        theObject.globalFiltersSelected = globalFiltersSelected;

        var store = Ext.getCmp('grdReportSections').getStore();
        store.clearFilter(true);
        store.each(function (rec, index, count) {
            var theSection = {};
            theSection.id = index + 1;
            theSection.configurationId = configurationId;
            theSection.sectionsAvailableId = rec.get('id');
            theSection.enabled = rec.get('enabled');
            theSection.sectionFiltersSelected = rec.get('sectionFiltersSelected');
            theSection.sectionSortGroupsSelected = rec.get('sectionSortGroupsSelected');
            theObject.sectionsSelected.push(theSection);
        });

        if (reportTypeId === 4) {

            var reportingProgramProjects = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjects');;
            var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
            var cbxRiskThreshold = reportingProgramProjects.down('combobox');
            theObject.riskThresholdIdSelected = cbxRiskThreshold.getValue();

            var theRootContext = {};
            var idNumber = 1;
            theRootContext.id = idNumber;
            theRootContext.contextId = com.getProjectId();
            theRootContext.configurationId = configurationId;
            if (reporting.eventType === 'Generate Report') {
                theRootContext.contextName = project.projectName;
                theRootContext.pddNumber = project.pddNumber;
                theRootContext.parentContextId = project.parentProjectId;
                theRootContext.parentContextName = project.parentProjectName;
                theRootContext.level = project.level;
                theRootContext.isChild = project.isChild;
                theRootContext.isParent = project.isParent;
                theRootContext.projectManager = project.projectManager;
                theRootContext.productChampion = project.productChampion;
                theRootContext.productGroupId = project.productGroupId;
                theRootContext.productGroupCode = project.productGroupCode;
            }
            theObject.contextsSelected.push(theRootContext);

            reportingProgramProjectTreeGrid.getRootNode().cascadeBy(function () {
                if (this.get('checked') && this.get('projectId') != 0) {
                    var theSubContext = {};
                    theSubContext.id = idNumber;
                    theSubContext.contextId = this.get('projectId');
                    theSubContext.configurationId = configurationId;
                    if (reporting.eventType === 'Generate Report') {
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
                    }
                    theObject.contextsSelected.push(theSubContext);
                    idNumber++;
                }
            });
        }

        return theObject;
    },

    getConfigurationFromServer: function (initialRun, reportTypeId, configurationId, isL2Support) {
        // call getConfiguration web method to get the configuration data for the passed in configurationId
        // grab the 'sectionsSelected' array
        // loop through the masterLayout.sectionsAvailable array and add
        //   sectionsSelected.enabled, sectionsSelected.sectionFiltersSelected and sectionsSelected.sectionSortGroupsSelected
        // set the store for the sections grid to the masterLayout.sectionsAvailable array
        // draw the summary
        // if initial run, get global filter controls and set cdp list box item
        // set select values for global filters
        // set save and delete button states based on if configuration is a default
        // set configuration name text box
        // set cdp icons in section grid

        var s = { "reportTypeId": reportTypeId, "configurationId": configurationId };
        Ext.Ajax.request({
            url: reporting.getConfigurationUrl,
            method: reporting.getConfigurationMethod,
            withCredentials: com.usesWithCredentials,
            jsonData: s,
            scope: this,
            success: function (response, opts) {
                var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
                var grdReportSections = Ext.getCmp('grdReportSections');

                var response = Ext.decode(response.responseText);
                DetailPanel.masterLayout.configurationId = response.id;

                for (var a = 0; a < DetailPanel.masterLayout.sectionsAvailable.length; a++) {
                    DetailPanel.masterLayout.sectionsAvailable[a].enabled = false;
                    DetailPanel.masterLayout.sectionsAvailable[a].sectionFiltersSelected = [];
                    DetailPanel.masterLayout.sectionsAvailable[a].sectionSortGroupsSelected = [];
                }

                var sectionsSelected = response.sectionsSelected;
                sectionsSelected.sort(com.compareSectionsAvailableId);
                for (var r = 0; r < sectionsSelected.length; r++) {
                    var theIndex = com.getIndexFromId(DetailPanel.masterLayout.sectionsAvailable, sectionsSelected[r].sectionsAvailableId);
                    if (theIndex != undefined) {

                        DetailPanel.masterLayout.sectionsAvailable[theIndex].enabled = sectionsSelected[r].enabled;
                        DetailPanel.masterLayout.sectionsAvailable[theIndex].sectionFiltersSelected = sectionsSelected[r].sectionFiltersSelected;
                        DetailPanel.masterLayout.sectionsAvailable[theIndex].sectionSortGroupsSelected = sectionsSelected[r].sectionSortGroupsSelected;

                        //DetailPanel.masterLayout.sectionsAvailable[theIndex].allowsSnapshot = sectionsSelected[r].allowsSnapshot;
                        // start
                        //var n = DetailPanel.masterLayout.sectionsAvailable[theIndex].name;
                        //if (n === 'Project Dashboard' || n === 'Requirements') {
                        //    DetailPanel.masterLayout.sectionsAvailable[theIndex].allowsSnapshot = true;
                        //}
                        //else {
                        //    DetailPanel.masterLayout.sectionsAvailable[theIndex].allowsSnapshot = false;
                        //}
                        // end
                    }

                }


                DetailPanel.masterLayout.sectionsAvailable.sort(com.compareSequence);
                var theStore = Ext.create('Ext.data.Store', {
                    model: 'EMSPEED.reporting.model.reportingSectionsModel',
                    data: DetailPanel.masterLayout.sectionsAvailable
                });



                grdReportSections.reconfigure(theStore);

                if (DetailPanel.masterLayout.reportTypeId == 1) {
                    grdReportSections.columns[1].setVisible(true);
                }
                if (DetailPanel.masterLayout.reportTypeId == 4) {
                    grdReportSections.columns[1].setVisible(false);
                }

                reporting.drawSummary(grdReportSections.store.data.items);

                var thePanel = Ext.getCmp('reportingCdpFieldsetGlobalFilters');
                var globalFiltersParentContainer = thePanel.down('#globalFiltersParentContainer');
                if (initialRun === true) {
                    var globalFilterControls = reporting.filters.getAllFilterControls('global', DetailPanel.masterLayout.globalFiltersAvailable, 'global', 100);
                    globalFiltersParentContainer.add(globalFilterControls);
                    var cbxCDP = Ext.getCmp('cbxCDP');
                    cbxCDP.setValue(DetailPanel.masterLayout.currentReportTypeItemId);
                }
                reporting.filters.globalFiltersSelected = response.globalFiltersSelected;
                reporting.filters.setValuesForAllFilters(globalFiltersParentContainer, reporting.filters.globalFiltersSelected, DetailPanel.masterLayout.globalFiltersAvailable);

                var theIndex = com.getIndexFromId(DetailPanel.masterLayout.configurations, configurationId);
                var isDefault = DetailPanel.masterLayout.configurations[theIndex].isDefault;
                var isDisabled = this.getSaveConfigurationEntitlements(isDefault, isL2Support);

                var btnSave = Ext.getCmp('btnSaveConfiguration');
                btnSave.setDisabled(isDisabled);
                var btnDelete = Ext.getCmp('btnDeleteConfiguration');
                btnDelete.setDisabled(isDisabled);
                var txtConfigurationName = Ext.getCmp('txtConfigurationName');
                txtConfigurationName.setDisabled(isDisabled);

                reporting.clearChangedMessage();

                reporting.isSelected = true;
                Ext.getCmp('txtConfigurationName').setValue(com.getComboText('cbxConfigurations'));
                Ext.getCmp('txtConfigurationName').Begin = com.getComboText('cbxConfigurations');
                reporting.isSelected = false;

                if (DetailPanel.masterLayout.reportTypeId == 1) {
                    var theRecommendedSectionIds;
                    var valueField = DetailPanel.masterLayout.currentReportTypeItemId;
                    for (var r = 0; r < DetailPanel.masterLayout.reportTypeItems.length; r++) {
                        if (valueField === DetailPanel.masterLayout.reportTypeItems[r].id) {
                            theRecommendedSectionIds = DetailPanel.masterLayout.reportTypeItems[r].recommendedSectionIds;
                            break;
                        }
                    }

                    //mjg - is this logic repeated?
                    var store = Ext.getCmp('grdReportSections').getStore();
                    store.each(function (rec, index, count) {

                        var i = -1;
                        var obj = rec.get('id');
                        for (var j = 0; j < theRecommendedSectionIds.length; j++) {
                            if (theRecommendedSectionIds[j] == obj) {
                                i = j;
                            }
                        }
                        //var i = theRecommendedSectionIds.indexOf(rec.get('id'));

                        if (i === -1) {
                            rec.set('cdp', '');
                        }
                        else {
                            rec.set('cdp', 'x');
                        }
                    });
                    //mjg
                };

                if (DetailPanel.masterLayout.reportTypeId === 4)
                {
                    var theSelectedSubProjects = response.contextsSelected;
                    var reportingProgramProjects = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjects');;
                    var reportingProgramProjectTreeGrid = reportingProgramProjects.down('reportingProgramProjectTreeGrid');
                    var cbxRiskThreshold = reportingProgramProjects.down('combobox');
                    reportingProgramProjectTreeGrid.getRootNode().cascadeBy(function () {
                        for (var j = 0; j < theSelectedSubProjects.length; j++) {
                            if (theSelectedSubProjects[j].contextId == this.data.projectId) {
                                this.set('checked', true);
                            }
                        }
                        
                    });

                    cbxRiskThreshold.setValue(response.riskThresholdIdSelected);
                }

                Ext.getCmp('reportingBasePanel').setLoading(false);

            },
            failure: function (response, opts) {
                com.showError(response, opts);
            }
        });
    },

    reportingProgramProjectTreeGrid_checkchange: function (node, checked, eOpts)
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

        var reportingProgramProjects = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjects');
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

    btnCdpProgramProjectAllClear_toggle: function (button, pressed, eOpts) {
        var reportingProgramProjectTreeGrid = Ext.getCmp('reportingCdpDetailPanel').down('reportingProgramProjectTreeGrid');

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

    cbxRiskThreshold_select: function (combobox, newVal, oldVal) {
        reporting.setChangedMessage();
    },

    isTreePanelAllChecked: function(treePanel)
    {
        var treePanelRootNode= treePanel.getRootNode();
        var isAllChecked = true;

        treePanelRootNode.cascadeBy(function() {
            if(!this.get('checked'))
            {
                isAllChecked = false;
            }
        });

        return isAllChecked;
    },

    getSaveConfigurationEntitlements: function (isDefault, isL2Support) {
        var isDisabled = false;
        if (isDefault && !isL2Support) { isDisabled = true; }
        return isDisabled;
    },

    checkConfigurationNameForDuplicates: function (configurationName) {
        var store = Ext.getCmp('cbxConfigurations').getStore();
        var isDuplicate = false;
        store.each(function (rec, index, count) {
            if (rec.get('name') === configurationName) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    },

    getSelectedComboBoxItemValue: function (combo) {
        var selectValue = combo.getStore().find('id', combo.getValue());
        return combo.getStore().getAt(selectValue).get('name');
    }
});
