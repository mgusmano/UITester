Ext.define('EMSPEED.reporting.view.reportingCdpForPddDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingCdpForPddDetailPanel',
    id: 'reportingCdpForPddDetailPanel',
    itemId: 'reportingCdpForPddDetailPanel',
    layout: 'vbox',
    title: 'Generate CDP Milestone Report',
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
        { xtype: 'reportingCdpForPddFieldsetGenerateReport' }
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
                id: 'btnCdpForPddBack',
                text: '&laquo; Back'
            }
        ]
    }
    ]
});
