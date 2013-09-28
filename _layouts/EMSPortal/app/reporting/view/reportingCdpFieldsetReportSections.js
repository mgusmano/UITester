Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetReportSections', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingCdpFieldsetReportSections',
    width: '100%',
    layout: 'vbox',
    collapsible: false,
    collapsed: false,
    title: 'Report Sections',
    id: 'reportingCdpFieldsetReportSections',
    itemId: 'reportingCdpFieldsetReportSections',
    margin: '0 0 25 0',
    //height: 900,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 300
    },
    items: [
        {
            xtype: 'grid',
            id: 'grdReportSections',
            width: '100%',
            disableSelection: true,
            enableCtxMenu: false,  // turn off header context menu
            enableColLock: false,  // turn off column lock context items
            enableColumnMove: false,  // turn off column reorder drag drop
            enableColumnResize: false,  // turn off column resize for whole grid
            enableRowHeightSync: true,
            margin: '10 0 10 0',
            dockedItems: [{ xtype: 'reportingCdpFieldsetReportSectionsToolbar'}],
            columns: [
                {
                    xtype: 'reportingCdpCheckColumn',
                    header: 'Enabled',
                    dataIndex: 'enabled',
                    id: 'cbxEnabled',
                    sortable: false,
                    menuDisabled: true,
                    width: 75
                },
                {
                    xtype: 'actioncolumn',
                    icon: Ext.BLANK_IMAGE_URL,
                    header: 'CDP',
                    align: 'center',
                    sortable: false,
                    menuDisabled: true,
                    width: 75,
                    getClass: function (v, meta, rec) {
                        if (rec.get('cdp') === 'x') {
                            var theTooltip = 'The CDP icon in this column indicates that the ' + rec.get('name') + ' section is recommended for your currently selected CDP';
                            meta.tdAttr = 'data-qtip="' + theTooltip + '"';
                            return 'showCdp';
                        } else {
                            return 'hideCdp';
                        }
                    }
                },
                {
                    header: 'Section Name',
                    dataIndex: 'name',
                    width: 263,
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (value, meta, record) {
                        meta.tdAttr = 'data-qtip="' + record.get('description') + '"';
                        return value;
                    }
                },
                { xtype: 'reportingCdpFieldsetReportSectionsSortGroupsColumn', sortable: false },
                { xtype: 'reportingCdpFieldsetReportSectionsFiltersColumn', sortable: false }
           ]
        }
    ]
});
