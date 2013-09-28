function getServerResults() {
    return { "contextId": 97368, "siteRoot": "http://emspeed1.nam.slb.com:/", "reportTitle": "97368 - Project 2 - Project Request", "fileFormatId": 1, "reportTypeId": 1, "reportTypeName": "CDP Report", "generateSnapshot": false, "zippedFile": false, "configuration": { "id": 1, "name": "Default Configuration", "reportTypeId": 1, "isDefault": false, "globalFiltersSelected": [], "sectionsSelected": [{ "id": 1, "sectionsAvailableId": 24, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 2, "sectionsAvailableId": 25, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 3, "sectionsAvailableId": 19, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 4, "sectionsAvailableId": 3, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 5, "sectionsAvailableId": 5, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 6, "sectionsAvailableId": 8, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 7, "sectionsAvailableId": 23, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 8, "sectionsAvailableId": 12, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 9, "sectionsAvailableId": 11, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 10, "sectionsAvailableId": 10, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [{ "id": 1, "sortGroupsAvailableId": 29, "sortGroupsAvailableName": "Detail Group", "sequence": 29, "sortGroupFieldsSelected": [{ "id": 1, "sortGroupFieldsAvailableId": 134, "sortGroupFieldsAvailableName": "Due By CDP Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 1 }, { "id": 2, "sortGroupFieldsAvailableId": 133, "sortGroupFieldsAvailableName": "Due By CDP Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 2 }, { "id": 3, "sortGroupFieldsAvailableId": 132, "sortGroupFieldsAvailableName": "Action Group", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 3 }, { "id": 4, "sortGroupFieldsAvailableId": 131, "sortGroupFieldsAvailableName": "Max Risk Score", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 4 }, { "id": 5, "sortGroupFieldsAvailableId": 130, "sortGroupFieldsAvailableName": "Action Status Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 5 }, { "id": 6, "sortGroupFieldsAvailableId": 129, "sortGroupFieldsAvailableName": "Action Status Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 6 }, { "id": 7, "sortGroupFieldsAvailableId": 128, "sortGroupFieldsAvailableName": "Action Type Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 7 }, { "id": 8, "sortGroupFieldsAvailableId": 127, "sortGroupFieldsAvailableName": "Action Type Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 8 }, { "id": 9, "sortGroupFieldsAvailableId": 126, "sortGroupFieldsAvailableName": "Action Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 9 }, { "id": 10, "sortGroupFieldsAvailableId": 125, "sortGroupFieldsAvailableName": "Action Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 10}]}] }, { "id": 11, "sectionsAvailableId": 9, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 12, "sectionsAvailableId": 21, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 13, "sectionsAvailableId": 20, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 14, "sectionsAvailableId": 7, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 15, "sectionsAvailableId": 4, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 16, "sectionsAvailableId": 6, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 17, "sectionsAvailableId": 1, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 18, "sectionsAvailableId": 17, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 19, "sectionsAvailableId": 18, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 20, "sectionsAvailableId": 22, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 21, "sectionsAvailableId": 14, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 22, "sectionsAvailableId": 15, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 23, "sectionsAvailableId": 13, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 24, "sectionsAvailableId": 16, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": []}] }, "configurationId": 0 } 
}

StartTest(function (t) {

    t.diag("Test - Selecting all sorts for the DFMEA Recommendations Section Name");
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

            var pos = secNameArray.indexOf('DFMEA Recommendations');

            var cbx = t.getCell(grid, pos, 0);
            var filtersClk = t.getCell(grid, pos, 3);
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
            t.waitForComponentQuery('reportingSorts', next, this, 40000);

        },
        function (next) {
            t.chainClick(Ext.getCmp('DFMEA_Recommendations-Detail_Group-Due_By_CDP_Number-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Due_By_CDP_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Group-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Max_Risk_Score-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Status_Number-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Status_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Type_Number-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Type_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Number-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Name-cbxSortGroupFieldEnabled'), next)
        },
        function (next) {
            //Detail Group
            t.diag('Testing sorts for Detail Group');
            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - 1st Item');
            var arrowUp_dueByCdp_number = Ext.getCmp('DFMEA_Recommendations-Detail_Group-Due_By_CDP_Number-btnSortGroupFieldUp');
            var arrowDown_dueByCdp_number = Ext.getCmp('DFMEA_Recommendations-Detail_Group-Due_By_CDP_Number-btnSortGroupFieldDown');
            if (arrowDown_dueByCdp_number.disabled == false && arrowUp_dueByCdp_number.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - First item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL - First item does not have proper arrows enabled and disabled');
            }

            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - Last Item');
            var arrowUp_action_name = Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Name-btnSortGroupFieldUp');
            var arrowDown_action_name = Ext.getCmp('DFMEA_Recommendations-Detail_Group-Action_Name-btnSortGroupFieldDown');
            if (arrowUp_action_name.disabled == false && arrowDown_action_name.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - Last item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL- Last item does not have proper arrows enabled and disabled');
            }

            t.click(Ext.getCmp('btnSortsOk'), next);
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

