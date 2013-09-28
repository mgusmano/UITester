Ext.define('EMSPEED.viewport.view.viewportNorth', {
    extend: 'Ext.container.Container',
    alias: 'widget.viewportNorth',
    id: 'north',
    region: 'north',
    //layout: 'fit',
    cls: 'header',
    height: 102,
    width: '100%',
    //       t r  b  l
    margin: '0 30 0 30',
    items: [
        { xtype: 'container', layout: 'fit', id: 'slb-header', style: 'height:48px;border:0px #000 solid',
            html: '<div class="logo">' +
            '      <a target="_blank"href="http://hub.slb.com">' +
            '        <img border="0" src="/_layouts/images/EMSPortal/SLB_logo.jpg" alt="" title="" />' +
            '      </a>' +
            '    </div>'
        },
        { xtype: 'contextcontrollerBasePanel' },
        { xtype: 'container', html: '<div id="line1" style="margin: 0px 0px 0px 0px; xwidth: 1175px; height: 3px; border: 0px #000 solid; background-color: #6084A8;"></div>' }
    ]
});
