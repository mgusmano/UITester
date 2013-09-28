Ext.define('EMSPEED.reporting.view.reportingFilterDateRange', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterDateRange',

    setDisabledForGlobal: function (globalFilterControl) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.down('#theDetails').setDisabled(true);
        var g = this.down('#' + theId + '-globalVal');
        if (g != null) {
            this.down('#' + theId + '-globalVal').setText(globalFilterControl.getStringValue());
        }
    },

    setFilterValues: function (theFiltersSelectedObject) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.filtersSelectedId = theFiltersSelectedObject.id;
        this.down('#' + theId + '-txtDate1').setValue(theFiltersSelectedObject.lowerValueSelected);
        this.down('#' + theId + '-txtDate2').setValue(theFiltersSelectedObject.upperValueSelected);
        this.down('#' + theId + '-cbxRangeType').setValue(theFiltersSelectedObject.rangeTypeSelectedId);
    },

    clearFilterValues: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.down('#' + theId + '-txtDate1').setValue('');
        this.down('#' + theId + '-txtDate2').setValue('');
        this.down('#' + theId + '-cbxRangeType').setValue(7);
    },

    getFilterValuesObject: function (parmId) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var theObject = {};
        var dateObj1a = this.down('#' + theId + '-txtDate1').getValue();
        if (dateObj1a != null) {
            theObject.selected = true
        }
        else {
            theObject.selected = false
        }
        theObject.id = parmId;
        theObject.filterTypeId = this.filtersAvailableObject.filterTypeId;
        theObject.filtersAvailableId = this.filtersAvailableId;
        theObject.filtersAvailableName = this.filtersAvailableName;
        theObject.rangeTypeSelectedId = this.down('#' + theId + '-cbxRangeType').getValue();
        theObject.rangeTypeSelectedName = this.down('#' + theId + '-cbxRangeType').getRawValue();
        theObject.prefixText = 'is';
        var dateObj1 = this.down('#' + theId + '-txtDate1').getValue();
        if (dateObj1 != null) {
            var dateString1 = (dateObj1.getMonth() + 1) + '/' + dateObj1.getDate() + '/' + dateObj1.getFullYear();
            theObject.lowerValueSelected = dateString1;
        }
        else {
            theObject.lowerValueSelected = null;
        }
        var dateObj2 = this.down('#' + theId + '-txtDate2').getValue();
        if (dateObj2 != null) {
            var dateString2 = (dateObj2.getMonth() + 1) + '/' + dateObj2.getDate() + '/' + dateObj2.getFullYear();
            theObject.upperValueSelected = dateString2;
        }
        else {
            theObject.upperValueSelected = null;
        }
        theObject.singleSelectFilterValueSelectedId = null;
        theObject.multiSelectFilterValuesSelected = null;
        return theObject;
    },

    initComponent: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);
        this.theItems = [
            { xtype: 'label', xwidth: 20, cls: 'x-form-item', margin: this.theTextMargin, text: 'is' },
            {
                xtype: 'combobox',
                id: theId + '-cbxRangeType',
                margin: this.theControlMargin,
                width: 180,
                valueField: 'id',
                displayField: 'name',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'name'],
                    data: this.rangeTypes
                }),
                value: 7,
                listeners: {
                    scope: this,
                    change: function (object, newValue, oldValue, eOpts) {
                        if (this.section === 'global') {
                            reporting.setChangedMessage();
                        }
                        if (newValue === 5 || newValue === 6) {
                            object.up('container').down('#' + theId + '-lblAnd').show();
                            object.up('container').down('#' + theId + '-txtDate2').show();
                        }
                        else {
                            Ext.getCmp(theId + '-globalVal').setText('');
                            object.up('container').down('#' + theId + '-txtDate2').setValue('');
                            object.up('container').down('#' + theId + '-lblAnd').hide();
                            object.up('container').down('#' + theId + '-txtDate2').hide();
                        }
                    }
                }
            },
            { xtype: 'datefield', editable: false, id: theId + '-txtDate1', width: 100, margin: this.theControlMargin,
                listeners: {
                    scope: this,
                    change: function (me, newValue, oldValue, eOpts) {

                        var theValue = newValue;
                        if (theValue != '' && theValue != null) {
                            var theOtherValue = Ext.getCmp(theId + '-txtDate2').getValue();
                            if (theOtherValue != '' && theOtherValue != null) {
                                if (theValue >= theOtherValue) {
                                    alert('First date must be less than second date');
                                    me.setValue('');
                                }
                            }
                        }

                        if (this.section === 'global') {
                            reporting.setChangedMessage();
                        }
                    }
                }
            },
            { xtype: 'label', id: theId + '-lblAnd', cls: 'x-form-item', margin: this.theTextMargin, text: 'and' },
            { xtype: 'datefield', editable: false, id: theId + '-txtDate2', width: 100, margin: this.theControlMargin,
                theSection: this.section,
                listeners: {
                    change: function (me, newValue, oldValue, eOpts) {

                        var theValue = newValue;
                        if (theValue != '' && theValue != null) {
                            var theOtherValue = Ext.getCmp(theId + '-txtDate1').getValue();
                            if (theOtherValue != '' && theOtherValue != null) {
                                if (theOtherValue >= theValue) {
                                    alert('First date must be less than second date');
                                    me.setValue('');
                                }
                            }
                        }

                        if (this.theSection === 'global') {
                            reporting.setChangedMessage();
                        }
                    }
                }
            },
            {
                xtype: 'button',
                text: 'clear',
                listeners: {
                    scope: this,
                    click: function (me, e, eOpts) {

                        Ext.getCmp(theId + '-txtDate1').setValue('');
                        Ext.getCmp(theId + '-txtDate2').setValue('');

                        if (this.section === 'global') {
                            reporting.setChangedMessage();
                        }
                    }
                }
            },

            { xtype: 'label', id: theId + '-globalVal', width: 300, margin: this.theTextMargin, style: { color: 'red'} }
        ]

        this.callParent(arguments);

        if (this.rangeTypeId === 5 || this.rangeTypeId === 6) {
            this.down('#' + theId + '-lblAnd').show();
            this.down('#' + theId + '-txtDate2').show();
        }
        else {
            this.down('#' + theId + '-lblAnd').hide();
            this.down('#' + theId + '-txtDate2').hide();
        }
    }
});
