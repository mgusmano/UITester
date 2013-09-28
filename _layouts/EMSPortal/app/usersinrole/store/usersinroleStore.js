Ext.define('EMSPEED.usersinrole.store.usersinroleStore', {
    extend: 'Ext.data.Store',
    model: 'EMSPEED.usersinrole.model.usersinroleModel',
    proxy: {
        type: 'ajax',
        url: '/_layouts/EMSPortal/data/userroles.jso',
        reader: {
            root: 'data',
            type: 'json'
        }
    },
    autoLoad: true
});
