Ext.define('EMSPEED.editteamsite.controller.editteamsiteController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.editteamsite.view.editteamsite',
        'EMSPEED.editteamsite.view.editteamsiteBasePanel',
        'EMSPEED.editteamsite.view.editteamsiteControls',
        'EMSPEED.editteamsite.view.editteamsiteCommonFieldSet'
    ],
    init: function () {
        this.control({
            '#editteamsiteBasePanel': { activate: this.editteamsiteBasePanel_activate },
            '#editteamsiteControls button[identifier="btnSaveTeamsiteUrl"]': { click: this.btnSaveTeamsiteUrl_click },
            '#editteamsiteControls button[identifier="btnCancelTeamsiteUrl"]': { click: this.btnCancelTeamsiteUrl_click }
        });
    },
    editteamsiteBasePanel_activate: function (panel, e, eOpts) {
        var editteamsiteControls = Ext.getCmp('editteamsiteControls');
        var txtTeamSiteUrl = editteamsiteControls.getComponent('txtTeamSiteUrl');
        var teamSite = this.getMenuItem('Team Site');
        if (teamSite != null && teamSite.menuItemUrl != null)
        {
            txtTeamSiteUrl.setValue(teamSite.menuItemUrl);
        }
    },
    btnSaveTeamsiteUrl_click: function (button, e, eOpts) {
        var editteamsiteControls = Ext.getCmp('editteamsiteControls');
        var txtTeamSiteUrl = editteamsiteControls.getComponent('txtTeamSiteUrl');
        var projectId = com.getProjectId();
        if (txtTeamSiteUrl.isValid()) {
            var editteamsiteBasePanel = Ext.getCmp('editteamsiteBasePanel');
            editteamsiteBasePanel.setLoading('Saving Team Site URL...');
            var teamSiteUrl = txtTeamSiteUrl.getValue();

            var editTeamsiteUrlObject = { projectID: projectId, url: teamSiteUrl };

            var store = Ext.create('Ext.data.Store', {
                autoLoad: {
                    params: editTeamsiteUrlObject
                },
                fields: [],
                proxy: {
                    type: 'SoapProxy',
                    service: 'ProjectService',
                    method: 'SetProjectSiteUrl',
                    serviceinterface: 'IProjectService',
                    record: 'SetProjectSiteUrlResponse'
                }
            });
            store.update({
                scope: this,
                callback: function (records, operation, success) {
                    this.updateTeamSiteMenuItem('Team Site', teamSiteUrl);
                    var successMsg = 'The teamsite url was successfully updated for project id ' + projectId + '.';
                    Ext.Msg.alert('Teamsite Url Updated', successMsg, Ext.emptyFn);
                    editteamsiteBasePanel.setLoading(false);
                }
            });
        }
        else {
            var errMsgTeamSiteUrl = 'Please enter a valid Team Site URL';
            Ext.Msg.alert('Validation Error', errMsgTeamSiteUrl, Ext.emptyFn);
        }
    },
    btnCancelTeamsiteUrl_click: function (button, e, eOpts) {
        var editteamsiteBasePanel = Ext.getCmp('editteamsiteBasePanel');
        editteamsiteBasePanel.close();
    },
    getMenuItem: function (menuItemName) {
        if (project.data.isParent) {
            for (var a = 0; a < project.programMenu.length; a++) {
                if (project.programMenu[a].menuItemName === menuItemName)
                {
                    return project.programMenu[a];
                }
            }
        }
        else
        {
            for (var a = 0; a < project.projectMenu.length; a++) {
                if (project.projectMenu[a].menuItemName === menuItemName) {
                    return project.projectMenu[a];
                }
            }
        }
        return null;
    },
    getMenuItemIndex: function (menuItemName) {
        if (project.data.isParent) {
            for (var a = 0; a < project.programMenu.length; a++) {
                if (project.programMenu[a].menuItemName === menuItemName) {
                    return a;
                }
            }
        }
        else {
            for (var a = 0; a < project.projectMenu.length; a++) {
                if (project.projectMenu[a].menuItemName === menuItemName) {
                    return a;
                }
            }
        }
        return -1;
    },
    updateTeamSiteMenuItem: function (menuItemName, teamSiteUrl)
    {
        var projectNavigation = Ext.getCmp('projectNavigation');
        var menuType = "Program Management";
        var index = this.getMenuItemIndex(menuItemName);
        if (index != -1) {
            if (project.data.isParent) {
                project.programMenu[index].menuItemUrl = teamSiteUrl;
            }
            else {
                project.projectMenu[index].menuItemUrl = teamSiteUrl;
                menuType = "Project Management";
            }
        }
        else {
            var teamSiteMenuItem = this.createTeamSiteMenuItem(teamSiteUrl);
            if (project.data.isParent) {             
                project.programMenu.push(teamSiteMenuItem);
            }
            else {
                project.projectMenu.push(teamSiteMenuItem);
                menuType = "Project Management";
            }
        }
        projectNavigation.setTheMenu(menuType);
    },
    createTeamSiteMenuItem: function(teamSiteUrl)
    {
        return { menuItemId: 12, menuItemName: "Team Site", menuItemBasePanel: "", menuItemIcon: "Icon-teamSite", menuItemTooltip: "Team Site", menuItemUrl: teamSiteUrl, sequence: 12, parentId: null, menuItems: null, level: 1, launchFormat: "Default", launch: true };
    }
});
