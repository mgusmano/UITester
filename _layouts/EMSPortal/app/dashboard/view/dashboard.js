Ext.define('EMSPEED.dashboard.view.dashboard', {
    singleton: true,
    alternateClassName: 'dashboard',

    getTools: function () {
        return [


            //{
            //    xtype: 'tool',
            //    type: 'refresh',
            //    scope: this,
            //    handler: function (e, target, panelHeader, tool) {
            //        debugger;
            //        panelHeader.ownerCt.reload();


            //    }
            //}



            //{
            //    xtype: 'tool',
            //    type: 'gear',
            //    scope: this,
            //    handler: function (e, target, panelHeader, tool) {
            //        if (this.currentPanelHeader != undefined) {
            //            this.currentPanelHeader.el.dom.style.backgroundColor = '#6084a8';
            //        }
            //        this.currentPanelHeader = panelHeader;
            //        panelHeader.el.dom.style.backgroundColor = 'red';

            //        var p = Ext.getCmp('dashboardProperties');
            //        p.clientArea = panelHeader.ownerCt;
            //        p.panelHeader = panelHeader;
            //        p.setTitle('Configuration for ' + panelHeader.title);
            //        if (p.hidden === true) {
            //            p.setVisible(true);
            //        }
            //        else {
            //            p.setGrid();
            //        }
            //    }
            //}

//            {
//                xtype: 'tool',
//                type: 'gear',
//                handler: function (e, target, panelHeader, tool) {
//                    if (this.c === undefined) {
//                        this.c = Ext.create('EMSPEED.dashboard.view.dashboardPortletProperties', { clientArea: panelHeader.ownerCt, title: 'Configuration for ' + panelHeader.title });
//                    }
//                    this.c.show();
//                }
//            }
        ];
    },


    reloadPortlets: function () {
        var d = Ext.getCmp('dashboardBasePanel');
        var portalpanels = d.items.items;
        for (var i = 0; i < portalpanels.length; i++) {
            var portalcolumns = portalpanels[i].items.items
            for (var j = 0; j < portalcolumns.length; j++) {
                var dashboardPortlets = portalcolumns[j].items.items
                for (var k = 0; k < dashboardPortlets.length; k++) {
                    dashboardPortlets[k].reload();
                }
            }
        }
        Ext.getCmp('usersinroleBasePanel').reload();
    },



    saveState: function () {
        var a = [];
        var d = Ext.getCmp('dashboardBasePanel');
        var portalpanels = d.items.items;
        for (var i = 0; i < portalpanels.length; i++) {
            var pp = {};
            pp.xtype = portalpanels[i].xtype;
            pp.items = [];
            var portalcolumns = portalpanels[i].items.items
            for (var j = 0; j < portalcolumns.length; j++) {
                var pc = {};
                pc.xtype = portalcolumns[j].xtype;
                pc.columnWidth = portalcolumns[j].columnWidth;
                pc.items = [];
                var dashboardPortlets = portalcolumns[j].items.items
                for (var k = 0; k < dashboardPortlets.length; k++) {
                    var dp = {};
                    dp.xtype = dashboardPortlets[k].xtype;
                    dp.collapsed = dashboardPortlets[k].collapsed;
                    dp.theConfig = dashboardPortlets[k].theConfig;
                    pc.items.push(dp);
                }
                pp.items.push(pc);
            }
            a.push(pp);
        }
        //        alert(Ext.encode(a));
        var dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDate() + 365);
        Ext.util.Cookies.set(project.state, Ext.encode(a), dateEnd);
    },

    daysDiff: function (StartDate, EndDate) {
        // Convert both dates to milliseconds
        var fromMs = StartDate.getTime();
        var toMs = EndDate.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = toMs - fromMs;
        var one_day = 1000 * 60 * 60 * 24;
        // Convert back to days and return
        var daysDiff = Math.round(difference_ms / one_day);
        return daysDiff;
    },

    loading: 0,
    startLoading: function () {
        this.loading++;
        if (this.loading == 1) {
                Ext.MessageBox.show({
                    title: 'Please wait',
                    width: 230,
                    maxWidth: 230,
                    height: 80,
                    maxHeight: 80,
                    //progress: false,
                    closable: false,
                    msg: 'Loading data...'
                });
        }
    },
    endLoading: function () {
        this.loading--;
        if (this.loading === 0) {
            Ext.MessageBox.hide();

            //var p = Ext.getCmp('projectApplication');
            //p.add({ xtype: 'manageteamBasePanel' });
            //p.add({ xtype: 'viewteamBasePanel' });
            //p.add({ xtype: 'pddsummaryBasePanel' });
            //p.add({ xtype: 'cdpBasePanel' });
            //p.add({ xtype: 'loadsnapshotBasePanel' });
            //p.add({ xtype: 'createsnapshotBasePanel' });
            //p.add({ xtype: 'clonepmtBasePanel' });
        }
    }
});



//Ext.define('EMSPEED.dashboard.view.dashboardPortletProperties', {
//    extend: 'Ext.window.Window',
//    alias: 'widget.dashboardPortletProperties',
//    closeAction: 'hide',
//    closable: false,
//    layout: 'fit',
//    modal: true,
//    border: false,
//    resizable: false,

//    width: 500,
//    padding: '10 10 0 10',

//    listeners: {
//        show: function (me, eOpts) {
//            var g = this.down('propertygrid');
//            g.getStore().sorters.items = [];
//            this.theConfig = {};
//            for (var propertyName in this.clientArea.theConfig) {

//                if( Object.prototype.toString.call( this.clientArea.theConfig[propertyName] ) === '[object Object]' ) {
//                    this.theConfig[propertyName] = Ext.encode(this.clientArea.theConfig[propertyName]);
//                }
//                else {
//                    this.theConfig[propertyName] = this.clientArea.theConfig[propertyName];
//                }
//            }
//            console.log(this.theConfig);
//            console.log(this.clientArea.sourceConfig);
//            g.setSource(this.theConfig, this.clientArea.sourceConfig);
//        }
//    },

//    initComponent: function () {
//        Ext.apply(this, {
//            items: [
//                {
//                    xtype: 'form',
//                    border: false,
//                    bodyBorder: false,
//                    items: [
//                        {
//                            xtype: 'propertygrid',
//                            enableColumnResize: false,
//                            nameColumnWidth: 150,
//                            buttons: [
//                                {
//                                    text: 'OK',
//                                    scope: this,
//                                    handler: function () {
//                                        dashboard.startLoading();

//                                        var g = this.down('propertygrid');
//                                        var theStore = g.store;

//                                        for (var i = 0; i < theStore.getCount(); i++) {
//                                            var r = theStore.getAt(i);
//                                            if (r.data.name.indexOf('Date') !== -1) {
//                                                var d = new Date(r.data.value);
//                                                var dString = Ext.Date.format(d, 'm/d/Y');
//                                                this.clientArea.theConfig[r.data.name] = dString;
//                                            }
//                                            else {
//                                                this.clientArea.theConfig[r.data.name] = r.data.value;
//                                            }
//                                        }
//                                        this.clientArea.configModified(this.clientArea.theConfig);
//                                        dashboard.saveState();
//                                        this.hide();

//                                        dashboard.endLoading();
//                                    }
//                                },
//                                {
//                                    text: 'Cancel',
//                                    scope: this,
//                                    handler: function () {
//                                        this.hide();
//                                    }
//                                }
//                            ]
//                        }
//                    ]
//                }
//            ]
//        });
//        this.callParent(arguments);
//    },
////    config: {
////        theConfig: null
////    },
//    constructor: function (cfg) {
//        this.initConfig(cfg);
//        this.callParent(arguments);
//    }
//});


    //    tools: [
    //            { type: 'toggle' },
    //            { type: 'close' },
    //            { type: 'minimize' },
    //            { type: 'maximize' },
    //            { type: 'restore' },
    //            { type: 'gear' },
    //            { type: 'prev' },
    //            { type: 'next' },
    //            { type: 'pin' },
    //            { type: 'unpin' },
    //            { type: 'right' },
    //            { type: 'left' },
    //            { type: 'down' },
    //            { type: 'refresh' },
    //            { type: 'plus' },
    //            { type: 'minus' },
    //            { type: 'search' },
    //            { type: 'save' },
    //            { type: 'help' },
    //            { type: 'print' },
    //            { type: 'expand' },
    //            { type: 'collapse' }
    //        ],




//var win;

//function showForm(theTitle) {
//    if (!win) {
//        var form = Ext.widget('form', {
//            layout: {
//                type: 'vbox',
//                align: 'stretch'
//            },
//            border: false,
//            bodyBorder: false,
//            bodyPadding: 10,

//            fieldDefaults: {
//                labelAlign: 'top',
//                labelWidth: 100,
//                labelStyle: 'font-weight:bold'
//            },
//            defaults: {
//                margins: '0 0 10 0'
//            },

//            items: [

//                Ext.create('Ext.grid.PropertyGrid', {
//                    id: 'thePropertyGrid',
//                    enableColumnResize: false,
//                    nameColumnWidth: 200,

//                    //listeners:
//                    //{
//                    //    afterrender: function(grid)
//                    //    {
//                    //        grid.columns[0].setWidth(160);
//                    //    }
//                    //},

//                    customRenderers: {
//                        description: function (v) {
//                            var value = Ext.decode(v),
//                            product = value.product,
//                            tagline = value.tagline,
//                            description = '';
//                            description += '<b>' + product + '</b>: ';
//                            description += '<i>' + tagline + '</i>';
//                            return description;
//                        },
//                        timeofday: function (v) {
//                            return Ext.isDate(v) ? Ext.Date.format(v, 'g:i A') : v;
//                        }
//                    },

//                    sourceConfig: {
//                        description: {
//                            renderer: function (v) {
//                            },
//                            displayName: 'Description',
//                            editor: Ext.create('EMSPEED.dashboard.view.dashboardCustomEditorField', {})
//                        }
//                    }
//                })
//            ],

//            buttons: [

//                {
//                    text: 'OK',
//                    handler: function () {
//                        if (this.up('form').getForm().isValid()) {
//                            // In a real application, this would submit the form to the configured url
//                            // this.up('form').getForm().submit();
//                            this.up('form').getForm().reset();
//                            this.up('window').hide();
//                            clientArea.setLoading(false);

//                            var g = Ext.getCmp('thePropertyGrid');
//                            var theStore = g.store;

//                            var i;
//                            for (i = 0; i < theStore.getCount(); i++) {
//                                var r = theStore.getAt(i);


//                                if (r.data.name.indexOf('Date') !== -1) {
//                                    debugger;
//                                    var d = new Date(r.data.value);
//                                    var dString = Ext.Date.format(d, 'm/d/Y');
//                                    clientArea.theConfig[r.data.name] = dString;
//                                }
//                                else {
//                                    clientArea.theConfig[r.data.name] = r.data.value;
//                                }


//                            }

//                            //clientArea.currConfig = g.store.data;
//                            clientArea.configModified(clientArea.theConfig);

//                        }
//                    }
//                },

//                {
//                    text: 'Cancel',
//                    handler: function () {
//                        this.up('form').getForm().reset();
//                        this.up('window').hide();
//                        clientArea.setLoading(false);

//                        //            this.hide();

//                    }
//                }
//            ]
//        });

//        win = Ext.widget('window', {
//            id: 'theWindow',
//            //title: 'Configuration for ' + theTitle,
//            closeAction: 'hide',
//            width: 400,
//            //height: 400,
//            //minHeight: 400,
//            layout: 'fit',
//            resizable: true,
//            modal: true,
//            border: false,
//            items: form
//        });
//    }
//    win.setTitle('Configuration for ' + theTitle);
//    win.show();
//}






//Ext.create('Ext.grid.property.Grid', {
//    title: 'Properties Grid',
//    width: 400,
//    //renderTo: Ext.getBody(),
//    source: {
//        name: "My Object",
//        created: Ext.Date.parse('10/15/2006', 'm/d/Y'),
//        timeofday: "12:00 PM",
//        available: false,
//        version: 0.01,
//        description: Ext.encode({
//            product: 'Clorox',
//            tagline: 'The Shinyest White!'            
//        })
//    },
//    customEditors: {
//        timeofday: Ext.create('Ext.form.TimeField', {selectOnFocus: true}),
//        description: {
//            xtype: 'customeditorfield'  
//        }
//    },
//    customRenderers: {
//        description: function( v ) {
//            var value = Ext.decode( v ),
//                product = value.product,
//                tagline = value.tagline,
//                description='';
//            description += '<b>' + product + '</b>: ';
//            description += '<i>' + tagline + '</i>';
//            return description;
//        },
//        timeofday: function( v ) {
//            return Ext.isDate( v ) ? Ext.Date.format( v, 'g:i A' ) : v;
//        }            
//    },
//    propertyNames: {
//        name: '(name)',
//        created: 'Created Date',
//        timeofday: 'Time of Day',
//        available: 'Available?',
//        version: 'Version',
//        description: 'Product Description'        
//    },
//    listeners: {
//        beforeedit: function( editor, e, opts ) {
//            if( e.record.get( 'name' )=='name' || e.record.get( 'name' )=='version' ) {
//                return false;            
//            }                
//        }            
//    }
//})



