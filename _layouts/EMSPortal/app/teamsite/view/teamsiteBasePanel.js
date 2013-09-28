Ext.define('EMSPEED.teamsite.view.teamsiteBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassContainer',
    alias: 'widget.teamsiteBasePanel',
    id: 'teamsiteBasePanel',
    layout: 'fit',
    padding: '0 0 0 0',
    items: [
        {
            height: '100%',
            xtype: 'simpleIframe',
            deferredRender: true
            //src: 'http://clms.ems.slb.com'
            //src: 'http://www.microsoft.com'
        }
    ]

});



