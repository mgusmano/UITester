Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetConfigurationActions', {
    // extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    extend: 'Ext.container.Container',
    alias: 'widget.reportingCdpFieldsetConfigurationActions',
    margin: '0 0 0 10',
    collapsible: false,
    collapsed: false,
    width: '100%',
    layout: 'vbox',
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 10 0',
                    items: [
                            {
                                xtype: 'combobox',/// <reference path="../testStatureWebServices/testIndex.js" />

                                fieldLabel: 'CDP',
                                id: 'cbxCDP',
                                labelAlign: 'top',
                                margin: '0 10 0 0',
                                width: 225,
                                defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
                                valueField: 'id',
                                displayField: 'name',
                                editable: false,
                                readonly: true,
                                queryMode: 'local'
                            },  //CDP
                            {
                                xtype: 'textfield',
                                id: 'txtCdpReportTitle',
                                fieldLabel: 'Title:',
                                labelAlign: 'top',
                                margin: '0 5 0 0',
                                width: 390,
                                name: 'reportTitle'
                            }  //Report Title
                    ]
                }, //first row
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 10 0',
                    items: [
                            {
                                xtype: 'combobox',
                                id: 'cbxConfigurations',
                                fieldLabel: 'Configurations:',
                                labelAlign: 'top',
                                margin: '0 10 0 0',
                                width: 625,
                                defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
                                valueField: 'id',
                                displayField: 'name',
                                //value: 'Default',
                                editable: false,
                                readonly: true,
                                queryMode: 'local'
                            }  //Configurations
                    ]
                }, //second row
                {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 10 0',
                items: [

                        {
                            xtype: 'textfield',
                            id: 'txtConfigurationName',
                            fieldLabel: 'Configuration Name:',
                            labelAlign: 'top',
                            margin: '0 10 0 0',
                            width: 375,
                            value: ''
                            //                        fieldStyle: {
                            //                            backgroundColor: 'yellow'
                            //                        },

                            //name: 'reportTitle'
                        }, //Configuration name
                        { xtype: 'button', margin: '20 10 0 0', width: 70, id: 'btnSaveConfiguration', text: 'Save' },
                        { xtype: 'button', margin: '20 10 0 0', width: 70, id: 'btnSaveAsConfiguration', text: 'Save As...' },
                        { xtype: 'button', margin: '20 10 0 0', width: 70, id: 'btnDeleteConfiguration', text: 'Delete' }

                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            id: 'lblError',
                            cls: 'x-form-item',
                            height: 15,
                            //text: 'error',
                            style: {
                                backgroundColor: '#FFFFCC'
                            }
                        } //error
                    ]
                }
            ]
    });
    this.callParent(arguments);
}
});
