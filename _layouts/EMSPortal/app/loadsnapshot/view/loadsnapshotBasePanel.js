Ext.define('EMSPEED.loadsnapshot.view.loadsnapshotBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.loadsnapshotBasePanel',
    id: 'loadsnapshotBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('Load Snapshot');
    },
    items: [
        {
            xtype: 'simpleIframe',
            src: 'loadsnapshot.aspx'
        }
    ]
});
