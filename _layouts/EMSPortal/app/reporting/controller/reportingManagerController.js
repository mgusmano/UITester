Ext.define('EMSPEED.reporting.controller.reportingManagerController', {
    extend: 'Ext.app.Controller',

    requires: [

        'EMSPEED.reporting.model.reportingReportTypesModel',

        'EMSPEED.reporting.view.reportingBasePanel',
        'EMSPEED.reporting.view.reportingBaseDetailPanel',
        'EMSPEED.reporting.view.reportingBaseSummaryPanel',
        'EMSPEED.reporting.view.reportingManagerDetailPanel',
        'EMSPEED.reporting.view.reportingManagerSummaryPanel',
        'EMSPEED.reporting.view.reportingManagerIconBrowser'
    ],

    init: function () {
        this.control({
            '#img-chooser-view':
                {
                    selectionchange: this.img_chooser_view_selectionchange,
                    itemdblclick: this.img_chooser_view_itemdblclick
                },
            '#btnCustomize': { click: this.btnCustomize_click }
        });
    },

    img_chooser_view_selectionchange: function (dataview, selections) {
        reporting.selectedReportType = selections[0];
        if (reporting.selectedReportType) {
            Ext.getCmp('btnCustomize').setDisabled(false);
            Ext.getCmp('pnlReportingSummary').getLayout().setActiveItem(reporting.selectedReportType.data.summaryPanel);
            Ext.getCmp(reporting.selectedReportType.data.summaryPanel).loadRecord(reporting.selectedReportType);
        }
    },

    img_chooser_view_itemdblclick: function (dataview, record, item, index, e, eOpts) {
        reporting.selectedReportType = Ext.getCmp('img-chooser-view').selModel.getSelection()[0];
        Ext.getCmp('pnlReportingDetail').setChild(reporting.selectedReportType.data.detailPanel);
    },

    btnCustomize_click: function (panel, eOpts) {
        reporting.selectedReportType = Ext.getCmp('img-chooser-view').selModel.getSelection()[0];
        Ext.getCmp('pnlReportingDetail').setChild(reporting.selectedReportType.data.detailPanel);
    }
});
