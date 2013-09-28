Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetGlobalFilters', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingCdpFieldsetGlobalFilters',
    id: 'reportingCdpFieldsetGlobalFilters',
    collapsible: true,
    collapsed: true,
    title: 'Global Filters',
    width: '100%',
    layout: 'vbox',
    margin: '0 0 10 0',
    items: [
        { xtype: 'container', xitemId: 'globalFiltersParentContainer', id: 'globalFiltersParentContainer' }
    ]

});
