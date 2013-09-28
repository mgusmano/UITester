Ext.define('EMSPEED.dashboard.view.dashboardPortletDfX', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletDfX',
    title: 'DfX',
    layout: 'fit',
    padding: '10 10 10 10',

    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
        }, 50);
    },


    initComponent: function () {
        dashboard.startLoading();

        var value = 50,
            theValue = parseFloat(value) / 100.0;

        Ext.apply(this, {
            items: [

                {
                    xtype: 'dataview',
                    emptyText: 'No data available',
                    deferInitialRefresh: false,

                    tpl: new Ext.XTemplate(
                        '<tpl for=".">',
                        '<div class="dfx">',
                            //'<tpl if="cdpSummary.InSync==' + "false" + '"><div><span data-hint="{cdpSummary.cdpTargetName}" class="emspeed-dfx-warning hint--bottom hint--warning"></span></div></tpl>',
                            '<table class="dfx-table" width="100%">',
                                '<tr>',
                                    '<td class="overall overall-label" colspan="3"><div class="overall-left">Overall DfX Score: <span>{[this.formatDfxNumbers(values.dfxSummary.overallIndex)]}</span></div></td>',
                                    //'<td class="overall" style="width:44px;"><div class="overall-right overall-top">&nbsp;</div></td>',
                                '</tr>',
                                '<tr>',
                                    '<td class="overall"><div class="overall-left overall-right">{[this.formatDfxNumbers(values.dfxSummary.manufacturingMfgIndex)]}</div></td>',
                                    '<td><div class="dfx-label">Manufacturing</div></td>',
                                    '<td class="next <tpl if="cdpSummary.manufacturingMfgIndex==' + "100" + ' || cdpSummary.manufacturingMfgOverride==' + "true" + '">next-complete</tpl>"><div class="next-top next-left next-right">{[this.formatDfxNumbers(values.cdpSummary.manufacturingMfgIndex)]}</div></td>',
                                '</tr>',
                                '<tr>',
                                    '<td class="overall"><div class="overall-left overall-right">{[this.formatDfxNumbers(values.dfxSummary.manufacturingScIndex)]}</div></td>',
                                    '<td><div class="dfx-label">Supply Chain </div></td>',
                                    '<td class="next <tpl if="cdpSummary.manufacturingScIndex==' + "100" + ' || cdpSummary.manufacturingScOverride==' + "true" + '">next-complete</tpl>"><div class="next-left next-right">{[this.formatDfxNumbers(values.cdpSummary.manufacturingScIndex)]}</div></td>',
                                '</tr>',
                                '<tr>',
                                    '<td class="overall"><div class="overall-left overall-right">{[this.formatDfxNumbers(values.dfxSummary.reliabilityIndex)]}</div></td>',
                                    '<td><div class="dfx-label">Reliability</div></td>',
                                    '<td class="next <tpl if="cdpSummary.reliabilityIndex==' + "100" + ' || cdpSummary.reliabilityOverride==' + "true" + '">next-complete</tpl>"><div class="next-left next-right">{[this.formatDfxNumbers(values.cdpSummary.reliabilityIndex)]}</div></td>',
                                '</tr>',
                                '<tr>',
                                    '<td class="overall"><div class="overall-left overall-right overall-bottom">{[this.formatDfxNumbers(values.dfxSummary.maintainabilityIndex)]}</div></td>',
                                    '<td><div class="dfx-label">Maintainability</div></td>',
                                    '<td class="next <tpl if="cdpSummary.maintainabilityIndex==' + "100" + ' || cdpSummary.maintainabilityOverride==' + "true" + '">next-complete</tpl>"><div class="next-left next-right">{[this.formatDfxNumbers(values.cdpSummary.maintainabilityIndex)]}</div></td>',
                                '</tr>',
                                '<tr>',
                                    //'<td class="next next-complete" style="width:44px; padding: 2px 0 0 5px;">&nbsp; <tpl if="cdpSummary.inSync ==' + "false" + '"><span data-hint="Target CDP Event from PDD does not match Target CDP Event in DfX Checklist" class="emspeed-dfx-warning hint--bottom hint--warning"></span></tpl></td>',
                                    '<td colspan="3" class="next next-label" style="text-align: right;"><div class="next-right">Target DfX CDP</div></td>',
                                '</tr>',
                            '</table>',
                            '<div class="cdp-readiness">',
                                '<div class="row"><span class="label">Target PDD CDP:</span> <span class="value">{cdpSummary.cdpNextName} ({[this.getDate(values.cdpSummary.previousPlanDate)]})</span> <tpl if="cdpSummary.inSync ==' + "false" + '"><span data-hint="Target CDP Event from PDD does not match Target CDP Event in DfX Checklist" class="emspeed-dfx-warning hint--left hint--warning"></span></tpl></div>',
                                '<div class="row"><span class="label">CDP Readiness:</span> <span class="value">{cdpSummary.readiness}</span></div>',
                                '<div class="row"><span class="label">Slip:</span> <span class="value">{cdpSummary.slip}</span></div>',
                            '</div>',
                        '</div>',
                        '</tpl>',
                        {
                            disableFormats: true,
                            getDate: function (d) {
                                var theDate = new Date(parseInt(d.replace('/Date(', '')));
                                return theDate.toDateString();
                            },
                            formatDfxNumbers: function(value) {
                                var parsedValue = parseFloat(value);
                                if (isNaN(parsedValue)) {
                                    return value;
                                } else {
                                    return Math.round(parsedValue) + '%';
                                }
                            }
                        }
                    )
                }
            ]
        });
        this.callParent(arguments);
        this.getData();
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService' + '.svc/json/' + 'GetCdpDfxSummary';
        var theData = {};
        $.ajax({
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode({ projectId: parseFloat(com.getProjectId()) }),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: false
        })
        .done(function (data) {

            //if (com.proxy === 'memoryProxy') {
            //    data = { "dfxSummary": { "overallIndex": 52, "manufacturingMfgIndex": 35.63, "manufacturingScIndex": 22.29, "reliabilityIndex": 10.53, "maintainabilityIndex": 0 }, "cdpSummary": { "cdpNextName": "Project Request", "cdpTargetName": "Concurrent Team Launch", "inSync": true, "manufacturingMfgIndex": null, "manufacturingMfgOverride": null, "manufacturingScIndex": null, "manufacturingScOverride": null, "reliabilityIndex": 100, "reliabilityOverride": true, "maintainabilityIndex": 0, "maintainabilityOverride": false, "previousPlanDate": "\/Date(1372568400000)\/", "readiness": "%", "slip": "13W" } };
            //}

            me.down('dataview').update(data);
            dashboard.endLoading();

        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});
