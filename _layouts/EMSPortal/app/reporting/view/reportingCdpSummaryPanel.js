Ext.define('EMSPEED.reporting.view.reportingCdpSummaryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingCdpSummaryPanel',
    id: 'reportingCdpSummaryPanel',
    itemId: 'reportingCdpSummaryPanel',
    margin: '0 0 0 0',
    border: false,
    bodyBorder: false,
    bodyPadding: '10 10 10 10',
    layout: 'vbox',
    fieldDefaults: {
        labelAlign: 'top'
    },
    bodyStyle: {
        backgroundColor: '#F2F2F2'
    },
    items: [
        { xtype: 'image', id: 'imgCdpType', margin: '0 0 5 0', height: '72px' },
        { xtype: 'label', id: 'lblCdpType', margin: '0 0 5 0' },
        { xtype: 'label', id: 'lblCdpDesc', margin: '0 0 5 0', width: 275 },
        {
            xtype: 'container',
            id: 'lblCdpSummary',
            hidden: true,
            width: 275,
            margin: '20 0 5 0',
            items: [
                { xtype: 'label', text: 'Sections Enabled', margin: '0 0 15 0', style: { fontWeight: 'bold'} },
                { xtype: 'label', id: 'lblCdpSection', margin: '30 0 0 0' }
            ]
        }
    ],
    loadRecord: function (image) {
        Ext.getCmp('lblCdpType').setText(image.data.name);
        Ext.getCmp('imgCdpType').setSrc(reporting.imagesFolder + image.data.iconFile);
        Ext.getCmp('lblCdpDesc').setText(image.data.description);
    }
});

