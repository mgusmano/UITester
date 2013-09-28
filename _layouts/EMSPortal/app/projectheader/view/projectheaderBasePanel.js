Ext.define('EMSPEED.projectheader.view.projectheaderBasePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.projectheaderBasePanel',
    id: 'projectheaderBasePanel',
    requires: [
        'EMSPEED.projectheader.view.projectheader'
    ],
    bodyStyle: {
        background: '#EDEDED'
    },
    border: false,
    margin: '0 0 0 0',


    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
            dashboard.reloadPortlets();
        }, 50);
    },

    initComponent: function () {
        dashboard.startLoading();
        this.items = [
            {
                xtype: 'container',
                margin: '10 10 10 10',
                tpl: [
                    '<div class="project-header">',
                    '<tpl if="level &gt; 1">',
                        '<div class="row">',
                            '<tpl if="isParentAccessible==true">',
                                '<div class="parent-project"><p><a href="/sites/{parentProjectId}/Portal.aspx"><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</a></p></div>',
                            '<tpl else>',
                                '<div class="parent-project"><p><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</p></div>',
                            '</tpl>',
                        '</div>',
                    '</tpl>',
                    '<div class="row">',
                        '<div class="project-title <tpl if="level &gt; 1">has-parent</tpl>"><h2><span>{projectId} &ndash; </span> {projectName} <span class="product-group">{productGroupCode}</span></h2></div>',
                        '<div class="project-last-update"><span class="label">Updated:</span> <span class="value">{timeSpanFromLastUpdate}</span> </div>',
                    '</div>',
                    '<div class="row">',
                        '<div class="pm-pc">',
                            '<span class="label">Project Manager:</span> <span class="value">{projectManager}</span>',
                            '<span class="spacer">&nbsp;</span>',
                            '<span class="label">Product Champion:</span> <span class="value">{productChampion}</span>',
                        '</div>',
                    '</div>',
                '</div>'
                ]
            }
            //,{ xtype: 'button', align: 'right', text: 'Reload', scope: this, handler: function () { this.reload();} }
        ];

        this.callParent(arguments);
        this.getData();
    },

    getParams: function () {
        var sParams = {
            "filter": {
                "loadAuditInfo": true,
                "loadBaseAttributes": true,
                "loadDfxKpis": false,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadPmtKpis": false,
                "loadUrls": false,
                "projectId": parseFloat(project.getProjectId()),
                "rollUpThresholdId": 1,
                "rollUpSubProjectIds": [1]
            }
        };
        return sParams;
    },

    getData: function () {

        //var theData;
        //theData = project.data;
        //this.down('container').update(theData);
        //dashboard.endLoading();

        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProject';
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
            project.data = data;
            me.down('container').update(project.data);
            dashboard.endLoading();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});

function reloadPage() {
    Ext.getCmp('projectheaderBasePanel').reload();
    var image = new Image();
    image.src = "/_Layouts/EMSPortal/app/projectheader/resources/images/icon-reload-animated.gif";
    $("#emspeed-reload").attr('src', image.src);
}

/*tpl: [
                    '<div class="project-header">',
                    '<div class="row">',
                        '<div class="project-title"><h2><span class="pdd-id">{projectId} &ndash; </span> {name} <span class="product-group">SLB</span></h2></div>',
                        '<div class="project-last-update"><span class="label">Updated:</span> <span class="value">5 days ago</span></div>',
                        '<div class="emspeed-gear">',
                            '<ul id="gears">',
                                '<li class="gear-icon">',
                                    '<a href="#"><img src="/_layouts/EMSPortal/app/projectheader/resources/images/gear.png" class="emspeed-show-gear-menu" alt="" title="" /></a>',
                                    '<ul class="gears-submenu">',
                                        '<li><a href="#">Help</a></li>',
                                        '<li><a href="#">Feedback</a></li>',
                                        '<li><a href="#">Settings</a></li>',
                                    '</ul>',
                                '</li> ',
                                '<li class="fullscreen-icon">',
                                    '<a href="#"><img src="/_layouts/EMSPortal/app/projectheader/resources/images/maximize_screen.png" /></a>',
                                '</li>',
                            '</ul>',
                        '</div>',
                    '</div>',
                    '<div class="row">',
                        '<div class="pm-pc">',
                            '<span class="label">Project Manager:</span> <span class="value">Sabian Scordamaglia</span>',
                            '<span class="spacer">&nbsp;</span>',
                            '<span class="label">Product Champion:</span> <span class="value">Sabian Scordamaglia</span>',
                        '</div>',
                    '</div>',
                '</div>'
],*/
