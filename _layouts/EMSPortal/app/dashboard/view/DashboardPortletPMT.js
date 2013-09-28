Ext.define('EMSPEED.dashboard.view.dashboardPortletPMT', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletPMT',
    title: 'PMT',

    configModified: function (theConfig) {
        //alert(Ext.encode(theConfig));
    },

    sourceConfig: {
        title: {
            displayName: 'Title'
        }
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    margin: '0 0 15 0',
                    html: '<div style=xmin-height:256px; xwidth:100%; overflow:auto;"><object data="data:application/x-silverlight-2," type="application/x-silverlight-2" height="256px" width="975px" ><param name="windowless" value="true" /><param name="background" value="transparent" /><param name="source" value="/_layouts/clientbin/emsportal/PMTView.xap"/><param name="onError" value="onSilverlightError" /><param name="background" value="white" /><param name="minRuntimeVersion" value="4.0.50401.0" /><param name="autoUpgrade" value="true" /><a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=4.0.50401.0" style="text-decoration:none"><img src="http://go.microsoft.com/fwlink/?LinkId=161376" alt="Get Microsoft Silverlight" style="border-style:none"/></a></object><iframe id="_sl_historyFrame" style="visibility:hidden;height:0px;width:0px;border:0px"></iframe></div>'
                }
            ]
        });
        this.callParent(arguments);
    },

    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    }
});
