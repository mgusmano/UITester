Ext.define('EMSPEED.reporting.view.reportingInteractiveDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingInteractiveDetailPanel',
    id: 'reportingInteractiveDetailPanel',
    itemId: 'reportingInteractiveDetailPanel',
    layout: 'vbox',
    title: 'Interactive Report',
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
        {
            xtype: 'reportingProgramProjects'
        },
        {
            xtype: 'button',
            itemId: 'btnLogInteractiveReportRequest',
            margin: '8 0 0 10',
            text: 'Launch Interactive Reporting'
        }
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
                    id: 'btnInteractiveBack',
                    text: '&laquo; Back'
                }
            ]
        }
    ]

});
