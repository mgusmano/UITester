Ext.define('EMSPEED.contextcontroller.view.contextcontrollerUserInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contextcontrollerUserInfo',
    requires: [
        'EMSPEED.contextcontroller.view.contextcontroller'
    ],
    
    initComponent: function () {
        this.items = [
            {
                xtype: 'label',
                text: 'Welcome John Doe'
            }
        ];
        this.callParent(arguments);
    }
   

});
