Ext.define('EMSPEED.reporting.view.reportingFilterDate', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterDate',

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
        this.down('#' + theId + '-txtDate').setValue(theFiltersSelectedObject.lowerValueSelected);
    },

    clearFilterValues: function () {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        this.down('#' + theId + '-txtDate').setValue('');
    },

    getFilterValuesObject: function (parmId) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var theObject = {};
        var dateObj1a = this.down('#' + theId + '-txtDate').getValue();
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
        theObject.rangeTypeSelectedId = null;
        theObject.rangeTypeSelectedName = null;
        theObject.prefixText = this.filtersAvailableObject.prefixText;
        var dateObj1 = this.down('#' + theId + '-txtDate').getValue();
        if (dateObj1 != null) {
            var dateString1 = (dateObj1.getMonth() + 1) + '/' + dateObj1.getDate() + '/' + dateObj1.getFullYear();
            theObject.lowerValueSelected = dateString1;
        }
        else {
            theObject.lowerValueSelected = null;
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
            { xtype: 'datefield', editable: false, id: theId + '-txtDate', width: 100, margin: this.theControlMargin,
                listeners: {
                    scope: this,
                    change: function (me, newValue, oldValue, eOpts) {
                        if (this.section === 'global') {
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

                        Ext.getCmp(theId + '-txtDate').setValue('');

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
