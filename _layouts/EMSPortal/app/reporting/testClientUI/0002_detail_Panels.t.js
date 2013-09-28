function getResults() {
    return [
        { "xtype": "reportingManagerDetailPanel" }, { "xtype": "reportingCdpForPddDetailPanel" }, { "xtype": "reportingRawDetailPanel" }, { "xtype": "reportingCdpDetailPanel" }
    ]
}

StartTest(function (t) {
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 80000);

            if (document.getElementById("theErrorMessage") != null) {
                if (document.getElementById("theErrorMessage").innerHTML.trim() != '') {
                console.log('[FAIL]Start Test - Wait For Selector Error Message: ' + document.getElementById("theErrorMessage").innerHTML);
           
                  }

            }
        },
        function (next) {
            t.isDeeply(reporting.theDetailPanels, getResults(), 'Detail Panels: ' + 'compare data to expected results')
        }
    )

})
