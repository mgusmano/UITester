Ext.define('EMSPEED.provision.controller.provisionController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.provision.view.provision',
        'EMSPEED.provision.view.provisionBasePanel',
        'EMSPEED.provision.view.provisionCreateRequest',
        'EMSPEED.provision.view.provisionCommonFieldSet'
    ],
    init: function () {
        this.control({
            '#provisionBasePanel': { activate: this.provisionBasePanel_activate },
            '#provisionCreateRequest button[identifier="btnSubmitRequest"]': { click: this.btnSubmitRequest_click },
            '#provisionCreateRequest button[identifier="btnCancelRequest"]': { click: this.btnCancelRequest_click }
        });
    },
    provisionBasePanel_activate: function (panel, e, eOpts) {
    },

    btnSubmitRequest_click: function (button, e, eOpts) {
        var provisionBasePanel = Ext.getCmp('provisionBasePanel');
        var provisionCreateRequest = Ext.getCmp('provisionCreateRequest');
        var txtPddId = provisionCreateRequest.getComponent('txtPddId');
        var txtComment = provisionCreateRequest.getComponent('txtComment');
        if (txtPddId.isValid()) {
            provisionBasePanel.setLoading('Submitting Provisioning Request...');


            var pddId = txtPddId.getValue();
            var comments = txtComment.getValue();

            var submitProvisioningRequestObject = { "parentProjectID": null, "paeID": null, "pddID": pddId, "currentUser": null, "comments": comments, "productGroup": null };

            Ext.Ajax.request({
                url: provision.submitProvisioningRequestUrl,
                method: provision.submitProvisioningRequestMethod,
                withCredentials: com.usesWithCredentials,
                scope: this,
                jsonData: submitProvisioningRequestObject,
                success: function (response, opts) {

                    var response = Ext.decode(response.responseText);

                    if (response.statusCode === 0) {
                        Ext.Msg.alert('Provisioning Request Submitted', 'Your provisioning request has been submitted.', Ext.emptyFn);
                        provisionBasePanel.setLoading(false);
                        provisionBasePanel.close();
                    }
                    else {
                        Ext.Msg.alert('Error', 'An error occurred while processing your provisioning request.', Ext.emptyFn);
                        provisionBasePanel.setLoading(false);
                        provisionBasePanel.close();
                    }
                },
                failure: function (response, opts) {
                    com.showError(response, opts);
                    provisionBasePanel.setLoading(false);
                    provisionBasePanel.close();
                }
            });
        }
        else {

            var errMsgPddId = 'Please enter a valid PDD ID';
            Ext.Msg.alert('Validation Error', errMsgPddId, Ext.emptyFn); 
        }
    },

    btnCancelRequest_click: function (button, e, eOpts) {
        provisionBasePanel = Ext.getCmp('provisionBasePanel');
        provisionBasePanel.close();
    }

});
