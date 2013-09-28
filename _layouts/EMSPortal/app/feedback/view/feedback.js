Ext.define('EMSPEED.feedback.view.feedback', {
    singleton: true,
    alternateClassName: 'feedback',
    constructor: function () {
//        this.imagesFolder = com.appFolder + '/provision' + '/resources/images/';
//        this.siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
        this.serviceRoot = 'http://' + location.hostname + ':8095/';
        this.createTicketUrl = this.serviceRoot + 'TicketService.svc/json/CreateTicket';
        this.createTicketMethod = 'POST';

        this.callParent(arguments);
    }

});
