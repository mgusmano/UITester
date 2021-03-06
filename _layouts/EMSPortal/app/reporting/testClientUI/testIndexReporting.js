var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({

    title: 'Reporting',
    viewportHeight: 1000,
    maxThreads: 1,



    preload: [


        '/_layouts/1033/styles/EMSPortal/emspeed-all.css',
        '/ext-4.2.1.883/resources/css/ext-all-emspeed.css',
        '/_layouts/EMSPortal/common/error.js',
        '/ext-4.2.1.883/ext-all-debug.js',
        '/_layouts/EMSPortal/common/com.js',
        '/_layouts/EMSPortal/app/dashboard/view/dashboard.js',
        '/_layouts/EMSPortal/common/knockout/knockout-2.3.0.js',
        '/_layouts/EMSPortal/common/jQuery/json2.js',
        '/_layouts/EMSPortal/common/jQuery/jquery-1.9.1.js',
        '/_layouts/EMSPortal/common/EmspeedTooltip.js',
        '/_layouts/EMSPortal/app/app.js'


    ],
    report: function (test) {
        //console.log('in testfinalize');

        var e = document.getElementsByTagName("iframe")[0].contentDocument.getElementById("theErrorMessage");
        if (e != null) {
            if (e.innerHTML.trim() != '') {
                console.log('[FAIL]In ' + test + ' Error Message: ' + e.innerHTML);

            }
        }
        else {
        }

    },

    listeners: {
        testsuitestart: function (event, harness) {
            this.report('Test Suite Start');
        },

        testsuiteend: function () {
            this.report('Test Suite End');
        },

        teststart: function (event, test) {
            this.report('Test Start');
        },

        testupdate: function (event, test, result) {
            this.report('Test Update');
        },

        testfailedwithexception: function (event, test) {
            this.report('Test Failed With Exception');
        },

        testfinalize: function () {
            this.report('Test Finalize');

        }
    }
});

Harness.start(
'/_layouts/EMSPortal/app/reporting/testClientUI/0001_report_Types.t.js'
//'/_layouts/EMSPortal/app/reporting/testClientUI/0002_detail_Panels.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0003_summary_Panels.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0004_multiSelect.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0005_back_To_Report_Types.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0006_report_Title_Matches_CDP.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0007_configurations_Match.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0008_sections_Configured.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0009_edit_Disabled.t.js'
//'/_layouts/EMSPortal/app/reporting/testClientUI/0010_verification_And_Validation_Sort.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0011_verification_And_Validation_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0012_dashboard_Sort.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0013_dashboard_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0014_corrective_Actions_Sort.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0015_corrective_Actions_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0016_DFMEA_Sort.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0017_DFMEA_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0018_DFMEA_Recommendations_Sort.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0019_DFMEA_Recommendations_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0020_Dfx_Maintainability_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0021_Dfx_Maintainability_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0022_Dfx_Manufacturing_Mfg_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0023_Dfx_Manufacturing_Mtfg_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0024_Dfx_Manufacturing_Sc_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0025_Dfx_Manufacturing_Sc_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0026_Dfx_Reliability_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0027_Dfx_Reliability_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0028_Opportunity_Analysis_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0029_Opportunity_Analysis_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0030_PFMEA_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0031_PFMEA_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0032_PFMEA_Recommendations_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0033_PFMEA_Recommendations_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0034_PMT_Detail_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0035_PMT_Detail_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0036_PMT_Summary_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0037_PMT_Summary_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0038_PTT_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0039_PTT_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0040_Requirement_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0041_Requirement_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0042_Risk_By_Requirement_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0043_Risk_By_Requirement_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0044_Risk_By_Specification_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0045_Risk_By_Specification_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0046_Risk_Register_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0047_Risk_Register_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0048_Test_Associations_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0049_Test_Associations_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0050_Validation_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0051_Validation_Filters.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0052_Verification_Sorts.t.js',
//'/_layouts/EMSPortal/app/reporting/testClientUI/0053_Verification_Filters.t.js'
//'/_layouts/EMSPortal/app/reporting/testClientUI/0054_Recommended_CDP.t.js'

);
