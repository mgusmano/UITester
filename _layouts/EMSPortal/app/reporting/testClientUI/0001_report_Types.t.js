function getResults() {
    return [{ "id": 1, "name": "Project", "iconFile": "project.png", "detailPanel": "reportingCdpDetailPanel", "summaryPanel": "reportingCdpSummaryPanel", "description": "Provides ad hoc reporting capabilities enabling users to quickly generate a standardized report structure that can be presented at meetings and uploaded into PDD for a CLM CDP deliverable.  A report can incorporate one or more report sections.", "metadata": null }, { "id": 2, "name": "Raw Data Report", "iconFile": "raw_data.png", "detailPanel": "reportingRawDetailPanel", "summaryPanel": "reportingRawSummaryPanel", "description": "Provides a raw data dump of the selected project which enables power users to perform ad-hoc reporting and data analysis by creating their own tables and charts.", "metadata": null }, { "id": 3, "name": "CDP for PDD", "iconFile": "cdpforpdd.png", "detailPanel": "reportingCdpForPddDetailPanel", "summaryPanel": "reportingCdpForPddSummaryPanel", "description": "Provides functionality to quickly generate a status report for CDP Milestone meetings.", "metadata": "2;3;false" }, { "id": 4, "name": "Program", "iconFile": "program.png", "detailPanel": "reportingCdpDetailPanel", "summaryPanel": "reportingCdpSummaryPanel", "description": "Provides ad hoc reporting capabilities enabling users to quickly generate a standardized report structure at a program level that can be presented at meetings and uploaded into PDD for a CLM CDP deliverable.  A report can incorporate one or more report sections.", "metadata": null }, { "id": 5, "name": "Interactive Report", "iconFile": "interactive.png", "detailPanel": "reportingInteractiveDetailPanel", "summaryPanel": "reportingCdpSummaryPanel", "description": "Provides a navigable interface in which to view program reports.", "metadata": null}]

}

StartTest(function (t) {
    //    t.diag("Report Types");
    t.chain(
        function (next) {
            Ext.get('menureportingBasePanel').dom.click();
            t.waitForSelector('.thumb-wrap', next, this, 80000);
            if (document.getElementById("theErrorMessage") != null) {
                if (document.getElementById("theErrorMessage").innerHTML.trim() != '') {
                    console.log('[FAIL]Start Test - Wait For Selector Error Message: ' + document.getElementById("theErrorMessage").innerHTML);

                }
            }

        },

        function (next) {

            t.isDeeply(reporting.theReportTypes, getResults(), 'Report Types: ' + 'compare data to expected results')
            console.log(reporting.theReportTypes);
        }
    )

})
