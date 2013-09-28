Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetReportSectionsToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.reportingCdpFieldsetReportSectionsToolbar',

    style: {
        left: 0,
        borderColor: '#99bce8'
    },
    dock: 'top',
    items: [
        {
            text: 'All',
            id: 'btnReportSectionsAllClear',
            tooltip: 'select or clear all sections',
            width: 60,
            enableToggle: true,
            listeners: {
                scope: this,
                toggle: function (button, pressed, eOpts) {
                    Ext.getCmp('reportingBasePanel').setLoading('Working...');
                    setTimeout(function () {
                        Ext.getCmp('btnReportSectionsShowHide').toggle(false, false);
                        //Ext.getCmp('btnReportSectionsShowHide').setText('hide unselected sections');

                        var store = Ext.getCmp('grdReportSections').getStore();
                        if (pressed) {
                            store.clearFilter(false);
                            button.setText('Clear');
                        }
                        else {
                            button.setText('All');
                        }
                        store.each(function (rec, index, count) {
                            rec.set('enabled', button.pressed);
                        });

                        reporting.setChangedMessage();
                        reporting.drawSummary(Ext.getCmp('grdReportSections').store.data.items);
                        Ext.getCmp('reportingBasePanel').setLoading(false);
                    }, 1000);
                }
            }
        },
        '-',
        {
            text: 'Apply',
            id: 'btnReportSectionsApply',
            tooltip: 'apply CDP recommendations as section selections',
            width: 60,
            listeners: {
                scope: this,
                click: function (button, e, eOpts) {

                    Ext.getCmp('reportingBasePanel').setLoading('Working...');
                    setTimeout(function () {
                        Ext.getCmp('btnReportSectionsShowHide').toggle(false, false);
                        Ext.getCmp('btnReportSectionsAllClear').toggle(false, false);
                        var store = Ext.getCmp('grdReportSections').getStore();
                        store.clearFilter(false);

                        store.each(function (rec, index, count) {
                            if (rec.get('cdp') === 'x') {
                                rec.set('enabled', true);
                            }
                            else {
                                rec.set('enabled', false);
                            }
                        });
                        reporting.setChangedMessage();
                        reporting.drawSummary(Ext.getCmp('grdReportSections').store.data.items);
                        Ext.getCmp('reportingBasePanel').setLoading(false);
                    }, 1000);
                }
            }
        },
        '-',
        {
            text: 'Hide Unselected Sections',
            id: 'btnReportSectionsShowHide',
            tooltip: 'hide or show unselected sections',
            width: 150,
            enableToggle: true,
            listeners: {
                scope: this,
                toggle: function (button, pressed, eOpts) {
                    Ext.getCmp('reportingBasePanel').setLoading('Working...');
                    setTimeout(function () {
                        var store = Ext.getCmp('grdReportSections').getStore();
                        if (pressed) {
                            button.setText('Show All Sections');
                            store.filter("enabled", button.pressed);
                        }
                        else {
                            button.setText('Hide Unselected Sections');
                            store.clearFilter(false);
                        }
                        Ext.getCmp('reportingBasePanel').setLoading(false);
                    }, 1000);
                }
            }
        }
    ]
});
