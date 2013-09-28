Ext.define('EMSPEED.dashboard.view.dashboardPortletTemplate', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletTemplate',
    title: 'Template',

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
                { html: 'hi' }
            ]
        });
        this.callParent(arguments);
    },

    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    }
});
