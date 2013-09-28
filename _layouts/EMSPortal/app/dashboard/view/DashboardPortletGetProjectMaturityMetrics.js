Ext.define('EMSPEED.dashboard.view.dashboardPortletGetProjectMaturityMetrics', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletGetProjectMaturityMetrics',

    getParams: function (searchCriteria) {
        var sParams = { filter: { orderBy: null, projectId: parseFloat(com.getProjectId()), snapshotDateRange: null } };
        return sParams;
    },

    getKpiTrendStore: function () {
        //var sUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService' + '.svc/json/' + 'GetKpiTrend';
        //var theData = {};
        //$.ajax({
        //    url: sUrl,
        //    type: 'POST',
        //    crossDomain: true,
        //    data: Ext.encode(this.getParams()),
        //    contentType: "application/json; charset=utf-8",
        //    xhrFields: { withCredentials: true },
        //    dataType: 'json',
        //    async: false
        //})
        //.done(function (data) {
        //    debugger;
        //    theData = data.Snapshots;
        //})
        //.fail(function (data) {
        //    alert(data.status + '-' + data.statusText);
        //});

        debugger;
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: this.fields
            //data: this.theData.Snapshots
            //proxy: {
            //    type: com.proxy,
            //    root: '',
            //    service: 'ProjectService',
            //    method: 'GetProjects',
            //    jsonData: sParams
            //}
        });

        return store;
    },


    initComponent: function () {
        dashboard.startLoading();
        debugger;

        this.fields = [
            {
                name: 'snapshotDate', type: 'string', text: 'Snapshot Date', dataIndex: 'snapshotDate', flex: 1,
                convert: function (v, j) {
                    return new Date(parseInt(v.replace('/Date(', '')));
                }
            },
            { name: 'dfxScore', type: 'string', text: 'DFX', dataIndex: 'dfxScore' },
            { name: 'riskMaturityIndex', type: 'string', text: 'Risk', dataIndex: 'riskMaturityIndex' },
            { name: 'productMaturityIncrementalIndex', type: 'string', text: 'PMI', dataIndex: 'productMaturityIncrementalIndex' },
            { name: 'requirementMaturityIndex', type: 'string', text: 'RMT', dataIndex: 'requirementMaturityIndex' }
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
        this.down('grid').bindStore(this.getKpiTrendStore());
        dashboard.endLoading();
    },

    renderProjectName: function (value, p, record) {
        return Ext.String.format(
		    '<b><a style="text-decoration: underline;font-family: Univers 57 condensed " href="/sites/{0}/Portal.aspx" xtarget="_blank">{1}</a></b>',
		    record.data.pddNumber,
		    record.data.projectName
	    );
    }

    //onStoreSizeChange: function (a, b, c) {
    //    Ext.getCmp('myprojectsHeaderPanel').down('#status').update({ count: a });
    //}
});


//Ext.define('EMSPEED.dashboard.view.dashboardPortletGetProjectMaturityMetrics', {
//    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
//    alias: 'widget.dashboardPortletGetProjectMaturityMetrics',

//    fields: [
//        { name: 'SnapshotDate', type: 'string', text: 'SnapshotDate', dataIndex: 'SnapshotDate', flex: 1 },
//        { name: 'DFX', type: 'string', text: 'DFX', dataIndex: 'DFX' },
//        { name: 'Risk', type: 'string', text: 'Risk', dataIndex: 'Risk' },
//        { name: 'PMT', type: 'string', text: 'PMT', dataIndex: 'PMT' },
//        { name: 'RMT', type: 'string', text: 'RMT', dataIndex: 'RMT' }
//    ],

//    initComponent: function () {
//        var store = Ext.create('Ext.data.Store', {
//            autoLoad: {
//                params: { projectID: project.projectId }
//            },
//            fields: this.fields,
//            proxy: {
//                type: 'SoapProxy',
//                service: 'ProjectService',
//                method: 'GetProjectMaturityMetrics',
//                serviceinterface: 'IProjectService',
//                record: 'MaturityMetrics'
//            }
//        });
//        store.load({
//            scope: this,
//            callback: function (records, operation, success) {
//                if (success === true) {
//                    this.down('grid').bindStore(store);
//                }
//                else {
//                }
//            }
//        });
            
//        Ext.apply(this, {
//            items: [
//                {
//                    xtype: 'grid',
//                    columns: this.fields, 
//                    width: '100%'
//                }
//           ]
//        });
//        this.callParent(arguments);
//    }
//});
