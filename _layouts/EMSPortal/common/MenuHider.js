//var isExpaned = true;

Ext.define('COMMON.MenuHider', {
    extend: 'Ext.toolbar.Toolbar',
    //extend: 'Ext.container.Container',
    alias: 'widget.menuhider',
    padding: '8px 0 0 0', //'8px 0px 8px 4px'
    margin: '0px 0px 0px 0px',
    id: 'menuHider',
    dock: 'left',
    style: { zIndex: '0' },


    border: false,
    menuHidder: true,
    
    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },
    initComponent: function () {
        Ext.apply(this, {
            //dockedItems: []
        });
        this.callParent(arguments);
    },

    items: [

        
        {
            xtype: 'image',
            cls: 'emspeed-menu-show-hide',
            width: 13,
            height: 18,
            src: com.appFolder + '/project' + '/resources/images/menu_collapsed.png',
            
            listeners: {
                afterrender: function (c) {
                    c.el.on('click', function (a, b, x, d) {
                        var theToolbar = Ext.getCmp('menuHider'); 
                        var theMenu = Ext.getCmp(theToolbar.menuToHide);
                        
                        if (theToolbar.menuHidder) {
                            $('#emspeed-menu li .emspeed-menu-link').hide();
                            theMenu.setWidth(50);
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_expanded.png');
                            theToolbar.menuHidder = false;
                        } else {
                            $('#emspeed-menu li .emspeed-menu-link').show();
                            theMenu.setWidth(147);
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_collapsed.png');
                            theToolbar.menuHidder = true;
                        }

                    });

                    /*c.el.on('mouseover', function (a, b, x, d) {
                        var theToolbar = Ext.getCmp('menuHider');
                        if (theToolbar.menuHidder) {
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_collapsed_over.png');
                        } else {
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_expaned_over.png');
                        }

                    });
                    
                    c.el.on('mouseout', function (a, b, x, d) {
                        var theToolbar = Ext.getCmp('menuHider');
                        if (theToolbar.menuHidder) {
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_collapsed.png');
                        } else {
                            c.setSrc(com.appFolder + '/project' + '/resources/images/menu_expaned.png');
                        }
                    });*/
                }
            }
        }
        
    
    ]
});
