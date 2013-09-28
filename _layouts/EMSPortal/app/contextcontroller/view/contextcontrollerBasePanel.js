function getMyProjects() {
    var menuItemMyProjects = 'myprojectsBasePanel';
    var theItems = Ext.getCmp('projectApplication').items.items;
    var found = false;
    for (var i = 0; i < theItems.length; i++) {
        if (menuItemMyProjects === theItems[i].xtype) {
            found = true;
        }
    }
    if (found === false) {
        Ext.getCmp('projectApplication').add({ xtype: menuItemMyProjects });
    }

    document.getElementById("teamSite").style.display = 'none';

    Ext.getCmp('projectApplication').setActivePanel(menuItemMyProjects);
};

function getPopupEdit(panel) {
    var win = Ext.create('EMSPEED.' + panel + '.view.' + panel + 'BasePanel', {});
    win.show();
};

Ext.define('EMSPEED.contextcontroller.view.contextcontrollerBasePanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.contextcontrollerBasePanel',
    //id: 'contextcontrollerBasePanel',
    requires: [
        'EMSPEED.contextcontroller.view.contextcontroller'
    ],
    //height: 51,
    //layout: 'fit',
    id: 'contextcontrollerBasePanel', cls: 'emspeed-header',
    
    setContextData: function () {
        Ext.getCmp('emspeed-header-menu').getStore().loadData(project.last5Projects);
        Ext.getCmp('emspeed-gear').getStore().loadData(project.gearMenu);
        Ext.getCmp('auth-user').html = 'Welcome ' + project.user.preferredName;
    },


    initComponent: function () {
        this.items = [
                {
                    xtype: 'container', layout: 'fit', id: 'identity', cls: 'identity',
                    html: '<img id="image-1016" src="/_layouts/EMSPortal/app/projectheader/resources/images/madEMSPEED.jpg">'
                },
                {
                    xtype: 'dataview',
                    id: 'emspeed-header-menu',
                    emptyText: 'No data available',
                    itemSelector: 'aa',
                    deferInitialRefresh: false,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['menuItemName', 'menuItemUrl']
                    }),
                    tpl: [
                        '<div class="emspeed-header-menu">Projects',
                            '<div class="emspeed-header-submenu"><img src="/_layouts/images/EMSPortal/pop_up_arrow.png" />',
                                    '<ul class="submenu-section">',
                                        '<li class="emspeed-menu-heading">5 Most Recent:</li>',
                                        '<tpl for=".">',
                                            '<li><a href="/sites/{menuItemUrl}/Portal.aspx">{menuItemUrl} - {menuItemName}</a></li>',
                                        '</tpl>',
                                    '</ul>',
                                    '<ul class="submenu-section emspeed-text-bold">',
                                        '<li><a href="#" onclick="getMyProjects()">All My Projects</a></li>',
                                    '</ul>',
                            '</div> ',
                        '</div> '
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'fit',
                    id: 'auth-user',
                    cls: 'auth-user'
                },
                {
                    xtype: 'dataview',
                    id: 'emspeed-gear',
                    itemSelector: 'aa',
                    emptyText: 'No data available',
                    deferInitialRefresh: true,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['menuItemName', 'menuItemUrl']
                    }),
                    tpl: [
                        '<div class="emspeed-gear">',
                            '<ul id="gears">',
                                '<li class="gear-icon" id="gear-icon">',
                                    '<a href="#"><img src="/_layouts/images/EMSPortal/icon-gear.png" class="emspeed-show-gear-menu emspeed-icon-size" alt="" title="" /></a>',
                                    '<div class="gears-submenu-container"><img src="/_layouts/images/EMSPortal/pop_up_arrow.png" />',
                                    '<ul class="gears-submenu">',
                                        '<tpl for=".">',
                                           '<tpl if="menuItemName==' + "'Edit Team Site'" + '">',
                                                '<li><a id="teamSite" style="display:block;" href="#" onclick=getPopupEdit("editteamsite")>{menuItemName}</a></li>',
                                            '<tpl else>',
                                                '<tpl if="menuItemName==' + "'Feedback'" + '">',
                                                    '<li><a id="teamSite" style="display:block;" href="#" onclick=getPopupEdit("feedback")>{menuItemName}</a></li>',
                                                '<tpl else>',
                                                    '<li><a target="_blank" href="{menuItemUrl}">{menuItemName}</a></li>',
                                                '</tpl>',
                                            '</tpl>',
                                        '</tpl>',
                                    '</ul>',
                                    '</div>',
                                '</li>',
                                '<li class="fullscreen-icon">',
                                    '<a href="#"><img src="/_Layouts/EMSPortal/app/projectheader/resources/images/icon-reload-animated.gif" id="emspeed-reload" onclick="reloadPage()" style="height:20px; cursor:pointer" /></a>',
                                '</li>',
                            '</ul>',
                        '</div>'
                    ]
                }
        ];
        this.callParent(arguments);
    }
});

/*$(function () {

    $('body').on("mouseenter", "#gear-icon", function () {
        var $img = $(this).find('img');
        $img.attr("src", "/_layouts/EMSPortal/app/projectheader/resources/images/gear_over.png");
    }).on("mouseleave", "#gear-icon", function () {
        var $img = $(this).find('img');
        $img.attr('src', "/_layouts/EMSPortal/app/projectheader/resources/images/gear.png");
    });

});*/



$(function () {
    $("body").on("click", "#emspeed-fullscreen", function () {
        console.log("on click");
        var theToolbar = Ext.getCmp('menuHider'),
slbHeader = Ext.get('slb-header');
        var theMenu = Ext.getCmp(theToolbar.menuToHide);

        if (theToolbar.menuHidder) {
            $('#emspeed-menu li span').hide();
            theMenu.setWidth(50);
            //c.setSrc(com.appFolder + '/project' + '/resources/images/menu_collapsed.png'); 
            theToolbar.menuHidder = false;
        } else {
            $('#emspeed-menu li span').show();
            theMenu.setWidth(147);
            //c.setSrc(com.appFolder + '/project' + '/resources/images/menu_expaned.png'); 
            theToolbar.menuHidder = true;
        }
    });
});

