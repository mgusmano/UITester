Ext.define('EMSPEED.reporting.controller.reportingCdpForPddController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.reporting.view.reportingCdpForPddDetailPanel',
        'EMSPEED.reporting.view.reportingCdpForPddFieldsetGenerateReport',
        'EMSPEED.reporting.view.reportingCdpForPddSummaryPanel',
        'EMSPEED.reporting.view.reportingCommonFieldSet',
        'EMSPEED.reporting.view.reportingCommonGenerateConfirm'
    ],

    init: function () {
        this.control({
            '#reportingCdpForPddDetailPanel': { activate: this.reportingCdpForPddDetailPanel_activate },
            '#btnGenerateCdpForPddReport': { click: this.btnGenerateCdpForPddReport_click },
            '#btnCdpForPddBack': { click: this.btnCdpForPddBack_click }
        });
    },

    reportingCdpForPddDetailPanel_activate: function (panel, e, eOpts) {
        Ext.getCmp('reportingBasePanel').setLoading('Working...');
        reporting.resetGridToolbar();

        var getMasterLayoutParms = { "reportTypeId": reporting.selectedReportType.data.id, "contextId": com.getProjectId() };
        Ext.Ajax.request({
            url: reporting.getMasterLayoutUrl,
            method: reporting.getSnapshotEntitlementsMethod,
            withCredentials: com.usesWithCredentials,
            scope: this,
            jsonData: getMasterLayoutParms,
            success: function (response, opts) {
                var DetailPanel = Ext.getCmp('reportingCdpForPddDetailPanel');
                var response = Ext.decode(response.responseText);
                DetailPanel.masterLayout = response;
                Ext.getCmp('chkCdpForPddCreateSnapshot').setDisabled(!DetailPanel.masterLayout.projectEntitlements.AllowSnapshot);
                Ext.getCmp('txtCdpForPddReportTitle').setValue(DetailPanel.masterLayout.project.projectId + ' - ' + DetailPanel.masterLayout.project.projectName + ' - ' + this.getFormattedDate());
                Ext.getCmp('reportingBasePanel').setLoading(false);
            },
            failure: function (response, opts) {
                com.showError(response, opts);
            }
        });
    },

    btnGenerateCdpForPddReport_click: function (button, e, eOpts) {
        var DetailPanel = Ext.getCmp('reportingCdpForPddDetailPanel');

        var metadata = reporting.selectedReportType.raw.metadata.split(';');

        var reportGenerationPMTApprovalObject = {};
        reportGenerationPMTApprovalObject.contextId = com.getProjectId();
        reportGenerationPMTApprovalObject.siteRoot = reporting.siteRoot;
        reportGenerationPMTApprovalObject.reportTitle = Ext.getCmp('txtCdpForPddReportTitle').getValue();
        reportGenerationPMTApprovalObject.fileFormatId = metadata[1]; //fileformatid is stored at index[1] of the metadata object
        reportGenerationPMTApprovalObject.reportTypeId = reporting.selectedReportType.raw.id;
        reportGenerationPMTApprovalObject.reportTypeName = 'CDP Report';
        reportGenerationPMTApprovalObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        reportGenerationPMTApprovalObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        reportGenerationPMTApprovalObject.generateSnapshot = Ext.getCmp('chkCdpForPddCreateSnapshot').getValue();
        reportGenerationPMTApprovalObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        reportGenerationPMTApprovalObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        reportGenerationPMTApprovalObject.zippedFile = metadata[2]; //zipped boolean value is stored at index[2] of the metadata object
        reportGenerationPMTApprovalObject.configuration = {};

        reportGenerationPMTApprovalObject.configurationId = metadata[0]; //configurationid is stored at index[0] of the metadata object

        var reportGenerationPMTApprovalString = Ext.encode(reportGenerationPMTApprovalObject);

        var reportGenerationDfXApprovalObject = {};
        reportGenerationDfXApprovalObject.contextId = com.getProjectId();
        reportGenerationDfXApprovalObject.siteRoot = reporting.siteRoot;
        reportGenerationDfXApprovalObject.reportTitle = Ext.getCmp('txtCdpForPddReportTitle').getValue();
        reportGenerationDfXApprovalObject.fileFormatId = metadata[4]; //fileformatid is stored at index[4] of the metadata object
        reportGenerationDfXApprovalObject.reportTypeId = reporting.selectedReportType.raw.id;
        reportGenerationDfXApprovalObject.reportTypeName = 'CDP Report';
        reportGenerationDfXApprovalObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        reportGenerationDfXApprovalObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        reportGenerationDfXApprovalObject.generateSnapshot = Ext.getCmp('chkCdpForPddCreateSnapshot').getValue();
        reportGenerationDfXApprovalObject.dfxTargetCdpEvent = DetailPanel.masterLayout.project.targetCdpMilestoneName,
        reportGenerationDfXApprovalObject.pddNextCdpEvent = DetailPanel.masterLayout.pddNextCdpEvent,
        reportGenerationDfXApprovalObject.zippedFile = metadata[5]; //zipped boolean value is stored at index[5] of the metadata object
        reportGenerationDfXApprovalObject.configuration = {};

        reportGenerationDfXApprovalObject.configurationId = metadata[3]; //configurationid is stored at index[3] of the metadata object

        var reportGenerationDfxApprovalString = Ext.encode(reportGenerationDfXApprovalObject);

        reporting.reportGenerationObject = reportGenerationPMTApprovalObject;
        reporting.reportGenerationObject = reportGenerationDfXApprovalObject;
        Ext.create("EMSPEED.reporting.view.reportingCommonGenerateConfirm", {}).show();
        if (reporting.enableGenerateReport === true) {
            Ext.getDom('reportGeneration').setAttribute("value", reportGenerationPMTApprovalString);
            Ext.getDom('theReportGenerationForm').submit();
            Ext.getDom('reportGeneration').setAttribute("value", reportGenerationDfxApprovalString);
            Ext.getDom('theReportGenerationForm').submit();
        }
    },

    btnCdpForPddBack_click: function (panel, eOpts) {
        Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
    },
    getFormattedDate: function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }
        today = mm + '/' + dd + '/' + yyyy;

        return today;
    }

});
