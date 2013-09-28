Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetCustomConfigurations', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingCdpFieldsetCustomConfigurations',
    width: '100%',
    layout: 'vbox',
    collapsible: false,
    collapsed: false,
    title: 'Custom Configurations',

    style: {
        fontFamily: 'Univers 57 condensed',
        color: '#000000',
        fontSize: '14px',
        //padding: '1px 1px 1px 1px',
        //        borderColor: '#99BCE8',
        borderColor: '#cccccc',
        borderStyle: 'solid',
        //borderTop: '1px',
        borderBottom: '1px',
        borderLeft: '1px',
        borderRight: '1px'
    },

    items: [
        { xtype: 'reportingCdpFieldsetConfigurationActions' },
        { xtype: 'reportingCdpFieldsetGlobalFilters', hidden: true },
        { xtype: 'reportingProgramProjects'},
        { xtype: 'reportingCdpFieldsetReportSections' }
    ]
});
