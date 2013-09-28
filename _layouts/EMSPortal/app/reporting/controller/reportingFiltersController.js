Ext.define('EMSPEED.reporting.controller.reportingFiltersController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.reporting.view.reportingFilters',
        'EMSPEED.reporting.view.reportingFilterBaseClass',
        'EMSPEED.reporting.view.reportingFilterMultiSelectList',
        'EMSPEED.reporting.view.reportingFilterSingleSelectList',
        'EMSPEED.reporting.view.reportingFilterDate',
        'EMSPEED.reporting.view.reportingFilterDateRange',
        'EMSPEED.reporting.view.reportingFilterNumeric',
        'EMSPEED.reporting.view.reportingFilterNumericRange'
    ],

    init: function () {
        reporting.filters = this;
        reporting.quickTips();

        this.control({
            '#reportingFilters': { activate: this.reportingFilters_activate },
            '#btnFiltersOk': { click: this.btnFiltersOk_click },
            '#btnFiltersCancel': { click: this.btnFiltersCancel_click }
        });
    },

    reportingFilters_activate: function (me, e, eOpts) {
        try {
            if (me.title != undefined) {
                return;
            }
            me.setLoading('Loading...');
            me.rec = me.grid.store.getAt(me.rowIndex);
            var sectionName = me.rec.get('name');

            var filterRowTitleWidth = me.rec.get('filterRowTitleWidth');

            me.setTitle('Edit The ' + sectionName + ' Section Filters');
            me.sectionFiltersAvailable = me.rec.get('sectionFiltersAvailable'); // the total available
            me.sectionFiltersSelected = me.rec.get('sectionFiltersSelected');   // the user selections
            me.filterControls = this.getAllFilterControls('local', me.sectionFiltersAvailable, sectionName, filterRowTitleWidth);

            var theFiltersContainer = me.down('#reportingFiltersContainer');
            theFiltersContainer.add(me.filterControls);

            this.setValuesForAllFilters(theFiltersContainer, me.sectionFiltersSelected, me.sectionFiltersAvailable, sectionName);

            this.checkFiltersForGlobal(theFiltersContainer);

            me.setLoading(false);
            Ext.getCmp('reportingBasePanel').setLoading(false);
        }
        catch (err) {
            me.setLoading(false);
            Ext.getCmp('reportingBasePanel').setLoading(false);
            me.close();
            com.showErrorFromTry2(err);
        }
    },

    btnFiltersOk_click: function (object, e, eOpts) {
        var theParent = object.up('window');
        var sectionFiltersSelected = this.getFilterValues(theParent.down('#reportingFiltersContainer'));
        var a = Ext.encode(sectionFiltersSelected);
        var b = Ext.encode(theParent.sectionFiltersSelected);
        if (a != b) {
            theParent.rec.set('sectionFiltersSelected', sectionFiltersSelected);
        }

        reporting.setChangedMessage();
        reporting.drawSummary(theParent.grid.store.data.items);

        Ext.getCmp('reportingBasePanel').setLoading(false);
        theParent.close();
    },

    btnFiltersCancel_click: function (object, e, eOpts) {
        var theParent = object.up('window');
        Ext.getCmp('reportingBasePanel').setLoading(false);
        theParent.close();
    },

    getAllFilterControls: function (localOrGlobal, filtersAvailable, theSection, filterRowTitleWidth) {
        var DetailPanel = Ext.getCmp('reportingCdpDetailPanel');
        var theFilterControls = [];
        var filterWidget = null;
        var filtersAvailableSorted = filtersAvailable.sort(com.compareSequence);
//        for (var r = filtersAvailableSorted.length - 1; r >= 0; r--) {
        for (var r = 0;  r < filtersAvailableSorted.length; r++) {
            if (filtersAvailableSorted[r].enabled === true && filtersAvailableSorted[r].visible != false) {
                switch (filtersAvailableSorted[r].filterTypeId) {
                    case 1: //'Multi-Select List'
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterMultiSelectList", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    case 2: //'Single-Select List'    
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterSingleSelectList", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    case 3: //'Date'    
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterDate", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    case 4: //'Date Range'    
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterDateRange", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, rangeTypes: DetailPanel.masterLayout.rangeTypes, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    case 5: //'Numeric'    
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterNumeric", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    case 6: //'Numeric Range'    
                        filterWidget = Ext.create("EMSPEED.reporting.view.reportingFilterNumericRange", { localOrGlobal: localOrGlobal, filtersAvailableObject: filtersAvailableSorted[r], section: theSection, rangeTypes: DetailPanel.masterLayout.rangeTypes, filterRowTitleWidth: filterRowTitleWidth });
                        break;
                    default:
                        break;
                }
                //theFilterControls.splice(1, 0, filterWidget);
                theFilterControls.push(filterWidget);
            }
            else {
                //alert(filtersAvailable[r].name + '-' + filtersAvailable[r].enabled + '-' + filtersAvailable[r].visible);
            }
        }
        //theFilterControls.sort(com.compareSequence);
        return theFilterControls;
    },

    setValuesForAllFilters: function (theFilterContainer, theFiltersSelected) {
        this.shouldIgnoreChangeEvents = true;
        this.clearFilters(theFilterContainer);

        var theFilterControls = theFilterContainer.items.items;
        for (var i = 0; i < theFilterControls.length; i++) {
            var index = -1;
            for (var j = 0; j < theFiltersSelected.length; j++) {
                if (theFiltersSelected[j].filtersAvailableId === theFilterControls[i].filtersAvailableId) {
                    index = j;
                }
            }
            if (index > -1) {
                theFilterControls[i].setFilterValues(theFiltersSelected[index]);
            }
        }
        this.shouldIgnoreChangeEvents = false;
    },

    checkFiltersForGlobal: function (theFiltersContainer) {
        var globalFilters = Ext.getCmp('globalFiltersParentContainer').items.items;
        var localFilters = theFiltersContainer.items.items;
        for (var i = 0; i < localFilters.length; i++) {
            for (var j = 0; j < globalFilters.length; j++) {
                if (localFilters[i].globalFilterId === globalFilters[j].filtersAvailableId) {
                    //alert('the same ' + globalFilters[j].filtersAvailableName + ' and ' + localFilters[i].filtersAvailableName);
                    var theGlobalFilterObject = globalFilters[j].getFilterValuesObject(j);
                    if (theGlobalFilterObject.selected === true) {
                        localFilters[i].setDisabledForGlobal(globalFilters[j]);
                    }
                }
            }
        }
    },

    getFilterValues: function (theFiltersContainer) {
        var theFiltersItems = theFiltersContainer.items.items;
        var filtersSelected = [];
        for (var i = 0; i < theFiltersItems.length; i++) {
            var theObject = theFiltersItems[i].getFilterValuesObject(i);
            if (theObject.selected === true) {
                filtersSelected.push(theObject);
            }
        }
        return filtersSelected;
    },

    clearFilters: function (theFilterContainer) {
        var theFilterControls = theFilterContainer.items.items;
        for (var i = 0; i < theFilterControls.length; i++) {
            theFilterControls[i].clearFilterValues();
        }
    }

});
