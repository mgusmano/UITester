Ext.define('EMSPEED.reporting.model.reportingReportTypesModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int', mapping: 'id' },
        { name: 'name', type: 'string', mapping: 'name' },
        { name: 'detailPanel', type: 'string', mapping: 'detailPanel' },
        { name: 'summaryPanel', type: 'string', mapping: 'summaryPanel' },
        { name: 'iconFile', type: 'string', mapping: 'iconFile' },
        { name: 'description', type: 'string', mapping: 'description' }
    ]
});
