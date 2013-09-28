StartTest(function (t) {

    t.diag("test - selecting a filter value");
    var grid;
    var inJSON;
    var outJSON;
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 40000);
            //masterLayoutUrl = appFolder + '/data/masterLayout2.json';
            //masterLayoutMethod = 'GET';
        },
        function (next) {
            theItems = document.getElementsByClassName('thumb-wrap');
            t.doubleClick(theItems[0], next);
        },
        function (next) {
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
        { action: 'click', target: '>>[id="btnFiltersOk"]' },
        function (next) {
            var rec = grid.store.getAt(4);
            outJSON = rec.get('SectionFiltersSelected');
            theResult = getResult1();
            t.is(Ext.encode(theResult), Ext.encode(outJSON), 'JSON the same');
        }
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
