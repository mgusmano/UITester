Ext.define('EMSPEED.contextcontroller.view.contextcontrollerHoverButton', {
    extend: 'Ext.Button',
    alias: 'widget.hoverButton',
    iconAlign: 'bottom',
    iconOver: com.appFolder + '/contextcontroller' + '/resources/images/ContextUpArrowOver.png',
    iconOut: com.appFolder + '/contextcontroller' + '/resources/images/ContextUpArrow.png',
    icon: com.appFolder + '/contextcontroller' + '/resources/images/ContextUpArrow.png',

    hideTask: null,
    isOver: false,
    hideTaskMs: 5,
    hideTaskFn: function () {
        if (this.isOver) {
            if (this.hideTask !== null) this.hideTask.cancel();
            return;
        }
        if (this.hideTask !== null) {
            this.hideTask.cancel();

        }
        this.hideTask = new Ext.util.DelayedTask(this.hideIt, this);
        this.hideTask.delay(this.hideTaskMs);
    },

    hideIt: function () {
        this.hideMenu();
        this.setIcon(this.iconOut);
        this.ownerCt.focus();
    },

    applyListeners: function (menu, cfg) {
        Ext.apply(menu, cfg);
        Ext.each(menu.items, function (item, idx, allItems) {
            if (item.menu) {
                this.applyListeners(item.menu, cfg);
            }
        }, this);
    },

    initComponent: function () {
        var config = {}, menuConfig = {};
        if (Ext.isDefined(this.initialConfig.menu)) {
            config = {
                listeners: {
                    mouseover: {
                        fn: function (b) {
                            this.setIcon(this.iconOver);
                            this.isOver = true;
                            b.showMenu();
                        },
                        scope: this
                    },
                    mouseout: {
                        fn: function (b) {
                            this.isOver = false;
                            this.hideTaskFn();
                        },
                        scope: this
                    }
                }
            };
            // add listeners to see if user is over extended menu list
            menuConfig = {
                listeners: {
                    // if mousing over menu list, disable timeout
                    mouseover: {
                        fn: function (b) {
                            // cancel hide if they went away and came back
                            if (this.hideTask !== null) {
                                this.hideTask.cancel();
                                this.hideTask = null;
                            }
                        },
                        scope: this
                    },
                    // on mousing out of menu list, resume timeout
                    mouseleave: {
                        fn: function (b) {
                            this.hideTaskFn();
                        },
                        scope: this
                    }
                }
            };

            //apply mouseover/leave listeners to all submenus recursively
            this.applyListeners(this.menu, menuConfig);
        }

        Ext.apply(this, Ext.apply(this.initialConfig, config));
        this.callParent(arguments);
    }
});
