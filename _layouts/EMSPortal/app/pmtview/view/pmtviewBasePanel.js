Ext.define('EMSPEED.pmtview.view.pmtviewBasePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pmtviewBasePanel',
    id: 'pmtviewBasePanel',
    requires: [
        'EMSPEED.pmtview.view.pmtview'
    ],
    bodyStyle: {
        background: '#ffffff'
    },
    //layout: 'vbox',
    //border: false,
    margin: '0 0 0 0',
    width: 944,
    height: 300,
    initComponent: function () {
        this.items = [
            { xtype: 'label', text: 'pmtview' },
            { xtype: 'button', id: 'btnPmtView', text: 'pmtview' }
        ];
        this.callParent(arguments);
    }
});

