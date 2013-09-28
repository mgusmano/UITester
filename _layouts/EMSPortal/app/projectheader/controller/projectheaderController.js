Ext.define('EMSPEED.projectheader.controller.projectheaderController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.projectheader.view.projectheader',
        'EMSPEED.projectheader.view.projectheaderBasePanel'
    ],

    init: function () {
        this.control({
//            '#projectheaderBasePanel':
//                {
//                    activate: this.projectheaderBasePanel_activate,
//                    afterlayout: this.projectheaderBasePanel_afterlayout
//                },
            //            '#btnHelp': { click: this.btnHelp_click },
            '#btnSize': { click: this.btnSize_click }
            //'#btnRefresh': { click: this.btnRefresh_click },
            //'#btnRefresh2': { click: this.btnRefresh2_click }

        });
    },


    btnSize_click: function (button, e, eOpts) {
        if (Ext.util.Cookies.get('header') === '49px') {
            button.up('panel').setHeight(115);
            button.setIconCls('upArrow');
            button.setTooltip('small header');
            Ext.util.Cookies.set('header', '115px');
        }
        else {
            button.up('panel').setHeight(49);
            button.setIconCls('dnArrow');
            button.setTooltip('large header');
            Ext.util.Cookies.set('header', '49px');
        }
    },

    projectheaderBasePanel_activate: function (panel, e, eOpts) {
        //alert('projectheaderBasePanel_activate');
        //Ext.getCmp('lblCdpPercent').setText('75%');
        //Ext.getCmp('pbrCdpPercent').updateProgress(.75, '75%', true);
    }
});
