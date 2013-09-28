Ext.define('EMSPEED.snapshots.view.snapshotsHistory', {
    extend: 'EMSPEED.snapshots.view.snapshotsCommonFieldSet',
    alias: 'widget.snapshotsHistory',
    layout: 'vbox',
    title: 'Snapshot History',
    requires: [
        'EMSPEED.snapshots.view.snapshots'
    ],
    width: '100%',
    items: [{
            xtype: 'grid',
            id: 'gridSnapshotHistory',
            width: '100%',
            disableSelection: true,
            enableCtxMenu: false,  // turn off header context menu
            enableColLock: false,  // turn off column lock context items
            enableColumnMove: false,  // turn off column reorder drag drop
            enableColumnResize: false,  // turn off column resize for whole grid
            enableRowHeightSync: true,
            margin: '10 0 10 0',
            store: Ext.create('Ext.data.Store', {
                model: 'EMSPEED.snapshots.model.snapshotsHistoryModel',
                proxy: {
                    type: 'ajax',
                    url: com.appFolder + '/snapshots/data/snapshotsHistory.jso',
                    reader: {
                          type: 'json'
                    }
                }
            }),
            columns: [
                {
                    header: 'Name',
                    dataIndex: 'name',
                    flex: 3,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('name') + '"';
                        return value;
                    }
                },
                {
                    header: 'Comment',
                    dataIndex: 'comment',
                    flex: 4,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('comment') + '"';
                        return value;
                    }
                },
                {
                    header: 'Date/Timestamp',
                    dataIndex: 'timestamp',
                    flex: 2,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('timestamp') + '"';
                        return value;
                    }
                },
                {
                    header: 'PMT',
                    dataIndex: 'pmt',
                    flex: 1,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('pmt') + '"';
                        return value;
                    }
                },
                {
                    header: 'DfX',
                    dataIndex: 'dfx',
                    flex: 1,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('dfx') + '"';
                        return value;
                    }
                }
            ]
        }
    ]
});

