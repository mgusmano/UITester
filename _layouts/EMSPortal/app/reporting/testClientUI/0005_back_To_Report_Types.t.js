

StartTest(function (t) {
t.diag("test - Back to Report Types");
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
//START BACK TO REPORT TYPE TEST
        function (next) {
            t.click(Ext.getCmp('btnCdpBack'), next);
        },
    
        function (next) {
            
            t.waitForSelector('.thumb-wrap', next, this, 40000);

            }

        
    )
})
