

var dataGetProject97366 = {
    "projectId": 97366,
    "projectName": "97366 Ardmore Drilling Site Supply Chain v2",
    "pddNumber": "97366",
    "level": null,
    "isChild": null,
    "isParent": null,
    "isParentAccessible": null,
    "parentProjectId": null,
    "parentProjectName": null,
    "lastModifiedBy": "jshyu",
    "lastUpdateDate": "/Date(1079416800000-0500)/",
    "timeSpanFromLastUpdate": "19 Years Ago",
    "targetCdpMilestoneId": 3,
    "targetCdpMilestoneName": "Concurrent Team Launch",
    "productGroupId": 2,
    "productGroupCode": "CLG",
    "exception": false,
    "plannedCommercializationDate": "/Date(994309200000-0500)/",
    "templateVersion": "1.15 (STS: 4.3.2.0)",
    "projectManager": "Johnny Huang",
    "productChampion": "Jagan Mohan",
    "productMaturityTrackerWorksheetUrl": null,
    "dfxWorksheetUrl": null,
    "riskRegisterWorksheetUrl": null,
    "teamSiteUrl": null,
    "requirementsMaturityIndex": null,
    "productMaturityIndex": null,
    "productMaturityIncrementalIndex": null,
    "riskMaturityIndex": null,
    "rollUpProductMaturityIndex": null,
    "rollUpProductMaturityIncrementalIndex": null,
    "rollUpRiskMaturityIndex": null,
    "dfxScore": null,
    "manufacturabilityMfgScore": null,
    "manufacturabilityScScore": null,
    "reliabilityScore": null,
    "maintainabilityScore": null,
    "projects": null
};
var dataGetProject97368 = {
    "projectId": 97368,
    "projectName": "97368 Ardmore Drilling Site Supply Chain v2",
    "pddNumber": "97368",
    "level": null,
    "isChild": null,
    "isParent": null,
    "isParentAccessible": null,
    "parentProjectId": null,
    "parentProjectName": null,
    "lastModifiedBy": "jshyu",
    "lastUpdateDate": "/Date(1079416800000-0500)/",
    "timeSpanFromLastUpdate": "19 Years Ago",
    "targetCdpMilestoneId": 3,
    "targetCdpMilestoneName": "Concurrent Team Launch",
    "productGroupId": 2,
    "productGroupCode": "CLG",
    "exception": false,
    "plannedCommercializationDate": "/Date(994309200000-0500)/",
    "templateVersion": "1.15 (STS: 4.3.2.0)",
    "projectManager": "Johnny Huang",
    "productChampion": "Jagan Mohan",
    "productMaturityTrackerWorksheetUrl": null,
    "dfxWorksheetUrl": null,
    "riskRegisterWorksheetUrl": null,
    "teamSiteUrl": null,
    "requirementsMaturityIndex": null,
    "productMaturityIndex": null,
    "productMaturityIncrementalIndex": null,
    "riskMaturityIndex": null,
    "rollUpProductMaturityIndex": null,
    "rollUpProductMaturityIncrementalIndex": null,
    "rollUpRiskMaturityIndex": null,
    "dfxScore": null,
    "manufacturabilityMfgScore": null,
    "manufacturabilityScScore": null,
    "reliabilityScore": null,
    "maintainabilityScore": null,
    "projects": null
};
var dataGetProject97370 = {
    "projectId": 97370,
    "projectName": "97370 Ardmore Drilling Site Supply Chain v2",
    "pddNumber": "97370",
    "level": null,
    "isChild": null,
    "isParent": null,
    "isParentAccessible": null,
    "parentProjectId": null,
    "parentProjectName": null,
    "lastModifiedBy": "jshyu",
    "lastUpdateDate": "/Date(1079416800000-0500)/",
    "timeSpanFromLastUpdate": "19 Years Ago",
    "targetCdpMilestoneId": 3,
    "targetCdpMilestoneName": "Concurrent Team Launch",
    "productGroupId": 2,
    "productGroupCode": "CLG",
    "exception": false,
    "plannedCommercializationDate": "/Date(994309200000-0500)/",
    "templateVersion": "1.15 (STS: 4.3.2.0)",
    "projectManager": "Johnny Huang",
    "productChampion": "Jagan Mohan",
    "productMaturityTrackerWorksheetUrl": null,
    "dfxWorksheetUrl": null,
    "riskRegisterWorksheetUrl": null,
    "teamSiteUrl": null,
    "requirementsMaturityIndex": null,
    "productMaturityIndex": null,
    "productMaturityIncrementalIndex": null,
    "riskMaturityIndex": null,
    "rollUpProductMaturityIndex": null,
    "rollUpProductMaturityIncrementalIndex": null,
    "rollUpRiskMaturityIndex": null,
    "dfxScore": null,
    "manufacturabilityMfgScore": null,
    "manufacturabilityScScore": null,
    "reliabilityScore": null,
    "maintainabilityScore": null,
    "projects": null
};

var mGetProject = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProject',
        response: function (xhr) {
            debugger;
            var contextId = $.parseJSON(xhr.data).contextId
            switch(contextId)
            {
                case 97366:
                    this.responseText = dataGetProject97366;
                    break;
                case 97368:
                    this.responseText = dataGetProject97368;
                    break;
                case 97370:
                    this.responseText = dataGetProject97370;
                    break;
                default:
                    this.responseText = dataGetProject97370;
            }
        }
    }

);

var dataGetMasterLayout = {
    "project": {
        "projectId": 97370,
        "projectName": "mock Ardmore Drilling Site Supply Chain v2",
        "pddNumber": "97370",
        "level": 3,
        "isChild": true,
        "isParent": false,
        "isParentAccessible": true,
        "parentProjectId": 97368,
        "parentProjectName": "Ardmore Drilling Site Wellhead Maintenance v3",
        "lastModifiedBy": "jshyu",
        "lastUpdateDate": "/Date(1079416800000-0500)/",
        "timeSpanFromLastUpdate": "19 Years Ago",
        "targetCdpMilestoneId": 3,
        "targetCdpMilestoneName": "Concurrent Team Launch",
        "productGroupId": 2,
        "productGroupCode": "CLG",
        "exception": false,
        "plannedCommercializationDate": "/Date(994309200000-0500)/",
        "templateVersion": "1.15 (STS: 4.3.2.0)",
        "projectManager": "Johnny Huang",
        "productChampion": "Jagan Mohan",
        "productMaturityTrackerWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true",
        "dfxWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true",
        "riskRegisterWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true",
        "teamSiteUrl": "",
        "requirementsMaturityIndex": null,
        "productMaturityIndex": null,
        "productMaturityIncrementalIndex": null,
        "riskMaturityIndex": null,
        "rollUpProductMaturityIndex": null,
        "rollUpProductMaturityIncrementalIndex": null,
        "rollUpRiskMaturityIndex": null,
        "dfxScore": null,
        "manufacturabilityMfgScore": null,
        "manufacturabilityScScore": null,
        "reliabilityScore": null,
        "maintainabilityScore": null,
        "projects": null
    },
    "projectEntitlements": {
        "AllowCloning": true,
        "AllowEditTeamSiteUrl": true,
        "AllowManageTeam": true,
        "AllowSnapshot": true
    },
    "user": {
        "alias": "MGusmano",
        "firstName": "Marcus",
        "lastName": "Gusmano",
        "preferredName": "Marcus Gusmano"
    },
    "masterMenu": {
        "displayType": 1,
        "menus": [
            {
                "menuId": 1,
                "menuName": "Left Navigation Bar",
                "sequence": 1,
                "menuItems": [
                    {
                        "menuItemId": 1,
                        "menuItemName": "the Home",
                        "menuItemBasePanel": "dashboardBasePanel",
                        "menuItemUrl": null,
                        "sequence": 1,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-home",
                        "menuItemTooltip": "Home",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 2,
                        "menuItemName": "Reporting",
                        "menuItemBasePanel": "reportingBasePanel",
                        "menuItemUrl": null,
                        "sequence": 2,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-reporting",
                        "menuItemTooltip": "Reporting",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 3,
                        "menuItemName": "Manage Team",
                        "menuItemBasePanel": "manageteamBasePanel",
                        "menuItemUrl": null,
                        "sequence": 3,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-manageTeam",
                        "menuItemTooltip": "Manage Team",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 5,
                        "menuItemName": "PDD Summary",
                        "menuItemBasePanel": "pddsummaryBasePanel",
                        "menuItemUrl": null,
                        "sequence": 5,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-pddSummary",
                        "menuItemTooltip": "PDD Summary",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 6,
                        "menuItemName": "PDD CLMS",
                        "menuItemBasePanel": "cdpBasePanel",
                        "menuItemUrl": null,
                        "sequence": 6,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-pddClms",
                        "menuItemTooltip": "PDD CLMS",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 7,
                        "menuItemName": "Load Snapshot",
                        "menuItemBasePanel": "loadsnapshotBasePanel",
                        "menuItemUrl": null,
                        "sequence": 7,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-snapshots",
                        "menuItemTooltip": "Load Snapshot",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 8,
                        "menuItemName": "Create Snapshot",
                        "menuItemBasePanel": "createsnapshotBasePanel",
                        "menuItemUrl": null,
                        "sequence": 8,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-snapshots",
                        "menuItemTooltip": "Create Snapshot",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 9,
                        "menuItemName": "Clone PMT",
                        "menuItemBasePanel": "clonepmtBasePanel",
                        "menuItemUrl": null,
                        "sequence": 9,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": "Icon-ClonePmt",
                        "menuItemTooltip": "Clone PMT",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 10,
                        "menuItemName": "PMT",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "/stature/control/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true",
                        "sequence": 10,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Stature",
                        "menuItemIcon": "Icon-pmt",
                        "menuItemTooltip": "PMT",
                        "menuItems": null
                    },
                    {
                        "menuItemId": 11,
                        "menuItemName": "DfX",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "/stature/control/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true",
                        "sequence": 11,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Stature",
                        "menuItemIcon": "Icon-dfx",
                        "menuItemTooltip": "DfX",
                        "menuItems": null
                    }
                ]
            },
            {
                "menuId": 2,
                "menuName": "Last Five Projects",
                "sequence": 2,
                "menuItems": [
                    {
                        "menuItemId": 10000,
                        "menuItemName": "Ardmore Drilling Site Supply Chain v2",
                        "menuItemBasePanel": "dashboardBasePanel",
                        "menuItemUrl": "97370",
                        "sequence": 1,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 10001,
                        "menuItemName": "Ardmore Drilling Site Wellhead Maintenance v3",
                        "menuItemBasePanel": "dashboardBasePanel",
                        "menuItemUrl": "97368",
                        "sequence": 2,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 10002,
                        "menuItemName": "Ardmore Drilling Site Program",
                        "menuItemBasePanel": "dashboardBasePanel",
                        "menuItemUrl": "97366",
                        "sequence": 3,
                        "parentId": null,
                        "level": 1,
                        "launch": false,
                        "launchFormat": null,
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    }
                ]
            },
            {
                "menuId": 3,
                "menuName": "Tools",
                "sequence": 3,
                "menuItems": [
                    {
                        "menuItemId": 13,
                        "menuItemName": "Feedback",
                        "menuItemBasePanel": "feedbackBasePanel",
                        "menuItemUrl": null,
                        "sequence": 1,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Modal",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 14,
                        "menuItemName": "Help",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/Wiki%20Pages/Home.aspx",
                        "sequence": 2,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Default",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 15,
                        "menuItemName": "Provision Project",
                        "menuItemBasePanel": "provisionBasePanel",
                        "menuItemUrl": null,
                        "sequence": 3,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Modal",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 16,
                        "menuItemName": "Quick Reference Guide - General",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED%201.1%20Quick%20Reference%20Guide.pdf",
                        "sequence": 4,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Default",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 17,
                        "menuItemName": "Quick Reference Guide - Reporting",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED_Reporting_Quick_Reference_Guide.pdf",
                        "sequence": 5,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Default",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 18,
                        "menuItemName": "EMSPEED Role Access",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/_layouts/xlviewer.aspx?id=/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED%20Roles%20Access%20and%20Security%20Matrix.xlsx&Source=http%3A%2F%2Fteamspace%2Eslb%2Ecom%2Fsites%2FEMSBusinessSystems%2FEngineeringSustaining%2FEMSPEED_Revised%2FEMSPEED%2520Support%2F11%2520Support%2520Documents%2FForms%2FAllItems%2Easpx&DefaultItemOpen=1",
                        "sequence": 6,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Default",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 19,
                        "menuItemName": "FAQs",
                        "menuItemBasePanel": "",
                        "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/Frequently%20Asked%20Questions/Forms/AllPages.aspx",
                        "sequence": 7,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Default",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    },
                    {
                        "menuItemId": 20,
                        "menuItemName": "Edit Team Site",
                        "menuItemBasePanel": "editteamsiteBasePanel",
                        "menuItemUrl": null,
                        "sequence": 8,
                        "parentId": null,
                        "level": 1,
                        "launch": true,
                        "launchFormat": "Modal",
                        "menuItemIcon": null,
                        "menuItemTooltip": null,
                        "menuItems": null
                    }
                ]
            }
        ]
    },
    "layoutConfigurations": [],
    "feedbackItems": {
        "impactItems": [
            {
                "id": 4,
                "type": "Impact",
                "name": "Minor/Localized",
                "sequence": 1,
                "value": "Item4MinorLocalized"
            },
            {
                "id": 5,
                "type": "Impact",
                "name": "Moderate/Limited",
                "sequence": 2,
                "value": "Item3ModerateLimited"
            },
            {
                "id": 6,
                "type": "Impact",
                "name": "Significant/Large",
                "sequence": 3,
                "value": "Item2SignificantLarge"
            }
        ],
        "typeItems": [
            {
                "id": 1,
                "type": "Type",
                "name": "Bug/Error",
                "sequence": 1,
                "value": "Bug/Error"
            },
            {
                "id": 2,
                "type": "Type",
                "name": "Enhancement",
                "sequence": 2,
                "value": "Enhancement"
            },
            {
                "id": 3,
                "type": "Type",
                "name": "Typo",
                "sequence": 3,
                "value": "Typo"
            }
        ],
        "urgencyItems": [
            {
                "id": 7,
                "type": "Urgency",
                "name": "Low",
                "sequence": 1,
                "value": "Item4Low"
            },
            {
                "id": 8,
                "type": "Urgency",
                "name": "Medium",
                "sequence": 2,
                "value": "Item3Medium"
            },
            {
                "id": 9,
                "type": "Urgency",
                "name": "High",
                "sequence": 3,
                "value": "Item2High"
            }
        ]
    }
};

var mGetMasterLayout = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'UserInterfaceService.svc/json/GetMasterLayout',
        //responseTime: 750,
        //responseText: dataGetMasterLayout

        response: function (xhr) {
            //var contextId = $.parseJSON(a.data).contextId
            this.responseText = dataGetMasterLayout;

        }
    }
);


var dataGetKpiTrend = {"FirstSnapshotDate":"\/Date(1360209458850-0600)\/","LastSnapshot":{"snapshotDate":"\/Date(1374175715533-0500)\/","dfxScore":17.06,"productMaturityIndex":4.21,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},"LastSnapshotDate":"\/Date(1374175715533-0500)\/","Snapshots":[{"snapshotDate":"\/Date(1360209458850-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.8,"requirementMaturityIndex":86.02,"riskMaturityIndex":29.39},{"snapshotDate":"\/Date(1360732450277-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.8,"requirementMaturityIndex":86.02,"riskMaturityIndex":30.75},{"snapshotDate":"\/Date(1360737176870-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.8,"requirementMaturityIndex":86.02,"riskMaturityIndex":33.6},{"snapshotDate":"\/Date(1361245051793-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.8,"requirementMaturityIndex":86.02,"riskMaturityIndex":33.73},{"snapshotDate":"\/Date(1361490613790-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.8,"requirementMaturityIndex":86.02,"riskMaturityIndex":35.09},{"snapshotDate":"\/Date(1361587186657-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":33.73},{"snapshotDate":"\/Date(1361872452753-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.65},{"snapshotDate":"\/Date(1362031452457-0600)\/","dfxScore":3.04,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362102494587-0600)\/","dfxScore":3.95,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362103218673-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362115692490-0600)\/","dfxScore":3.95,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362129253173-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362264252437-0600)\/","dfxScore":3.95,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362264493023-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.65,"requirementMaturityIndex":86.02,"riskMaturityIndex":32.92},{"snapshotDate":"\/Date(1362522733427-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":8.58,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1362550074007-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":12.78,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1362632202040-0600)\/","dfxScore":4.24,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1366764935957-0500)\/","dfxScore":0,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1366765766980-0500)\/","dfxScore":3.91,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1366773134937-0500)\/","dfxScore":9.78,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1366773494433-0500)\/","dfxScore":10.95,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1366774814210-0500)\/","dfxScore":14.4,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1367019018740-0500)\/","dfxScore":16.85,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1367025734190-0500)\/","dfxScore":17.03,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1367027292917-0500)\/","dfxScore":16.51,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1367262835630-0500)\/","dfxScore":17.06,"productMaturityIndex":null,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64},{"snapshotDate":"\/Date(1374175715533-0500)\/","dfxScore":17.06,"productMaturityIndex":4.21,"productMaturityIncrementalIndex":11.1,"requirementMaturityIndex":85.3,"riskMaturityIndex":32.64}]};
var mGetKpiTrend = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetKpiTrend',
        response: function (xhr) {
            this.responseText = dataGetKpiTrend;
        }
    }
);

var dataGetCdpDfxSummary = {"dfxSummary":{"overallIndex":69.864986660827412,"manufacturingMfgIndex":35.63,"manufacturingScIndex":22.29,"reliabilityIndex":10.53,"maintainabilityIndex":0},"cdpSummary":{"cdpNextName":"Project Request","cdpTargetName":"Concurrent Team Launch","inSync":false,"manufacturingMfgIndex":null,"manufacturingMfgOverride":null,"manufacturingScIndex":null,"manufacturingScOverride":null,"reliabilityIndex":100,"reliabilityOverride":true,"maintainabilityIndex":0,"maintainabilityOverride":false,"previousPlanDate":"\/Date(1372568400000)\/","readiness":"0%","slip":"13W"}};
var mGetCdpDfxSummary = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetCdpDfxSummary',
        response: function (xhr) {
            this.responseText = dataGetCdpDfxSummary;
        }
    }
);

var dataGetRiskBurndown = {"Matrix":[{"severity":1,"occurrence":1,"count":9},{"severity":1,"occurrence":2,"count":1},{"severity":1,"occurrence":3,"count":0},{"severity":1,"occurrence":4,"count":0},{"severity":1,"occurrence":5,"count":0},{"severity":2,"occurrence":1,"count":3},{"severity":2,"occurrence":2,"count":4},{"severity":2,"occurrence":3,"count":6},{"severity":2,"occurrence":4,"count":4},{"severity":2,"occurrence":5,"count":0},{"severity":3,"occurrence":1,"count":15},{"severity":3,"occurrence":2,"count":13},{"severity":3,"occurrence":3,"count":28},{"severity":3,"occurrence":4,"count":3},{"severity":3,"occurrence":5,"count":0},{"severity":4,"occurrence":1,"count":7},{"severity":4,"occurrence":2,"count":8},{"severity":4,"occurrence":3,"count":3},{"severity":4,"occurrence":4,"count":2},{"severity":4,"occurrence":5,"count":0},{"severity":5,"occurrence":1,"count":7},{"severity":5,"occurrence":2,"count":2},{"severity":5,"occurrence":3,"count":2},{"severity":5,"occurrence":4,"count":0},{"severity":5,"occurrence":5,"count":2}],"Risks":[{"riskSequence":1,"riskName":"Weight of the HP version of module exceeds the target v4","riskSeverity":5,"riskOccurrence":5,"riskScore":25,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Module Weight, Overall Product, Spec 1"},{"riskSequence":33,"riskName":"The target success rate of sampling is a large improvement over MDT and may be difficult to achieve. Not improving to this target would severly impact the reliability perception of the service","riskSeverity":5,"riskOccurrence":5,"riskScore":25,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Module Sampling Reliability, Overall Product, Spec 85"},{"riskSequence":5,"riskName":"Risk 1","riskSeverity":4,"riskOccurrence":4,"riskScore":16,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Number of FLCN  Standard Bottles (PVT quality sample bottles) supported, Overall Product, Spec 5"},{"riskSequence":61,"riskName":"Phase 1 Field Test date target is uncertain given the project risk level","riskSeverity":4,"riskOccurrence":4,"riskScore":16,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Product time to market, Overall Product, Spec 139"},{"riskSequence":57,"riskName":"Operations cost (CoSD) is affected by several parameters. MDT current baseline is not well documented.","riskSeverity":5,"riskOccurrence":3,"riskScore":15,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"Cost of service delivery, Overall Product, Spec 135"},{"riskSequence":58,"riskName":"Cost estimate contains assumptions, achieving the target remains uncertain. Cost to buy represents a sizeable portion of TCO and also largely impacts the deployement strategy","riskSeverity":5,"riskOccurrence":3,"riskScore":15,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNMS : Capex, Overall Product, Spec 136"},{"riskSequence":63,"riskName":"FLCN bottle fails DOT certification before field trial","riskSeverity":4,"riskOccurrence":3,"riskScore":12,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FLCN Standard Bottle (FNSB): Schedule for Transport Cerficitaion, Overall Product, Spec 141"},{"riskSequence":36,"riskName":"Time to modify MaxWell and eWAFE may not be in the FLCN Phase 1 time line","riskSeverity":3,"riskOccurrence":4,"riskScore":12,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"Recovery from MaxWell crash, Overall Product, Spec 115"},{"riskSequence":10,"riskName":"A study of achievable target has not been done. If target is not achieved, it may compromise the ability of FLCN to achieve faster cleanup time over MDT. Unkown dead volumes include new PO concepts, single packer.","riskSeverity":4,"riskOccurrence":3,"riskScore":12,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Ultra Low contamination sampling, Overall Product, Spec 25"},{"riskSequence":93,"riskName":"Target price not achievable reduces the attraction for the large volume non-compensated bottle","riskSeverity":3,"riskOccurrence":4,"riskScore":12,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNLB (Non-compensated bottle): price, EC-VB flowlines"},{"riskSequence":101,"riskName":"Manufacturing may have capacity constraints such as working space, storage space, labor, manufacturing\/test equipment to handle FLCN and MDT demand simultaneously. The product file may not be mature enough to support this high volume.","riskSeverity":4,"riskOccurrence":3,"riskScore":12,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FLCN Manufacturing Ramp, Overall Product"},{"riskSequence":112,"riskName":"Insufficient FNMS hardware failures simulated to properly test MaxWell software","riskSeverity":3,"riskOccurrence":4,"riskScore":12,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Development Simulator, Overall Product"},{"riskSequence":117,"riskName":"Not Called out on Test Spec or dwg-Make sure components can survive test pressure-Damaged Components","riskSeverity":5,"riskOccurrence":2,"riskScore":10,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNMS : Max Temperature Rating, Electronic Cartridge, Spec 12"},{"riskSequence":118,"riskName":"Not Called out on Test Spec or dwg-Make sure components can survive test pressure-Damaged Components","riskSeverity":5,"riskOccurrence":2,"riskScore":10,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNMS : Max Temperature Rating, Electronic Cartridge, Spec 12"},{"riskSequence":113,"riskName":"What needs to be reset for a second run? (bottles, etc.)","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Prepare tool for second run, Overall Product"},{"riskSequence":100,"riskName":"Current MDT RTY results in production are significantly lower than the target. Design and Mfg process improvements needed to achieve the target may not be demonstrated in time for the Pilot Series Build.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Manufacturing yield upon transfer, Overall Product"},{"riskSequence":102,"riskName":"Lose tracking of critical components to define the life, used environment, implementation of modifications etc�","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Traceability, Overall Product"},{"riskSequence":103,"riskName":"Total improvement from current MDT RTY in production is quite aggressive. Mfg process complexity may not allow us to achieve the target.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Manufacturing yield in production, Overall Product"},{"riskSequence":105,"riskName":"There will be higher chance to receive poor quality components without inspection plan","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Inspection plan, Overall Product"},{"riskSequence":106,"riskName":"Reduce the the overall risk level of our supply base will reduce the risk of disruption.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Risk, Overall Product"},{"riskSequence":107,"riskName":"An OTD below target will increase risk of not being able to deliver tool as per committed date to the segment\/field","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: On Time Delivery, Overall Product"},{"riskSequence":108,"riskName":"An OTS below target will increase the risk of not been able to deliver the tool to our clients on time.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: On Time Shipment, Overall Product"},{"riskSequence":94,"riskName":"The devices that require initialization are not defined.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Initialization of FNMS to a known state at power up, Overall Product"},{"riskSequence":95,"riskName":"FNMS Power up Sequence needs to ne defined","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Initialization of FNMS to a known state at power up, Overall Product"},{"riskSequence":96,"riskName":"FNMS power up sequence needs to be defined","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Automatic Initialization  of the FNMS tools at power up., Overall Product"},{"riskSequence":97,"riskName":"The FNMS devices that require Initialization are not defined","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Automatic Initialization  of the FNMS tools at power up., Overall Product"},{"riskSequence":98,"riskName":"FNMS power up initialization takes too long","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Automatic Initialization  of the FNMS tools at power up., Overall Product"},{"riskSequence":56,"riskName":"Insufficient functionality for effective training","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Training Simulator, Overall Product, Spec 134"},{"riskSequence":15,"riskName":"Module does not meet H2S scavenging requirements","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Ability to take low H2S Samples, Overall Product, Spec 37"},{"riskSequence":6,"riskName":"Complexity of independent control may lead to exceeding cost target","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNMS : Number of FLCN  Standard Bottles (PVT quality sample bottles) supported, Overall Product, Spec 6"},{"riskSequence":32,"riskName":"Firmware download too slow","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Firmware download, Overall Product, Spec 56"},{"riskSequence":27,"riskName":"Data delay to Answer Product","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Techlog RE: Support FNMS Data, Overall Product, Spec 50"},{"riskSequence":28,"riskName":"Answer Product is not ready for ENP Field trial","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"Software: Techlog RE: Support FNMS Data, Overall Product, Spec 51"},{"riskSequence":20,"riskName":"FNMS exceeds length target","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Module Shipping Length, Overall Product, Spec 43"},{"riskSequence":9,"riskName":"Cost exceeds target","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNMS : Max Temperature Rating, Overall Product, Spec 9"},{"riskSequence":40,"riskName":"To maintain the cycle time within proper length, higher FPY\/RTY is the key to achieve the target. Current average MDT production RTY is around 10 to 15% and the cycle time is more than 40days.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"Cycle time, Overall Product, Spec 117"},{"riskSequence":41,"riskName":"Not achieving pilot series RTY, would delay early ramp of product and ability to deliver per Field Test requirement","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"Manufacturing yield upon transfer, Overall Product, Spec 118"},{"riskSequence":46,"riskName":"Risk 2","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Supplier Quality, Overall Product, Spec 123"},{"riskSequence":47,"riskName":"Some failed parts can not be identified","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Identification of failed parts in the field, Overall Product, Spec 125"},{"riskSequence":35,"riskName":"Requires significant changes to the MaxWell and eWAFE. The changes could introduce issues.","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Recovery from MaxWell crash, Overall Product, Spec 115"},{"riskSequence":51,"riskName":"Not all components are detectable","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Prognostic Health Monitoring (PHM), Overall Product, Spec 129"},{"riskSequence":59,"riskName":"Cost exceeds target","riskSeverity":3,"riskOccurrence":3,"riskScore":9,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNSB (FLCN Standard Sample Bottle) : Price, Overall Product, Spec 137"},{"riskSequence":43,"riskName":"The number of suppliers is too high and therefore can not be managed effectivly.","riskSeverity":2,"riskOccurrence":4,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Size of Supplier base, Overall Product, Spec 120"},{"riskSequence":25,"riskName":"Module failure due to components failing due to high concentration of H2S","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Bottle (All): H2S, Overall Product, Spec 48"},{"riskSequence":31,"riskName":"Some devices require opening the tool to program","riskSeverity":2,"riskOccurrence":4,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Firmware download, Overall Product, Spec 56"},{"riskSequence":34,"riskName":"Reliability not proven by ENP field test start date","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Module Sampling Reliability, Overall Product, Spec 86"},{"riskSequence":7,"riskName":"Module does not meet 200C requirements","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Max Temperature Rating, Overall Product, Spec 7"},{"riskSequence":8,"riskName":"Model does not meet 200C rating by ENP field test start date","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Max Temperature Rating, Overall Product, Spec 8"},{"riskSequence":2,"riskName":"OD of module exceeds target","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Maximum Outside Diameter, Overall Product, Spec 2"},{"riskSequence":12,"riskName":"Not achieving the high pressure rating would prevent access to niche HP market. Combination of 35kPSI and 200C is difficult to achieve","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Pressure rating -High pressure Offering, Overall Product, Spec 32"},{"riskSequence":90,"riskName":"Sample volume cannot be achieved within tool diameter and lenght constraints","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNSB (FLCN Standard Bottle): Volume, FNSB bottle"},{"riskSequence":104,"riskName":"Test coverage issue. For example,  Lite tested PWA from supplier fails at integration test at internal process","riskSeverity":4,"riskOccurrence":2,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Testability Strategy and plan, Overall Product"},{"riskSequence":110,"riskName":"If we fail to have our 95% of the parts in less that 90 days then we can increase the risk if not meeting the FTE sales time of 7 months","riskSeverity":2,"riskOccurrence":4,"riskScore":8,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Lead time, Overall Product"},{"riskSequence":116,"riskName":"Development cost exceeds target","riskSeverity":2,"riskOccurrence":4,"riskScore":8,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNMS & Standard sample bottle development cost, Overall Product"},{"riskSequence":115,"riskName":"PHM based approach may increase cost of M&S kits","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"Cost of service delivery, Overall Product"},{"riskSequence":89,"riskName":"Product's IP is not protected","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"IP Compliance, Overall Product, Spec 161"},{"riskSequence":109,"riskName":"One way to push our suppliers to perform better is to have a contracts in place.","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Contract, Overall Product"},{"riskSequence":99,"riskName":"Current MDT modules sales LT are between 7 to 9 months. To achieve shorter sales lead time for FLCN production, it may require appropriate level of safety stock for long lead time parts. This solution may impact to inventory cost increase.","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FTE Sales Lead-time, Overall Product"},{"riskSequence":73,"riskName":"Internally: EMS will not allow a new tool to be commercialized if it is not WEE and ROHS compliant. If an exemption is needed, usually it delays projects. Externally: A tool that is not ROHS compliant might not be authorized to be exported in Europe.","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"RoHS, Overall Product, Spec 150"},{"riskSequence":74,"riskName":"The ROHS compliance and WEE compliance could increase the price on some of our components.","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"RoHS, Overall Product, Spec 150"},{"riskSequence":17,"riskName":"FLCN bottle does not support single phase tracking","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Bottle (All) : Sample verification, Overall Product, Spec 40"},{"riskSequence":42,"riskName":"Lower yield in mfg may require additional test or rework, impacting the marked-up price of the tool. Current markup is based on very low RTY of the MDT.","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"Manufacturing yield in production, Overall Product, Spec 119"},{"riskSequence":37,"riskName":"Can't identify the cause of failure when tool is downhole","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Real Time evaluation of hardware during a job, Overall Product, Spec 116"},{"riskSequence":38,"riskName":"Can't identify the cause of failure when tool is downhole","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Real Time evaluation of hardware during a job, Overall Product, Spec 116"},{"riskSequence":39,"riskName":"False positive for failure detection","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: Real Time evaluation of hardware during a job, Overall Product, Spec 116"},{"riskSequence":45,"riskName":"If we don't dual source critical items that are critical to performance such as Pump and Motor then we expose the FLCN tool to poor RTY and long timeline to resolve issues.","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Dual sourcing, Overall Product, Spec 122"},{"riskSequence":48,"riskName":"Long lead time to reproduce","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"Identification of failed parts in the field, Overall Product, Spec 126"},{"riskSequence":49,"riskName":"Data is not available","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Platform : Tool usage data reporting, Overall Product, Spec 127"},{"riskSequence":50,"riskName":"Data is not available","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Hardware Stress test, Overall Product, Spec 128"},{"riskSequence":53,"riskName":"Crew is not trained to handle FLCN bottles","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Rigsite preparation time, Overall Product, Spec 131"},{"riskSequence":54,"riskName":"Handling risk due to FNMS being longer than MRMS","riskSeverity":2,"riskOccurrence":3,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Platform : Rig site efficiency improvement from MDT, Overall Product, Spec 132"},{"riskSequence":55,"riskName":"Time of flight needs to be wrong","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Automated slug capture into sample bottles, Overall Product, Spec 133"},{"riskSequence":64,"riskName":"FLCN bottle DOT certification is delayed","riskSeverity":3,"riskOccurrence":2,"riskScore":6,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FLCN Standard Bottle (FNSB): Schedule for Transport Cerficitaion, Overall Product, Spec 141"},{"riskSequence":65,"riskName":"PPE not available or not worn","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"PPE, Overall Product, Spec 143"},{"riskSequence":66,"riskName":"Equipment not available or not properly used","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Mechanical Lifting, Overall Product, Spec 144"},{"riskSequence":67,"riskName":"Equipment not available or not properly used","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Pressure Handling, Overall Product, Spec 145"},{"riskSequence":68,"riskName":"Equipment not available or not properly used","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"H2S Handling, Overall Product, Spec 146"},{"riskSequence":69,"riskName":"Procedure not properly followed","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Injury prevention, Overall Product, Spec 147"},{"riskSequence":70,"riskName":"Risk not identified or adequate controls are not put in place","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"HARC, Overall Product, Spec 148"},{"riskSequence":11,"riskName":"Module does not meet pressure rating","riskSeverity":5,"riskOccurrence":1,"riskScore":5,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Pressure rating - Standard Offering, Overall Product, Spec 26"},{"riskSequence":13,"riskName":"Cost exceeds target for HP version","riskSeverity":2,"riskOccurrence":2,"riskScore":4,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"FNMS : Pressure rating -High pressure Offering, Overall Product, Spec 33"},{"riskSequence":14,"riskName":"Sample down configuration is not supported to reduce module complexity ( to meet weight\/length target)","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Low shock sampling configurations, Overall Product, Spec 36"},{"riskSequence":18,"riskName":"OD of module exceeds target","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Platform : Flow capacity, Overall Product, Spec 41"},{"riskSequence":16,"riskName":"Sample capture indication from module is faulty","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Sample Capture Assurance, Overall Product, Spec 39"},{"riskSequence":24,"riskName":"Weight of the HP version of module exceeds the target","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Weight for high pressure version, Overall Product, Spec 47"},{"riskSequence":21,"riskName":"Secondary\/tertiary fluids collected during sample transfer","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Sample Recovery of Single Phase Fluid, Overall Product, Spec 44"},{"riskSequence":62,"riskName":"MaxWell doesnot support required functionality for FNMS","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software: MaxWell Surface software, Overall Product, Spec 140"},{"riskSequence":91,"riskName":"Recovery performance cannot be insured within tool size constraints (diameter and lenght)","riskSeverity":4,"riskOccurrence":1,"riskScore":4,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"Design Specific, Overall Product"},{"riskSequence":111,"riskName":"The risk is to start production with electronic components that are already obsolete and not having enough safety stock or lifetime buy.","riskSeverity":2,"riskOccurrence":2,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Obsolescence, Overall Product"},{"riskSequence":114,"riskName":"Hardware protection for the FNMS is not defined.","riskSeverity":2,"riskOccurrence":2,"riskScore":4,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Software protection of hardware, Overall Product"},{"riskSequence":124,"riskName":"(TBD)","riskSeverity":2,"riskOccurrence":2,"riskScore":4,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNMS : Module Weight, Overall Product"},{"riskSequence":72,"riskName":"Risk 3","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"RoHS, Overall Product, Spec 150"},{"riskSequence":75,"riskName":"Risk 4","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"WEEE, Overall Product, Spec 151"},{"riskSequence":76,"riskName":"Risk 5","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"WEEE, Overall Product, Spec 151"},{"riskSequence":77,"riskName":"Risk 6","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"WEEE, Overall Product, Spec 151"},{"riskSequence":78,"riskName":"Risk 7","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"CE, Overall Product, Spec 152"},{"riskSequence":79,"riskName":"Risk 8","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"CE, Overall Product, Spec 152"},{"riskSequence":80,"riskName":"Risk 9","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"CE, Overall Product, Spec 152"},{"riskSequence":60,"riskName":"Expensive kits will cause field to not purchase from product center","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":3,"riskExposureCategoryName":"Cost","placesUsed":"M&S cost, Overall Product, Spec 138"},{"riskSequence":22,"riskName":"Flowlines and bottles do not meet overpressure rating for HP version","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Flowline and sample container over-pressure rating, Overall Product, Spec 45"},{"riskSequence":26,"riskName":"FLCN sample bottle weight  exceeds target","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNSB (FLCN Standard Bottle): Weight, Overall Product, Spec 49"},{"riskSequence":29,"riskName":"Failures during fishing, TLC or lifting operations","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Tensile Rating, Overall Product, Spec 52"},{"riskSequence":30,"riskName":"Failures during fishing or TLC operations","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Compressive Rating, Overall Product, Spec 54"},{"riskSequence":19,"riskName":"FNMS HP version exceeds OD target","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Tool Maximum Outside Diameter for high pressure version, Overall Product, Spec 42"},{"riskSequence":3,"riskName":"Delayed due to delay smart actuator development","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Maximum Outside Diameter, Overall Product, Spec 3"},{"riskSequence":4,"riskName":"Idependent control of 6 bottles may be compromised to a 1-2-2-1 control, in the interest of weight","riskSeverity":3,"riskOccurrence":1,"riskScore":3,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"FNMS : Number of FLCN  Standard Bottles (PVT quality sample bottles) supported, Overall Product, Spec 4"},{"riskSequence":23,"riskName":"Traceability of bottle is not improved due to the inability to include electronics in bottle","riskSeverity":2,"riskOccurrence":1,"riskScore":2,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Bottle(All) : Traceability, Overall Product, Spec 46"},{"riskSequence":71,"riskName":"The tool will not be able to be exported if the TCC classification of its components is not complete.","riskSeverity":2,"riskOccurrence":1,"riskScore":2,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"TCC, Overall Product, Spec 149"},{"riskSequence":44,"riskName":"Using a \"phase out\" supplier will generate an inevitable costly second sourcing project.","riskSeverity":1,"riskOccurrence":2,"riskScore":2,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"SC: Tactical approach, Overall Product, Spec 121"},{"riskSequence":81,"riskName":"Reservoir domain cannot be trained because of lack of training material","riskSeverity":2,"riskOccurrence":1,"riskScore":2,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Training & documentation, Overall Product, Spec 153"},{"riskSequence":82,"riskName":"Operating equipment without training","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Training & documentation, Overall Product, Spec 154"},{"riskSequence":83,"riskName":"Maintaining equipment without training","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Training & Documentation, Overall Product, Spec 155"},{"riskSequence":84,"riskName":"Maintaining equipment without full understanding","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"TBT (Technology based Training), Overall Product, Spec 156"},{"riskSequence":85,"riskName":"Maintaining equipment without understanding tasks and steps","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Maintainance Documentation : Manual, Overall Product, Spec 157"},{"riskSequence":86,"riskName":"Operating equipment without understanding instructions and guidelines","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Operation Documentation: ORM, Overall Product, Spec 158"},{"riskSequence":87,"riskName":"Maintaining equipment without understanding tasks and steps","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Maintainance Documentation : SWI, Overall Product, Spec 159"},{"riskSequence":88,"riskName":"Maintaining equipment without understanding tasks and steps","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Auto TRIM support, Overall Product, Spec 160"},{"riskSequence":123,"riskName":"(TBD)","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":2,"riskExposureCategoryName":"Schedule","placesUsed":"FNMS : Module Weight, Overall Product"},{"riskSequence":52,"riskName":"Unavailability of special tools","riskSeverity":1,"riskOccurrence":1,"riskScore":1,"riskExposureCategorySequence":1,"riskExposureCategoryName":"Performance","placesUsed":"Special Field Tool, Overall Product, Spec 130"},{"riskSequence":121,"riskName":"(TBD)","riskSeverity":null,"riskOccurrence":null,"riskScore":null,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"Design Specific, Overall Product"},{"riskSequence":122,"riskName":"(TBD)","riskSeverity":null,"riskOccurrence":null,"riskScore":null,"riskExposureCategorySequence":null,"riskExposureCategoryName":null,"placesUsed":"FNMS : Module Weight, Overall Product, Spec 1"}]};
var mGetRiskBurndown = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown',
        response: function (xhr) {
            this.responseText = dataGetRiskBurndown;
        }
    }
);

var dataGetReportTypes = [{"id":1,"name":"Project","iconFile":"project.png","detailPanel":"reportingCdpDetailPanel","summaryPanel":"reportingCdpSummaryPanel","description":"Provides ad hoc reporting capabilities enabling users to quickly generate a standardized report structure that can be presented at meetings and uploaded into PDD for a CLM CDP deliverable.  A report can incorporate one or more report sections.","metadata":null},{"id":2,"name":"Raw Data Report","iconFile":"raw_data.png","detailPanel":"reportingRawDetailPanel","summaryPanel":"reportingRawSummaryPanel","description":"Provides a raw data dump of the selected project which enables power users to perform ad-hoc reporting and data analysis by creating their own tables and charts.","metadata":null},{"id":3,"name":"CDP for PDD","iconFile":"cdpforpdd.png","detailPanel":"reportingCdpForPddDetailPanel","summaryPanel":"reportingCdpForPddSummaryPanel","description":"Provides functionality to quickly generate a status report for CDP Milestone meetings.","metadata":"2;3;false"}];
var mGetReportTypes = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ReportConfigurationService.svc/json/GetReportTypes',
        response: function (xhr) {
            this.responseText = dataGetReportTypes;
        }
    }
);

var dataGetProjectViewers = [{"alias":"scordamaglia2","firstName":"Sabina5","lastName":"Scordamaglia","preferredName":"Sabina Scordamaglia"},{"alias":"JGuidry","firstName":"Jonathan3","lastName":"Guidry","preferredName":"Jonathan Guidry"},{"alias":"TSchindler","firstName":"Tommy","lastName":"Schindler","preferredName":"Tommy Schindler"},{"alias":"AMathew","firstName":"Abraham","lastName":"Mathew","preferredName":"Abraham Mathew"},{"alias":"Gordon1","firstName":"Bill","lastName":"Gordon","preferredName":"Bill Gordon"},{"alias":"JShyu","firstName":"Jon","lastName":"Shyu","preferredName":"Jon Shyu"},{"alias":"SChopurala","firstName":"Srinivas","lastName":"Chopurala","preferredName":"Srinivas Chopurala"},{"alias":"BMuir","firstName":"Bill","lastName":"Muir","preferredName":"Bill Muir"}];
var mGetGetProjectViewers = $.mockjax(
    {
        url: 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProjectViewers',
        response: function (xhr) {
            this.responseText = dataGetProjectViewers;
        }
    }
);