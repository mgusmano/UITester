Ext.define('EMSPEED.tasks.view.tasksBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.tasksBasePanel',
    id: 'tasksBasePanel',
    layout: 'absolute',

    initComponent: function () {
        this.items = [
            { xtype: 'image', src: project.imagesFolder + 'wireframes/tasks.jpg' }
        ];
        this.callParent(arguments);
        this.setTheTitle('Project Tasks');
    }

});
