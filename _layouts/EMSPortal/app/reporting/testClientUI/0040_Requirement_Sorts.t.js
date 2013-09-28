function getServerResults() {
    return { "contextId": 97368, "siteRoot": "http://emspeed1.nam.slb.com:/", "reportTitle": "97368 - Project 2 - Project Request", "fileFormatId": 1, "reportTypeId": 1, "reportTypeName": "CDP Report", "generateSnapshot": false, "zippedFile": false, "configuration": { "id": 1, "name": "Default Configuration", "reportTypeId": 1, "isDefault": false, "globalFiltersSelected": [], "sectionsSelected": [{ "id": 1, "sectionsAvailableId": 24, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 2, "sectionsAvailableId": 25, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 3, "sectionsAvailableId": 19, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 4, "sectionsAvailableId": 3, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 5, "sectionsAvailableId": 5, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 6, "sectionsAvailableId": 8, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [{ "id": 1, "sortGroupsAvailableId": 25, "sortGroupsAvailableName": "Requirement Group", "sequence": 25, "sortGroupFieldsSelected": [{ "id": 1, "sortGroupFieldsAvailableId": 109, "sortGroupFieldsAvailableName": "Maturity", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 1 }, { "id": 2, "sortGroupFieldsAvailableId": 108, "sortGroupFieldsAvailableName": "Requirement Type Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 2 }, { "id": 3, "sortGroupFieldsAvailableId": 107, "sortGroupFieldsAvailableName": "Requirement Type Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 3 }, { "id": 4, "sortGroupFieldsAvailableId": 106, "sortGroupFieldsAvailableName": "Requirement ID", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 4 }, { "id": 5, "sortGroupFieldsAvailableId": 105, "sortGroupFieldsAvailableName": "Requirement Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 5 }, { "id": 6, "sortGroupFieldsAvailableId": 104, "sortGroupFieldsAvailableName": "Requirement Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 6 }, { "id": 7, "sortGroupFieldsAvailableId": 103, "sortGroupFieldsAvailableName": "Prioritization Type", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 7}] }, { "id": 2, "sortGroupsAvailableId": 26, "sortGroupsAvailableName": "Validation Test Group", "sequence": 26, "sortGroupFieldsSelected": [{ "id": 1, "sortGroupFieldsAvailableId": 111, "sortGroupFieldsAvailableName": "Validation Test Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 1 }, { "id": 2, "sortGroupFieldsAvailableId": 110, "sortGroupFieldsAvailableName": "Validation Test Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 2}] }, { "id": 3, "sortGroupsAvailableId": 27, "sortGroupsAvailableName": "References Group", "sequence": 27, "sortGroupFieldsSelected": [{ "id": 1, "sortGroupFieldsAvailableId": 114, "sortGroupFieldsAvailableName": "External References Number", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 1 }, { "id": 2, "sortGroupFieldsAvailableId": 113, "sortGroupFieldsAvailableName": "External References Name", "arrangementTypeSelectedName": "ascending", "arrangementTypeSelectedId": 1, "sequence": 2}]}] }, { "id": 7, "sectionsAvailableId": 23, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 8, "sectionsAvailableId": 12, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 9, "sectionsAvailableId": 11, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 10, "sectionsAvailableId": 10, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 11, "sectionsAvailableId": 9, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 12, "sectionsAvailableId": 21, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 13, "sectionsAvailableId": 20, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 14, "sectionsAvailableId": 7, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 15, "sectionsAvailableId": 4, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 16, "sectionsAvailableId": 6, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 17, "sectionsAvailableId": 1, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 18, "sectionsAvailableId": 17, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 19, "sectionsAvailableId": 18, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 20, "sectionsAvailableId": 22, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 21, "sectionsAvailableId": 14, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 22, "sectionsAvailableId": 15, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 23, "sectionsAvailableId": 13, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": [] }, { "id": 24, "sectionsAvailableId": 16, "enabled": true, "sectionFiltersSelected": [], "sectionSortGroupsSelected": []}] }, "configurationId": 0 } 
}

StartTest(function (t) {

    t.diag("Test - Selecting all sorts for the Requirements Section Name");
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
           
            var pos = secNameArray.indexOf('Requirements');

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

            t.chainClick(Ext.getCmp('Requirements-References_Group-External_References_Number-cbxSortGroupFieldEnabled'),
						 Ext.getCmp('Requirements-References_Group-External_References_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Number-cbxSortGroupFieldEnabled'),
						 Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Requirement_Group-Maturity-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Requirement_Group-Requirement_Type_Number-cbxSortGroupFieldEnabled'),
						 Ext.getCmp('Requirements-Requirement_Group-Requirement_Type_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Requirement_Group-Requirement_ID-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Requirement_Group-Requirement_Number-cbxSortGroupFieldEnabled'),
						 Ext.getCmp('Requirements-Requirement_Group-Requirement_Name-cbxSortGroupFieldEnabled'),
                         Ext.getCmp('Requirements-Requirement_Group-Prioritization_Type-cbxSortGroupFieldEnabled'), next)
        },
        function (next) {
            var arrowUp_maturity = Ext.getCmp('Requirements-Requirement_Group-Maturity-btnSortGroupFieldUp');
            var arrowDown_maturity = Ext.getCmp('Requirements-Requirement_Group-Maturity-btnSortGroupFieldDown');
            var arrowUp_prioritization = Ext.getCmp('Requirements-Requirement_Group-Prioritization_Type-btnSortGroupFieldUp');
            var arrowDown_prioritization = Ext.getCmp('Requirements-Requirement_Group-Prioritization_Type-btnSortGroupFieldDown');


            t.diag('Testing sorts for Requirement Group'); //REQUIREMENT GROUP SORTS
            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - 1st Item');
            if (arrowDown_maturity.disabled == false && arrowUp_maturity.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - First item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL - First item does not have proper arrows enabled and disabled');
            }

            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - Last Item');
            if (arrowUp_prioritization.disabled == false && arrowDown_prioritization.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - Last item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL- Last item does not have proper arrows enabled and disabled');
            }



            t.diag('Testing sorts for Validation Test Group'); //SORTS FOR VALIDATION TEST GROUP
            var arrowUp_validationTest_number = Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Number-btnSortGroupFieldUp');
            var arrowDown_validationTest_number = Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Number-btnSortGroupFieldDown');
            var arrowUp_validationTest_name = Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Name-btnSortGroupFieldUp');
            var arrowDown_validationTest_name = Ext.getCmp('Requirements-Validation_Test_Group-Validation_Test_Name-btnSortGroupFieldDown');
            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - 1st Item');
            if (arrowDown_validationTest_number.disabled == false && arrowUp_validationTest_number.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - First item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL - First item does not have proper arrows enabled and disabled');
            }

            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - Last Item');
            if (arrowUp_validationTest_name.disabled == false && arrowDown_validationTest_name.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - Last item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL- Last item does not have proper arrows enabled and disabled');
            }

            t.diag('Testing sorts for Reference Group'); //Sorts for Reference Group
            var arrowUp_externalReferences_number = Ext.getCmp('Requirements-References_Group-External_References_Number-btnSortGroupFieldUp');
            var arrowDown_externalReferences_number = Ext.getCmp('Requirements-References_Group-External_References_Number-btnSortGroupFieldDown');
            var arrowUp_externalReferences_name = Ext.getCmp('Requirements-References_Group-External_References_Name-btnSortGroupFieldUp');
            var arrowDown_externalReferences_name = Ext.getCmp('Requirements-References_Group-External_References_Name-btnSortGroupFieldDown');

            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - 1st Item');
            if (arrowDown_externalReferences_number.disabled == false && arrowUp_externalReferences_number.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - First item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL - First item does not have proper arrows enabled and disabled');
            }

            t.diag('CHECKING UP AND DOWN BUTTON FUNCTIONALITIES - Last Item');
            if (arrowUp_externalReferences_name.disabled == false && arrowDown_externalReferences_name.disabled == true) {
                t.isDeeply(true, true, 'SUCCESS - Last item has proper arrows enabled and disabled');
            }
            else {
                t.fail('FAIL- Last item does not have proper arrows enabled and disabled');
            }

            t.click(Ext.getCmp('btnSortsOk'), next);
        },

        function (next) {

            t.click(Ext.getCmp('btnGenerateReport'));

            t.click(Ext.getCmp('btnReportConfirmClose'));
            t.diag('Generating Report');
            var a = Ext.encode(reporting.reportGenerationObject);

            console.log(a);

            t.isDeeply(reporting.reportGenerationObject, getServerResults(), 'Comparing JSON Objects');



        }




    )
})
