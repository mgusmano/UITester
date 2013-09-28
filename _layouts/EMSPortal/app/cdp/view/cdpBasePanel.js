Ext.define('EMSPEED.cdp.view.cdpBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.cdpBasePanel',
    id: 'cdpBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('PDD CLMS');
    },
    items: [
        {
            xtype: 'simpleIframe',
            src: 'CDPs.aspx'
        }
    ]
});
