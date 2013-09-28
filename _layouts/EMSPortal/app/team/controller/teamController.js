Ext.define('EMSPEED.team.controller.teamController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.team.view.teamBasePanel'
    ],

    init: function () {
        this.control({
            //            '#teamBasePanel': { activate: this.teamBasePanel_activate }
        });
    }

//    teamBasePanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//        // alert('teamMainPanel_activate');
//    }

});
