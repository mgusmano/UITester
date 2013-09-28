Ext.define('EMSPEED.feedback.controller.feedbackController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.feedback.view.feedback',
        'EMSPEED.feedback.view.feedbackBasePanel',
        'EMSPEED.feedback.view.feedbackControls',
        'EMSPEED.feedback.view.feedbackCommonFieldSet'
    ],
    init: function () {
        this.control({
            '#feedbackBasePanel': { activate: this.feedbackBasePanel_activate },
            '#feedbackControls button[identifier="btnSaveFeedback"]': { click: this.btnSaveFeedback_click },
            '#feedbackControls button[identifier="btnCancelFeedback"]': { click: this.btnCancelFeedback_click }
        });
    },
    feedbackBasePanel_activate: function (panel, e, eOpts) {
        var feedbackControls = Ext.getCmp('feedbackControls');
        
        var cbxFeedbackType = feedbackControls.getComponent('cbxFeedbackType');
        var cbxImpact = feedbackControls.getComponent('cbxImpact');
        var cbxUrgency = feedbackControls.getComponent('cbxUrgency');

        cbxFeedbackType.store = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: project.feedbackItems.typeItems
        }),

        cbxImpact.store = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: project.feedbackItems.impactItems
        }),

        cbxUrgency.store = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: project.feedbackItems.urgencyItems
        })

        cbxFeedbackType.setValue(cbxFeedbackType.store.data.items[0].data.value);
        cbxImpact.setValue(cbxImpact.store.data.items[0].data.value);
        cbxUrgency.setValue(cbxUrgency.store.data.items[0].data.value);

    },
    btnSaveFeedback_click: function (button, e, eOpts) {        
        var feedbackControls = Ext.getCmp('feedbackControls');
        var cbxFeedbackType = feedbackControls.getComponent('cbxFeedbackType');
        var cbxImpact = feedbackControls.getComponent('cbxImpact');
        var cbxUrgency = feedbackControls.getComponent('cbxUrgency');
        var txtDescription = feedbackControls.getComponent('txtDescription');

        if (txtDescription.isValid()) {
            var feedbackBasePanel = Ext.getCmp('feedbackBasePanel');
            feedbackBasePanel.setLoading('Submitting Feedback...');

            var feedbackType = cbxFeedbackType.getValue();
            var impact = cbxImpact.getValue();
            var urgency = cbxUrgency.getValue();
            var description = txtDescription.value;

            var createTicketRequestObject = {};
            createTicketRequestObject.ticketRequest = { "feedbackType": feedbackType, "urgency": urgency, "impact": impact, "description": description };

            Ext.Ajax.request({
                url: feedback.createTicketUrl,
                method: feedback.createTicketMethod,
                withCredentials: com.usesWithCredentials,
                scope: this,
                jsonData: createTicketRequestObject,
                success: function (response, opts) {
                    var response = Ext.decode(response.responseText);

                    if (response.statusCode === 0) {
                        Ext.Msg.alert('Feedback Submitted', 'Your provisioning request has been submitted.', Ext.emptyFn);
                        feedbackBasePanel.setLoading(false);
                        feedbackBasePanel.close();
                    }
                    else {
                        Ext.Msg.alert('Error', 'An error occurred while submitting your feedback.', Ext.emptyFn);
                    }
                    feedbackBasePanel.setLoading(false);
                },
                failure: function (response, opts) {
                    feedbackBasePanel.setLoading(false);
                    feedbackBasePanel.close();
                    com.showError(response, opts);
                }
            });
        }
        else {
            var errMsgDescription = 'Please enter a description';
            Ext.Msg.alert('Validation Error', errMsgDescription, Ext.emptyFn);
        }
    },

    btnCancelFeedback_click: function (button, e, eOpts) {
        var feedbackBasePanel = Ext.getCmp('feedbackBasePanel');
        feedbackBasePanel.close();
    }
});
