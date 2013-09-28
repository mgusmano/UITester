Ext.define('EMSPEED.contextcontroller.controller.contextcontrollerController', {
    extend: 'Ext.app.Controller',

    requires: [
            'EMSPEED.contextcontroller.view.contextcontroller',
            'EMSPEED.contextcontroller.view.contextcontrollerBasePanel',
            'EMSPEED.contextcontroller.view.contextcontrollerHoverButton',
            'EMSPEED.contextcontroller.view.contextcontrollerProjectMenu',
            'EMSPEED.contextcontroller.view.contextcontrollerUserInfo'
        ],

    init: function () {
        this.control({
            '#contextcontrollerBasePanel':
                {
                    activate: this.contextcontrollerBasePanel_activate,
                    afterlayout: this.contextcontrollerBasePanel_afterlayout
                },
            '#btnHelp2': { click: this.btnHelp2_click }

        });
    },

    contextcontrollerBasePanel_activate: function (panel, e, eOpts) {
        //alert('projectheaderBasePanel_activate');
        //Ext.getCmp('lblCdpPercent').setText('75%');
        //Ext.getCmp('pbrCdpPercent').updateProgress(.75, '75%', true);
    },

    contextcontrollerBasePanel_afterlayout: function (panel, layout, eOpts) {
        //alert('projectheaderBasePanel_activate');
        //Ext.getCmp('lblCdpPercent').setText('75%');
        //Ext.getCmp('pbrCdpPercent').updateProgress(.75, '75%', true);
    },

    btnHelp2_click: function (button, e, eOpts) {
        Ext.getCmp('txtDfMM').setValue(parseInt((Math.random() * 100).toFixed(2)) + '%');
        Ext.getCmp('txtDfR').setValue(parseInt((Math.random() * 100).toFixed(2)) + '%');
        Ext.getCmp('txtDfMSC').setValue(parseInt((Math.random() * 100).toFixed(2)) + '%');
        Ext.getCmp('txtDfM').setValue(parseInt((Math.random() * 100).toFixed(2)) + '%');

        var theMeterValue = parseInt((Math.random() * 100).toFixed(2)) + '%';

        Ext.getCmp('theMeterLabel').setText(theMeterValue);
        //Ext.getCmp('theMeter').setHtml('<div class="meter blue nostripes"><span style="width: ' + theMeterValue + '"></span></div>');

        Ext.getCmp('theMeter').getEl().dom.innerHTML = '<div class="meter blue nostripes"><span style="width: ' + theMeterValue + '"></span></div>'

        Ext.getCmp('txtProjectManager').setValue('Marc Gusmano');
        Ext.getCmp('txtProductChampion').setValue('Marc Gusmano');
       
    }

});
