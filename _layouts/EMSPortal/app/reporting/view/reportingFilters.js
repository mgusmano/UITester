Ext.define('EMSPEED.reporting.view.reportingFilters', {
    extend: 'Ext.window.Window',
    alias: 'widget.reportingFilters',
    id: 'reportingFilters',
    modal: true,
    floating: true,
    frame: false,
    overflowY: 'auto',
    bodyStyle: {
        background: '#ffffff',
        paddingTop: '10px',
        paddingRight: '0px',
        paddingBottom: '0px',
        paddingLeft: '10px'
    },
    //bodyPadding: '10 10 10 10',
    closable: false,
    layout: 'vbox',
    config: {
        grid: null,
        rowIndex: null,
        sectionFiltersAvailable: null,
        sectionFiltersSelected: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },
    initComponent: function () {
        var rec = this.grid.store.getAt(this.rowIndex);
        var name = rec.get('name');

        Ext.apply(this, {
            height: rec.get('filterWindowHeight'),
            width: rec.get('filterWindowWidth'),
            items: [
                {
                    xtype: 'label',
                    text: name + ' Section Filters',
                    margin: '0 0 5 0',
                    style: {
                        fontFamily: 'Univers 57 condensed',
                        color: '#000000',
                        fontSize: '18px'
                    }
                },
                {
                    xtype: 'label',
                    width: '100%',
                    //text: 'Disabled filters are overridden by a global filter.  The red and italic items are the selected global filter values.',
                    text: 'Select filters for this section.',
                    margin: '0 0 10 0',
                    cls: 'x-form-item'
                },
                { xtype: 'container', itemId: 'reportingFiltersContainer' }
            ],
            buttons: [
                { id: 'btnFiltersOk', text: 'OK' },
                { id: 'btnFiltersCancel', text: 'Cancel' }
            ]
        });
        this.callParent(arguments);
    }
});





//                {
//                    xtype: 'label',
//                    text: name + ' Section Filters',
//                    margin: '0 0 5 0',
//                    style: {
//                        fontFamily: 'Univers 57 condensed',
//                        color: '#000000',
//                        fontSize: '18px'
//                    }
//                },
//                {
//                    xtype: 'label',
//                    width: '100%',
//                    text: 'The filters...',
//                    margin: '0 0 20 0',
//                    cls: 'x-form-item'
//                },





//                                {
//                                    xtype: 'button',
//                                    text: 'simulate an edit',
//                                    handler: function (button, e, eOptsx) {
//                                        //alert('hi');
//                                        filtersSelected = [];;
//                                    }
//                                },


//                {
//                    xtype: 'grid',
//                    store: Ext.create('Ext.data.Store', {
//                        fields: ['Id', 'Name', 'FilterTypeId', 'LowerBoundary', 'UpperBoundary', 'Visible', 'GlobalFilterId', 'FilterValues', 'Columns' ],
//                        data: sectionFilters
//                    }),
//                    disableSelection: true,
//                    columns: [ 
//                        { header: 'Id', dataIndex: 'Id', width: 100 },
//                        { header: 'FilterTypeId', dataIndex: 'FilterTypeId', width: 100 },
//                        { header: 'LowerBoundary', dataIndex: 'LowerBoundary', width: 100 },
//                        { header: 'UpperBoundary', dataIndex: 'UpperBoundary', width: 100 },
//                        { header: 'Visible', dataIndex: 'Visible', width: 100 },
//                        { header: 'GlobalFilterId', GlobalFilterId: 'Visible', width: 100 },


//                        { header: 'FilterValues', dataIndex: 'FilterValues', width: 100,
//                            renderer: function (value, meta, record) {
//                                meta.tdAttr = 'data-qtip="' + JSON.stringify(value) + '"';
//                                return JSON.stringify(value);
//                            }
//                        },
//                        { header: 'Columns', dataIndex: 'Columns', width: 100 },

//                    ]
//                },
//                {
//                    xtype: 'grid',
//                    store: Ext.create('Ext.data.Store', {
//                        fields: ['Id', 'SectionFilterId', 'RangeTypeId', 'LowerValue', 'UpperValue', 'SelectedFilterValueIds' ],
//                        data: this.filtersSelected
//                    }),
//                    disableSelection: true,
//                    columns: [ 
//                        { header: 'Id', dataIndex: 'Id', width: 100 },
//                        { header: 'SectionFilterId', dataIndex: 'SectionFilterId', width: 100 },
//                        { header: 'RangeTypeId', dataIndex: 'RangeTypeId', width: 100 },
//                        { header: 'LowerValue', dataIndex: 'LowerValue', width: 100 },
//                        { header: 'UpperValue', dataIndex: 'UpperValue', width: 100 },
//                        { header: 'SelectedFilterValueIds', dataIndex: 'SelectedFilterValueIds', width: 125,
//                            renderer: function (value, meta, record) {
//                                return JSON.stringify(value);
//                            }
//                        }
//                    ]
//                }
