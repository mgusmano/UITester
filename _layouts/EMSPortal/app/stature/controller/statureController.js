Ext.define('EMSPEED.stature.controller.statureController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.stature.view.statureBasePanel'
    ],

    init: function () {
        this.control({
            //            '#statureBasePanel': { activate: this.statureBasePanel_activate }
        });
    }

    //    statureBasePanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//        // alert('statureMainPanel_activate');
//    }

});
