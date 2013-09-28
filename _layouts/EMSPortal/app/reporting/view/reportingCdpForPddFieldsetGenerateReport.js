Ext.define('EMSPEED.reporting.view.reportingCdpForPddFieldsetGenerateReport', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingCdpForPddFieldsetGenerateReport',
    width: '100%',
    height: 200,
    layout: 'vbox',
    collapsible: false,
    collapsed: false,
    title: 'Generate Report',
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 10 0',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'txtCdpForPddReportTitle',
                            fieldLabel: 'Report Title:',
                            labelAlign: 'top',
                            margin: '0 20 0 0',
                            width: 325,
                            name: 'reportTitle'
                        }, 
                        {
                            xtype: 'checkbox',
                            id: 'chkCdpForPddCreateSnapshot',
                            labelAlign: 'right',
                            fieldLabel: 'Create Snapshot',
                            labelWidth: 120,
                            border: false,
                            inputValue: '1',
                            margin: '21 20 0 0'
                        },
                        {
                            xtype: 'button', 
                            id:'btnGenerateCdpForPddReport',
                            margin: '21 0 0 0', 
                            text: 'Generate Report'
                        }
                    ]
                }
            ]   
        });
        this.callParent(arguments);
    }
});
