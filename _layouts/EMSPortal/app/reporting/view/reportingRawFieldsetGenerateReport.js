Ext.define('EMSPEED.reporting.view.reportingRawFieldsetGenerateReport', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingRawFieldsetGenerateReport',
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
                            id: 'txtRawReportTitle',
                            fieldLabel: 'Report Title:',
                            labelAlign: 'top',
                            margin: '0 20 0 0',
                            width: 325,
                            name: 'reportTitle'
                        },  //Report Title
                        {
                            xtype: 'button', 
                            id:'btnGenerateRawReport', 
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
