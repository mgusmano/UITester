Ext.define('EMSPEED.reporting.view.reportingBaseDetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportingBaseDetailPanel',

    layout: 'card',
    width: 656,
    border: '0 1 1 1',
    margin: '0 0 0 0',
    bodyStyle: {
        borderTop: '0px',
        borderBottom: '0px',
        borderLeft: '0px',
        borderRight: '1px'
    },

    setChild: function (panel) {
        this.getLayout().setActiveItem(panel);
        com.setTheTitle(this, this.getLayout().getActiveItem().title);
    }
});
