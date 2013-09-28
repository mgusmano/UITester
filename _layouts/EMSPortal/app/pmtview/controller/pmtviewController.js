Ext.define('EMSPEED.pmtview.controller.pmtviewController', {
    extend: 'Ext.app.Controller',
    requires: [
            'EMSPEED.pmtview.view.pmtview',
            'EMSPEED.pmtview.view.pmtviewBasePanel'
        ],

    init: function () {
        this.control({
            '#pmtviewBasePanel': { activate: this.pmtviewBasePanel_activate },
            '#btnPmtView': { click: this.btnPmtView_click }
        });
    },

    pmtviewBasePanel_activate: function (panel, e, eOpts) {
    },

    btnPmtView_click: function (button, e, eOpts) {
        alert(button.text);
    }

});
