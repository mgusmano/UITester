Ext.define('EMSPEED.reporting.controller.reportingSortsController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.reporting.view.reportingSorts',
        'EMSPEED.reporting.view.reportingSortGroup',
        'EMSPEED.reporting.view.reportingSortGroupField'
    ],

    //    refs: [
    //        {
    //        selector: 'button[action=submit_settings]',
    //        ref: 'thecheckbox'
    //        },
    //        {
    //        //selector: 'reportingSortGroupField > checkbox[cls=x-form-item]',
    //        selector: 'checkbox',
    //        ref: 'thecheckbox'
    //        }
    //    ],

    init: function () {
        this.control({
            '#reportingSorts': { activate: this.reportingSorts_activate },
            '#btnSortsOk': { click: this.btnSortsOk_click },
            '#btnSortsCancel': { click: this.btnSortsCancel_click }

            //'thecheckbox': { change: this.thecheckbox_change },

            //'#cbxSortGroupFieldEnabled': { change: this.cbxSortGroupFieldEnabled_change },
            //'#btnSortGroupFieldUp': { click: this.btnSortGroupFieldUp_click },
            //'#btnSortGroupFieldDown': { click: this.btnSortGroupFieldDown_click }
        });
    },

    reportingSorts_activate: function (panel, e, eOpts) {
        var theContainer = panel.down('#reportingSortGroupsContainer');
        this.setSorts(theContainer, panel.sectionSortGroupsSelected, panel.sectionSortGroupsAvailable);

        Ext.getCmp('reportingBasePanel').setLoading(false);

    },

    btnSortsOk_click: function (object, e, eOpts) {
        var theParent = object.up('window');
        var sectionSortGroupsSelected = this.getSortGroupValues(theParent.down('#reportingSortGroupsContainer'));

        var a = Ext.encode(sectionSortGroupsSelected);
        var b = Ext.encode(theParent.sectionSortGroupsSelected);
        if (a != b) {
            theParent.rec.set('sectionSortGroupsSelected', sectionSortGroupsSelected);
            reporting.setChangedMessage();
        }
        else {
            //            alert('same');
        }

        reporting.drawSummary(theParent.grid.store.data.items);

        Ext.getCmp('reportingBasePanel').setLoading(false);
        theParent.close();
    },

    btnSortsCancel_click: function (object, e, eOpts) {
        var theParent = object.up('window');
        Ext.getCmp('reportingBasePanel').setLoading(false);
        theParent.close();
    },

    getTheId: function (control) {
        var theId = control.sectionName + '-' + control.groupName + '-' + control.sortGroupFieldsAvailableObject.name;
        theId = theId.split(' ').join('_');
        theId = theId.split('%').join('_');
        theId = theId.split('/').join('_');
        return theId;
    },

    setSorts: function (thePanel, theSortsGroupsSelected, theSortGroupsAvailable) {
        this.shouldIgnoreChangeEvents = true;

        this.clearSorts(thePanel, theSortGroupsAvailable);

        var theSortGroupControls = thePanel.items.items;
        for (var i = 0; i < theSortGroupControls.length; i++) {
            var index = -1;
            for (var j = 0; j < theSortsGroupsSelected.length; j++) {
                if (theSortsGroupsSelected[j].sortGroupsAvailableId === theSortGroupControls[i].sortGroupsAvailableId) {
                    index = j;
                }
            }
            if (index > -1) {
                var sortGroupFieldsSelected = theSortsGroupsSelected[index].sortGroupFieldsSelected;

                var theSortGroupFieldControlsContainer = theSortGroupControls[i].down('#reportingSortGroupFieldsContainer')
                var theArray = new Array(sortGroupFieldsSelected.length);
                theSortGroupFieldControls = theSortGroupFieldControlsContainer.items.items;
                for (var k = 0; k < theSortGroupFieldControls.length; k++) {
                    var index2 = -1;
                    for (var l = 0; l < sortGroupFieldsSelected.length; l++) {
                        if (sortGroupFieldsSelected[l].sortGroupFieldsAvailableId === theSortGroupFieldControls[k].sortGroupFieldsAvailableId) {
                            index2 = l;
                        }
                    }
                    if (index2 > -1) {
                        theSortGroupFieldControls[k].down('#' + this.getTheId(theSortGroupFieldControls[k]) + '-cbxSortGroupFieldAscDesc').setValue(sortGroupFieldsSelected[index2].arrangementTypeSelectedId);
                        var theIndex = sortGroupFieldsSelected[index2].sequence - 1;
                        theArray[theIndex] = k;
                    }
                }

                for (var m = 0; m < theArray.length; m++) {
                    var theIndex = theArray[m];
                    if (theIndex <= m) {
                        var theDiff = m - theIndex;
                        theIndex = theIndex + theDiff;
                    }
                    theSortGroupFieldControls[theIndex].down('#' + this.getTheId(theSortGroupFieldControls[theIndex]) + '-cbxSortGroupFieldEnabled').setValue(true);
                }

            }
        }
        this.shouldIgnoreChangeEvents = false;
    },

    getSortGroupValues: function (theSortGroupContainer) {
        var theSortGroupsItems = theSortGroupContainer.items.items;
        var sortsGroupsSelected = [];
        var addTheSortGroupObject = false;
        for (var i = 0; i < theSortGroupsItems.length; i++) {
            var theSortGroupObject = {};
            theSortGroupObject.id = i + 1;
            theSortGroupObject.sortGroupsAvailableId = theSortGroupsItems[i].sortGroupsAvailableId;
            theSortGroupObject.sortGroupsAvailableName = theSortGroupsItems[i].sortGroupsAvailableObject.name;

            theSortGroupObject.sequence = theSortGroupsItems[i].sequence;
            theSortGroupObject.sortGroupFieldsSelected = [];

            var theSortGroupFieldControlsItems = theSortGroupsItems[i].down('#reportingSortGroupFieldsContainer').items.items;
            for (var j = 0; j < theSortGroupFieldControlsItems.length; j++) {
                var theSortGroupFieldObject = {};

                var isEnabled = theSortGroupFieldControlsItems[j].down('#' + this.getTheId(theSortGroupFieldControlsItems[j]) + '-cbxSortGroupFieldEnabled').getValue();
                if (isEnabled === true) {
                    addTheSortGroupObject = true;

                    theSortGroupFieldObject.id = j + 1;
                    theSortGroupFieldObject.sortGroupFieldsAvailableId = theSortGroupFieldControlsItems[j].sortGroupFieldsAvailableId;
                    theSortGroupFieldObject.sortGroupFieldsAvailableName = theSortGroupFieldControlsItems[j].sortGroupFieldsAvailableObject.name;

                    theSortGroupFieldObject.arrangementTypeSelectedName = theSortGroupFieldControlsItems[j].down('#' + this.getTheId(theSortGroupFieldControlsItems[j]) + '-cbxSortGroupFieldAscDesc').getRawValue();
                    theSortGroupFieldObject.arrangementTypeSelectedId = theSortGroupFieldControlsItems[j].down('#' + this.getTheId(theSortGroupFieldControlsItems[j]) + '-cbxSortGroupFieldAscDesc').getValue(); ;
                    theSortGroupFieldObject.sequence = j + 1;

                    theSortGroupObject.sortGroupFieldsSelected.push(theSortGroupFieldObject);
                }
                //var theName = theSortGroupFieldControlsItems[j].down('#txtSortGroupFieldName').text;
                //alert(theName + ' - ' + isEnabled);
            }
            if (addTheSortGroupObject === true) {
                sortsGroupsSelected.push(theSortGroupObject);
            }
        }
        return sortsGroupsSelected;
    },

    clearSorts: function (thePanel, sortsAvailable) {
        var items = thePanel.items.items;
        for (var i = 0; i < items.length; i++) {
            //clear values here...
        }
    }

});
