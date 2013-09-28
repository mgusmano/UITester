Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsSortGroupsColumn', {
    extend: 'Ext.grid.column.Action',
    alias: 'widget.reportingCdpFieldsetReportSectionsSortGroupsColumn',
    requires: 'Ext.window.MessageBox',
    header: 'Sorts',
    dataIndex: 'sectionSortGroupsSelected',
    enableColumnHide: false,
    align: 'center',
    sortable: false,
    menuDisabled: true,
    width: 60,
    icon: '',
    //    items: [
    //                        {
    getClass: function (v, meta, rec) {
        if (rec.get('sectionSortGroupsSelected').length === 0) {
            return 'sort-empty-col';
        } else {
            return 'sort-notempty-col';
        }
    },
    getTip: function (value, metaData, record, rowIndex, colIndex, store) {
        var theSummary = '';
        var theSectionSortGroupsSelected = record.get('sectionSortGroupsSelected');
        for (var a = 0; a < theSectionSortGroupsSelected.length; a++) {
            if (a === 0) {
                theSummary += '<div style=font-size:12px;>Sorts Selected</div>';
            }
            if (theSectionSortGroupsSelected[a].sortGroupFieldsSelected.length > 0) {
                theSummary += '<hr>' + theSectionSortGroupsSelected[a].sortGroupsAvailableName + '<br>';
                for (var b = 0; b < theSectionSortGroupsSelected[a].sortGroupFieldsSelected.length; b++) {
                    theSummary += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + theSectionSortGroupsSelected[a].sortGroupFieldsSelected[b].sortGroupFieldsAvailableName + '';
                    theSummary += ' (' + theSectionSortGroupsSelected[a].sortGroupFieldsSelected[b].arrangementTypeSelectedName + ')<br>';
                }
            }
        }
        if (theSummary === '') {
            //theSummary = 'No sorts defined';
        }
        return theSummary;
    },
    handler: function (grid, rowIndex, colIndex) {
        var record = grid.store.getAt(rowIndex);

        if (record.get('sectionSortGroupsAvailable').length === 0) {
            Ext.Msg.show({
                title: 'No sorts available',
                msg: 'No sorts are available for the ' + record.get('name') + ' section',
                width: 400,
                height: 400,
                closable: false,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            })
            return;
        }

        record.set('enabled', true);
        reporting.setChangedMessage();
        reporting.drawSummary(Ext.getCmp('grdReportSections').store.data.items);

        if (record.get('enabled') === false) {
            Ext.Msg.show({
                title: 'Edit disabled',
                msg: 'You must enable section before editing the sorts',
                width: 400,
                height: 400,
                closable: false,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            })
        }
        else {
            var l = Ext.getCmp('reportingBasePanel').setLoading('Loading sorts window...');
            setTimeout(function () {
                //Ext.suspendLayouts();
                Ext.create("EMSPEED.reporting.view.reportingSorts", { grid: grid, rowIndex: rowIndex }).show();
                //Ext.resumeLayouts(true);
            }, 1000);
        }
    }
    //                        }
    //                    ]


});
