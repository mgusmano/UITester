function getResults() {
    return [{
        "selected": true,
        "id": 3,
        "filterTypeId": 1,
        "filtersAvailableId": 34,
        "filtersAvailableName": "Prioritization",
        "rangeTypeSelectedId": null,
        "rangeTypeSelectedName": null,
        "lowerValueSelected": null,
        "upperValueSelected": null,
        "singleSelectFilterValueSelectedId": null,
        "singleSelectFilterValueSelectedName": null,
        "multiSelectFilterValuesSelected": [{
            "id": 1,
            "filterValueId": 1,
            "filterValueName": "Key Differentiators"
        },{
            "id": 2,
            "filterValueId": 2,
            "filterValueName": "Must Have"
        }]
    },{
        "selected": true,
        "id": 1,
        "filterTypeId": 4,
        "filtersAvailableId": 35,
        "filtersAvailableName": "Date",
        "rangeTypeSelectedId": 4,
        "rangeTypeSelectedName": "Greater Than or Equal To",
        "lowerValueSelected": "9/20/2012",
        "upperValueSelected": null,
        "singleSelectFilterValueSelectedId": null,
        "multiSelectFilterValuesSelected": null
    },{
        "selected": true,
        "id": 2,
        "filterTypeId": 1,
        "filtersAvailableId": 36,
        "filtersAvailableName": "Organization",
        "rangeTypeSelectedId": null,
        "rangeTypeSelectedName": null,
        "lowerValueSelected": null,
        "upperValueSelected": null,
        "singleSelectFilterValueSelectedId": null,
        "singleSelectFilterValueSelectedName": null,
        "multiSelectFilterValuesSelected": [{
            "id": 1,
            "filterValueId": 1,
            "filterValueName": "Customer"
        },{
            "id": 2,
            "filterValueId": 2,
            "filterValueName": "Segment"
        }]
    }
]
}


StartTest(function (t) {

    t.diag("Test - Setting Filters for Opportunity Analysis");
    var grid;
    t.chain(

        function (next) {
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

            var grid = Ext.getCmp('grdReportSections');
            var filtersClk = t.getCell(grid, 4, 4);
            t.click(filtersClk, next);
        },
        { waitFor: 'componentQuery', args: 'reportingFilters' },
    //        function (next) {
    //            t.click(Ext.getCmp('checkboxfield-1307'), next);
    //        },
function (next) {
//     if (performance() == true && document.getElementById('checkboxfield-1157-bodyEl').innerHTML.style.color == 'red' ) {
//            t.isDeeply(true, true, 'true')
//            }
//            else {
//            t.isDeeply(true, true, 'false')
//        }
       t.isDeeply(true, true, document.getElementById('checkboxfield-1157-bodyEl').innerHTML)
       t.click(Ext.getCmp('btnFiltersOk'), next);
        },
        function (next) {
            var grid = Ext.getCmp('grdReportSections');
            var filtersClk = t.getCell(grid, 4, 4);
            t.moveCursorTo(filtersClk, next, 40000);
        },
        function (next) {
       
        
            var grid = Ext.getCmp('grdReportSections');

            var filterMessage = grid.store.getAt(4).get('sectionFiltersSelected');
            t.diag('Test - Checking if Selected Filters Match the Expected Results...')
            t.isDeeply(filterMessage, getResults(), 'Success - JSON Strings Match!');



        }

    )
})
