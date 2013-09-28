Ext.define('EMSPEED.provision.view.provisionBasePanel', {
    //extend: 'EMSPEED.baseclass.view.baseclassPanel',
    extend: 'Ext.window.Window',
    alias: 'widget.provisionBasePanel',
    id: 'provisionBasePanel',
    layout: 'vbox',
    height: 325,
    width: 800,
    border: false,
    title: 'Request Project Provisioning',
    closable: false,
    initComponent: function () {
        this.items = [
            { xtype: 'provisionCreateRequest' }
        ];
        this.callParent(arguments);
        //this.setTheTitle('Request Project Provisioning');
    }
});
