Ext.define('EMSPEED.reporting.controller.reportingRawController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.reporting.view.reportingRawDetailPanel',
        'EMSPEED.reporting.view.reportingRawFieldsetGenerateReport',
        'EMSPEED.reporting.view.reportingRawSummaryPanel',
        'EMSPEED.reporting.view.reportingCommonFieldSet',
        'EMSPEED.reporting.view.reportingCommonGenerateConfirm'
    ],

    init: function () {
        this.control({
            '#reportingRawDetailPanel': { activate: this.reportingRawDetailPanel_activate },
            '#btnGenerateRawReport': { click: this.btnGenerateRawReport_click },
            '#btnRawBack': { click: this.btnRawBack_click }
        });
    },

    reportingRawDetailPanel_activate: function (panel, e, eOpts) {
        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        Ext.getCmp('lblCdpSummary').setVisible(true);

        var getMasterLayoutParms = { "reportTypeId": reporting.selectedReportType.data.id, "contextId": com.getProjectId() };
        Ext.Ajax.request({
            url: reporting.getMasterLayoutUrl,
            method: reporting.getMasterLayoutMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: getMasterLayoutParms,
            success: function (response, opts) {
                var DetailPanel = Ext.getCmp('reportingRawDetailPanel');

                var response = Ext.decode(response.responseText);
                DetailPanel.projectLastUpdated = response.project.timeSpanFromLastUpdate;

                if (DetailPanel.projectLastUpdated === null) {
                    com.showErrorFromTry2('This project is not yet available on the EMSPEED portal.');
                }
                else {
                    Ext.getCmp('txtRawReportTitle').setValue('RawData');
                    Ext.getCmp('reportingBasePanel').setLoading(false);
                }

            },
            failure: function (response, opts) {
                com.showError(response, opts);
            }
        });
    },

    btnGenerateRawReport_click: function (button, e, eOpts) {
        var reportGenerationObject = {};

        reportGenerationObject.projectID = com.getProjectId();
        reportGenerationObject.siteRoot = reporting.siteRoot;
        reportGenerationObject.fileName = Ext.getCmp('txtRawReportTitle').getValue() + '.xlsx';

        var reportGenerationString = Ext.encode(reportGenerationObject);
        reporting.reportGenerationObject = reportGenerationObject;
        Ext.create("EMSPEED.reporting.view.reportingCommonGenerateConfirm", {}).show();
        if (reporting.enableGenerateReport === true) {
            Ext.getDom('rawDataGeneration').setAttribute("value", reportGenerationString);
            Ext.getDom('theRawDataGenerationForm').submit();
        }
    },

    btnRawBack_click: function (panel, eOpts) {
        Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
    }

});
