Ext.define('EMSPEED.dashboard.view.dashboardPortletSubProjects', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletSubProjects',
    title: 'Sub Projects',
    height: 180,

    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
        }, 50);
    },

    initComponent: function () {
        dashboard.startLoading();

        this.fields = [
            { name: 'pddNumber', type: 'int', text: 'Project ID', dataIndex: 'pddNumber', width: 100, menuDisabled: true },
            { name: 'projectName', type: 'string', text: 'Project Name', dataIndex: 'projectName', flex: 1, menuDisabled: true, renderer: this.renderProjectName },
            { name: 'projectManager', type: 'string', text: 'Project Manager', dataIndex: 'projectManager', width: 200, menuDisabled: true },
            { name: 'productChampion', type: 'string', text: 'Product Champion', dataIndex: 'productChampion', width: 200, menuDisabled: true },
            { name: 'lastModifiedBy', type: 'string', text: 'Last Modified By', dataIndex: 'lastModifiedBy', width: 200, menuDisabled: true },
            { name: 'timeSpanFromLastUpdate', type: 'string', text: 'Last Update', dataIndex: 'timeSpanFromLastUpdate', width: 200, hidden: true, menuDisabled: true },
            {
                name: 'lastUpdateDate', type: 'string', text: 'Last Update', dataIndex: 'lastUpdateDate', width: 200, menuDisabled: true, renderer: this.renderLastUpdateDate,
                sortType: function (value) {
                    var theDate = new Date(parseInt(value.replace('/Date(', '')));
                    return theDate;
                }
            }
        ];

        this.items = [
            {
                xtype: 'grid',
                columns: this.fields,
                border: false,
                margin: '0 0 3 0',
                width: '100%',
                cls: 'myprojects-grid',
                disableSelection: true,
                enableCtxMenu: false,  // turn off header context menu
                enableColLock: false,  // turn off column lock context items
                enableColumnMove: false,  // turn off column reorder drag drop
                enableColumnResize: false,  // turn off column resize for whole grid
                enableRowHeightSync: true
            }
        ];
        this.callParent(arguments);
        //this.down('grid').bindStore(this.getProgramStore());
        this.getData();
    },

    getParams: function () {
        var sParams = {
            "filter": {
                "projectId": parseFloat(project.getProjectId()),
                "depth": 1,
                "loadRoot": false,
                "loadBaseAttributes": true,
                "loadAuditInfo": true,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadDfxKpis": true,
                "loadPmtKpis": true,
                "loadUrls": true,
                "displayType": 1
            }
        };
        return sParams;
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProgram';
        var theData = {};
        $.ajax({
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(this.getParams()),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: false
        })
        .done(function (data) {

            //if (com.proxy === 'memoryProxy') {
            //    data = [{ "projectId": 97386, "projectName": "Ardmore Drilling Site Sustainability", "pddNumber": "97386", "level": 3, "isChild": true, "isParent": false, "isParentAccessible": false, "parentProjectId": 97368, "parentProjectName": "Ardmore Drilling Site Wellhead Maintenance", "lastModifiedBy": "mshah23", "lastUpdateDate": "\/Date(947397600000-0600)\/", "timeSpanFromLastUpdate": "13 Years Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 2, "productGroupCode": "CLG", "exception": false, "plannedCommercializationDate": "\/Date(1234072800000-0600)\/", "templateVersion": "1.15 (STS: 4.3.2.0)", "projectManager": "Sabina Scordamaglia", "productChampion": "Jonathan Guidry", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "http:\/\/www.google.com", "requirementsMaturityIndex": 1.7653673406529089, "productMaturityIndex": 44.224983153969504, "productMaturityIncrementalIndex": 91.4942, "riskMaturityIndex": 2.0075611905230022, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "rollUpRiskMaturityIndex": null, "dfxScore": 40.165998670349829, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 97388, "projectName": "Ardmore Drilling Site Security", "pddNumber": "97388", "level": 3, "isChild": true, "isParent": false, "isParentAccessible": false, "parentProjectId": 97368, "parentProjectName": "Ardmore Drilling Site Wellhead Maintenance", "lastModifiedBy": "amathew", "lastUpdateDate": "\/Date(1079416800000-0500)\/", "timeSpanFromLastUpdate": "9 Years Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 2, "productGroupCode": "CLG", "exception": false, "plannedCommercializationDate": "\/Date(994309200000-0500)\/", "templateVersion": "1.15 (STS: 4.3.2.0)", "projectManager": "Sabina Scordamaglia", "productChampion": "Jonathan Guidry", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "", "requirementsMaturityIndex": 37.502097868594383, "productMaturityIndex": 93.348699854383568, "productMaturityIncrementalIndex": 45.29525, "riskMaturityIndex": 80.695012249376163, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "rollUpRiskMaturityIndex": null, "dfxScore": 69.864986660827412, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }];
            //}

            var store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                fields: me.fields,
                data: data
                //proxy: {
                //    type: com.proxy,
                //    root: '',
                //    service: 'ProjectService',
                //    method: 'GetProjects',
                //    jsonData: sParams
                //}
            });
            me.down('grid').bindStore(store);
            dashboard.endLoading();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    },

    renderProjectName: function (value, p, record) {
        return Ext.String.format(
		    '<b><a style="text-decoration: underline;font-family: Univers 57 condensed " href="/sites/{0}/Portal.aspx" xtarget="_blank">{1}</a></b>',
		    record.data.pddNumber,
		    record.data.projectName
	    );
    },

    renderLastUpdateDate: function (value, p, record) {
        return record.data.timeSpanFromLastUpdate;
    }
});
