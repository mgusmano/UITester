Ext.define('EMSPEED.interactive.view.interactiveBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.interactiveBasePanel',
    id: 'interactiveBasePanel',
    width: '100%',
    margin: '0 0 8 0',
    layout: 'card',
//    activeItem: 0, // index or id

    reportsLoaded: ['PMT'],
    currentProjectId: null,

    showInteractiveReport: function (report, projectId) {
        var me = this;
        me.currentProjectId = me.currentProjectId || project.projectId;
        
        if ($.inArray(report, me.reportsLoaded) == -1) {
            me.reportsLoaded.push(report);
        }

        $("#interactive td").removeClass('interactive-selected');
        $("#interactive td").each(function (el) {
            var $this = $(this);
            if (($this).attr('data-value') == report) {
                $this.addClass('interactive-have-report');
                $this.addClass('interactive-selected');
            }

        });
        
        if (projectId != "") {
            if (projectId != me.currentProjectId) {
                $("#interactive td").each(function (el) {
                    var $this = $(this);
                    if ((($this).attr('data-value') != 'PMT') && (($this).attr('data-value') != report)) {
                        $this.removeClass('interactive-have-report');
                    }

                });
                me.currentProjectId = projectId;
            }
        }
    },
    
    cleanUp:function() {
        $("#interactive td").each(function (el) {
            var $this = $(this);
            if (($this).attr('data-value') != 'PMT') {
                $this.removeClass('interactive-have-report');
                $this.removeClass('interactive-selected');
            }

        });
    },

    initComponent: function () {
        var me = this;
        var reportMasterLayout = Ext.getCmp('reportingInteractiveDetailPanel').masterLayout;
        var baseUrlTemplate = reportMasterLayout.interactiveBaseUrl + "{0}" + reportMasterLayout.interactiveBaseQueryString;
        baseUrlTemplate += "&contextId={1}&rc:LinkTarget=_self";
        
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        eventer(messageEvent, function (e) {
            var data = Ext.decode(e.data);
            
            var reportUrl = baseUrlTemplate.replace("{0}", data.reportPath).replace("{1}", data.projectId) + data.url;            
            Ext.getCmp('interactiveBasePanel').showInteractiveReport(data.reportType, data.projectId);
            Ext.getCmp('frame' + data.reportType).setSrc(reportUrl); //data.url
            var theActiveItem = Ext.getCmp('interactiveBasePanel').layout.setActiveItem(data.reportType);
            var reportTitle = data.title + " (" + data.projectId + ")";
            Ext.getCmp('interactiveBasePanel').setTheTitle(reportTitle);
            theActiveItem.theTitle = data.title;
        }, false);

        this.url = baseUrlTemplate.replace("{0}", reportMasterLayout.interactivePmtPath).replace("{1}", project.projectId);
        this.defaultReportTitel = "PMT (" + project.projectId + ")";
        var theSrc = this.url; 
        Ext.apply(this, {
            items: [
                {
                    id: 'framePMT',
                    itemId: 'PMT',
                    xtype: 'simpleIframe',
                    src: theSrc
                },
                {
                    id: 'frameRequirements',
                    itemId: 'Requirements',
                    xtype: 'simpleIframe'
                },
                {
                    id: 'framePAE',
                    itemId: 'PAE',
                    xtype: 'simpleIframe'
                },
                {
                    id: 'frameSpecificationByPhysicalArchitecture',
                    itemId: 'SpecificationByPhysicalArchitecture',
                    xtype: 'simpleIframe'
                },
                {
                    id: 'frameRisks',
                    itemId: 'Risks',
                    xtype: 'simpleIframe'
                },
                {
                    id: 'frameTests',
                    itemId: 'Tests',
                    xtype: 'simpleIframe'
                }
            ]
        });

        this.callParent(arguments);

        this.setTheTitle(this.defaultReportTitel);

        this.addDocked(
            {
                xtype: 'toolbar', dock: 'top',
                style: {
                    left: 0,
                    borderWidth: '0px',
                    padding: '0 0 0 0'
                },
                items: [
                    {
                        xtype: 'button',
                        margin: '0 0 10 0',
                        style: {
                            top: 0
                        },
                        id: 'theTBar',
                        text: '&laquo; Back to Interactive Report',
                        listeners : {
                            click: function() {
                                project.interactiveReporting = false;
                                Ext.getCmp('projectApplication').setActivePanel('reportingBasePanel');
                            }
                         }
                    },
                    {
                        xtype: 'button',
                        margin: '0 0 10 10',
                        style: {
                            top: 0
                        },
                        text: 'Reset',
                        listeners: {
                            scope: this, 
                            click: function () {
                                me.cleanUp();
                                Ext.getCmp('interactiveBasePanel').layout.setActiveItem('PMT');
                                Ext.getCmp('interactiveBasePanel').setTheTitle(this.defaultReportTitel);
                                this.items.items[0].setSrc(this.url);
                            }
                        }
                    }
                ]
            }
        );

        this.addDocked(
            {
                xtype: 'dataview',
                id: 'interactiveMenu',
                dock: 'bottom',
                listeners: {
                    scope: this,
                    itemclick: function (dataview, record, item, index, e, eOpts) {
                        var hasReport = $(item).hasClass('interactive-have-report'),
                            isSelected = $(item).hasClass('interactive-selected');
                        if (hasReport && !isSelected) {
                            var theActiveItem = Ext.getCmp('interactiveBasePanel').layout.setActiveItem(record.raw.menuItemId);
                            var reportTitle = record.raw.menuItemId + " (" + me.currentProjectId + ")";
                            Ext.getCmp('interactiveBasePanel').setTheTitle(reportTitle); //theActiveItem.theTitle
                            Ext.getCmp('interactiveBasePanel').showInteractiveReport(record.raw.menuItemId, "");
                        }
                    }
                },

                singleSelect: true,
                //overItemCls: 'x-view-over',
                selectedItemCls: 'theselected',
                itemSelector: 'td.selected',
                emptyText: 'No data available',
                deferInitialRefresh: false,
                store: Ext.create('Ext.data.Store', {
                    fields: ['menuItemName', 'menuItemId', 'state'],
                    data: [
                        { menuItemName: "PMT", menuItemId: "PMT", state: 'interactive-have-report interactive-selected' },
                        { menuItemName: "Requirement", menuItemId: "Requirements", state: '' },
                        { menuItemName: "Specification By PAE", menuItemId: "SpecificationByPhysicalArchitecture", state: '' },
                        { menuItemName: "Risk Register", menuItemId: "RiskRegister", state: '' },
                        { menuItemName: "Specification Risk", menuItemId: "SpecificationRisk", state: '' },
                        { menuItemName: "Corrective Action", menuItemId: "CorrectiveAction", state: '' },
                        { menuItemName: "Specifications", menuItemId: "Specifications", state: '' },
                        { menuItemName: "V & V", menuItemId: "VandV", state: '' },
                        { menuItemName: "PTT", menuItemId: "PTT", state: '' }
                    ]
                }),
                tpl: [
                    '<div class="interactive" id="interactive">',
                        '<table>',
                            '<tr>',
                                '<tpl for=".">',
                                    '<td data-value="{menuItemId}" class="selected {state}"><div class="">{menuItemName}</div></td>',
                                '</tpl>',
                            '</tr>',
                        '</table>',
                    '</div>'
                ]
            }
        );
    }
});
