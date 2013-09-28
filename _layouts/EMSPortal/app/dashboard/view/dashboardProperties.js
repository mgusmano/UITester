Ext.define('EMSPEED.dashboard.view.dashboardProperties', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboardProperties',
    closeAction: 'hide',
    closable: false,
    layout: 'fit',
    modal: true,
    border: false,
    resizable: false,

    width: 325,
    padding: '0 0 0 0',

    setGrid: function () {
        var g = this.down('propertygrid');
        g.getStore().sorters.items = [];
        this.theConfig = {};
        for (var propertyName in this.clientArea.theConfig) {

            if (Object.prototype.toString.call(this.clientArea.theConfig[propertyName]) === '[object Object]') {
                this.theConfig[propertyName] = Ext.encode(this.clientArea.theConfig[propertyName]);
            }
            else {
                this.theConfig[propertyName] = this.clientArea.theConfig[propertyName];
            }
        }
        console.log(this.theConfig);
        console.log(this.clientArea.sourceConfig);
        g.setSource(this.theConfig, this.clientArea.sourceConfig);
    },

    listeners: {
        show: function (me, eOpts) {
            this.setGrid();
        }
    },

    grabConfig: function () {
        dashboard.startLoading();

        var me = this;
        var callMethod = function () {
            var g = me.down('propertygrid');
            var theStore = g.store;
            for (var i = 0; i < theStore.getCount() ; i++) {
                var r = theStore.getAt(i);
                if (r.data.name.indexOf('Date') !== -1) {
                    var d = new Date(r.data.value);
                    var dString = Ext.Date.format(d, 'm/d/Y');
                    me.clientArea.theConfig[r.data.name] = dString;
                }
                else {
                    me.clientArea.theConfig[r.data.name] = Ext.decode(r.data.value);
                }
                if (r.data.name === 'title') {
                    me.clientArea.setTitle(me.clientArea.theConfig[r.data.name]);
                }
            }
            dashboard.saveState();
            me.clientArea.configModified(me.clientArea.theConfig);
            dashboard.endLoading();
        };

        setTimeout(callMethod, 500);
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'propertygrid',
                            enableColumnResize: false,
                            nameColumnWidth: 150,
                            buttons: [
                                {
                                    text: 'Apply',
                                    scope: this,
                                    handler: function () {
                                        this.grabConfig();
                                    }
                                },
                                {
                                    text: 'OK',
                                    scope: this,
                                    handler: function () {
                                        this.panelHeader.el.dom.style.backgroundColor = '#6084a8';
                                        this.grabConfig();
                                        this.hide();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    scope: this,
                                    handler: function () {
                                        this.panelHeader.el.dom.style.backgroundColor = '#6084a8';
                                        this.hide();
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        this.callParent(arguments);
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    }
});
