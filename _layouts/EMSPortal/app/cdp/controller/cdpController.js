Ext.define('EMSPEED.cdp.controller.cdpController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.cdp.view.cdpBasePanel'
    ],

    init: function () {
        this.control({
            '#cdpBasePanel': { activate: this.cdpBasePanel_activate }
        });
    },

    cdpBasePanel_activate: function (panel, e, eOpts) {
        Ext.util.Cookies.set('projectId', '12345');
        // alert('cdpMainPanel_activate');
    }

});
