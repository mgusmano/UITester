Ext.define('EMSPEED.myprojects.controller.myprojectsController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.myprojects.view.myprojects',
        'EMSPEED.myprojects.view.myprojectsBasePanel',
        'EMSPEED.myprojects.view.myprojectsHeaderPanel',
        'EMSPEED.myprojects.view.myprojectsProgressBar',
        'EMSPEED.myprojects.model.myprojectsModel',
        'Ext.ux.form.SearchField'
    ],
    init: function () {
        this.control({
            '#myprojectsBasePanel': { activate: this.myprojectsBasePanel_activate }
        //    '#btnmyprojects': { click: this.btnmyprojects_click }
        });
    },

    myprojectsBasePanel_activate: function (panel, e, eOpts) {

        Ext.getCmp('projectheaderBasePanel').setVisible(false);
        Ext.getCmp('projectNavigation').setVisible(false);
        //Ext.getCmp('menuHider').setVisible(false);
        //Ext.getCmp('tabsBasePanel').setVisible(false);

    }

//    btnmyprojects_click: function (button, e, eOpts) {
//        alert(button.text);
//    }

});
