Ext.define('EMSPEED.myprojects.model.myprojectsModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'name',
            mapping: 'topic_title'
        },
        {
            name: 'id',
            mapping: 'post_id'
        },
        {
            name: 'upcomingcdp',
            mapping: 'forum_title'
        },
        {
            name: 'cdpindex',
            mapping: 'forumid'
        },
        {
            name: 'projectmanager',
            mapping: 'author'
        },
        {
            name: 'productchampion',
            mapping: 'author'
        },
        {
            name: 'status',
            mapping: 'forumid'
        },
        {
            name: 'updated',
            mapping: 'post_time',
            type: 'date',
            dateFormat: 'timestamp'
        }
    ],
    idProperty: 'post_id'
});
