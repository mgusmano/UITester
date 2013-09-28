Ext.define('EMSPEED.manageteam.view.manageteamBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.manageteamBasePanel',
    id: 'manageteamBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('Manage Team');
    },
    items: [
        {
            xtype: 'tabpanel',
            margin: '10 0 0 0', 
            border: false,
            tabBar: {
                style: {backgroundColor: '#FFFFFF' },
                bodyStyle: { backgroundColor: '#FFFFFF' }
            },
            items: [
                {
                    title: 'Manage Team',
                    xtype: 'simpleIframe',
                    src: 'manageteam.aspx'
                },
                {
                    title: 'Stakeholders',
                    xtype: 'usersinroleBasePanel'
                }                    
            ]
        }
    ]
});
