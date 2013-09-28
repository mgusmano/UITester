Ext.define('EMSPEED.reporting.view.reportingProgramProjectTreeGrid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.reportingProgramProjectTreeGrid',
    itemId: 'reportingProgramProjectTreeGrid',
    width: '100%',
    useArrows: true,
    rootVisible: false,
    enableCtxMenu: false,  // turn off header context menu
    enableColLock: false,  // turn off column lock context items
    enableColumnMove: false,  // turn off column reorder drag drop
    enableColumnResize: false,  // turn off column resize for whole grid
    margin: '10 0 10 0',

    dockedItems: [{ xtype: 'reportingProgramProjectTreeGridToolbar' }],
    columns: [
        {
            text: 'Project ID',
            width: 80,
            dataIndex: 'projectId'
        },
        {
            xtype: 'treecolumn',
            text: 'Project Name',
            flex: 1,
            dataIndex: 'projectName',
            sortable: true
        }
    ]
});
