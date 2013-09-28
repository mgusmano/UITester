var win2;

Ext.define('EMSPEED.project.view.EMSPEEDButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.EMSPEEDButton',
    enableToggle: true,
    textAlign: 'left',
    //width: '500px',
    clearStatus: function (o) {
        Ext.getCmp('basic-statusbar').clearStatus();
        var w = Ext.getCmp(o);
        w.setLoading(false);
    },

    handler: function (btn, e, eOpts) {
        //Ext.History.add("'" + btn.id + "'");
        document.title = "EMSPEED - " + btn.id;
        Ext.getCmp('projectApplication').setActivePanel(btn.id + 'BasePanel');
        return;


        //Ext.History.add("'" + 'reporting:reporttypespage' + "'");

        if (btn.id === 'QA86478' || btn.id === 'QA91522') {
            //Ext.getCmp('basic-statusbar').showBusy();
            var iframeWin = document.getElementById("iframe-simpleIframe").contentWindow;
            iframeWin.postMessage(btn.id, 'http://localhost:214');
            //iframeWin.postMessage("QA91522", 'http://localhost:214');

            // var w = Ext.getCmp('project' + btn.id + 'Panel');
            // w.setLoading('Working...');

            // Ext.defer(this.clearStatus, 4000, this, ['project' + btn.id + 'Panel'])
        }
        else {
            //    Ext.defer(EMSPEED.common.Notification.showToast, 0, this, ['You clicked on...', btn.text])
            //    Ext.getCmp('basic-statusbar').showBusy();

            switch (btn.id) {

                case 'btnAddWidget':
                    //alert('btnAddWidget');

                    if (!win2) {


                        var form2 = Ext.widget('form', {
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            border: false,
                            bodyPadding: 10,

                            fieldDefaults: {
                                labelAlign: 'top',
                                labelWidth: 100,
                                labelStyle: 'font-weight:bold'
                            },
                            defaults: {
                                margins: '0 0 10 0'
                            },

                            items: [
                { xtype: 'container', html: 'Add Pie Widget (will be aded to bottom of right column...)' }
                ],

                            buttons: [

                {
                    text: 'OK',
                    handler: function () {
                        //Ext.getCmp('dashboardMainPanel')
                        //Ext.getCmp('dashboardMainPanel').items.items[0].items.items.push({ xtype: 'dashboardPortletPie', height: 200 });

                        //Ext.getCmp('col-1').add({ xtype: 'dashboardPortletPie', height: 200 }, 0);
                        Ext.getCmp('col-3').add({ xtype: 'dashboardPortletPie', height: 200 }, 0);


                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form to the configured url
                            // this.up('form').getForm().submit();
                            //this.up('form').getForm().reset();
                            this.up('window').hide();
                            //portlet.setLoading(false);
                        }
                    }
                },

                {
                    text: 'Cancel',
                    handler: function () {
                        //this.up('form').getForm().reset();
                        this.up('window').hide();
                        //portlet.setLoading(false);

                        //            this.hide();

                    }
                }
            ]





                        });


                        win2 = Ext.widget('window', {
                            id: 'theWindow',
                            title: 'Add a Widget',
                            closeAction: 'hide',
                            width: 400,
                            height: 400,
                            minHeight: 400,
                            layout: 'fit',
                            resizable: true,
                            modal: true,
                            items: form2
                        });
                    }
                    win2.show();

                    break;
                //                case 'dashboard':  
                //                case 'reporting':  
                //                case 'cdp':  
                //                    Ext.getCmp('projectApplication').setActivePanel(btn.id + 'BasePanel');  
                //                    break;  
                default:
                    debugger;
                    Ext.getCmp('projectApplication').setActivePanel(btn.id + 'BasePanel');
            }


        }
        var top = btn.up('container');
        Ext.Array.each(top.items.items, function (b, index, buttons) {
            if (b.xtype === 'EMSPEEDButton') {
                if (b.id != btn.id) {
                    Ext.getCmp(b.id).toggle(false, true);
                }

            }
        })
        //Ext.getCmp('basic-statusbar').clearStatus();
    }
});
