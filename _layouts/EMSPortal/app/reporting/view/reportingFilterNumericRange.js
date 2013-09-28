Ext.define('EMSPEED.reporting.view.reportingFilterNumericRange', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterNumericRange',

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
        this.down('#' + theId + '-txtNumber1').setValue(theFiltersSelectedObject.lowerValueSelected);
        this.down('#' + theId + '-txtNumber2').setValue(theFiltersSelectedObject.upperValueSelected);
        this.down('#' + theId + '-cbxRangeType').setValue(theFiltersSelectedObject.rangeTypeSelectedId);
    },

    clearFilterValues: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.down('#' + theId + '-txtNumber1').setValue('');
        this.down('#' + theId + '-txtNumber2').setValue('');
        this.down('#' + theId + '-cbxRangeType').setValue(7);
    },

    getFilterValuesObject: function (parmId) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var theObject = {};
        var theNumber = this.down('#' + theId + '-txtNumber1').getValue();
        if (theNumber != '') {
            theObject.selected = true
        }
        else {
            theObject.selected = false
        }
        theObject.id = parmId;
        theObject.filterTypeId = this.filtersAvailableObject.filterTypeId;
        theObject.filtersAvailableId = this.filtersAvailableId;
        theObject.filtersAvailableName = this.filtersAvailableName;
        theObject.prefixText = 'is';
        theObject.rangeTypeSelectedId = this.down('#' + theId + '-cbxRangeType').getValue();
        theObject.rangeTypeSelectedName = this.down('#' + theId + '-cbxRangeType').getRawValue();
        var numObj1 = this.down('#' + theId + '-txtNumber1').getValue();
        if (numObj1 != null) {
            if (numObj1 != '') {
                theObject.lowerValueSelected = numObj1;
            }
            else {
                theObject.lowerValueSelected = null;
            }
        }
        else {
            theObject.lowerValueSelected = null;
        }
        var numObj2 = this.down('#' + theId + '-txtNumber2').getValue();
        if (numObj2 != null) {
            if (numObj2 != '') {
                theObject.upperValueSelected = numObj2;
            }
            else {
                theObject.upperValueSelected = null;
            }
        }
        else {
            theObject.upperValueSelected = null;
        }
        theObject.singleSelectFilterValueSelectedId = null;
        theObject.multiSelectFilterValuesSelected = null;
        return theObject;
    },

    checkTextFields: function (me, field1, field2, errorField) {
        if (field1 == undefined) { return; }
        if (field2 == undefined) { return; }
        var field1Value = field1.getValue();
        var field2Value = field2.getValue();
        if (field1Value === '' && field2Value === '') {
            errorField.setText('');
            Ext.getCmp('btnFiltersOk').setDisabled(false);
            return;
        }
        var intRegex = /^\d+$/;
        if (field2.isHidden() === false) {
            if (intRegex.test(field1Value) === false || intRegex.test(field2Value) === false) {
                errorField.setText('Integer values only (no blanks)');
                return;
            }
        }
        else {
            if (intRegex.test(field1Value) === false) {
                errorField.setText('Only integer values are allowed');
                return;
            }
        }
        if (field2.isHidden() === false) {
            if (isNaN(field1Value) === true || isNaN(field2Value) === true) {
                errorField.setText('Only numeric values are allowed');
                return;
            }
        }
        else {
            if (isNaN(field1Value) === true) {
                errorField.setText('Only numeric values are allowed');
                return;
            }
        }
        if (me.filtersAvailableObject.lowerBoundary != null) {
            if (parseInt(field1Value) < me.filtersAvailableObject.lowerBoundary) {
                errorField.setText('Field 1 value cannot be less than ' + me.filtersAvailableObject.lowerBoundary);
                return;
            }
        }
        if (field2.isHidden() === true) {
            if (me.filtersAvailableObject.upperBoundary != null) {
                if (parseInt(field1Value) > me.filtersAvailableObject.upperBoundary) {
                    errorField.setText('Field 1 value cannot be greater than ' + me.filtersAvailableObject.upperBoundary);
                    return;
                }
            }
        }
        if (field2.isHidden() === false) {
            if (me.filtersAvailableObject.upperBoundary != null) {
                if (parseInt(field2Value) > me.filtersAvailableObject.upperBoundary) {
                    errorField.setText('Field 2 value cannot be greater than ' + me.filtersAvailableObject.upperBoundary);
                    return;
                }
            }
            if (parseInt(field1Value) >= parseInt(field2Value)) {
                errorField.setText('First value must be less than second value');
                return;
            }
        }
        if (me.section === 'global') {
            reporting.setChangedMessage();
        }
        errorField.setText('');
        Ext.getCmp('btnFiltersOk').setDisabled(false);
    },

    initComponent: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);
        this.theItems = [
            { xtype: 'label', cls: 'x-form-item', margin: this.theTextMargin, text: 'is' },
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
                            object.up('container').down('#' + theId + '-txtNumber2').show();
                        }
                        else {
                            Ext.getCmp(theId + '-globalVal').setText('');
                            object.up('container').down('#' + theId + '-txtNumber2').setValue('');
                            object.up('container').down('#' + theId + '-lblAnd').hide();
                            object.up('container').down('#' + theId + '-txtNumber2').hide();
                        }
                    }
                }
            },
            { xtype: 'textfield', id: theId + '-txtNumber1', width: 40, margin: this.theControlMargin, enableKeyEvents: true,
                listeners: {
                    scope: this,
                    keyup: function (control, e, eOpts) {
                        Ext.getCmp('btnFiltersOk').setDisabled(true);
                        this.checkTextFields(this, control, Ext.getCmp(theId + '-txtNumber2'), Ext.getCmp(theId + '-globalVal'));
                    }
                }
            },
            { xtype: 'label', id: theId + '-lblAnd', cls: 'x-form-item', margin: this.theTextMargin, text: 'and' },
            { xtype: 'textfield', id: theId + '-txtNumber2', width: 40, margin: this.theControlMargin, enableKeyEvents: true,
                listeners: {
                    scope: this,
                    keyup: function (control, e, eOpts) {
                        Ext.getCmp('btnFiltersOk').setDisabled(true);
                        this.checkTextFields(this, Ext.getCmp(theId + '-txtNumber1'), control, Ext.getCmp(theId + '-globalVal'));
                    }
                }
            },
            { xtype: 'label', id: theId + '-globalVal', width: 300, margin: this.theTextMargin, style: { color: 'red'} }
        ];

        this.callParent(arguments);
        if (this.rangeTypeId === 5 || this.rangeTypeId === 6) {
            this.down('#lblAnd').show();
            this.down('#' + theId + '-txtNumber2').show();
        }
        else {
            this.down('#' + theId + '-lblAnd').hide();
            this.down('#' + theId + '-txtNumber2').hide();
        }
    }
});
