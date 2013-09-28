Ext.define('EMSPEED.snapshots.view.snapshots', {
    singleton: true,
    alternateClassName: 'snapshots',

    constructor: function () {
        this.imagesFolder = com.appFolder + '/snapshots' + '/resources/images/';
        this.siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
        this.serviceRoot = 'http://' + location.hostname + ':8095/';
        this.getSnapshotsHistoryUrl = com.appFolder + '/snapshots/data/snapshotsHistory.jso';
//        this.getReportTypesUrl = this.serviceRoot + 'ReportConfigurationService.svc/json/GetReportTypes';
//        this.getReportTypesMethod = 'POST';

        this.callParent(arguments);
    }

});
