Ext.define('EMSPEED.tabs.view.tabsBasePanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabsBasePanel',
    id: 'tabsBasePanel',
    ui: 'emspeed',
    //cls: 'MainPanel',
    tabPosition: 'left',
    height: 510,
    //                border: false,
    plain: true,
    margin: '150 0 0 0',
    hidden: false,
    activeTab: 0,
    tabBar: {
        defaults: {
            //     height: 50 //sets the default height of the actual tab
        },
        //height: 50,  //sets the height of the tabBar component
        listeners: {
            afterrender: function (cmp) {
                // this will set the height of the tabBar body to the height of the tabBar component
                cmp.body.setHeight(cmp.getHeight());
            }
        }
    },

    listeners: {

        afterrender: function (tabs, eOpts) {
            //debugger;
            //alert('hi');
            this.items.items[1].tab.el.addCls('tv-x-tab');
        },

        beforetabchange: function (tabs, newTab, oldTab) {
            debugger;
            //this.items.items[0].tab.el.addCls('tv-x-tab');
            oldTab.tab.el.addCls('tv-x-tab');
            newTab.tab.el.removeCls('tv-x-tab');

            Ext.getCmp('projectNavigation').setTheMenu(newTab.title);

            Ext.getCmp('dashboardBasePanel').removeAll();

            Ext.getCmp('projectApplication').setActivePanel('dashboardBasePanel');
            Ext.getCmp('viewMenu').getSelectionModel().select(0);
            if (newTab.title === 'Project Management') {
                project.view = 'Program';

                Ext.getCmp('dashboardBasePanel').add(project.projectDashboard);
                Ext.getCmp('dashboardBasePanel').setTheTitle('Project Dashboard');

                Ext.getCmp('lblButtons').setVisible(true);
                Ext.getCmp('btnStaturePMT').setVisible(true);
                Ext.getCmp('btnStatureDfx').setVisible(true);
                Ext.getCmp('btnTeamsite').setVisible(true);
            }
            else {
                project.view = 'Project';

                Ext.getCmp('dashboardBasePanel').add(project.programDashboard);
                Ext.getCmp('dashboardBasePanel').setTheTitle('Program Dashboard');

                Ext.getCmp('lblButtons').setVisible(false);
                Ext.getCmp('btnStaturePMT').setVisible(false);
                Ext.getCmp('btnStatureDfx').setVisible(false);
                Ext.getCmp('btnTeamsite').setVisible(false);            
            }
        }
    },

    items: [
            {
                title: 'Program Management',
                tabConfig: {
                    tooltip: 'This tab is used to to display the Program Management functions for the current Study'
                }
            },
            {
                title: 'Project Management',
                tabConfig: {
                    tooltip: 'This tab is used to to display the Project Management functions for the current Study'
                }
            }
        ],


    initComponent: function () {
        this.callParent(arguments);
        
        //this.setVisible(project.hasChildren);
        this.setVisible(false);
    }
});




//        {
//            xtype: 'tabbar',
//            orientation: 'vertical',
//            dock: 'left',
//            plain: true,
//            frame: false,
//            region: 'north',
//            height: 300,

//            items: [
//            {
//                xtype: 'tab',
//                closable: false,
//                text: 'Project Management',
//                uiCls: ['active', 'left-active', 'noicon', 'left'],
//                listeners: {
//                    click: function (tab, e, eOpts) {
//                        //window.location.href = 'dashboard12.aspx';
//                    }
//                },
//                tooltip: 'This tab is used to to display the Project Management functions for the current Study'
//            },
//            {
//                xtype: 'tab',
//                closable: false,
//                pressed: true,
//                text: 'Program Management',
//                uiCls: ['noicon', 'left'],
//                listeners: {
//                    click: function (tab, e, eOpts) {
//                        debugger;
//                        //this.setActiveTab(tab)
//                        //tab.focus();
//                        //tab.uiCls = ['active', 'left-active', 'noicon', 'left'];
//                        //window.location.href = 'dashboardProgram.aspx';
//                    }
//                },
//                tooltip: 'This tab is used to to display the Program Management functions for the current Study'
//            }
//            ]
//        },



//            {
//                xtype: 'tabpanel',
//                tabPosition: 'left',
//                border: false,
//                plain: true,
//                margin: '60 0 0 0',

//                //width: 50,
//                height: 290,

//                listeners: {
//                    beforetabchange: function (tabs, newTab, oldTab) {
//                        if (newTab.title === 'Project Management') {
//                            window.location.href = 'dashboard12.aspx';
//                        }
//                        else {
//                            window.location.href = 'dashboardProgram.aspx';
//                        }
//                    }
//                },

//                //renderTo: document.body,
//                items: [
//                {
//                    title: 'Project Management',
//                    tabConfig: {
//                        tooltip: 'This tab is used to to display the Project Management functions for the current Study'
//                    }
//                },
//                {
//                    title: 'Program Management',
//                    tabConfig: {
//                        tooltip: 'This tab is used to to display the Program Management functions for the current Study'
//                    }
//                }
//                ]
//            }
