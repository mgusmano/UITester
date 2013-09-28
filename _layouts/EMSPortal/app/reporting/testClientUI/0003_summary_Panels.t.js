function getResults() {
    return [
    { "xtype": "reportingManagerSummaryPanel" }, { "xtype": "reportingCdpForPddSummaryPanel" }, { "xtype": "reportingRawSummaryPanel" }, { "xtype": "reportingCdpSummaryPanel" }
    ]
}

StartTest(function (t) {
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 80000);
        },
        function (next) {
            t.isDeeply(reporting.theSummaryPanels, getResults(), 'Summary Panels: ' + 'compare data to expected results')
        }
    )
  }
  )
