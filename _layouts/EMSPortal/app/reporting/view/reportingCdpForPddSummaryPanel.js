Ext.define('EMSPEED.reporting.view.reportingCdpForPddSummaryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingCdpForPddSummaryPanel',
    id: 'reportingCdpForPddSummaryPanel',
    itemId: 'reportingCdpForPddSummaryPanel',
    margin: '0 0 0 0',
    border: false,
    bodyBorder: false,
    bodyPadding: '10 10 10 10',
    layout: 'vbox',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%'
    },
    bodyStyle: {
        backgroundColor: '#F2F2F2'
    },
    items: [
        { xtype: 'image', id: 'imgCdpForPddType', margin: '0 0 5 00', height: '72px' },
        { xtype: 'label', id: 'lblCdpForPddType', margin: '0 0 15 0' },
        { xtype: 'label', id: 'lblCdpForPddDesc', margin: '0 0 15 0', width: 250 }
    ],
    loadRecord: function (image) {
        Ext.getCmp('imgCdpForPddType').setSrc(reporting.imagesFolder + image.data.iconFile);
        Ext.getCmp('lblCdpForPddType').setText(image.data.name);
        Ext.getCmp('lblCdpForPddDesc').setText(image.data.description);
    }
});
