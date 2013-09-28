Ext.define('EMSPEED.reporting.view.reportingCdpFieldsetGenerateReport', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingCdpFieldsetGenerateReport',
    width: '100%',
    layout: 'vbox',
    margin: '0 0 0 10',
    collapsible: false,
    collapsed: false,
    title: 'Generate Report',
    initComponent: function () {
        Ext.apply(this, {
            items: [
            {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 25 0',
                items: [
                        {
                            xtype: 'combobox',
                            id: 'cbxOutputType',
                            fieldLabel: 'Output Type',
                            labelAlign: 'left',
                            margin: '10 10 0 0',
                            labelWidth: 80,
                            width: 200,
                            valueField: 'id',
                            displayField: 'name',
                            editable: false,
                            readonly: true,
                            queryMode: 'local'
                        },  //Output Type
                        {
                            xtype: 'checkbox',
                            id: 'chkZip',
                            labelAlign: 'right',
                            fieldLabel: 'Generate as Zip file',
                            labelWidth: 120,
                            border: false,
                            //align: 'center',
                            inputValue: '1',
                            margin: '10 0 0 0'
                        },
                        {
                            xtype: 'checkbox',
                            id: 'chkCreateSnapshot',
                            labelAlign: 'right',
                            fieldLabel: 'Create Snapshot',
                            labelWidth: 120,
                            border: false,
                            //align: 'center',
                            inputValue: '1',
                            margin: '10 10 0 0'
                        },
                        {
                            xtype: 'button', 
                            id:'btnGenerateReport', 
                            margin: '8 0 0 10', 
                            text: 'Generate Report'
                        }
                    ]
            } //third row
            ]   
        });
        this.callParent(arguments);
    }
});
