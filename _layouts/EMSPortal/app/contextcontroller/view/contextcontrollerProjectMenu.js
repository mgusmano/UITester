Ext.define('EMSPEED.contextcontroller.view.contextcontrollerProjectMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.contextcontrollerProjectMenu',
    requires: [
        'EMSPEED.contextcontroller.view.contextcontroller'
    ],
    //width: 300,
    //height: 390,
    plain: true,
    layout: 'vbox',
    ui: 'EMSPEED',
    shadow: true,
    shadowOffset: 30,
    style: {
        borderTop: '1px'
    },
    dockedItems: [
        { xtype: 'container', html: '<div id="line1"menuTop style="margin: -17px 0px 0px 96px; width: 585px; height: 1px; border: 0px #000 solid; background-color: #6084A8;"></div>' }
    ],

    setTheMenu: function (id, to) {
        var theData = [];
        if (to === 'Other') {
            theData = [
                { id: 'myprojects', text: 'My Projects' }
            ];
        }
        else {
            theData = project.last5Projects;
        };
        var store = Ext.create('Ext.data.Store', {
            fields: ['text'],
            data: theData
        });
        Ext.getCmp(id).bindStore(store);
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [


                {
                    xtype: 'dataview',
                    margin: '10 0 0 0',
                    id: 'viewMenu2',
                    listeners: {
                        itemclick: function (dataview, record, item, index, e, eOpts) {
                            document.location.href = '/sites/' + record.data.id + '/portal.aspx';
                        }
                    },
                    singleSelect: true,
                    //overItemCls: 'x-view-over',
                    selectedItemCls: 'emspeed-item-over',
                    itemSelector: 'li.liclass',
                    emptyText: 'No data available',
                    deferInitialRefresh: false,
                    tpl: [
                        '<ul class="emspeed-header-submenu">',
                        '<li class="emspeed-menu-title">5 Most Recent:</li>',
                        '<tpl for=".">',
                            '<li class="emspeed-menu-item liclass" >{text}</li>',
                        '</tpl>',
                        '<li class="emspeed-menu-footer emspeed-menu-item">My Projects</li>',
                        '</ul>'
                    ]
                }



            ]
        });
        this.callParent(arguments);
        //this.setTheMenu("viewMenu2", "Links");
        //this.setTheMenu("viewMenu3", "Other");
    }


});
