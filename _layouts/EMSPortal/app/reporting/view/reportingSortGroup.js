Ext.define('EMSPEED.reporting.view.reportingSortGroup', {
    extend: 'Ext.container.Container',
    alias: 'widget.reportingSortGroup',
    margin: '5 0 5 0',
    layout: 'hbox',
    labelAlign: 'top',
    width: '100%',
    style: {
        fontFamily: 'Univers 57 condensed',
        color: '#000000',
        fontSize: '14px',
        borderWidth: '1px',
        borderColor: '#cccccc',
        borderStyle: 'solid',
        //borderTop: '1px',
        borderBottom: '1px',
        borderLeft: '1px',
        borderRight: '1px'
    },
    config: {
        sortGroupsAvailableObject: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },
    initComponent: function () {
        this.sortGroupsAvailableId = this.sortGroupsAvailableObject.id;
        this.sequence = this.sortGroupsAvailableObject.id;

        var sortGroupFields = this.getSortGroupFields(this.sortGroupsAvailableObject.sortGroupFieldsAvailable, this.sortRowValueWidth, this.sectionName, this.groupName);
  
        this.items = [
            {
                xtype: 'label',
                margin: '10 0 5 0',
                cls: 'x-form-item',
                text: this.sortGroupsAvailableObject.name,
                width: this.sortRowTitleWidth
//                style: {
//                    fontFamily: 'Univers 57 condensed',
//                    color: '#000000',
//                    fontSize: '14px'
//                }
            },

            {
                xtype: 'container',
                itemId: 'reportingSortGroupFieldsContainer',
                layout: 'vbox',
                items: sortGroupFields
            }
        ]
        this.callParent(arguments);
    },

    getSortGroupFields: function (sortGroupFieldsAvailable, sortRowValueWidth, sectionName, groupName) {
        var theSortGroupFieldControls = [];
        for (i = 0; i < sortGroupFieldsAvailable.length; i++) {
            var theSortGroupField = {};
            theSortGroupField.xtype = 'reportingSortGroupField';
            theSortGroupField.sortGroupFieldsAvailableObject = sortGroupFieldsAvailable[i];
            theSortGroupField.sortRowValueWidth = sortRowValueWidth;
            theSortGroupField.sectionName = sectionName;
            theSortGroupField.groupName = groupName;
            theSortGroupFieldControls.push(theSortGroupField);
        }
        return theSortGroupFieldControls;
    }

});










//            {
//                xtype: 'grid',
//                store: Ext.create('Ext.data.Store', {
//                    fields: ['Id', 'Name', ],
//                    data: [{Id: 1 ,Name: 'sort 1' }, {Id: 2 ,Name: 'sort 2' }]
//                }),
//                //disableSelection: true,
//                columns: [

//                    {
//                        xtype: 'checkcolumn',
//                        header: 'Enabled',
//                        dataIndex: 'Enabled',
//                        id: 'cbxSortEnabled',
//                        width: 55
//                    },
//                    { header: 'Id', dataIndex: 'Id', width: 100 },
//                    { header: 'Name', dataIndex: 'Name', width: 100 },


//                    {
//                        header: 'value',
//                        dataIndex: 'value',
//                        width: 90,
//                        align: 'right',
//                        editor: new Ext.form.ComboBox({
//                            typeAhead: true,
//                            triggerAction: 'all',
//                            store: ['asc','desc'],
//                            displayField: 'attr',
//                            minListWidth: 300,
//                            mode: 'local',
//                            triggerAction: 'all',
//                            emptyText: 'asc',
//                            selectOnFocus: true
//                        })
//                    }
//                ]
//            }

