Ext.define('EMSPEED.editteamsite.view.editteamsiteBasePanel', {
    //extend: 'EMSPEED.baseclass.view.baseclassPanel',
    extend: 'Ext.window.Window',
    alias: 'widget.editteamsiteBasePanel',
    id: 'editteamsiteBasePanel',
    title:'Edit Teamsite URL',
    layout: 'vbox',
    height: 75,
    width: 800,
    border: false,
    closable: false,
    initComponent: function () {
        this.items = [
            { xtype: 'editteamsiteControls' }
        ];
        this.callParent(arguments);
        //this.setTheTitle('Edit Teamsite URL');
    }
});
