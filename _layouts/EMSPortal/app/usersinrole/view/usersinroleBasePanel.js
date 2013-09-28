Ext.define('EMSPEED.usersinrole.view.usersinroleBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.usersinroleBasePanel',
    id: 'usersinroleBasePanel',

    //these next 2 lines override baseclassPanel
    dockedItems: [],
    padding: '8px 0px 8px 0px',

    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
        }, 50);
    },

    initComponent: function () {
        this.fields = [
            { name: 'alias', type: 'string', text: 'Alias', dataIndex: 'alias', width: 150, menuDisabled: true, renderer: this.renderAlias },
            { name: 'firstName', type: 'string', text: 'First Name', dataIndex: 'firstName', width: 200, menuDisabled: true },
            { name: 'lastName', type: 'string', text: 'Last Name', dataIndex: 'lastName', width: 200, menuDisabled: true },
            { name: 'preferredName', type: 'string', text: 'Preferred Name', dataIndex: 'preferredName', menuDisabled: true, flex: 1 }
        ];
        Ext.apply(this, {
            items: [
                {
                    xtype: 'grid',
                    columns: this.fields,
                    //border: false,
                    //margin: '0 0 3 0',
                    width: '100%',
                    cls: 'myprojects-grid',
                    disableSelection: true,
                    enableCtxMenu: false,  // turn off header context menu
                    enableColLock: false,  // turn off column lock context items
                    enableColumnMove: false,  // turn off column reorder drag drop
                    enableColumnResize: false,  // turn off column resize for whole grid
                    enableRowHeightSync: true
                }
            ]
        });
        this.callParent(arguments);
        this.getData();
    },

    getParams: function () {
        return { "projectId": parseFloat(project.projectId) };
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProjectViewers';
        var theData = {};
        $.ajax({
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(this.getParams()),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: false
        })
        .done(function (data) {
            var store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                fields: me.fields,
                data: data
            });
            debugger;
            me.down('grid').bindStore(store);
            dashboard.endLoading();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    },

    renderAlias: function (value, p, record) {
        return Ext.String.format(
		    '<b><a style="text-decoration: underline;font-family: Univers 57 condensed " target="_blank" href="http://directory.slb.com/query.cgi?query={0}" >{0}</a></b>',
		    record.data.alias
	    );
    }
});
