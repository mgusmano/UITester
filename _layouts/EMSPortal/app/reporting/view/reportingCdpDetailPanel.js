Ext.define('EMSPEED.reporting.view.reportingCdpDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingCdpDetailPanel',
    id: 'reportingCdpDetailPanel',
    layout: 'vbox',
    title: 'Report Details',
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
        { xtype: 'reportingCdpFieldsetCustomConfigurations' },
        { xtype: 'reportingCdpFieldsetGenerateReport' }
    ],
    //tbar: [
    //    { id: 'btnCdpBack', text: '&laquo; Back to Report Types', margin: '0 0 15 0', style: { left: 0} }
    //]

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
                id: 'btnCdpBack',
                text: '&laquo; Back'
            }
        ]
    }
    ]

});
