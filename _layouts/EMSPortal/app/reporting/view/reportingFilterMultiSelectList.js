Ext.define('EMSPEED.reporting.view.reportingFilterMultiSelectList', {
    extend: 'EMSPEED.reporting.view.reportingFilterBaseClass',
    alias: 'widget.reportingFilterMultiSelectList',

    setDisabledForGlobal: function (globalFilterControl) {
        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);

        var multiSelectItems = this.theMultiSelectItems;
        var theGlobalFiltersObject = globalFilterControl.getFilterValuesObject();
        for (var l = 0; l < theGlobalFiltersObject.multiSelectFilterValuesSelected.length; l++) {
            var theLocalId = theGlobalFiltersObject.multiSelectFilterValuesSelected[l].filterValueId;
            // var d = multiSelectItems.items[theLocalId - 1].id + '-boxLabelEl';
            // var theD = Ext.getDom(d);
            // theD.style.color = 'red';
            multiSelectItems.items[theLocalId - 1].bodyEl.dom.style.color = 'red';
            multiSelectItems.items[theLocalId - 1].bodyEl.dom.style.fontWeight = 'bold';
            multiSelectItems.items[theLocalId - 1].bodyEl.dom.style.fontStyle = 'italic';
        }
        this.down('#' + theId + '-cbgMultiSelectList').setDisabled(true);
        var idMultiSelectList = theId + '-cbgMultiSelectList';
        var theidMultiSelectListDOM = Ext.getDom(idMultiSelectList);
        theidMultiSelectListDOM.style.opacity = .7;
    },

    setFilterValues: function (theFiltersSelectedObject) {
        var multiSelectItems = this.theMultiSelectItems;
        this.filtersSelectedId = theFiltersSelectedObject.id;
        for (var k = 0; k < multiSelectItems.items.length; k++) {
            var justTheIds = [];
            for (var l = 0; l < theFiltersSelectedObject.multiSelectFilterValuesSelected.length; l++) {
                justTheIds.push(theFiltersSelectedObject.multiSelectFilterValuesSelected[l].filterValueId);
            }

            var i = -1;
            var obj = multiSelectItems.items[k].FieldId;
            for (var j = 0; j < justTheIds.length; j++) {
                if (justTheIds[j] == obj) {
                    i = j;
                }
            }
            //var i = justTheIds.indexOf(k + 1) //indexOf not implemented in IE

            if (i != -1) {
                multiSelectItems.items[k].setValue(true);
            }
        }
    },

    clearFilterValues: function () {
        var multiSelectItems = this.theMultiSelectItems;
        for (var k = 0; k < multiSelectItems.items.length; k++) {
            multiSelectItems.items[k].setValue(false);
            try {
                multiSelectItems.items[k].bodyEl.dom.style.color = 'black';
                multiSelectItems.items[k].bodyEl.dom.style.fontWeight = 'normal';
                multiSelectItems.items[k].bodyEl.dom.style.fontStyle = 'normal';
            }
            catch (err) { } 
        }
    },

    getFilterValuesObject: function (parmId) {
        var theObject = {};
        var multiSelectItems = this.theMultiSelectItems;
        var empty = true;
        for (var k = 0; k < multiSelectItems.items.length; k++) {
            if (multiSelectItems.items[k].getValue() === true) {
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
        theObject.singleSelectFilterValueSelectedId = null;
        theObject.singleSelectFilterValueSelectedName = null;
        if (multiSelectItems.items.length === 0) {
            theObject.multiSelectFilterValuesSelected = null;
        }
        else {
            theObject.multiSelectFilterValuesSelected = [];
            var theId = 1;
            for (var k = 0; k < multiSelectItems.items.length; k++) {
                if (multiSelectItems.items[k].getValue() === true) {
                    var theItem = {};
                    var theSelectedItem = k + 1;
                    theItem.id = theId++;
                    theItem.filterValueId = multiSelectItems.items[k].FieldId;
                    theItem.filterValueName = multiSelectItems.items[k].boxLabel;
                    theObject.multiSelectFilterValuesSelected.push(theItem);
                }
            }
            if (theObject.multiSelectFilterValuesSelected.length === 0) {
                theObject.multiSelectFilterValuesSelected = null;
            }
        }
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
                boxLabel: this.filtersAvailableObject.filterValues[i].name
            };
            theGroupItems.push(newItem);
        }
        theGroupItems.sort(com.compareSequence);

        var theId = this.getTheId(this.section, this.filtersAvailableObject.name);
        this.theItems = [
            {
                xtype: 'checkboxgroup',
                id: theId + '-cbgMultiSelectList',
                margin: '0 5 0 0',
                columns: Ext.decode(this.filtersAvailableObject.columns),
                items: theGroupItems
            }
        ];

        this.callParent(arguments);
        this.theMultiSelectItems = this.down('#' + theId + '-cbgMultiSelectList').items;
    }
});
