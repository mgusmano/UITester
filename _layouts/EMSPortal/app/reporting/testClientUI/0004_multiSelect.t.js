StartTest(function (t) {

    t.diag("test - selecting a filter value");
    var grid;
    var inJSON;
    var outJSON;
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 40000);
        },
        function (next) {
            theItems = document.getElementsByClassName('thumb-wrap');
            t.doubleClick(theItems[0], next);
        },
        function (next) {
            if (document.getElementById("theErrorMessage") != null) {
                if (document.getElementById("theErrorMessage").innerHTML.trim() != '') {
                    console.log('[FAIL]Start Test - Wait For Selector Error Message: ' + document.getElementById("theErrorMessage").innerHTML);
                }
                }
                t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
        },
    //        { action: 'click', target: '>>[id="chkCreateSnapshot"]' },
        function (next) {
            //Ext.getCmp('cbxConfigurations').select(1);
            t.click('>>[id="chkCreateSnapshot"]', next);
        },
        function (next) {
            grid = Ext.getCmp('grdReportSections');
            var rec = grid.store.getAt(4);
            inJSON = rec.get('SectionFiltersSelected');
            var d = t.getCell(grid, 4, 4);
            t.click(d, next);
        },
        { waitFor: 'componentQuery', args: 'reportingFilters' },
        function (next) {
            var theItem = document.getElementById('Group-Suspended-inputEl');
            t.click(theItem, next);
        },
        { action: 'click', target: '>>[id="btnFiltersOk"]' }

    )

})
