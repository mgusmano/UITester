Ext.define('EMSPEED.viewteam.view.viewteamBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.viewteamBasePanel',
    id: 'viewteamBasePanel',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('View Team');
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
                    title: 'View Team',
                    xtype: 'simpleIframe',
                    src: 'viewteam.aspx'
                },
                {
                    title: 'Stakeholders',
                    xtype: 'usersinroleBasePanel'
                }                    
            ]
        }
    ]
});
