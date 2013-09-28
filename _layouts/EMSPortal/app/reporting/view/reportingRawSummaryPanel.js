Ext.define('EMSPEED.reporting.view.reportingRawSummaryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingRawSummaryPanel',
    id: 'reportingRawSummaryPanel',
    itemId: 'reportingRawSummaryPanel',
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
        { xtype: 'image', id: 'imgRawType', margin: '0 0 5 00', height: '72px' },
        { xtype: 'label', id: 'lblRawType', margin: '0 0 15 0' },
        { xtype: 'label', id: 'lblRawDesc', margin: '0 0 15 0', width: 250 }
    ],
    loadRecord: function (image) {
        Ext.getCmp('imgRawType').setSrc(reporting.imagesFolder + image.data.iconFile);
        Ext.getCmp('lblRawType').setText(image.data.name);
        Ext.getCmp('lblRawDesc').setText(image.data.description);
    }
});
