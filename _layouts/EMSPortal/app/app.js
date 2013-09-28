var EMSPEED_VERSION = "EPort_1.2_163";

var siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
var layoutsFolder = '/_layouts/EMSPortal/';
var imagesFolder = layoutsFolder + 'common/resources/images/';
var l = Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux.chart': layoutsFolder + 'common/SmartLegend',
        'Ext.ux': layoutsFolder + 'common/ux',
        'EMSPEED': layoutsFolder + 'app',
        'Ext.portal': layoutsFolder + 'common/portal',
        'COMMON': layoutsFolder + 'common',
        'Ext.data.soap': layoutsFolder + 'common/soap'
    }
});

var navContext;
var theViewport = '';

Ext.application({
    requires: [
        'EMSPEED.baseclass.controller.baseclassController',
        'EMSPEED.cdp.controller.cdpController',
        'EMSPEED.contextcontroller.controller.contextcontrollerController',
        'EMSPEED.dashboard.controller.dashboardController',
        'EMSPEED.feedback.controller.feedbackController',
        'EMSPEED.editteamsite.controller.editteamsiteController',
        'EMSPEED.myprojects.controller.myprojectsController',
        'EMSPEED.interactive.controller.interactiveController',
        'EMSPEED.pmtview.controller.pmtviewController',
        'EMSPEED.project.controller.projectController',
        'EMSPEED.projectheader.controller.projectheaderController',
        'EMSPEED.provision.controller.provisionController',
        'EMSPEED.reporting.controller.reportingCdpController',
        'EMSPEED.reporting.controller.reportingCdpForPddController',
        'EMSPEED.reporting.controller.reportingFiltersController',
        'EMSPEED.reporting.controller.reportingInteractiveController',
        'EMSPEED.reporting.controller.reportingManagerController',
        'EMSPEED.reporting.controller.reportingRawController',
        'EMSPEED.reporting.controller.reportingSortsController',
        'EMSPEED.stature.controller.statureController',
        'EMSPEED.tabs.controller.tabsController',
        'EMSPEED.tasks.controller.tasksController',
        'EMSPEED.teamsite.controller.teamsiteController',
        'EMSPEED.usersinrole.controller.usersinroleController',
        'EMSPEED.viewport.controller.viewportController',
        'EMSPEED.clonepmt.controller.clonepmtController',

        'EMSPEED.pddsummary.controller.pddsummaryController',
        //'EMSPEED.snapshots.controller.snapshotsController',
        'EMSPEED.createsnapshot.controller.createsnapshotController',
        'EMSPEED.loadsnapshot.controller.loadsnapshotController',
        //'EMSPEED.team.controller.teamController',
        'EMSPEED.manageteam.controller.manageteamController',
        'EMSPEED.viewteam.controller.viewteamController',

        'COMMON.proxy.emspeedProxy',
        'COMMON.proxy.memoryProxy',
        'COMMON.proxy.soapProxy',
        'COMMON.simpleIframe',
        'Ext.data.Store'
	],
    controllers: [
        'EMSPEED.baseclass.controller.baseclassController',
        'EMSPEED.cdp.controller.cdpController',
        'EMSPEED.contextcontroller.controller.contextcontrollerController',
        'EMSPEED.dashboard.controller.dashboardController',
        'EMSPEED.feedback.controller.feedbackController',
        'EMSPEED.editteamsite.controller.editteamsiteController',
        'EMSPEED.myprojects.controller.myprojectsController',
        'EMSPEED.interactive.controller.interactiveController',
        'EMSPEED.pmtview.controller.pmtviewController',
        'EMSPEED.project.controller.projectController',
        'EMSPEED.projectheader.controller.projectheaderController',
        'EMSPEED.provision.controller.provisionController',
        'EMSPEED.reporting.controller.reportingCdpController',
        'EMSPEED.reporting.controller.reportingCdpForPddController',
        'EMSPEED.reporting.controller.reportingFiltersController',
        'EMSPEED.reporting.controller.reportingInteractiveController',
        'EMSPEED.reporting.controller.reportingManagerController',
        'EMSPEED.reporting.controller.reportingRawController',
        'EMSPEED.reporting.controller.reportingSortsController',
        'EMSPEED.stature.controller.statureController',
        'EMSPEED.tabs.controller.tabsController',
        'EMSPEED.tasks.controller.tasksController',
        'EMSPEED.teamsite.controller.teamsiteController',
        'EMSPEED.usersinrole.controller.usersinroleController',
        'EMSPEED.viewport.controller.viewportController',
        'EMSPEED.clonepmt.controller.clonepmtController',

        'EMSPEED.pddsummary.controller.pddsummaryController',
        //'EMSPEED.snapshots.controller.snapshotsController',
        'EMSPEED.createsnapshot.controller.createsnapshotController',
        'EMSPEED.loadsnapshot.controller.loadsnapshotController',
        //'EMSPEED.team.controller.teamController',
        'EMSPEED.manageteam.controller.manageteamController',
        'EMSPEED.viewteam.controller.viewteamController'

    ],
    name: 'EMSPEED',
    appFolder: layoutsFolder + 'app',
    autoCreateViewport: false,

    launch: function () {
        Ext.tip.QuickTipManager.init();
        //this.initialiseHistory();
        navContext = Ext.create('COMMON.NavigationContext', { activeItem: 'bob' });

        //Ext.create('EMSPEED.testPanel', { renderTo: document.body });
        //if (Ext.get('loading') !== null) { Ext.get('loading').remove(); }
        //return;

        theViewport = Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'border',
                padding: '0 40 0 40'
            },
            border: false,
            items: [
                { xtype: 'viewportNorth' },
                { xtype: 'viewportCenter', border: false },
                { xtype: 'container', region: 'west', width: 30 },
                { xtype: 'container', region: 'east', width: 30, border: false },
                { xtype: 'viewportSouth' }

            //{ xtype: 'container', region: 'center' },
            //{ xtype: 'container', region: 'west', width: 30, items: [{ xtype: 'tabsBasePanel'}] },            
            ]
        });

        if (Ext.get('divloading') !== null) {
            //Ext.get('divloading').remove();
            Ext.get('divloading').dom.style.display = 'none'
        }
        //Ext.useShims = true;
    }


});


//handleHistoryChange: function (token) {
//    var theItem;
//    //        var token = token || &quot;&quot;;
//    switch (token) {
//        case "'reporting'": theItem = 'reporting'; break;
//        case "'reporting:reporttypespage'": Ext.getCmp('reportingBasePanel').reporttypespage(); theItem = 'reporting'; break;
//        case null: theItem = 'dashboard'; break;
//    }
//    Ext.getCmp('projectApplication').setActivePanel(theItem + 'BasePanel');

//},

//initialiseHistory: function () {
//    this.historyForm = Ext.getBody().createChild({
//        tag: 'form',
//        action: '#',
//        cls: 'x-hidden',
//        id: 'history-form',
//        children: [
//      {
//          tag: 'div',
//          children: [
//          {
//              tag: 'input',
//              id: Ext.History.fieldId,
//              type: 'hidden'
//          },
//          {
//              tag: 'iframe',
//              id: Ext.History.iframeId
//          }
//        ]
//      }
//    ]
//    });
//    Ext.History.init();
//    Ext.History.on('change', this.handleHistoryChange, this);
//}



//var thePanels = [
//    'project',
//    'viewport',
//    'baseclass',
//    'dashboard',
//    'reporting',
//    'snapshots',
//    'team',
//    'stature',
//    'cdp'
//];

//var len=thePanels.length;
//for(var i=0; i<len; i++) {
////    alert(thePanels[i]);
//}
