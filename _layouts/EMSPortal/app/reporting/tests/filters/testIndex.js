var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title: 'Report Generation User Interface',


    preload: [
        'expectedResults.js',
        'http://localhost:1111/extjs-4.1.1/resources/css/ext-all.css',

        'http://localhost/_layouts/1033/styles/EMSPortal/EMSPortal.css',
        'http://localhost/_layouts/EMSPortal/resources/css/CheckHeader.css',
        'http://localhost/_layouts/EMSPortal/resources/css/ItemSelector.css',
        'http://localhost/_layouts/EMSPortal/resources/css/loading.css',
        'http://localhost/_layouts/EMSPortal/resources/css/chooser.css',

        'http://localhost/_layouts/EMSPortal/resources/css/misc.css',

        'http://localhost:1111/extjs-4.1.1/ext-all-debug.js',
    //'http://localhost/_layouts/EMSPortal/app/reporting/app.js',
    'http://localhost:1111/_layouts/EMSPortal/app/reporting/app.js',
    //'../../app.js',

        'http://localhost/_layouts/EMSPortal/app/reporting/view/com.js',
        'http://localhost/_layouts/EMSPortal/app/reporting/data/getReportTypes.js',
        'http://localhost/_layouts/EMSPortal/app/reporting/data/getMasterLayout.js',
        'http://localhost/_layouts/EMSPortal/app/reporting/data/getConfiguration.js',
        'http://localhost/_layouts/EMSPortal/app/reporting/data/saveConfiguration.js'
    ]
});

Harness.start(
    '010_multiSelect.t.js'
);
