function getServerResults() {
    return { "contextId": 97368, "siteRoot": "http://emspeed1.nam.slb.com:/", "reportTitle": "97368 - EMSPEED1.1 Jon Test - Project Request", "fileFormatId": 1, "reportTypeId": 1, "dfxTargetCdpEvent": "Concurrent Team Launch", "pddNextCdpEvent": "Project Request", "reportTypeName": 1, "generateSnapshot": false, "zippedFile": false, "configuration": { "id": 1, "name": "Default Project Configuration", "reportTypeId": 1, "isDefault": false, "contextsSelected": [], "sectionsSelected": [{ "id": 1, "configurationId": 1, "sectionsAvailableId": 24, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 2, "configurationId": 1, "sectionsAvailableId": 25, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 3, "configurationId": 1, "sectionsAvailableId": 19, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 4, "configurationId": 1, "sectionsAvailableId": 3, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 5, "configurationId": 1, "sectionsAvailableId": 5, "enabled": true, "sectionFiltersSelected": [{ "selected": true, "id": 0, "filterTypeId": 1, "filtersAvailableId": 26, "filtersAvailableName": "Stakeholder Priority", "rangeTypeSelectedId": null, "rangeTypeSelectedName": null, "lowerValueSelected": null, "upperValueSelected": null, "singleSelectFilterValueSelectedId": null, "singleSelectFilterValueSelectedName": null, "multiSelectFilterValuesSelected": [{ "id": 1, "filterValueId": 1, "filterValueName": "High" }, { "id": 2, "filterValueId": 2, "filterValueName": "Medium" }, { "id": 3, "filterValueId": 3, "filterValueName": "Low"}] }, { "selected": true, "id": 1, "filterTypeId": 1, "filtersAvailableId": 28, "filtersAvailableName": "Stakeholder Organization", "rangeTypeSelectedId": null, "rangeTypeSelectedName": null, "lowerValueSelected": null, "upperValueSelected": null, "singleSelectFilterValueSelectedId": null, "singleSelectFilterValueSelectedName": null, "multiSelectFilterValuesSelected": [{ "id": 1, "filterValueId": 1, "filterValueName": "Customer" }, { "id": 2, "filterValueId": 2, "filterValueName": "Segment" }, { "id": 3, "filterValueId": 3, "filterValueName": "Operations" }, { "id": 4, "filterValueId": 4, "filterValueName": "Research" }, { "id": 5, "filterValueId": 5, "filterValueName": "Engineering" }, { "id": 6, "filterValueId": 6, "filterValueName": "Manufacturing" }, { "id": 7, "filterValueId": 7, "filterValueName": "Sustaining Supply Chain" }, { "id": 8, "filterValueId": 8, "filterValueName": "Quality" }, { "id": 9, "filterValueId": 9, "filterValueName": "Reliability"}]}], "sectionSortGroupsSelected": [] }, { "id": 6, "configurationId": 1, "sectionsAvailableId": 8, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 7, "configurationId": 1, "sectionsAvailableId": 23, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 8, "configurationId": 1, "sectionsAvailableId": 12, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 9, "configurationId": 1, "sectionsAvailableId": 11, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 10, "configurationId": 1, "sectionsAvailableId": 10, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 11, "configurationId": 1, "sectionsAvailableId": 9, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 12, "configurationId": 1, "sectionsAvailableId": 21, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 13, "configurationId": 1, "sectionsAvailableId": 20, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 14, "configurationId": 1, "sectionsAvailableId": 7, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 15, "configurationId": 1, "sectionsAvailableId": 4, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 16, "configurationId": 1, "sectionsAvailableId": 6, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 17, "configurationId": 1, "sectionsAvailableId": 1, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 18, "configurationId": 1, "sectionsAvailableId": 17, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 19, "configurationId": 1, "sectionsAvailableId": 18, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 20, "configurationId": 1, "sectionsAvailableId": 22, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 21, "configurationId": 1, "sectionsAvailableId": 14, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 22, "configurationId": 1, "sectionsAvailableId": 15, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 23, "configurationId": 1, "sectionsAvailableId": 13, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 24, "configurationId": 1, "sectionsAvailableId": 16, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": []}], "globalFiltersSelected": [] }, "configurationId": 0 } 
}




StartTest(function (t) {

    t.diag("Test - Selecting all filters for the Opportunity Analysis Section Name");
    var grid;
    reporting.enableGenerateReport = false;
    t.chain(

        function (next) {
            Ext.get('menureportingBasePanel').dom.click();
            t.waitForSelector('.thumb-wrap', next, this, 40000);
        },
        function (next) {
            theItems = document.getElementsByClassName('thumb-wrap');
            t.doubleClick(theItems[0], next);
        },
        function (next) {
            t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
        },

        function (next) {
            if (document.getElementById('btnReportSectionsAllClear-btnInnerEl').innerHTML = 'all') {
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
            }
            else {
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
                t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
            }
        },
         function (next) {
             t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
         },
        function (next) {
            var grid = Ext.getCmp('grdReportSections');
            var secNameArray = new Array();
            secNameArray[0] = Ext.encode(grid.store.getAt(0).get('name')).toString().replace(/"/g, '');
            secNameArray[1] = Ext.encode(grid.store.getAt(1).get('name')).toString().replace(/"/g, '');
            secNameArray[2] = Ext.encode(grid.store.getAt(2).get('name')).toString().replace(/"/g, '');
            secNameArray[3] = Ext.encode(grid.store.getAt(3).get('name')).toString().replace(/"/g, '');
            secNameArray[4] = Ext.encode(grid.store.getAt(4).get('name')).toString().replace(/"/g, '');
            secNameArray[5] = Ext.encode(grid.store.getAt(5).get('name')).toString().replace(/"/g, '');
            secNameArray[6] = Ext.encode(grid.store.getAt(6).get('name')).toString().replace(/"/g, '');
            secNameArray[7] = Ext.encode(grid.store.getAt(7).get('name')).toString().replace(/"/g, '');
            secNameArray[8] = Ext.encode(grid.store.getAt(8).get('name')).toString().replace(/"/g, '');
            secNameArray[9] = Ext.encode(grid.store.getAt(9).get('name')).toString().replace(/"/g, '');
            secNameArray[10] = Ext.encode(grid.store.getAt(10).get('name')).toString().replace(/"/g, '');
            secNameArray[11] = Ext.encode(grid.store.getAt(11).get('name')).toString().replace(/"/g, '');
            secNameArray[12] = Ext.encode(grid.store.getAt(12).get('name')).toString().replace(/"/g, '');
            secNameArray[13] = Ext.encode(grid.store.getAt(13).get('name')).toString().replace(/"/g, '');
            secNameArray[14] = Ext.encode(grid.store.getAt(14).get('name')).toString().replace(/"/g, '');
            secNameArray[15] = Ext.encode(grid.store.getAt(15).get('name')).toString().replace(/"/g, '');
            secNameArray[16] = Ext.encode(grid.store.getAt(16).get('name')).toString().replace(/"/g, '');
            secNameArray[17] = Ext.encode(grid.store.getAt(17).get('name')).toString().replace(/"/g, '');
            secNameArray[18] = Ext.encode(grid.store.getAt(18).get('name')).toString().replace(/"/g, '');
            secNameArray[19] = Ext.encode(grid.store.getAt(19).get('name')).toString().replace(/"/g, '');
            secNameArray[20] = Ext.encode(grid.store.getAt(20).get('name')).toString().replace(/"/g, '');
            secNameArray[21] = Ext.encode(grid.store.getAt(21).get('name')).toString().replace(/"/g, '');
            secNameArray[22] = Ext.encode(grid.store.getAt(22).get('name')).toString().replace(/"/g, '');
            secNameArray[23] = Ext.encode(grid.store.getAt(23).get('name')).toString().replace(/"/g, '');
            
            var pos = secNameArray.indexOf('Opportunity Analysis');

            var cbx = t.getCell(grid, pos, 0);
            var filtersClk = t.getCell(grid, pos, 4);
            var d = grid.store.getAt(pos).get('enabled');
            if (d == true) {
                t.click(filtersClk, next);
            }
            else {
                t.click(cbx, next);
                t.click(filtersClk, next);
            }
        },
         function (next) {
             t.waitForComponentQuery('reportingFilters', next, this, 40000);
         },
        function (next) {
           

            t.chainClick(Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Customer'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Research'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Sustaining_Supply_Chain'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Segment'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Engineering'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Quality'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Operations'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Manufacturing'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Organization-Reliability'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Priority-High'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Priority-Medium'),
                         Ext.getCmp('Opportunity_Analysis-Stakeholder_Priority-Low'), next);
        },

        function (next) {
            t.click(Ext.getCmp('btnFiltersOk'), next);
        },
         function (next) {
             t.click(Ext.getCmp('btnGenerateReport'), next);
         },

         function (next) {
             t.click(Ext.getCmp('btnReportConfirmClose'));
             t.diag('Generating Report');
             var a = Ext.encode(reporting.reportGenerationObject);
             console.log(a);
             t.isDeeply(reporting.reportGenerationObject, getServerResults(), 'Comparing JSON Objects');

         }
    )
})
 
