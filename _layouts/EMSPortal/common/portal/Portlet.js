Ext.define('Ext.portal.Portlet', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portlet',
    layout: 'fit',
    anchor: '100%',
    frame: true,
    closable: true,
    collapsible: true,
    animCollapse: true,
    bodyPadding: 5,
    bodyBorder: 0,
    border: false,
    borderWidth: 0,
//    bodyStyle: {
//        borderColor: 'red',
//        borderStyle: 'solid'
//    },

//    bodyStyle: {
//        background: '#ffc',
//        padding: '10px'
//    },

    //tools: com.getTools(),


    get: function (s) {
         return this.currConfig.get(s)
    },

    configModified: function (s) {
        alert('configModified');
        alert(Ext.encode(this.currConfig));
        this.currConfig = s;
        alert(Ext.encode(this.currConfig));
        this.loadPage();
    },

    loadPage: function () {
        console.debug('baseportlet loadPage');
    },

//    draggable: {
//        moveOnDrag: false    
//    },
    cls: 'x-portlet',

    // Override Panel's default doClose to provide a custom fade out effect
    // when a portlet is removed from the portal
    doClose: function() {
        if (!this.closing) {
            this.closing = true;
            this.el.animate({
                opacity: 0,
                callback: function(){
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        }
    }
});
