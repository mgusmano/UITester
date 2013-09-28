Ext.define('EMSPEED.reporting.view.reportingSorts', {
    extend: 'Ext.window.Window',
    alias: 'widget.reportingSorts',
    id: 'reportingSorts',
    modal: true,
    floating: true,
    frame: false,
    //width: 675,
    //height: 600,
    overflowY: 'auto',
    bodyStyle: {
        background: '#ffffff',
        paddingTop: '10px',
        paddingRight: '0px',
        paddingBottom: '0px',
        paddingLeft: '10px'
    },
    closable: false,
    layout: 'vbox',
    config: {
        grid: null,
        rowIndex: null,
        sectionSortGroupsAvailable: null,
        sectionSortGroupsSelected: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },
    initComponent: function () {
        this.rec = this.grid.store.getAt(this.rowIndex);
        var sectionName = this.rec.get('name');

        var sortRowTitleWidth = this.rec.get('sortRowTitleWidth');
        var sortRowValueWidth = this.rec.get('sortRowValueWidth');

        this.title = 'Edit The ' + sectionName + ' Section Sorts';
        this.sectionSortGroupsAvailable = this.rec.get('sectionSortGroupsAvailable'); // the total available
        this.sectionSortGroupsSelected = this.rec.get('sectionSortGroupsSelected'); // the user selections
        var sortGroups = this.getSortGroups(this.sectionSortGroupsAvailable, sortRowTitleWidth, sortRowValueWidth, sectionName);

        Ext.apply(this, {
            height: this.rec.get('sortWindowHeight'),
            width: this.rec.get('sortWindowWidth'),
            items: [
                {
                    xtype: 'label',
                    text: sectionName + ' Section Sorts',
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
                    text: 'The sort columns are organized into sort groups.  To enable a sort column, click the checkbox next to the item.  Next, determine whether the sort column should be in ascending or descending order by selecting from the drop down list.  Use the arrow buttons to move a sort column up or down in sort order.',
                    margin: '0 0 10 0',
                    cls: 'x-form-item'
                },
                { xtype: 'container', itemId: 'reportingSortGroupsContainer', items: sortGroups }
            ],
            buttons: [
                { id: 'btnSortsOk', text: 'OK' },
                { id: 'btnSortsCancel', text: 'Cancel' }
            ]
        });
        this.callParent(arguments);
    },

    getSortGroups: function (sortGroupsAvailable, sortRowTitleWidth, sortRowValueWidth, sectionName) {
        var theSortGroups = [];
        for (i = 0; i < sortGroupsAvailable.length; i++) {
            var theSortGroup = {};
            theSortGroup.xtype = 'reportingSortGroup';
            theSortGroup.sortGroupsAvailableObject = sortGroupsAvailable[i];
            theSortGroup.sortRowTitleWidth = sortRowTitleWidth;
            theSortGroup.sortRowValueWidth = sortRowValueWidth;
            theSortGroup.sectionName = sectionName;
            theSortGroup.groupName = sortGroupsAvailable[i].name;
            theSortGroups.push(theSortGroup);
        }
        return theSortGroups;
    }


});





        //                {
        //                    xtype: 'itemselector',
        //                    width: 300,
        //                    //name: 'itemselector',
        //                    //id: 'itemselector-field',
        //                    //anchor: '100%',
        //                    //fieldLabel: 'ItemSelector',
        //                    imagePath: '../ux/images/',
        //                    //store: ds,
        //                    store: ['Red', 'Yellow', 'Green', 'Brown', 'Blue', 'Pink', 'Black'],
        //                    displayField: 'text',
        //                    valueField: 'value',
        //                    value: ['3', '4', '6'],
        //                    allowBlank: false,
        //                    msgTarget: 'side',
        //                    fromTitle: 'Available',
        //                    toTitle: 'Selected'
        //                },
        //                {
        //                    xtype: 'grid',
        //                    store: Ext.create('Ext.data.Store', {
        //                        fields: ['Id', 'Name', ],
        //                        data: sortGroups
        //                    }),
        //                    disableSelection: true,
        //                    columns: [
        //                        { header: 'Id', dataIndex: 'Id', width: 100 },
        //                        { header: 'Name', dataIndex: 'Name', width: 100 }
        //                    ]
        //                }
        //                {
        //                    xtype: 'grid',
        //                    store: Ext.create('Ext.data.Store', {
        //                        fields: ['Id', 'Name', ],
        //                        data: sortOrders
        //                    }),
        //                    disableSelection: true,
        //                    columns: [
        //                        { header: 'Id', dataIndex: 'Id', width: 100 },
        //                        { header: 'Name', dataIndex: 'Name', width: 100 }
        //                    ]
        //                },




            //            bbar: [
            //                '->',
            //                {
            //                    text: 'OK',
            //                    margin: '0 0 0 0',
            //                    scope: this,
            //                    handler: function () {
            //                        rec.set('SortsSelected', sortsSelected);
            //                        Ext.getCmp('reportingBasePanel').setLoading(false);
            //                        this.close();
            //                    }
            //                },
            //                {
            //                    text: 'Cancel',
            //                    margin: '0 0 0 10',
            //                    scope: this,
            //                    handler: function () {
            //                        Ext.getCmp('reportingBasePanel').setLoading(false);
            //                        this.close();
            //                    }
            //                }
            //            ]

    //    //                        {
    //    //                            xtype: 'itemselector',
    //    //                            name: 'itemselector',
    //    //                            id: 'itemselector-field',
    //    //                            anchor: '100%',
    //    //                            width: 400,
    //    //                            height: 200,
    //    //                            imagePath: 'http://localhost:411/examples/ux/images/',
    //    //                            store: Ext.create('Ext.data.ArrayStore', {
    //    //                            fields: ['value','text'],
    //    //                            data: [[123,'Type'],
    //    //                                ['1', 'Status'], ['2', 'Value Score'], ['3', 'Class'], ['4', 'Group'], ['5', 'Date'],
    //    //                                ]
    //    //                            }),
    //    //                            displayField: 'text',
    //    //                            valueField: 'value',
    //    //                            value: ['3', '4', '5'],
    //    //                            allowBlank: false,
    //    //                            msgTarget: 'side',
    //    //                            fromTitle: 'Available Sorts',
    //    //                            toTitle: 'Applied Sorts'
    //    //                        },

