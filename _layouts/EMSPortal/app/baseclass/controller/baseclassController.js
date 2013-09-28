Ext.define('EMSPEED.baseclass.controller.baseclassController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.baseclass.view.baseclassApplication',
        'EMSPEED.baseclass.view.baseclassContainer',
        'EMSPEED.baseclass.view.baseclassPanel'
    ],

    init: function () {
        this.control({
//            '#snapshotsMainPanel': { activate: this.snapshotsMainPanel_activate }
        });
    }

//    snapshotsMainPanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//    }

});
