Ext.define('EMSPEED.usersinrole.store.forumthreadStore', {
    extend: 'Ext.data.Store',
    pageSize: 10,
    model: 'EMSPEED.usersinrole.model.forumthreadModel',
    proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://www.sencha.com/forum/topics-browse-remote.php',
        reader: {
            root: 'topics',
            totalProperty: 'totalCount'
        },
        // sends single sort as multi parameter
        simpleSortMode: true
    },


    remoteSort: true,
    sorters: [{
        property: 'title',
        direction: 'ASC'
    }],
    autoLoad: true
});
