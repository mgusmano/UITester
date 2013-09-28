Ext.define('EMSPEED.snapshots.view.snapshotsBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.snapshotsBasePanel',
    id: 'snapshotsBasePanel',
    layout: 'absolute',
    initComponent: function () {
        this.items = [
//        { xtype: 'snapshotsCreateSnapshot' },
//        { xtype: 'snapshotsHistory' }
          { xtype: 'image', src: project.imagesFolder + 'wireframes/snapshot2.jpg' }
        ];
        this.callParent(arguments);
        this.setTheTitle('Snapshots');
    }
});
