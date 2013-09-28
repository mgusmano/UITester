Ext.define('COMMON.proxy.emspeedProxy', {
    //http://skirtlesden.com/articles/custom-proxies
    alias: 'proxy.emspeedProxy',
    extend: 'Ext.data.proxy.Ajax', // Ajax, Rest or JsonP, as appropriate 
    constructor: function (config) {
        this.initConfig(config);
        this.reader = {
            root: this.root,
            type: 'json'
        };
        this.callParent(arguments);
    },
    noCache: false, //to remove param "_dc"
    directionParam: null,
    filterParam: null,
    groupDirectionParam: null,
    groupParam: null,
    limitParam: null,
    pageParam: null,
    sortParam: null,
    startParam: null,
    defaultHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    actionMethods: {
        read: 'POST'
    },
    buildUrl: function (request) {
        return 'http://' + location.hostname + ':8095/' + encodeURIComponent(this.service) + '.svc/json/' + encodeURIComponent(this.method);
    },
    buildRequest: function (operation) {
        var request = this.callParent(arguments);
        request.jsonData = this.jsonData;
        request.withCredentials = com.usesWithCredentials;
        return request;
    }
});

