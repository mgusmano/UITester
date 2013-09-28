Ext.define('EMSPEED.project.controller.projectController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.project.view.project',
        //'EMSPEED.project.view.EMSPEEDButton',
        'EMSPEED.project.view.projectApplication',
        'EMSPEED.project.view.projectNavigation'
        //'EMSPEED.project.view.projectSummaryHeaderPanel'
    ],

    init: function () {
        this.control({
 //           '#snapshotsMainPanel': { activate: this.snapshotsMainPanel_activate }
        });
    }

//    snapshotsMainPanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//    }

});
