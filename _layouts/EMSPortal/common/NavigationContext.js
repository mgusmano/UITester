Ext.define('COMMON.NavigationContext', {
    config: {
        activeApplication: null,
        activeContext: null,
        //activeContextInstance
        activePanel: '',
        activeItem: ''


        //activeEntity
        //activeEntityInstance
        //activeDashboard
        //activeViewer

    },

    //    setActiveContext: function (value) {
    ////        alert('set: ' + value);
    //        return value;
    //    },


    //    applyActiveContext: function (value) {
    // //       alert('apply: ' + value);
    //        return value;
    //    },

    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },

    setContext: function (context) {
        Ext.getCmp('tb' + context).toggle(true, true);
        this.setActiveContext(context);
        this.setActiveApplication(context + constants.application);
        this.setActivePanel(getObj(this.getActiveApplication()).getCurrentPanel());

        //console.info('navContext.setContext:');
        //console.info(this);

        //       getObj('nav').setContext(context);
        getObj('center').setContext(context);
    },

    setTheActivePanel: function (context, panel) {
        console.info('setTheActivePanel' + ' - context: ' + context + ' - panel: ' + panel);
        getObj('tb' + context).toggle(true, true);
        this.setActiveContext(context);
        //this.activeNavObj = getObj(context + 'nav');
        //this.activeAppObj = getObj(context + 'app');
        this.setActiveApplication(context + EMSPEED.config.Constants.application);
        this.setActivePanel(panel);
        getObj(this.getActiveApplication()).setCurrentPanel(panel);
        //this.activeAppObj.setCurrentPanel(panel);
        //       getObj('nav').setContext(context);
        getObj('center').setContext(context);
    },

    setTheActiveItem: function (context, item) {
        if (this.activeContext == context) {
            var oldItem = this.activeItem;
            var newItem = item;
            this.activeContext = context;
            //            this.activeNavObj = getObj(context + 'nav');
            //this.activeAppObj = getObj(context  + EMSPEED.config.Constants.application);
            this.setActiveApplication(context + EMSPEED.config.Constants.application);
            var activeAppObj = getObj(this.getActiveApplication());
            this.activeItem = item;

            this.activeAppObj.currentItem = this.activeItem;

            var o = activeAppObj.items.items;
            Ext.Object.each(o, function (theIndex, theItem, allItems) {
                console.log(theItem.id);
                theItem.itemChanged(oldItem, newItem);
            });

            //           getObj('nav').setContext(context);
            getObj('center').setContext(context);
        }
        else {
            this.setContext(context);
            console.log('setTheActiveItem: activeContext,' + this.activeContext + ' new context,' + context);
        }

    },

    logContext: function () {
        console.log('activeContext: ' + this.getActiveContext());
        //       console.log('activeNavObj: ' + this.activeNavObj.id);
        console.log('activeApplication: ' + this.activeApplication);
        //        console.log('activeViewerObj: ' + this.activeViewerObj.id);
        console.log('activePanel: ' + this.activePanel);
        console.log('activeItem: ' + this.activeItem);

        try {
            console.log('projectapp currentPanel: ' + getObj('projectapp').currentPanel);
        }
        catch (e) {
            console.log('projectapp currentPanel: error');
        };

    }
});
