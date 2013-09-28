Ext.define('EMSPEED.dashboard.view.dashboardPortletPDDCDP', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletPDDCDP',
    title: 'PDD CDP',

    layout: 'vbox',

    items: [

        {
            xtype: 'container',
            html: '<div data-bind="text: data.pddNumber"></div>' +
                '<div data-bind="text: data.projectName"></div>' +
                '<div data-bind="text: data.productChampion"></div>' +


                '<table>' +
                '<thead><tr>' +
                '    <th>menu</th>' +
                '</tr></thead>' +
                '<!-- Todo: Generate table body -->' +
               '<tbody data-bind="foreach: gearMenu">' +
                '<tr>' +
                '    <td data-bind="text: menuItemName"></td>' +
                '</tr>    ' +
                '</tbody>' +

            '</table>'
        }
    ],





    //initComponent: function () {
    //    Ext.apply(this, {
    //        items: [

    //            { xtype: 'container', margin: '10 10 0 10', layout: 'hbox', items: [
    //                { xtype: 'label', text: 'Next CDP Event:', style: {fontWeight: 'bold' } },
    //                { xtype: 'label', text: 'Realization Launch 6/30/2013', margin: '0 0 0 10'}
    //            ]},
    //            { xtype: 'container', margin: '10 10 0 10', layout: 'hbox', items: [
    //                { xtype: 'label', text: 'Project Request CPD Readiness:', style: { fontWeight: 'bold'} },
    //                { xtype: 'label', text: '%', margin: '0 0 0 10' }
    //            ]},
    //            { xtype: 'container', margin: '10 10 10 10', layout: 'hbox', items: [
    //                { xtype: 'label', text: 'Slip:', style: { fontWeight: 'bold'} },
    //                { xtype: 'label', text: 'N/A', margin: '0 0 0 10' }
    //            ]}
    //        ]
    //    });
    //    this.callParent(arguments);
    //},


    config: {
        theConfig: null
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    }
});
