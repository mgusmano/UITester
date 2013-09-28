Ext.define('EMSPEED.pddsummary.view.pddsummaryBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.pddsummaryBasePanel',
    id: 'pddsummaryBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('PDD Summary');
    },
    items: [
        {
            xtype: 'simpleIframe',
            src: 'details.aspx'
        }
    ]
});
