Ext.define('EMSPEED.reporting.view.reportingProgramProjectTreeGridToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    itemId: 'reportingProgramProjectTreeGridToolbar',
    alias: 'widget.reportingProgramProjectTreeGridToolbar',
    style: {
        left: 0,
        borderColor: '#99bce8'
    },
    dock: 'top',
    items: [
        {
            text: 'All',
            itemId: 'btnProgramProjectAllClear',
            tooltip: 'select or clear all projects',
            width: 65,
            pressed: false,
            enableToggle: true
        },
        '-'
    ]
});
