Ext.define('EMSPEED.dashboard.view.dashboardBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassContainer',
    alias: 'widget.dashboardBasePanel',
    id: 'dashboardBasePanel',
    overflowY: 'scroll',
    overflowX: 'hidden',


    initComponent: function () {
        dashboard.startLoading();

        var theItems;

        //if (Ext.util.Cookies.get(project.state) === null) {
            if (project.data.isParent === true) {
                theItems = project.programDashboard;
            }
            else {
                theItems = project.projectDashboard;
            }
        //}
        //else {
        //    var theState = Ext.decode(Ext.util.Cookies.get(project.state));
        //    theItems = theState;
        //}

        this.items = theItems;
        this.callParent(arguments);

        dashboard.endLoading();
    }
});
