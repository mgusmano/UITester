Ext.define('EMSPEED.reporting.view.reportingBasePanel', {
    //extend: 'Ext.panel.Panel',
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.reportingBasePanel',
    id: 'reportingBasePanel',
    requires: [
        'EMSPEED.reporting.view.reporting'
    ],


    //border: false,
    //bodyBorder: false,
    //overflowY: 'auto',
    layout: 'hbox',
    //hidden: true,


    initComponent: function () {
        //        this.dockedItems = [
        //            {
        //                xtype: 'label', id: 'rptTitle', height: 30, text: '', margin: '10 0 0 10',
        //                style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '16px' }
        //            }
        //        ];
        this.items = [
            { xtype: 'reportingBaseDetailPanel', id: 'pnlReportingDetail' },
            { xtype: 'reportingBaseSummaryPanel', id: 'pnlReportingSummary' }
        ];
        this.callParent(arguments);


        this.getData();



        //try {
        //    var  contextId = project.projectId;
        //    var getReportsParams = { "contextId": contextId };
        //    Ext.Ajax.request({
        //        url: reporting.getReportTypesUrl,
        //        method: reporting.getReportTypesMethod,
        //        timeout: 90000,
        //        withCredentials: com.usesWithCredentials,
        //        scope: this,
        //        jsonData: getReportsParams,
        //        success: function (response, opts) {
        //            var theResponse = Ext.decode(response.responseText);
        //            reporting.theReportTypes = theResponse;

        //            reporting.theDetailPanels = [];
        //            var newDetailPanel = { xtype: 'reportingManagerDetailPanel' };
        //            reporting.theDetailPanels.splice(1, 0, newDetailPanel);
        //            for (var r = 0; r < reporting.theReportTypes.length; r++) {
        //                newDetailPanel = { xtype: reporting.theReportTypes[r].detailPanel };
        //                reporting.theDetailPanels.splice(1, 0, newDetailPanel);
        //            }
        //            Ext.getCmp('pnlReportingDetail').add(reporting.theDetailPanels);

        //            reporting.theSummaryPanels = [];
        //            var newSummaryPanel = { xtype: 'reportingManagerSummaryPanel' };
        //            reporting.theSummaryPanels.splice(1, 0, newSummaryPanel);
        //            for (var r = 0; r < reporting.theReportTypes.length; r++) {
        //                newSummaryPanel = { xtype: reporting.theReportTypes[r].summaryPanel };
        //                reporting.theSummaryPanels.splice(1, 0, newSummaryPanel);
        //            }
        //            Ext.getCmp('pnlReportingSummary').add(reporting.theSummaryPanels);

        //            //Ext.getCmp('reportingBasePanel').setVisible(true);
        //            Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');
        //            //                    if (Ext.get('loading') != null) {
        //            //                        Ext.get('loading').remove();
        //            //                    }

        //            reporting.createReportHtmlForm();
        //            reporting.createRawReportHtmlForm();
        //            //initialiseHistory();

        //        },

        //        failure: function (response, opts) {
        //            com.showError(response, opts);
        //        }
        //    });
        //}
        //catch (err) {
        //    com.showErrorFromTry2(err);
        //}










    },

    getData: function () {
        var me = this;
        debugger;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ReportConfigurationService.svc/json/GetReportTypes';
        //var theData = {};
        $.ajax({
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode({ "contextId": project.projectId }),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: false
        })
        .done(function (data) {

            //var theResponse = Ext.decode(response.responseText);
            reporting.theReportTypes = data;

            reporting.theDetailPanels = [];
            var newDetailPanel = { xtype: 'reportingManagerDetailPanel' };
            reporting.theDetailPanels.splice(1, 0, newDetailPanel);
            for (var r = 0; r < reporting.theReportTypes.length; r++) {
                newDetailPanel = { xtype: reporting.theReportTypes[r].detailPanel };
                reporting.theDetailPanels.splice(1, 0, newDetailPanel);
            }
            Ext.getCmp('pnlReportingDetail').add(reporting.theDetailPanels);

            reporting.theSummaryPanels = [];
            var newSummaryPanel = { xtype: 'reportingManagerSummaryPanel' };
            reporting.theSummaryPanels.splice(1, 0, newSummaryPanel);
            for (var r = 0; r < reporting.theReportTypes.length; r++) {
                newSummaryPanel = { xtype: reporting.theReportTypes[r].summaryPanel };
                reporting.theSummaryPanels.splice(1, 0, newSummaryPanel);
            }
            Ext.getCmp('pnlReportingSummary').add(reporting.theSummaryPanels);

            Ext.getCmp('pnlReportingDetail').setChild('reportingManagerDetailPanel');

            reporting.createReportHtmlForm();
            reporting.createRawReportHtmlForm();

            dashboard.endLoading();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }



});
