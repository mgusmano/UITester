Ext.define('EMSPEED.reporting.view.reportingRawDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingRawDetailPanel',
    id: 'reportingRawDetailPanel',
    itemId: 'reportingRawDetailPanel',
    layout: 'vbox',
    title: 'Generate Raw Report',
    header: false,
    border: false,
    bodyBorder: false,
    bodyPadding: '0 0 0 0',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 290,
        anchor: '100%'
    },
    items: [
        { xtype: 'reportingRawFieldsetGenerateReport' }
    ],
    dockedItems: [
    {
        xtype: 'toolbar', dock: 'top',
        style: {
            top: 0,
            left: 0,
            borderWidth: '1px',
            padding: '0 0 0 0'
        },
        items: [
            {
                xtype: 'button',
                margin: '0 0 10 0',
                style: {
                    top: 0
                },
                id: 'btnRawBack',
                text: '&laquo; Back'
            }
        ]
    }
    ]
});
