Ext.define('EMSPEED.feedback.view.feedbackControls', {
    extend: 'EMSPEED.feedback.view.feedbackCommonFieldSet',
    alias: 'widget.feedbackControls',
    id: 'feedbackControls',
    layout: 'vbox',
    border: false,
    //    title: 'Create Request',
    width: '100%',
    items: [
    {
        xtype: 'container',
        margin: '0 10 10 10',
        preventBodyReset: true,
        width: '100%',
        html: '<p>Some message about the feedback will go here. Included in the message should be an explanation of the routing and the expected response time.</p>'
        //,
        //style: {
        //    fontFamily: 'Univers 57 condensed',
        //    color: '#000000',
        //    fontSize: '12px'
        //}
    },
    {
        xtype: 'combobox',
        itemId: 'cbxFeedbackType',
        margin: '0 10 10 10',
        fieldLabel: 'Feedback Type',
        displayField: 'name',
        valueField: 'value',
        labelAlign: 'left',
        defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
        matchFieldWidth: false,
        editable: false,
        readonly: true,
        queryMode: 'local'
    },
    {
        xtype: 'combobox',
        itemId: 'cbxImpact',
        margin: '0 10 10 10',
        fieldLabel: 'Impact',
        displayField: 'name',
        valueField: 'value',
        labelAlign: 'left',
        defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
        matchFieldWidth: false,
        editable: false,
        readonly: true,
        queryMode: 'local'
    },
    {
        xtype: 'combobox',
        itemId: 'cbxUrgency',
        margin: '0 10 10 10',
        fieldLabel: 'Urgency',
        displayField: 'name',
        valueField: 'value',
        labelAlign: 'left',
        defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
        matchFieldWidth: false,
        editable: false,
        readonly: true,
        queryMode: 'local'
    },
    {
        xtype: 'textfield',
        itemId: 'txtDescription',
        margin: '0 10 10 10',
        name: 'description',
        emptyText: "Please describe your feedback...",
        allowBlank: false,
        blankText: 'Please provide a description',
        fieldLabel: 'Description',
        width: '100%',
        height: 120,
        labelAlign: 'left'
    },
    { 
        xtype: 'container',
        layout: 'hbox',
        margin: '0 10 10 10',
        items: [
            {
                xtype: 'button',
                margin: '0 5 0 600',
                width: 55,
                identifier: 'btnSaveFeedback',
                itemId: 'btnSaveFeedback',
                text: 'Save'           
            },
            {
                xtype: 'button',
                margin: '0 5 0 10',
                width: 55,
                identifier: 'btnCancelFeedback',
                itemId: 'btnCancelFeedback',
                text: 'Cancel'            
            }
        ]
    }
    ]
});

