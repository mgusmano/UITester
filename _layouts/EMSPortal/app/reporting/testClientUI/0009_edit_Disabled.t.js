StartTest(function (t) {

    t.diag("test - Edits Disabled");
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
            t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
        },

        function (next) {
            // var rec = grid.store.getAt(4);
            // inJSON = rec.get('SectionFiltersSelected');
            var grid = Ext.getCmp('grdReportSections');
            var d = t.getCell(grid, 0, 0);

            t.click(d, next);
        },
        function (next) {
            var lblerror = document.getElementById('lblError').innerHTML;
            t.isDeeply(lblerror.toString(), 'You have unsaved changes to the report configuration', 'SUCCESS: Unsaved Changes Dialog Appears');

//            var grid = Ext.getCmp('grdReportSections');
//            var sortsClk = t.getCell(grid, 0, 3);
//            t.click(sortsClk, next);
        }
//        function (next) {
//            var errorbox = document.getElementById('messagebox-1001-displayfield-inputEl').innerHTML;
//            t.isDeeply(errorbox.toString(), 'You must enable section before editing the sorts', 'SUCCESS: Edit Disabled Message Box Appears for Sorts');
//            t.click(Ext.getCmp('button-1005'), next);
//        },
//        function (next) {
//            var grid = Ext.getCmp('grdReportSections');
//            var filtersClk = t.getCell(grid, 0, 4);
//            t.click(filtersClk, next);
//        },
//        function (next) {
//            var errorbox = document.getElementById('messagebox-1001-displayfield-inputEl').innerHTML;
//            t.isDeeply(errorbox.toString(), 'You must enable section before editing the filters', 'SUCCESS: Edit Disabled Message Box Appears for Filters');
//            t.click(Ext.getCmp('button-1005'), next);
//        }


    )


    //t.click('grid => .x-action-col-cell:nth-child(2)', next);
    //t.click(Ext.getCmp('cbxCDP').getPicker().getNode(2), next)
    //t.click('grid => .x-grid-row:nth-child(10)', next);
    //        function (next) {
    //            t.ok(Ext.getCmp('txtCdpReportTitle').getValue(), 'Project 1-Requirement & Concept Review', next);
    //        },
    //        function (next) {
    //            t.click(Ext.getCmp('cbxCDP').el.query('.x-trigger-cell')[0], next);
    //        },


    //{ action : 'doubleClick', target : 'grid => .x-grid-cell:nth-child(5)' }

    //        function (next) {
    //           
    //            t.click(Ext.getCmp('grdReportSections'), 'Project 1-Concurrent Team Launch', next);

    //            t.ok(Ext.getCmp('txtCdpReportTitle').getValue(), 'Project 1-Concurrent Team Launch', next);
    //            t.done();
    //        }


})
