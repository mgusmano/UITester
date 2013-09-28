Ext.define('EMSPEED.reporting.view.reportingFilterSingleSelectList', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterSingleSelectList',

    setDisabledForGlobal: function (globalFilterControl) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var singleSelectItems = this.theSingleSelectItems;
        var theGlobalFiltersObject = globalFilterControl.getFilterValuesObject();
        var theLocalId = theGlobalFiltersObject.singleSelectFilterValueSelectedId;
        singleSelectItems.items[theLocalId - 1].bodyEl.dom.style.color = 'red';
        singleSelectItems.items[theLocalId - 1].bodyEl.dom.style.fontWeight = 'bold';
        singleSelectItems.items[theLocalId - 1].bodyEl.dom.style.fontStyle = 'italic';
        this.down('#' + theId + '-rgpSingleSelectList').setDisabled(true);
        var idSingleSelectList = theId + '-rgpSingleSelectList';
        var theidSingleSelectListDOM = Ext.getDom(idSingleSelectList);
        theidSingleSelectListDOM.style.opacity = .7;
    },

    setFilterValues: function (theFiltersSelectedObject) {
        var singleSelectItems = this.theSingleSelectItems;
        for (var k = 0; k < singleSelectItems.items.length; k++) {
            singleSelectItems.items[k].setValue(false);
        }
        var theItemSelected = theFiltersSelectedObject.singleSelectFilterValueSelectedId - 1;
        singleSelectItems.items[theItemSelected].setValue(true);
    },

    clearFilterValues: function () {
        var singleSelectItems = this.theSingleSelectItems;
        for (var k = 0; k < singleSelectItems.items.length; k++) {
            singleSelectItems.items[k].setValue(false);
            try {
                singleSelectItems.items[k].bodyEl.dom.style.color = 'black';
                singleSelectItems.items[k].bodyEl.dom.style.fontWeight = 'normal';
                singleSelectItems.items[k].bodyEl.dom.style.fontStyle = 'normal';
            }
            catch (err) { }
        }
    },

    getFilterValuesObject: function (parmId) {
        var theObject = {};
        var singleSelectItems = this.theSingleSelectItems;
        this.filtersSelectedId = this.filtersSelectedId;
        var empty = true;
        for (var k = 0; k < singleSelectItems.items.length; k++) {
            if (singleSelectItems.items[k].getValue() === true) {
                empty = false;
            }
        }
        if (empty === false) {
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
        theObject.lowerValueSelected = null;
        theObject.upperValueSelected = null;
        if (singleSelectItems.items.length === 0) {
            theObject.singleSelectFilterValueSelectedId = null;
            theObject.singleSelectFilterValueSelectedName = null;
        }
        else {
            var theSelectedItemId = null;
            var theSelectedItemName = null;
            for (var k = 0; k < singleSelectItems.items.length; k++) {
                if (singleSelectItems.items[k].getValue() === true) {
                    theSelectedItemId = k + 1;
                    theSelectedItemName = singleSelectItems.items[k].boxLabel;
                }
            }
            theObject.singleSelectFilterValueSelectedId = theSelectedItemId;
            theObject.singleSelectFilterValueSelectedName = theSelectedItemName;
        }
        theObject.multiSelectFilterValuesSelected = null;
        return theObject;
    },

    initComponent: function () {
        var theGroupItems = [];
        for (var i = 0; i < this.filtersAvailableObject.filterValues.length; i++) {
            var theItemId = this.getTheItemId(this.section, this.filtersAvailableObject.name, this.filtersAvailableObject.filterValues[i].name);

            var newItem = {
                id: theItemId,
                FieldId: this.filtersAvailableObject.filterValues[i].id,
                Sequence: this.filtersAvailableObject.filterValues[i].sequence,
                listeners: {
                    scope: this,
                    change: function (me, newValue, oldValue, eOpts) {
                        if (this.section === 'global') {
                            reporting.setChangedMessage();
                        }
                    }
                },
                boxLabel: this.filtersAvailableObject.filterValues[i].name,
                name: this.filtersAvailableObject.name,
                value: i + 1
            };
            theGroupItems.push(newItem);
        }
        theGroupItems.sort(com.compareSequence);

        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);
        this.theItems = [
            {
                xtype: 'radiogroup',
                id: theId + '-rgpSingleSelectList',
                margin: '0 5 0 0',
                columns: Ext.decode(this.filtersAvailableObject.columns),
                items: theGroupItems
            },
            {
                xtype: 'button',
                text: 'clear',
                listeners: {
                    scope: this,
                    click: function (me, e, eOpts) {
                        var rg = Ext.getCmp(theId + '-rgpSingleSelectList');   
                        for (var rb = 0; rb < rg.items.items.length; rb++) {
                            rg.items.items[rb].setValue(false);
                        }
                        if (this.section === 'global') {
                            reporting.setChangedMessage();
                        }
                    }
                }
            }
        ];

        this.callParent(arguments);
        this.theSingleSelectItems = this.down('#' + theId + '-rgpSingleSelectList').items;
    }
});
