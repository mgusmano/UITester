Ext.define('EMSPEED.myprojects.view.myprojectsBasePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.myprojectsBasePanel',
    id: 'myprojectsBasePanel',
    requires: [
        'EMSPEED.myprojects.view.myprojects'
    ],
    layout: 'fit',
    border: 0,

    getParams: function (searchCriteria) {
        var sParams = {
            "filter": {
                "displayType": 1,
                "loadAuditInfo": true,
                "loadBaseAttributes": true,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadPmtKpis": true,
                "loadPmtRollUpKpis": false,
                "loadUrls": true,
                "searchCriteria": searchCriteria
            }
        };
        return sParams;
    },

    getProjectsStore: function (searchCriteria) {

        var sUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProjects';
        var theData = {};
        $.ajax({
            url: sUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(this.getParams(searchCriteria)),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: false
        })
        .done(function (data) {
            theData = data;
        })
        .fail(function (data) {
            alert(data.status + '-' + data.statusText);
        });

        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: this.fields,
            data: theData
            //proxy: {
            //    type: com.proxy,
            //    root: '',
            //    service: 'ProjectService',
            //    method: 'GetProjects',
            //    jsonData: sParams
            //}
        });

        return store;
    },


    initComponent: function () {

        this.fields = [
            { name: 'projectId', type: 'int', text: 'Project Id', dataIndex: 'projectId', width: 100, menuDisabled: true },
            { name: 'projectName', type: 'string', text: 'Project Name', dataIndex: 'projectName', flex: 1, menuDisabled: true, renderer: this.renderProjectName },
            { name: 'projectManager', type: 'string', text: 'Project Manager', dataIndex: 'projectManager', width: 200, menuDisabled: true },
            { name: 'productChampion', type: 'string', text: 'Product Champion', dataIndex: 'productChampion', width: 200, menuDisabled: true },
            { name: 'lastModifiedBy', type: 'string', text: 'Last Modified By', dataIndex: 'lastModifiedBy', width: 200, menuDisabled: true },
            { name: 'timeSpanFromLastUpdate', type: 'string', text: 'Last Update', dataIndex: 'timeSpanFromLastUpdate', width: 200, menuDisabled: true, hidden: true },
            {
                name: 'lastUpdateDate', type: 'string', text: 'Last Update', dataIndex: 'lastUpdateDate', width: 200, menuDisabled: true, renderer: this.renderLastUpdateDate,
                sortType: function (value) {
                    var theDate = new Date(parseInt(value.replace('/Date(', '')));
                    return theDate;
                }
            }
        ];

        this.dockedItems = [
            {
                xtype: 'container',
                dock: 'top',
                border: false,
                layout: 'hbox',
                height: 65,
                style: {
                    background: '#EDEDED'
                },
                items: [
                    {
                        xtype: 'label',
                        text: 'My Projects',
                        width: 200,
                        //id: 'lblProjectName',
                        style: { margin: '20px 0px 0px 25px', fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '25px' }
                    },
                    {
                        xtype: 'triggerfield',
                        width: 400,
                        labelStyle: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '25px' },
                        fieldLabel: 'Search',
                        labelWidth: 50,
                        xtype: 'searchfield',
                        margin: '25 0 0 0',
                        trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                        trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
                        initComponent: function () {
                            var me = this;
                            me.callParent(arguments);
                            me.on('specialkey', function (f, e) {
                                if (e.getKey() == e.ENTER) {
                                    me.onTrigger2Click();
                                }
                            });
                        },
                        afterRender: function () {
                            var me = this;
                            //me.callParent(arguments);
                            me.triggerCell.item(0).setDisplayed(false);
                        },
                        onTrigger1Click: function () {
                            var me = this;
                            dashboard.startLoading();
                            setTimeout(function () {
                                me.setValue('');
                                me.triggerCell.item(0).setDisplayed(false);
                                me.updateLayout();
                                var thePanel = me.up('panel');
                                var theGrid = thePanel.down('grid');
                                theGrid.bindStore(thePanel.getProjectsStore());
                                dashboard.endLoading();
                            }, 500);
                        },
                        onTrigger2Click: function () {
                            var me = this,
                                value = me.getValue();
                            if (value.length < 4) {
                                alert('Search criteria must contain 4 or more characters');
                            }
                            else {
                                dashboard.startLoading();
                                setTimeout(function () {
                                    me.triggerCell.item(0).setDisplayed(true);
                                    me.updateLayout();
                                    var thePanel = me.up('panel');
                                    var theGrid = thePanel.down('grid');
                                    theGrid.bindStore(thePanel.getProjectsStore(value));
                                    dashboard.endLoading();
                                }, 500);
                            }
                        }
                    },
                    {
                        xtype: 'component',
                        itemId: 'status',
                        width: 150,
                        tpl: 'Matching projects: {count}',
                        margin: '30 0 0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'myprojects-button',
                        margin: '15px 5px 0px 160px',
                        height: 35, width: 150,
                        id: 'btnprovisionproject',
                        text: 'PROVISION PROJECT',
                        handler: function () {
                            if (this.c === undefined) {
                                this.c = Ext.create('EMSPEED.provision.view.provisionBasePanel', {});
                            }
                            this.c.show();
                        }
                    }
                ]
            }


        ];

        this.items = [
            {
                xtype: 'grid',
                columns: this.fields,
                border: false,
                margin: '0 0 3 0',
                width: '100%',
                height: 535,
                cls: 'myprojects-grid',
                disableSelection: true,
                enableCtxMenu: false,  // turn off header context menu
                enableColLock: false,  // turn off column lock context items
                enableColumnMove: false,  // turn off column reorder drag drop
                enableColumnResize: false,  // turn off column resize for whole grid
                enableRowHeightSync: true
                //listeners: {
                //    afterrender: function () {
                //        alert('afterrender');
                //    }
                //}
            }
        ];
        this.callParent(arguments);
        this.down('grid').bindStore(this.getProjectsStore());
    //    dashboard.endLoading();
    },

    renderProjectName: function (value, p, record) {
        return Ext.String.format(
		    '<b><a style="text-decoration: underline;font-family: Univers 57 condensed " href="/sites/{0}/Portal.aspx" xtarget="_blank">{1}</a></b>',
		    record.data.projectId,
		    record.data.projectName
	    );
    },

    renderLastUpdateDate: function (value, p, record) {
        return record.data.timeSpanFromLastUpdate;
    }
});
