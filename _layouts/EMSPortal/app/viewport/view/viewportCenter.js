Ext.define('EMSPEED.viewport.view.viewportCenter', {
    extend: 'Ext.container.Container',
    alias: 'widget.viewportCenter',
    id: 'center',
    region: 'center',
    layout: 'card',
    //style: {zIndex: -1},

    getAppPanels: function () {
        return [
            //{ xtype: 'container', deferredRender: false, border: false, html: 'app' }
            { xtype: 'projectApplication', deferredRender: false, border: false }
            //Emsix: { xtype: 'emsix' + COMMON.Constants.application, xcurrentPanel: 'emsixBasePanel', deferredRender: false },
            // Report: { xtype: 'report' + COMMON.Constants.application, xcurrentPanel: 'reportBasePanel', deferredRender: false },
            // Clm: { xtype: 'clm' + COMMON.Constants.application, xcurrentPanel: 'clmBasePanel', deferredRender: false },
            //Admin: { xtype: 'admin' + COMMON.Constants.application, xcurrentPanel: 'adminBasePanel', deferredRender: false },
            // Example: { xtype: 'example' + COMMON.Constants.application, xcurrentPanel: 'exampleAjaxPanel', deferredRender: false }
        ];
    },

    initComponent: function () {
        Ext.apply(this, {
            items: this.getAppPanels()
        });
        this.callParent(arguments);
    },

    onRender: function () {
        //    console.info('onRender Center: ' + this.id);
        this.callParent(arguments);
    },
    listeners: {
        beforeactivate: function (t, eOpts) {
            //       console.info('beforeactivate Center: ' + this.id);
        }
    },
    setContext: function (context) {
        this.getLayout().setActiveItem(navContext.getActiveApplication());
        //        //console.info('setContext baseapproot: ' + context);
        //        //        this.setActiveTab(context);
        //        //        var theTab = theAppPanel.child('#' + context);
        //        //theAppPanel.layout.setActiveItem(navContext.activeAppObj);
        //        this.layout.setActiveItem(navContext.activeAppObj);
        //        //navContext.activeAppObj.layout.setActiveItem(navContext.activeAppObj.currentViewerObj);
        //        navContext.setActiveItem(navContext.activeAppObj.currentViewer);
    }

});


//function getCenter() {
//    var appPanels = [];
//    Ext.Object.each(getAppPanels(), function (name, example) {
//        appPanels.push(example);
//    });
//    var appPanel = Ext.create('EMSPEED.view.baseclass.Center', {
//        id: 'center',
//        region: 'center',
//        layout: 'card',
//        unstyled: true,
//        //        t r b l
//        margins: '0 0 0 0',
//        padding: '0 0 0 0',
//        items: appPanels
//    });
//    return appPanel;
//}

//function getAppPanels() {
//    return {
//        Project: { xtype: 'project' + EMSPEED.config.Constants.application, deferredRender: false }
//        //Emsix: { xtype: 'emsixapp', deferredRender: false },
//        //Report: { xtype: 'reportapp', deferredRender: false },
//        //Example: { xtype: 'exampleapp', deferredRender: false }
//    };
//}


//function getCente2r() {
//    return Ext.create('Ext.Panel', {
//        region: 'center',
//        id: 'center',

//        //        t r b l
//        margins: '0 0 0 0',
//        bodyStyle: {
//            backgroundColor: EMSPEED.config.Constants.backgroundColor
//        },
//        deferredRender: false,
//        border: false,
//        unstyled: false,
//        split: true,
//        collapsible: false,
//        collapseMode: 'mini',
//        layout: 'border',
//        items: [
//            getApp()
//        ]

//    });
//}




//function getApp() {
//    var appPanels = [];
//    Ext.Object.each(getAppPanels(), function (name, example) {
//        appPanels.push(example);
//    });
//    var appPanel = Ext.create('EMSPEED.view.baseapproot', {
//        id: 'app',
//        region: 'center',
//        deferredRender: false,
//        split: true,
//        //height: '85%',
//        //minSize: 350,
//        layout: 'card',
//        unstyled: true,
//        //activeItem: 0,
//        //        t r b l
//        margins: '0 0 0 0',
//        items: appPanels
//    });
//    theAppPanel = appPanel;
//    return appPanel;
//}




//Ext.define('EMSPEED.view.main.Center', {
//    extend: 'Ext.panel.Panel',
//    alias: 'widget.center',
//    id: 'center',
//    region: 'center',

//    //        t r b l
//    margins: '0 0 0 0',
//    bodyStyle: {
//        backgroundColor: EMSPEED.config.Constants.backgroundColor
//    },
//    deferredRender: false,
//    border: false,
//    unstyled: false,
//    split: true,
//    collapsible: false,
//    collapseMode: 'mini',
//    layout: 'border',
//    items: [
//        getApp()
//    ]
//});

