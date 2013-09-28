Ext.define('EMSPEED.baseclass.view.baseclassApplication', {
    //    extend: 'Ext.tab.Panel', tabPosition: 'bottom',
    //    setActivePanel: function (p) {
    //        this.setActiveTab(p);
    //    },

    extend: 'Ext.panel.Panel', 
    layout: 'card',
    alias: 'widget.baseclassApplication',

    border: false,
    //bodyBorder: '3px 3px 3px 3px',
    //        t r b l
    padding: '3 3 3 3',

    style: {
        backgroundColor: '#E9E9E9',
        borderColor: '#6084A8'
    },

    bodyStyle: {
        borderColor: '#6084A8',
        borderWidth: '1px'
    },

    setActivePanel: function (p) {
        this.getLayout().setActiveItem(p);
    },

    config: {
        currentPanel: '',
        currentItem: ''
    },

    onRender: function () {
        //console.info('onRender BaseApplication: ' + this.id);
        //    navContext.activeAppObj = getObj(this.id);
        return this.callParent(arguments);
    },

    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },

    initComponent: function () {
        this.callParent(arguments);
    },
    //    setContext: function (context) {
    //        //console.info('setContext baseapproot: ' + context);
    //        //        this.setActiveTab(context);
    //        //        var theTab = theAppPanel.child('#' + context);
    //        theAppPanel.layout.setActiveItem(navContext.activeAppObj);
    //        //navContext.activeAppObj.layout.setActiveItem(navContext.activeAppObj.currentViewerObj);
    //        navContext.setActiveItem(navContext.activeAppObj.currentViewer);
    //    },

    setCurrentPanel: function (value) {
        //console.info('setCurrentPanel BaseApplication: ' + value);
        //var a = this.getActiveTab();
        //console.info('active tab 1:');
        //console.info(a);
        //console.info(this);
        //this.setActiveTab(value);
        //var b = this.getActiveTab();
        //console.info('act1ve tab 2:');
        //console.info(b);

        //    navContext.setTheActivePanel(navContext.getActiveContext(), value);
        return value;
    },


    applyCurrentPanel: function (value) {
        console.info('applyCurrentPanel BaseApplication: ' + value + ' id: ' + this.id);
        return value;
    },




    listeners: {
        //        beforeactivate: function (t, eOpts) {
        //            navContext.activeAppObj = getObj(this.id);
        //        },
        tabchange: function (tabPanel, newCard, oldCard, eOpts) {
            console.info('tabchange for ' + tabPanel.id + ' ' + 'new: ' + newCard.id + ' old: ' + oldCard.id);
            navContext.setTheActivePanel(navContext.getActiveContext(), newCard.id);
        }
    }

});
