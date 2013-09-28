Ext.define('EMSPEED.project.view.projectApplication', {
    extend: 'EMSPEED.baseclass.view.baseclassApplication',
    alias: 'widget.projectApplication',
    id: 'projectApplication',
    padding: '0px 0px 0px 0px ', // the border around the client area

    requires: [
        'COMMON.MenuHider'
    ],
    listeners: {
        afterrender: function (me, eOpts) {
            //ko.applyBindings(project);
        }
    },
    constructor: function (config) {
        this.initConfig(config);
        var me = this;
        project.projectId = project.getProjectId();

        $.support.cors = true;

        if (com.proxy === 'memoryProxy') {
            me.loadTestData();
        }
        else {
            var userInterfaceUrl = 'http://' + location.hostname + ':8095/' + 'UserInterfaceService.svc/json/GetMasterLayout';
            var getMasterLayoutParams = { "contextId": parseFloat(project.projectId) };
            $.ajax({
                url: userInterfaceUrl,
                type: 'POST',
                crossDomain: true,
                data: Ext.encode(getMasterLayoutParams),
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                dataType: 'json',
                async: false
            })
                .done(function(data) {
                    project.data = data.project;
                    project.programMenu = data.masterMenu.menus[0].menuItems;
                    project.projectMenu = data.masterMenu.menus[0].menuItems;
                    project.last5Projects = data.masterMenu.menus[1].menuItems;
                    project.gearMenu = data.masterMenu.menus[2].menuItems;
                    project.feedbackItems = data.feedbackItems;
                    project.projectDashboard = project.getProjectDashboard();
                    project.programDashboard = project.getProgramDashboard();
                    project.user = data.user;
                })
                .fail(function(data) {
                    throw data.status + '-' + data.statusText + '-' + userInterfaceUrl;
                });
            //.always(function (data) {
            //    alert('always');
            //})
            //.then(function (data) {
            //    alert('then');
            //})
        }

        Ext.getCmp('contextcontrollerBasePanel').setContextData();

        return this.callParent(arguments);
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [
                { xtype: 'dashboardBasePanel' },
                { xtype: 'reportingBasePanel' },
                { xtype: 'manageteamBasePanel' },
                { xtype: 'viewteamBasePanel' },
                { xtype: 'pddsummaryBasePanel' },
                { xtype: 'cdpBasePanel' },
                { xtype: 'loadsnapshotBasePanel' },
                { xtype: 'createsnapshotBasePanel' },
                { xtype: 'clonepmtBasePanel' }
            ], 

            dockedItems: [
                { xtype: 'projectheaderBasePanel' },
                { xtype: 'projectNavigation' },
                { xtype: 'dashboardProperties', id: 'dashboardProperties', dock: 'right', hidden: true }
            ]
        });
        this.callParent(arguments);
    },

    loadTestData: function () {
        project.data = project.getProjectData();
        project.programMenu = project.getProgramMenu();
        project.projectMenu = project.getProjectMenu();
        project.last5Projects = project.getLast5Projects();
        project.gearMenu = project.getGearMenu();
        project.projectDashboard = project.getProjectDashboard();
        project.programDashboard = project.getProgramDashboard();
    }
});
