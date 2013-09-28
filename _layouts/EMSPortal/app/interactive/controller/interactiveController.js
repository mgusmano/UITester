Ext.define('EMSPEED.interactive.controller.interactiveController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.interactive.view.interactiveBasePanel'
    ],

    init: function () {
        this.control({
            //            '#statureBasePanel': { activate: this.statureBasePanel_activate }
        });
    }

});
