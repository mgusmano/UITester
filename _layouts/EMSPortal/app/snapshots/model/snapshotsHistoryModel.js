Ext.define('EMSPEED.snapshots.model.snapshotsHistoryModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int', mapping: 'id' },
        { name: 'name', type: 'string', mapping: 'name' },
        { name: 'comment', type: 'string', mapping: 'comment' },
        { name: 'timestamp', type: 'string', mapping: 'timestamp' },
        { name: 'pmt', type: 'string', mapping: 'pmt' },
        { name: 'dfx', type: 'string', mapping: 'dfx' }
    ]
});
