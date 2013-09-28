Ext.define('EMSPEED.clonepmt.view.clonepmtBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.clonepmtBasePanel',
    id: 'clonepmtBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('Clone PMT');
    },
    items: [
        {
            xtype: 'simpleIframe',
            src: 'clonepmt.aspx'
        }
    ]
});
