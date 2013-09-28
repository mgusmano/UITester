Ext.define('EMSPEED.reporting.view.reportingManagerDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingManagerDetailPanel',
    id: 'reportingManagerDetailPanel',
    itemId: 'reportingManagerDetailPanel',
    title: 'Select Report Type',
    header: false,
    height: 440,
    border: false,
    bodyBorder: false,
    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },
    initComponent: function () {
        this.items = [
            { xtype: 'reportingManagerIconBrowser', id: 'img-chooser-view' }
        ];
        this.callParent(arguments);
    },
    fbar: [{ id: 'btnCustomize', text: 'Customize the Report', margin: '0 0 15 0', disabled: true }]
});
