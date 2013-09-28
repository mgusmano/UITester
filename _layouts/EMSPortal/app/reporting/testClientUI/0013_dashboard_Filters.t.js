

function getServerResults() {
    return [
]
}


StartTest(function (t) {

    t.diag("Test - Selecting all filters for the Dashboard Section Name");
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
           
            var pos = secNameArray.indexOf('PMT Dashboard');

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
            if (document.getElementById('messagebox-1001-displayfield').innerHTML == 'No filters are available for the PMT Dashboard section') {
                t.isDeeply(true, true, 'No Filters Available');
            }
            else {
                t.isNot('Message does not display');
            }
        }
    )
})
