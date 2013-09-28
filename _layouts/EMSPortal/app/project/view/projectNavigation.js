Ext.define('EMSPEED.project.view.projectNavigation', {
    //extend: 'Ext.toolbar.Toolbar',
    extend: 'Ext.view.View',
    alias: 'widget.projectNavigation',
    id: 'projectNavigation',
    border: false,
    dock: 'left',
    padding: '0px 0px 0px 0px ',
    margin: '0px 0px 0px 0px',
    layout: 'fit',
    style: {backgroundColor: '#ededed' },
    width: 147,

    isMenuExpanded: true,

    listeners: {
        itemclick: function (dataview, record, item, index, e, eOpts) {
            //debugger;
            //dataview.store.data.items[0].className = 'liclass';
            //item.className = 'liclass emspeed-item-over';

            //jquery way
            var $elm = $('#emspeed-menu .emspeed-item-over');
                            
            //Ext way (not working)
            //var $elm = Ext.query('#emspeed-menu .emspeed-item-over');

            //if (com.currentTab == 'Program Management' && record.data.id == 'reporting') {
            if (record.raw.launch === true) {
                debugger;
                //Ext.getCmp('viewMenu').getSelectionModel().select(0);
                //if (record.raw.menuItemName === 'PMT' || record.raw.menuItemName === 'DfX') {
                if (record.raw.launchFormat === 'Stature') {
                    window.open('LoadingPage.aspx?l=http://' + location.hostname + record.raw.menuItemUrl, '_blank', 'titlebar=no,menubar=no,status=no,location=no');
                }
                else {
                    window.open(record.raw.menuItemUrl, '_blank', 'titlebar=no,menubar=no,status=no,location=no');
                }
            }
            else {
                $($elm).removeClass('emspeed-item-over');
                item.className = 'liclass emspeed-item-over';

                document.title = "EMSPEED - " + record.data.menuItemName;

                if (record.data.menuItemBasePanel === 'reportingBasePanel' && project.interactiveReporting === true) {
                    debugger;
                    Ext.getCmp('projectApplication').setActivePanel('interactiveBasePanel');
                }
                else {


                    var theItems = Ext.getCmp('projectApplication').items.items;
                    var found = false;
                    for (var i = 0; i < theItems.length; i++) {
                        if (record.data.menuItemBasePanel === theItems[i].xtype) {
                            found = true;
                        }
                    }
                    if (found === false) {
                        Ext.getCmp('projectApplication').add({ xtype: record.data.menuItemBasePanel });
                    }

                    if (record.data.menuItemBasePanel === 'loadsnapshotBasePanel') {
                        Ext.getCmp('loadsnapshotBasePanel').items.items[0].reload();
                    }

                    Ext.getCmp('projectApplication').setActivePanel(record.data.menuItemBasePanel);
                }
            }
        }
    },
    singleSelect: true,
    //overItemCls: 'x-view-over',
    //selectedItemCls: 'emspeed-item-over',
    itemSelector: 'li.liclass',
    emptyText: 'No data available',
    deferInitialRefresh: false,
    tpl: [
        '<div class="emspeed-menu-container">',
        '<span class="emspeed-show-hide-menu icon-collapsed" id="emspeed-show-hide-menu"></span>',
        '<ul class="emspeed-menu" id="emspeed-menu">',
        '<tpl for=".">',
            '<li id="menu{menuItemBasePanel}"  class="liclass  ',
                '<tpl if="menuItemBasePanel==' + "'dashboardBasePanel'" + '">emspeed-item-over</tpl>',
                '<tpl if="launch==' + "true" + '">emspeed-menu-item-external</tpl>">',
                '<tpl if="launch==' + 'true' + '">',
                    '<div class="emspeed-menu-icon emspeed-tooltip" data-tooltip="{menuItemName}"><img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/EMSPortal/app/project/resources/images/button_exe_on.png" alt="" title="" /></div>',
                '<tpl else>',
                    '<div class="emspeed-menu-icon emspeed-tooltip" data-tooltip="{menuItemName}"><img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/images/EMSPortal/{menuItemIcon}.png" alt="" title="" /></div>',
                '</tpl>',

            '<div class="emspeed-menu-link"><span>{menuItemName}</span></div><br class="clearfix" /></li>',

        '</tpl>',
        '</ul>',
        '</div>'
    ],






    setTheMenu: function (to) {
        com.currentTab = to;
        var theData = [];
        if (to === 'Program Management') {
            theData = project.programMenu;
        }
        else {
            theData = project.projectMenu;
        };
        var store = Ext.create('Ext.data.Store', {
            fields: ['menuItemBasePanel', 'menuItemName', 'launch', 'menuItemBaseUrl', 'menuItemIcon'],
            data: theData
        });
        //Ext.getCmp('projectNavigation').bindStore(store);
        this.bindStore(store);
        //Ext.getCmp('viewMenuTemp').bindStore(store);
    },

    initComponent: function () {
//        Ext.apply(this, {
//            items: [
//                {
//                    xtype: 'dataview',
//                    id: 'viewMenu',
//                    listeners: {
//                        itemclick: function (dataview, record, item, index, e, eOpts) {
//                            //debugger;
//                            //dataview.store.data.items[0].className = 'liclass';
//                            //item.className = 'liclass emspeed-item-over';

//                            //jquery way
//                            var $elm = $('#emspeed-menu .emspeed-item-over');
//                            
//                            //Ext way (not working)
//                            //var $elm = Ext.query('#emspeed-menu .emspeed-item-over');

//                            //if (com.currentTab == 'Program Management' && record.data.id == 'reporting') {
//                            if (record.raw.launch === true) {
//                                Ext.getCmp('viewMenu').getSelectionModel().select(0);
//                                window.open(record.raw.menuItemUrl, '_blank', 'titlebar=no,menubar=no,status=no,location=no');
//                            }
//                            else {
//                                $($elm).removeClass('emspeed-item-over');
//                                item.className = 'liclass emspeed-item-over';

//                                document.title = "EMSPEED - " + record.data.menuItemName;


//                                var theItems = Ext.getCmp('projectApplication').items.items;
//                                var found = false;
//                                for (var i = 0; i < theItems.length; i++) {
//                                    //if (record.data.id + 'BasePanel' === theItems[i].xtype) {
//                                    if (record.data.menuItemBasePanel === theItems[i].xtype) {
//                                        found = true;
//                                    }
//                                }
//                                if (found === false) {
//                                    //alert('new ' + record.data.id + 'BasePanel');
//                                    Ext.getCmp('projectApplication').add({ xtype: record.data.menuItemBasePanel });
//                                }

//                                //console.log(Ext.getCmp('projectApplication').items.items[0].xtype);



//                                Ext.getCmp('projectApplication').setActivePanel(record.data.menuItemBasePanel);
//                            }
//                        }
//                    },
//                    singleSelect: true,
//                    //overItemCls: 'x-view-over',
//                    //selectedItemCls: 'emspeed-item-over',
//                    itemSelector: 'li.liclass',
//                    emptyText: 'No data available',
//                    deferInitialRefresh: false,
//                    tpl: [
//                        '<ul class="emspeed-menu" id="emspeed-menu">',
//                        '<tpl for=".">',
//                            '<li class="liclass ',
//                                '<tpl if="menuItemBasePanel==' + "'dashboardBasePanel'" + '">emspeed-item-over</tpl>',
//                                '<tpl if="launch==' + "true" + '">emspeed-menu-item-external</tpl>">',
//                            '<tpl if="launch==' + 'true' + '">',
//                            '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/EMSPortal/app/project/resources/images/button_exe_on.png" alt="" title="" />',
//                            '<tpl else>',
//                            '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/EMSPortal/app/project/resources/images/button_exe_on_blue_square.png" alt="" title="" />',
//                            '</tpl>',
//                            '<span>{menuItemName}</span></li>',

//                        '</tpl>',
//                        '</ul>'
//                    ]
//                }
//            ]
//        });
        this.callParent(arguments);

        if (project.hasChildren === true) {
            this.setTheMenu("Program Management");
        }
        else {
            this.setTheMenu("Project Management");
        }

        //Ext.getCmp('viewMenu').getSelectionModel().select(0);
    }
});


/*tpl: [
        '<ul class="emspeed-menu" id="emspeed-menu">',
        '<tpl for=".">',
            '<li class="liclass ',
                '<tpl if="menuItemBasePanel==' + "'dashboardBasePanel'" + '">emspeed-item-over</tpl>',
                '<tpl if="launch==' + "true" + '">emspeed-menu-item-external</tpl>">',
            '<tpl if="launch==' + 'true' + '">',
            '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/EMSPortal/app/project/resources/images/button_exe_on.png" alt="" title="" />',
            '<tpl else>',
            '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/images/EMSPortal/{menuItemIcon}.png" alt="" title="" />',
            '</tpl>',
            '<span>{menuItemName}</span></li>',

        '</tpl>',
        '</ul>'
],*/

/*
'<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/images/EMSPortal/{menuItemIcon}.png" alt="" title="" />',
*/


/*tpl: [
        '<ul class="emspeed-menu" id="emspeed-menu">',
        '<tpl for=".">',
            '<li class="liclass ',
                '<tpl if="menuItemBasePanel==' + "'dashboardBasePanel'" + '">emspeed-item-over</tpl>',
                '<tpl if="launch==' + "true" + '">emspeed-menu-item-external</tpl>"><div class="emspeed-mneu-icon">x</div>',
                '<tpl if="launch==' + 'true' + '">',
                    '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/EMSPortal/app/project/resources/images/button_exe_on.png" alt="" title="" />',
                '<tpl else>',
                    '<img style="margin:0px 5px 0px 0px" border="0" src="/_layouts/images/EMSPortal/{menuItemIcon}.png" alt="" title="" />',
                '</tpl>',

            '<span>{menuItemName}</span></li>',

        '</tpl>',
        '</ul>'
    ],*/

$(function() {
    $(document).on("click", "#emspeed-show-hide-menu", function() {
        var $this = $(this);
        var theToolbar = Ext.getCmp('projectNavigation');
        var theMenu = Ext.getCmp(theToolbar.menuToHide);

        if (theToolbar.isMenuExpanded) {
            $('#emspeed-menu').css({ width: '35px' });
            $('#emspeed-menu li .emspeed-menu-link').hide();
            theToolbar.setWidth(34);
           
            theToolbar.isMenuExpanded = false;

            $this.removeClass('icon-collapsed');
            $this.addClass('icon-expanded');

        } else {
            $('#emspeed-menu li .emspeed-menu-link').show();
            $('#emspeed-menu').css({ width: '148px' });
            theToolbar.isMenuExpanded = true;
            theToolbar.setWidth(147);
            
            $this.removeClass('icon-expanded');
            $this.addClass('icon-collapsed');
        }

    });
});
