StartTest(function (t) {

    t.diag("test - Report Title Matches Selected CDP");
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
            var a = Ext.getCmp('cbxCDP');
            t.click(a, next);

        },
        function (next) {
            for (i = 0; i < Ext.getCmp('cbxCDP').getPicker().getNodes().length; i++) {
               
                var cdp = Ext.getCmp('cbxCDP').getPicker().getNode(i).innerHTML;
                var cdpString = cdp.toString();

                t.click(Ext.getCmp('cbxCDP').getPicker().getNode(i));
                t.click(Ext.getCmp('btnReportSectionsApply'));

                t.diag(cdpString + ' - Recommended CDP');
                for (j = 0; j < 21; j++) {
                    var store = Ext.getCmp('grdReportSections').getStore();
                    grid = Ext.getCmp('grdReportSections');
                    var d = t.getCell(grid, 1, j);
                    var row = store.getAt(j).get('cdp');
                    var sectionName = Ext.encode(grid.store.getAt(j).get('name')).toString().replace(/"/g, '');
                    if (row == 'x') {
                        t.isDeeply(true, true, sectionName);
                    }
                    if (grid.store.getAt(j).get('enabled') == true && row == 'x') {
                        t.isDeeply(true, true, sectionName + ' is checked and applied');
                    }
                    else {

                    }

                }

                  

            }
        }
          )
}
          )




