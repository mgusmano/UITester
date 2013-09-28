Ext.define('EMSPEED.baseclass.view.baseclassPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseclassPanel',
    layout: 'fit',
    bodyStyle: { borderWidth: '0px' },

    //         t    r    b    l
    padding: '8px 0px 0px 8px',

    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },

    setTheTitle: function (value) {
        this.dockedItems.items[0].setText(value);
        //alert(value);
        //debugger;
        //return me.up().dockedItems.items[0].down('#theTitle');
    },

    dockedItems: [{
        xtype: 'label',
        //height: '25px',
        dock: 'top',
        itemId: 'theTitle', 
        height: 25, 
        text: '', 
        margin: '0 0 0 0',
        style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '24px' }
    }],

    //bodyPadding: 10,
    preventHeader: true,
    autoScroll: true,
    border: false,

    initComponent: function () {
        // this.getHeader().hide();
        //    console.info('initComponent BasePanel: ' + this.id);
        this.callParent(arguments);
    },
    onRender: function () {
        //    console.info('onRender BasePanel: ' + this.id);
        this.callParent(arguments);
    },
    listeners: {
        beforeactivate: function (t, eOpts) {
            //console.info('beforeactivate BasePanel: ' + this.id);
            //navContext.setActivePanel(navContext.getActiveApplication(), this.id);
            //getObj(navContext.getActiveApplication()).setCurrentPanel(this.id);
        }
    }
});
