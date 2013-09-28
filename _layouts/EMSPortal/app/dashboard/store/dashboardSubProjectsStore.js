

Ext.define('EMSPEED.dashboard.store.dashboardSubProjectsStore', {
    extend: 'Ext.data.Store',
    model: 'EMSPEED.dashboard.model.dashboardSubProjectsModel',
    storeId: 'dashboardSubProjectsStore',
    requires: ['COMMON.proxy.emspeedProxy', 'COMMON.proxy.memoryProxy'],
    autoLoad: true,
    buffered: false,
    proxy: {
        type: com.proxy,
        service: 'ProjectService',
        method: 'GetProgram',
        root: 'data',
        jsonData: {
            "filter": {
                "projectId": parseFloat(com.getProjectId()),
                "depth": 1,
                "loadRoot": true,
                "loadBaseAttributes": true,
                "loadAuditInfo": true,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadDfxKpis": true,
                "loadPmtKpis": true,
                "loadUrls": true,
                "displayType": 1
            }
        }
    }


    //proxy: {
    //    type: 'memory',
    //    reader: {
    //        type: 'json',
    //        root: 'items'
    //    }
    //},

    //data: getTheData()
});

