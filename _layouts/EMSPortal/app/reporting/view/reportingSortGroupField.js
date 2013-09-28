Ext.define('EMSPEED.reporting.view.reportingSortGroupField', {
    extend: 'Ext.container.Container',
    alias: 'widget.reportingSortGroupField',
    margin: '5 0 0 0',
    height: 25,
    layout: 'hbox',
    config: {
        sortGroupFieldsAvailableObject: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },

    getTheId: function (control) {
        var theId = control.sectionName + '-' + control.groupName + '-' + control.sortGroupFieldsAvailableObject.name;
        theId = theId.split(' ').join('_');
        theId = theId.split('%').join('_');
        theId = theId.split('/').join('_');
        return theId;
    },

    initComponent: function () {
        this.sortGroupFieldsAvailableId = this.sortGroupFieldsAvailableObject.id;
        this.arrangementTypeSelectedName = 'ascending';

        var theId = this.getTheId(this);

        //cbxSortGroupFieldEnabled
        //txtSortGroupFieldName
        //txtSortGroupFieldSelectedFields
        //cbxSortGroupFieldAscDesc
        //txtSortGroupFieldOrder
        //btnSortGroupFieldUp
        //btnSortGroupFieldDown

        //this.sortGroupFieldsAvailableObject.shortDescription = 'test';
        //this.sortGroupFieldsAvailableObject.longDescription = 'test';

        var theMargin = '4 0 0 0';
        var theTooltip = { xtype: 'label', width: 16, height: 1 };
        if (this.sortGroupFieldsAvailableObject.shortDescription != null) {
            if (this.sortGroupFieldsAvailableObject.longDescription != null) {
                theTooltip = { xtype: 'button', text: '?', width: 16, height: 16, margin: theMargin, tooltip: this.sortGroupFieldsAvailableObject.shortDescription, scope: this,
                    handler: function (button, event) {
                        Ext.Msg.show({
                            title: 'Help for ' + this.sortGroupFieldsAvailableObject.name + ' section sort',
                            msg: this.sortGroupFieldsAvailableObject.longDescription,
                            //msg: 'further detail on ' + this.filtersAvailableObject.name + ' section filter<h3>h3</h3><p>paragraph1</p><br><p>paragraph2</p>',
                            //width: 400,
                            //height: 800,
                            closable: false,
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.INFO
                        })
                    }
                };
            }
            else {
                theTooltip = { xtype: 'button', text: '?', width: 16, height: 16, margin: theMargin, tooltip: this.sortGroupFieldsAvailableObject.shortDescription, scope: this };
            }
        }



        this.items = [
            theTooltip,
            { xtype: 'checkbox', margin: '2 5 0 20', id: theId + '-cbxSortGroupFieldEnabled', cls: 'x-form-item',
                listeners: {
                    scope: this,
                    change: function (object, newValue, oldValue, eOpts) {
                        var reportingSortGroupFieldsContainer = object.up('#reportingSortGroupFieldsContainer');
                        var reportingSortGroupFields = reportingSortGroupFieldsContainer.items;
                        var reportingSortGroupFieldCurrent = object.up('container');

                        var theId = this.getTheId(reportingSortGroupFieldCurrent);

                        var theCurrentIndex = -1;
                        var theLastEnabledItem = -1;
                        for (var r = 0; r < reportingSortGroupFields.length; r++) {
                            if (reportingSortGroupFieldCurrent.sortGroupFieldsAvailableObject.id != reportingSortGroupFields.items[r].sortGroupFieldsAvailableObject.id) {
                                if (reportingSortGroupFields.items[r].items.items[1].getValue() == true) {
                                    theLastEnabledItem = r;
                                }
                            }
                            else {
                                theCurrentIndex = r;
                            }
                        }

                        var swap = reportingSortGroupFields.items[theCurrentIndex];
                        if (newValue === true) {
                            //user checked the sort field
                            for (var j = theCurrentIndex; j > theLastEnabledItem; j--) {
                                reportingSortGroupFields.items[j] = reportingSortGroupFields.items[j - 1];
                            }
                            reportingSortGroupFields.items[theLastEnabledItem + 1] = swap;
                            reportingSortGroupFieldCurrent.down('#' + theId + '-txtSortGroupFieldOrder').setText(theLastEnabledItem + 2)

                            if (theLastEnabledItem === -1) {
                                reportingSortGroupFieldCurrent.down('#' + theId + '-btnSortGroupFieldUp').disable(true);
                                reportingSortGroupFieldCurrent.down('#' + theId + '-btnSortGroupFieldDown').disable(true);
                            }
                            else {
                                reportingSortGroupFieldCurrent.down('#' + theId + '-btnSortGroupFieldUp').enable(true);
                                reportingSortGroupFieldCurrent.down('#' + theId + '-btnSortGroupFieldDown').disable(true);

                                var reportingSortGroupFieldLastEnabled = reportingSortGroupFields.items[theLastEnabledItem];
                                //var theIdLastEnabled = this.getTheId(reportingSortGroupFieldLastEnabled);
                                reportingSortGroupFieldLastEnabled.down('#' + this.getTheId(reportingSortGroupFieldLastEnabled) + '-btnSortGroupFieldDown').enable(true);
                            }

                            reportingSortGroupFieldCurrent.down('#' + theId + '-txtSortGroupFieldSelectedFields').show();
                        }
                        else {
                            //user unchecked the sort field
                            if (theCurrentIndex != theLastEnabledItem + 1) {
                                for (var j = theCurrentIndex; j < theLastEnabledItem; j++) {
                                    reportingSortGroupFields.items[j] = reportingSortGroupFields.items[j + 1];
                                    reportingSortGroupFields.items[j].down('#' + this.getTheId(reportingSortGroupFields.items[j]) + '-txtSortGroupFieldOrder').setText(j + 1);
                                }
                                reportingSortGroupFields.items[theLastEnabledItem] = swap;
                            }
                            reportingSortGroupFieldCurrent.down('#' + theId + '-txtSortGroupFieldOrder').setText('');

                            if (theCurrentIndex != 0) {
                                var oneBeyondLastSelected = reportingSortGroupFields.items[theCurrentIndex];
                                if (oneBeyondLastSelected.down('#' + this.getTheId(oneBeyondLastSelected) + '-cbxSortGroupFieldEnabled').getValue() === false) {
                                    var lastSelected = reportingSortGroupFields.items[theCurrentIndex - 1];
                                    lastSelected.down('#' + this.getTheId(lastSelected) + '-btnSortGroupFieldDown').disable(true);
                                }
                            }
                            else {
                                reportingSortGroupFields.items[theCurrentIndex].down('#' + this.getTheId(reportingSortGroupFields.items[theCurrentIndex]) + '-btnSortGroupFieldDown').disable(true);
                                reportingSortGroupFields.items[theCurrentIndex].down('#' + this.getTheId(reportingSortGroupFields.items[theCurrentIndex]) + '-btnSortGroupFieldUp').disable(true);
                            }

                            reportingSortGroupFieldCurrent.down('#' + theId + '-txtSortGroupFieldSelectedFields').hide();
                        }
                    }
                }
            },
            { xtype: 'label', margin: '5 5 0 0', id: theId + '-txtSortGroupFieldName', width: this.sortRowValueWidth, text: this.sortGroupFieldsAvailableObject.name, cls: 'x-form-item' },
            {
                xtype: 'container',
                id: theId + '-txtSortGroupFieldSelectedFields',
                layout: 'hbox',
                hidden: true,
                items: [
                    { xtype: 'label', margin: '5 5 0 0', cls: 'x-form-item', id: theId + '-txtSortGroupFieldOrder', width: 10, text: '' },
                    {
                        xtype: 'combobox',
                        id: theId + '-cbxSortGroupFieldAscDesc',
                        margin: '0 5 0 0',
                        cls: 'x-form-item',
                        width: 100,
                        //                defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
                        valueField: 'id',
                        displayField: 'name',
                        editable: false,
                        readonly: true,
                        queryMode: 'local',
                        value: 1,
                        listeners: {
                            select: {
                                fn: function (combobox, newVal, oldVal, eOpts) {
                                    var c = this.up('reportingSortGroupField');
                                    c.arrangementTypeNameSelected = newVal[0].raw.name;
                                }
                            }
                        },

                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [{ id: 1, name: 'ascending' }, { id: 2, name: 'descending'}]
                        })
                    },
                    { xtype: 'toolbar',

                        style: {
                            background: '#ffffff',
                            backgroundImage: '',
                            borderColor: '#ffffff'
                        },
                        width: 75,
                        items: [
                            { xtype: 'button', margin: '0 5 0 0', id: theId + '-btnSortGroupFieldUp', xwidth: 40, tooltip: 'move up', iconCls: 'up', iconAlign: 'center',
                                listeners: {
                                    scope: this,
                                    click: function (object, e, eOpts) {
                                        var reportingSortGroupFieldsContainer = object.up('#reportingSortGroupFieldsContainer');
                                        var reportingSortGroupFields = reportingSortGroupFieldsContainer.items;
                                        var reportingSortGroupFieldCurrent = object.up('container').up('container').up('container');

                                        var theCurrentIndex;
                                        var theLastEnabledIndex = 0;
                                        for (var r = 0; r < reportingSortGroupFields.length; r++) {
                                            if (reportingSortGroupFields.items[r].items.items[1].getValue() == true) {
                                                theLastEnabledIndex = r;
                                            }
                                            if (reportingSortGroupFieldCurrent.sortGroupFieldsAvailableObject.id === reportingSortGroupFields.items[r].sortGroupFieldsAvailableObject.id) {
                                                theCurrentIndex = r;
                                            }
                                        }

                                        if (theCurrentIndex > 0) {
                                            var swap1 = reportingSortGroupFields.items[theCurrentIndex];
                                            var swap2 = reportingSortGroupFields.items[theCurrentIndex - 1]

                                            reportingSortGroupFields.items[theCurrentIndex - 1] = swap1;
                                            reportingSortGroupFields.items[theCurrentIndex] = swap2;
                                            var theIdSwap1 = this.getTheId(swap1);
                                            var theIdSwap2 = this.getTheId(swap2);

                                            swap1.down('#' + theIdSwap1 + '-txtSortGroupFieldOrder').setText(theCurrentIndex);
                                            swap2.down('#' + theIdSwap2 + '-txtSortGroupFieldOrder').setText(theCurrentIndex + 1);

                                            if (theCurrentIndex === 1) {
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldUp').disable(true);
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldDown').enable(true);
                                            }
                                            else {
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldUp').enable(true);
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldDown').enable(true);
                                            }
                                            swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldUp').enable(true);

                                            var next = reportingSortGroupFields.items[theCurrentIndex + 1]
                                            if (next === undefined) {
                                                swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldDown').disable(true);
                                            }
                                            else {
                                                var theIdNext = this.getTheId(next);

                                                if (next.down('#' + theIdNext + '-cbxSortGroupFieldEnabled').getValue() === true) {
                                                    swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldDown').enable(true);
                                                }
                                                else {
                                                    swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldDown').disable(true);
                                                }
                                            }
                                            reportingSortGroupFieldsContainer.doLayout();
                                        }
                                    }
                                }

                            },
                            { xtype: 'button', margin: '0 5 0 0', id: theId + '-btnSortGroupFieldDown', xwidth: 40, tooltip: 'move down', iconCls: 'dn', iconAlign: 'center',
                                listeners: {
                                    scope: this,
                                    click: function (object, e, eOpts) {
                                        var reportingSortGroupFieldsContainer = object.up('#reportingSortGroupFieldsContainer');
                                        var reportingSortGroupFields = reportingSortGroupFieldsContainer.items;
                                        var reportingSortGroupFieldCurrent = object.up('container').up('container').up('container');

                                        var theCurrentIndex;
                                        var theLastEnabledIndex = 0;
                                        for (var r = 0; r < reportingSortGroupFields.length; r++) {
                                            if (reportingSortGroupFields.items[r].items.items[1].getValue() == true) {
                                                theLastEnabledIndex = r;
                                            }
                                            if (reportingSortGroupFieldCurrent.sortGroupFieldsAvailableObject.id === reportingSortGroupFields.items[r].sortGroupFieldsAvailableObject.id) {
                                                theCurrentIndex = r;
                                            }
                                        }

                                        if (theCurrentIndex < reportingSortGroupFields.length - 1) {
                                            var swap1 = reportingSortGroupFields.items[theCurrentIndex];
                                            var swap2 = reportingSortGroupFields.items[theCurrentIndex + 1];

                                            reportingSortGroupFields.items[theCurrentIndex + 1] = swap1;
                                            reportingSortGroupFields.items[theCurrentIndex] = swap2;

                                            var theIdSwap1 = this.getTheId(swap1);
                                            var theIdSwap2 = this.getTheId(swap2);

                                            swap1.down('#' + theIdSwap1 + '-txtSortGroupFieldOrder').setText(theCurrentIndex + 2);
                                            swap2.down('#' + theIdSwap2 + '-txtSortGroupFieldOrder').setText(theCurrentIndex + 1);

                                            if (theCurrentIndex + 1 >= theLastEnabledIndex) {
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldUp').enable(true);
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldDown').disable(true);
                                            }
                                            else {
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldUp').enable(true);
                                                swap1.down('#' + theIdSwap1 + '-btnSortGroupFieldDown').enable(true);
                                            }
                                            swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldDown').enable(true);
                                            if (theCurrentIndex == 0) {
                                                swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldUp').disable(true);
                                            }

                                            var prev = reportingSortGroupFields.items[theCurrentIndex - 1]
                                            if (prev === undefined) {
                                                swap2.down('#' + theIdSwap2 + '-btnSortGroupFieldDown').enable(false);
                                            }

                                            reportingSortGroupFieldsContainer.doLayout();
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});
