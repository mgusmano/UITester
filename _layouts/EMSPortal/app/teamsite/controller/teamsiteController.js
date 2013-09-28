Ext.define('EMSPEED.teamsite.controller.teamsiteController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.teamsite.view.teamsiteBasePanel'
    ],

    init: function () {
        this.control({
            //            '#teamsiteBasePanel': { activate: this.teamsiteBasePanel_activate }
        });
    }

    //    teamsiteBasePanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//        // alert('statureMainPanel_activate');
//    }

});
