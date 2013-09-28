Ext.define('EMSPEED.provision.view.provisionCreateRequest', {
    extend: 'EMSPEED.provision.view.provisionCommonFieldSet',
    alias: 'widget.provisionCreateRequest',
    id: 'provisionCreateRequest',
    layout: 'vbox',
    width: '100%',
    border: false,
    items: [
        {
            xtype: 'container',
            margin: '10 5 0 10',
            preventBodyReset: true,
            width: '100%',
            html: '<p>Please provide the information needed for L2 Support to provision your project in EMSPEED. ' +
                    'A Remedy ticket will be created on your behalf and you will receive notification once the project is ready for you to access in EMSPEED. ' +
                    'Please note the following rules prior to requesting a project:</p>' +
                    '<br/><ol><li>The project must exist in PDD prior to requestion provisioning in EMSPEED.</li><li>You must be the PM of record in PDD in order to request a project.</li><li>The project must be a CLMS project.</li></ol>'
        },
        {
            xtype: 'numberfield',
            name: 'pddid',
            itemId: 'txtPddId',
            identifier: 'txtPddId',
            allowNegative: false,
            allowBlank: false,
            allowDecimals: false,
            emptyText: "10000",
            maxLength: 5,
            minLength: 1,
            fieldLabel: 'PDD ID',
            margin: '10 5 0 10',
            width: '50%',
            labelAlign: 'left'
        },
        {
            xtype: 'textfield',
            name: 'comment',
            itemId: 'txtComment',
            identifier: 'txtComment',
            emptyText: "Please add your comments...",
            fieldLabel: 'Comment',
            margin: '10 5 0 10',
            width: '100%',
            height: 80,
            labelAlign: 'left'
        },

        { 
            xtype: 'container',
            layout: 'hbox',
            margin: '10 0 10 0',
            items: [
                {
                    xtype: 'button',
                    margin: '0 5 0 620',
                    identifier: 'btnSubmitRequest',
                    width: 55,
                    itemId: 'btnSubmitRequest',
                    text: 'Submit'
                },
                {
                    xtype: 'button',
                    margin: '0 5 0 10',
                    identifier: 'btnCancelRequest',
                    width: 55,
                    itemid: 'btnCancelRequest',
                    text: 'Cancel'            
                }
            ]
        }
    ]
});

