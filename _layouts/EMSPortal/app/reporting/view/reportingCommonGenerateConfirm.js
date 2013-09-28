Ext.define('EMSPEED.reporting.view.reportingCommonGenerateConfirm', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingCommonGenerateConfirm',
    id: 'winReport',
    modal: true,
    floating: true,
    frame: true,
    bodyPadding: 10,
    bodyStyle: { background: 'white' },
    style: { background: 'white' },
    //shadow: true,
    width: 400,
    height: 180,
    //margin: '10 10 10 10',
    //minWidth: 1000,
    //minHeight: 700,
    //closeAction: 'hide',
    plain: false,
    border: false,
    closable: false,
    resizable: false,
    layout: 'vbox',
    items: [
//        {
//            //zindex: 10,
//            xtype: 'image',
//            src: 'add.png',
//            x: 880,
//            y: 0
    //        },

        {
            xtype: 'label',
            style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '16px' },
            width: 370,
            margin: '0 0 10 0',
            text: 'Report Submitted'
        },

        {
            xtype: 'label',
            width: 370,
            margin: '0 0 10 0',
            text: 'Your report generation request has been submitted.  The report will be downloaded to your browser page when it is completed.'
        },
        {
            xtype: 'label',
            width: 370,
            margin: '0 0 10 0',
            text: 'Do not close your browser window until the report has been downloaded, or the report will not be downloaded and you will need to resubmit.'
        },


        {
            xtype: 'button',
            id: 'btnReportConfirmClose',
            width: 100,
            text: 'OK',
            handler: function () {
                Ext.getCmp('winReport').close();
            }
        }
    ]
});
