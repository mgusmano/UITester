Ext.define('EMSPEED.editteamsite.view.editteamsiteControls', {
    extend: 'EMSPEED.editteamsite.view.editteamsiteCommonFieldSet',
    alias: 'widget.editteamsiteControls',
    id: 'editteamsiteControls',
    layout: 'hbox',
    border: false,
    //    title: 'Create Request',
    width: '100%',
    items: [
    {
        xtype: 'textfield',
        itemId: 'txtTeamSiteUrl',
        allowBlank: false,
        vtype: 'url',
        emptyText: 'ex. http://teamspace.slb.com/sites/yoursite',
        fieldLabel: 'Teamsite URL',
        margin: '0 5 0 10',
        width: 550,
        labelAlign: 'left'
    },
            {
                xtype: 'button',
                margin: '0 5 0 10',
                width: 55,
                identifier: 'btnSaveTeamsiteUrl',
                itemId: 'btnSaveTeamsiteUrl',
                text: 'Save'           
            },
            {
                xtype: 'button',
                margin: '0 5 0 10',
                width: 55,
                identifier: 'btnCancelTeamsiteUrl',
                itemId: 'btnCancelTeamsiteUrl',
                text: 'Cancel'            
            }
    ]
});

