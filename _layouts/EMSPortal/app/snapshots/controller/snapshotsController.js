Ext.define('EMSPEED.snapshots.controller.snapshotsController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.snapshots.model.snapshotsHistoryModel',
        'EMSPEED.snapshots.view.snapshots',
        'EMSPEED.snapshots.view.snapshotsBasePanel',
        'EMSPEED.snapshots.view.snapshotsCreateSnapshot',
        'EMSPEED.snapshots.view.snapshotsHistory',
        'EMSPEED.snapshots.view.snapshotsCommonFieldSet'
    ],

    init: function () {
        this.control({
            '#snapshotsBasePanel': { activate: this.snapshotsBasePanel_activate }
        });
    },

    snapshotsBasePanel_activate: function (panel, e, eOpts) {
//        debugger;
//        var grdSnapshotsHistory = Ext.getCmp('gridSnapshotHistory');

//        var theStore = Ext.create('Ext.data.Store', {
//            model: 'EMSPEED.snapshots.model.snapshotsHistoryModel',
//            autoload: true,
//            proxy: {
//                type: 'ajax',
//                url: com.appFolder + '/snapshots/data/snapshotsHistory.jso',
//                reader: {
//                      type: 'json'
//                }
//            }
//        });

//        grdSnapshotsHistory.reconfigure(theStore);

//        theStore.loadData;
    }
});
