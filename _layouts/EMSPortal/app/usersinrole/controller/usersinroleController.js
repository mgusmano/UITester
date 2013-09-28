Ext.define('EMSPEED.usersinrole.controller.usersinroleController', {
    extend: 'Ext.app.Controller',
    requires: [
            'EMSPEED.usersinrole.view.usersinrole',
            'EMSPEED.usersinrole.view.usersinroleBasePanel'
    ],

    init: function () {
        this.control({
            //'#usersinroleBasePanel': { activate: this.usersinroleBasePanel_activate },
            //'#btnusersinrole': { click: this.btnusersinrole_click }
        });
    },

    usersinroleBasePanel_activate: function (panel, e, eOpts) {
    },

    btnusersinrole_click: function (button, e, eOpts) {
        alert(button.text);
    }

});
