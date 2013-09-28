Ext.define('EMSPEED.reporting.view.reportingFilterNumeric', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterNumeric',

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
        this.down('#' + theId + '-txtNumber').setValue(theFiltersSelectedObject.lowerValueSelected);
    },

    clearFilterValues: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.down('#' + theId + '-txtNumber').setValue('');
    },

    getFilterValuesObject: function (parmId) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var theObject = {};
        var theNumber = this.down('#' + theId + '-txtNumber').getValue();
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
        theObject.rangeTypeSelectedId = null;
        theObject.rangeTypeSelectedName = null;
        theObject.prefixText = this.filtersAvailableObject.prefixText;
        var numObj1 = this.down('#' + theId + '-txtNumber').getValue();
        if (numObj1 === '') {
            theObject.lowerValueSelected = null;
        }
        else {
            theObject.lowerValueSelected = theNumber;
        }
        theObject.upperValueSelected = null;
        theObject.singleSelectFilterValueSelectedId = null;
        theObject.multiSelectFilterValuesSelected = null;
        return theObject;
    },

    initComponent: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.theItems = [
            { xtype: 'label', id: theId + '-lblPrefixText', cls: 'x-form-item', margin: this.theTextMargin, text: this.filtersAvailableObject.prefixText },
            { xtype: 'textfield', id: theId + '-txtNumber', margin: this.theControlMargin, width: 40, enableKeyEvents: true,
                listeners: {
                    scope: this,
                    //                    change: function (me, newValue, oldValue, eOpts) {
                    //                        var theValue = newValue;
                    blur: function (me, event, eOpts) {
                        var theValue = me.getValue();
                        if (theValue != '') {

                            var intRegex = /^\d+$/;
                            if (!intRegex.test(theValue)) {
                                alert('Only integer values are allowed');
                                me.setValue('');
                            }

                            if (this.filtersAvailableObject.lowerBoundary != null) {
                                if (theValue < this.filtersAvailableObject.lowerBoundary) {
                                    alert('Value cannot be less than ' + this.filtersAvailableObject.lowerBoundary);
                                    me.setValue('');
                                }
                            }
                            if (this.filtersAvailableObject.upperBoundary != null) {
                                if (theValue > this.filtersAvailableObject.upperBoundary) {
                                    alert('Value cannot be greater than ' + this.filtersAvailableObject.upperBoundary);
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
            { xtype: 'label', id: theId + '-globalVal', width: 300, margin: this.theTextMargin, style: { color: 'red'} }
        ];
        this.callParent(arguments);
    }
});
