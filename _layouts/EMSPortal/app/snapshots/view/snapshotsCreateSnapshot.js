Ext.define('EMSPEED.snapshots.view.snapshotsCreateSnapshot', {
    extend: 'EMSPEED.snapshots.view.snapshotsCommonFieldSet',
    alias: 'widget.snapshotsCreateSnapshot',
    id: 'snapshotsCreateSnapshot',
    layout: 'vbox',
    title: 'Create Snapshot',
    width: '100%',
    items: [{
        xtype: 'container',
        layout: 'hbox',
        margin: '10 0 10 0',
        items: [
        { xtype: 'textfield', name: 'snapshotName', fieldLabel: 'Snapshot Name', margin: '0 5 0 10', flex: 3, labelAlign: 'left' },
        { xtype: 'textfield', name: 'comment', fieldLabel: 'Comment', margin: '0 5 0 10', flex: 4, labelAlign: 'left' },
        { xtype: 'button', margin: '0 5 0 10', flex: 1, id: 'btnCreateSnapshot', flex: 1, text: 'Create' },
        { xtype: 'button', margin: '0 5 0 10', flex: 1, id: 'btnCancelSnapshot', flex: 1, text: 'Cancel' }
        ]
    }
    ]
});

