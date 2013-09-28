Ext.define('COMMON.proxy.soapProxy', {
    extend: 'Ext.data.soap.Proxy', // Ajax, Rest or JsonP, as appropriate 
    alias: 'proxy.SoapProxy',

    prefix: '',
    namespace: 'http://tempuri.org/',
    ns: ' xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"' +
              ' xmlns:a="http://schemas.datacontract.org/2004/07/SLB.EMSPortal.Services.Contracts"' +
              ' xmlns:i="http://www.w3.org/2001/XMLSchema-instance"',

    constructor: function (config) {
        this.service = config.service || {};
        this.method = config.method || {};
        this.serviceinterface = config.serviceinterface || {};
        this.record = config.record || {};

        this.soapAction = {
            read: this.namespace + this.serviceinterface + '/' + this.method
        };
        this.api =  {
            read: this.method
        };
        this.url = 'http://' + location.hostname + ':8080/' + this.service + '.svc';  //o.theUrl,
        this.targetNamespace = this.namespace;
        this.reader = {
            type: 'soap',
            record: this.record
        };
        this.envelopeTpl = [
            '<s:Envelope' + this.ns + '>',
                '{[values.bodyTpl.apply(values)]}',
            '</s:Envelope>'
        ];

        this.readBodyTpl = [
            '<s:Body>',
                '<' + this.prefix + '{operation} xmlns="' + this.namespace + '">',
                    '<tpl foreach="params">',
                        '<{$}>{.}</{$}>',
                    '</tpl>',
                '</' + this.prefix + '{operation}>',
            '</s:Body>'
        ];
        this.defaultHeaders = { 'content-type': "text/xml; charset=utf-8" };

        config.soapAction = this.soapAction;
        config.api = this.api;
        config.url = this.url;
        config.targetNamespace = this.targetNamespace;
        config.reader = this.reader;
        config.envelopeTpl = this.envelopeTpl;
        config.readBodyTpl = this.readBodyTpl;
        config.defaultHeaders = this.defaultHeaders;

        this.callParent(arguments);
    }
});

