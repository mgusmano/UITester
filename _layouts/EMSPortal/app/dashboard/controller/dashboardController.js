Ext.define('EMSPEED.dashboard.controller.dashboardController', {
    extend: 'Ext.app.Controller',
    requires: [

        'Ext.portal.PortalColumn',
        'Ext.portal.PortalDropZone',
        'Ext.portal.PortalPanel',
        'Ext.portal.Portlet',

        'EMSPEED.dashboard.view.dashboard',
        'EMSPEED.dashboard.view.dashboardBasePanel',
        'EMSPEED.dashboard.view.dashboardCustomEditorField',
        'EMSPEED.dashboard.view.dashboardCustomEditorFieldYAxis',
        'EMSPEED.dashboard.view.dashboardPortletBase',
        'EMSPEED.dashboard.view.dashboardPortletDfX',
        'EMSPEED.dashboard.view.dashboardPortletGetProjectMaturityMetrics',
        'EMSPEED.dashboard.view.dashboardPortletKPI',
        'EMSPEED.dashboard.view.dashboardPortletPDDCDP',
        'EMSPEED.dashboard.view.dashboardPortletPMT',
        'EMSPEED.dashboard.view.dashboardPortletRiskMatrix',
        'EMSPEED.dashboard.view.dashboardPortletSubProjects',
        'EMSPEED.dashboard.view.dashboardPortletTemplate',
        'EMSPEED.dashboard.view.dashboardProperties'

       // 'EMSPEED.dashboard.store.dashboardSubProjectsStore',
       // 'EMSPEED.dashboard.model.dashboardSubProjectsModel'

    ],
    stores: [
       // 'EMSPEED.dashboard.store.dashboardSubProjectsStore',
    ],
    models: [
      //  'EMSPEED.dashboard.model.dashboardSubProjectsModel'
    ],
        
    init: function () {
        //alert('init');
        this.control({
            '#dashboardPortalPanel': { activate: this.dashboardPortalPanel_activate },
            '#dashboardPortalPanel': { beforeLayout: this.dashboardPortalPanel_beforeLayout }
        });
        //alert('init2');
    },


        dashboardPortalPanel_beforeLayout: function () {
        alert('hi');
        },


    dashboardPortalPanel_activate: function (panel, e, eOpts) {
        //com.reportingBasePanelMask = Ext.getCmp('reportingBasePanel').setLoading('Working...');
    }

});
