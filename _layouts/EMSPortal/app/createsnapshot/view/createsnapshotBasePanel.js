Ext.define('EMSPEED.createsnapshot.view.createsnapshotBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.createsnapshotBasePanel',
    id: 'createsnapshotBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('Create Snapshot');
    },
    items: [
        {
            xtype: 'simpleIframe',
            src: 'createsnapshot.aspx'
        }
    ]
});
