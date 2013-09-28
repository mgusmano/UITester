Ext.define('EMSPEED.provision.view.provision', {
    singleton: true,
    alternateClassName: 'provision',
    constructor: function () {
//        this.imagesFolder = com.appFolder + '/provision' + '/resources/images/';
//        this.siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
          this.serviceRoot = 'http://' + location.hostname + ':8095/';
          this.submitProvisioningRequestUrl = this.serviceRoot + 'ProvisioningService.svc/json/SubmitProvisioningRequest';
          this.submitProvisioningRequestMethod = 'POST';

        this.callParent(arguments);
    }

});
