Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsFiltersColumn', {
    extend: 'Ext.grid.column.Action',
    alias: 'widget.reportingCdpFieldsetReportSectionsFiltersColumn',
    requires: 'Ext.window.MessageBox',
    header: 'Filters',
    dataIndex: 'sectionFiltersSelected',
    align: 'center',
    sortable: false,
    menuDisabled: true,
    width: 60,
//    items: [
//        {
            getClass: function (v, meta, rec) {
                if (rec.get('sectionFiltersSelected').length === 0) {
                    return 'filter-empty-col';
                } else {
                    return 'filter-notempty-col';
                }
            },
            getTip: function (value, metaData, record, rowIndex, colIndex, store) {
                var theSummary1 = '';
                var theSectionFiltersSelected = record.get('sectionFiltersSelected');
                for (var b = 0; b < theSectionFiltersSelected.length; b++) {
                    if (b === 0) {
                        theSummary1 += '<div style=font-size:12px;>Filters Selected</div><hr><table border=0 >';
                    }
                    if (theSectionFiltersSelected[b].selected === true) {
                        theSummary1 += '<table border=0 ><tr style=border-bottom:1px; ><td style=padding:3px;>' + theSectionFiltersSelected[b].filtersAvailableName + ':</td>';

                        switch (theSectionFiltersSelected[b].filterTypeId) {
                            case 1: //'Multi-Select List'
                                if (theSectionFiltersSelected[b].multiSelectFilterValuesSelected != null) {
                                    if (theSectionFiltersSelected[b].multiSelectFilterValuesSelected.length > 0) {
                                        theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].multiSelectFilterValuesSelected[0].filterValueName + '</td></tr>';
                                        for (var c = 1; c < theSectionFiltersSelected[b].multiSelectFilterValuesSelected.length; c++) {
                                            theSummary1 += '<tr><td></td><td style=padding:1px;>' + theSectionFiltersSelected[b].multiSelectFilterValuesSelected[c].filterValueName + '</td></tr>';
                                        }
                                        theSummary1 += '</table>';
                                    }
                                }
                                break;
                            case 2: //'Single-Select List' 
                                if (theSectionFiltersSelected[b].singleSelectFilterValueSelectedName != null) {
                                    theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].singleSelectFilterValueSelectedName;
                                    theSummary1 += '</td></tr></table>';
                                }
                                break;
                            case 3: //'Date'    
                                if (theSectionFiltersSelected[b].lowerValueSelected != null) {
                                    theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].prefixText + ' ' + theSectionFiltersSelected[b].lowerValueSelected;
                                    theSummary1 += '</td></tr></table>';
                                }
                                break;
                            case 4: //'Date Range'  
                                if (theSectionFiltersSelected[b].lowerValueSelected != null) {
                                    theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].prefixText + ' ' + theSectionFiltersSelected[b].rangeTypeSelectedName + ' ' + theSectionFiltersSelected[b].lowerValueSelected;
                                    if (theSectionFiltersSelected[b].upperValueSelected != null) {
                                        theSummary1 += ' and ' + theSectionFiltersSelected[b].upperValueSelected;
                                    }
                                    theSummary1 += '</td></tr></table>';
                                }
                                break;
                            case 5: //'Numeric'    
                                if (theSectionFiltersSelected[b].lowerValueSelected != null) {
                                    theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].prefixText + ' ' + theSectionFiltersSelected[b].lowerValueSelected;
                                    theSummary1 += '</td></tr></table>';
                                }
                                break;
                            case 6: //'Numeric Range' 
                                if (theSectionFiltersSelected[b].lowerValueSelected != null) {
                                    theSummary1 += '<td style=padding:1px;>' + theSectionFiltersSelected[b].prefixText + ' ' + theSectionFiltersSelected[b].rangeTypeSelectedName + ' ' + theSectionFiltersSelected[b].lowerValueSelected;
                                    if (theSectionFiltersSelected[b].upperValueSelected != null) {
                                        theSummary1 += ' and ' + theSectionFiltersSelected[b].upperValueSelected;
                                    }
                                    theSummary1 += '</td></tr></table>';
                                }
                                break;
                            default:
                                break;
                        }

                        if (b + 1 === theSectionFiltersSelected.length) {
                        }
                        else {
                            theSummary1 += '<hr>';
                        }
                    }
                }
                if (theSummary1 === '') {
                    //theSummary1 = 'No filters defined';
                }
                return theSummary1;
            },
            handler: function (grid, rowIndex, colIndex) {
                var record = grid.store.getAt(rowIndex);

                if (record.get('sectionFiltersAvailable').length === 0) {
                    Ext.Msg.show({
                        title: 'No filters available',
                        msg: 'No filters are available for the ' + record.get('name') + ' section',
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
                        msg: 'You must enable section before editing the filters',
                        width: 400,
                        height: 400,
                        closable: false,
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.ERROR
                    })
                }
                else {
                    var l = Ext.getCmp('reportingBasePanel').setLoading('Loading filters window...');
                    setTimeout(function () {
                        Ext.create("EMSPEED.reporting.view.reportingFilters", { grid: grid, rowIndex: rowIndex }).show();
                    }, 1000);
                }
            }
//        }
//    ]
});
