Ext.define('EMSPEED.viewport.view.viewportSouth', {
    extend: 'Ext.container.Container',
    alias: 'widget.viewportSouth',
    id: 'south',
    region: 'south',
    //        t r b l
    margin: '0 30 0 30',

    initComponent: function () {
        this.items = [
            { xtype: 'container', layout: 'fit', id: 'slb-footer', style: 'height:24px;border:0px #000 solid' }
        ]
        this.callParent(arguments);
        Ext.getCmp('slb-footer').html = '<div style="font-size: 10px;color: #FFFFFF;padding: 8px 5px 5px 15px;">' + 'EMSPEED Version: ' + EMSPEED_VERSION + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Template Version: ' + project.data.templateVersion + '</div>';
    }
});
