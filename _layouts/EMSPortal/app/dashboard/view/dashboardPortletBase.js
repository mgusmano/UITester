Ext.define('EMSPEED.dashboard.view.dashboardPortletBase', {
    //extend: 'Ext.panel.Panel',
    extend: 'Ext.form.Panel',
    //extend: 'Ext.container.Container',
    alias: 'widget.dashboardPortletBase',
    frame: true,
    layout: 'fit',
    anchor: '100%',
    closable: false,
    collapsible: true,
    animCollapse: true,
    padding: '0 0 0 0',
    border: false,
    borderWidth: 0,
    cls: 'x-portlet',
    style: { borderWidth: '1px', zIndex: '0' },
    tools: dashboard.getTools(),
    collapseFirst: false,

    requires: [
        'Ext.data.soap.Proxy'
    ],


    reload: function () {
    },


    listeners: {
//        afterlayout: function (me, eOpts) {
//        },
        collapse: function (me, eOpts) {
            dashboard.saveState();
        },
        expand: function (me, eOpts) {
            dashboard.saveState();
        }
    },

    loadPage: function () {
        console.debug('baseportlet loadPage');
        //if (this.theConfig != null) {
        //    this.setTitle(this.theConfig.title);
        //}
    },

    initComponent: function () {
        if (this.theConfig != null) {
            if (this.theConfig.title != null) {
                this.setTitle(this.theConfig.title);
            }
        };
        this.callParent(arguments);
    },

    config: {
        theConfig: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },

    get: function (s) {
        return this.currConfig.get(s)
    },

    configModified: function (s) {
        //alert('configModified');
        //alert(Ext.encode(this.theConfig));
        this.theConfig = s;
        //alert(Ext.encode(this.theConfig));
        this.loadPage();
    },

    draggable: {
        moveOnDrag: false
    }

    //// Override Panel's default doClose to provide a custom fade out effect
    //// when a portlet is removed from the portal
    //doClose: function () {
    //    if (!this.closing) {
    //        this.closing = true;
    //        this.el.animate({
    //            opacity: 0,
    //            callback: function () {
    //                this.fireEvent('close', this);
    //                this[this.closeAction]();
    //            },
    //            scope: this
    //        });
    //    }
    //}

    //getStore: function (o) {
    //    o.thePrefix = '';
    //    o.theNamespace = 'http://tempuri.org/';
    //    o.theNs = ' xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"' +
    //            ' xmlns:a="http://schemas.datacontract.org/2004/07/SLB.EMSPortal.Services.Contracts"' +
    //            ' xmlns:i="http://www.w3.org/2001/XMLSchema-instance"';

    //    var store = Ext.create('Ext.data.Store', {
    //        fields: o.theFields,
    //        proxy: {
    //            type: 'soap',
    //            url: o.theUrl,
    //            defaultHeaders: { 'content-type': "text/xml; charset=utf-8" },
    //            targetNamespace: o.theNamespace,

    //            envelopeTpl: [
    //                '<s:Envelope' + o.theNs + '>',
    //                    '{[values.bodyTpl.apply(values)]}',
    //                '</s:Envelope>'
    //            ],

    //            readBodyTpl: [
    //                '<s:Body>',
    //                    '<' + o.thePrefix + '{operation} xmlns="' + o.theNamespace + '">',
    //                        '<tpl foreach="params">',
    //                            '<{$}>{.}</{$}>',
    //                        '</tpl>',
    //                    '</' + o.thePrefix + '{operation}>',
    //                '</s:Body>'
    //            ],

    //            api: {
    //                read: o.theMethod
    //            },
    //            soapAction: {
    //                read: o.theNamespace + o.theInterface + '/' + o.theMethod
    //            },
    //            reader: {
    //                type: 'soap',
    //                record: o.theRecord
    //            }
    //        }
    //    });

    //    return store;
    //},



    //    bodyStyle: {
    //        borderColor: 'red',
    //        borderStyle: 'solid'
    //    },

    //    bodyStyle: {
    //        background: '#ffc',
    //        padding: '10px'
    //    },




});
