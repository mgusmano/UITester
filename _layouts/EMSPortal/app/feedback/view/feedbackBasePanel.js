Ext.define('EMSPEED.feedback.view.feedbackBasePanel', {
    extend: 'Ext.window.Window',
    alias: 'widget.feedbackBasePanel',
    id: 'feedbackBasePanel',
    title:'Feedback',
    layout: 'vbox',
    height: 350,
    width: 800,
    border: false,
    closable: false,
    initComponent: function () {
        this.items = [
            { xtype: 'feedbackControls' }
        ];
        this.callParent(arguments);
    }
});
