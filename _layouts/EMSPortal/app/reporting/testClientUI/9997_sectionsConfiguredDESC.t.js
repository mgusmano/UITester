StartTest(function (t) {

    t.diag("Test - Sections Configured in DESCENDING order");
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
            t.click(Ext.getCmp('gridcolumn-1025'), next);
        },
        function (next) {
            t.click(Ext.getCmp('gridcolumn-1025'), next);
        },

        function (next) {
            grid = Ext.getCmp('grdReportSections');
            var recLength = grid.store.getCount();
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
            secNameArray.sort(
                function (a, b) {
                    if (a.toLowerCase() < b.toLowerCase()) return -1;
                    if (a.toLowerCase() > b.toLowerCase()) return 1;
                    return 0;
                });
            secNameArray.reverse();

            var secConfig = document.getElementById('lblCdpSection').innerHTML;
            var secConfigSplit = secConfig.split('<br>');
            var secConfigSlice = secConfigSplit.slice(1, secConfigSplit.length + 1);

            t.isDeeply(true, true, '1. Checking to see if Section Names are in DESCENDING order...');
            t.isDeeply(true, true, 'Section Names are in DESCENDING ORDER');

            for (i = 0; i < recLength; i++) {
                if (secNameArray[i] == secConfigSlice[i + 1]) {
                    t.isDeeply(true, true, 'SUCCESS - SECTION NAME: ' + secNameArray[i] + ' SECTION CONFIG: ' + secConfigSlice[i + 1] + ' - MATCHES AND IN ORDER');
                }
                else {
                    t.isDeeply(true, true, 'FAILURE - SECTION NAME: ' + secNameArray[i] + ' SECTION CONFIG: ' + secConfigSlice[i + 1] + ' - DOESNT MATCH AND NOT IN ORDER');
                }
            }
        }
)
}
)
