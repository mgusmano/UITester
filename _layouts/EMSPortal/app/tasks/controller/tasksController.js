Ext.define('EMSPEED.tasks.controller.tasksController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.tasks.view.tasksBasePanel'
    ],

    init: function () {
        this.control({
            //            '#tasksBasePanel': { activate: this.tasksBasePanel_activate }
        });
    }

    //    tasksBasePanel_activate: function (panel, e, eOpts) {
//        Ext.util.Cookies.set('projectId', '12345');
//        // alert('tasksMainPanel_activate');
//    }

});
