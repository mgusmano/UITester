Ext.define('EMSPEED.dashboard.view.dashboardPortletRiskMatrix', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletRiskMatrix',
    layout: 'hbox',
    id: 'dashboardPortletRiskMatrix',

    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
        }, 50);
    },

    theColors: [
        ['insignificant', 'low', 'low', 'low', 'medium'],
        ['low', 'low', 'medium', 'medium', 'high'],
        ['low', 'medium', 'medium', 'high', 'high'],
        ['low', 'medium', 'high', 'high', 'extreme'],
        ['medium', 'high', 'high', 'extreme', 'extreme']
    ],
    
    clickableColors: ['insignificant', 'low', 'medium', 'high', 'extreme'],


    currColor: 'high', //'extreme',
    currentSelection: { insignificant: false, low: false, medium: false, high: true, extreme: true },
    
    updateFilter: function (rm) {
        var store = Ext.getCmp('gridStore').store;

        store.clearFilter();
        store.filterBy(function (r) {
            if (r.raw.riskSeverity === null) {
                return false;
            }
            if (r.raw.riskOccurrence === null) {
                return false;
            }

            var theRow = r.raw.riskSeverity - 1,
                theColumn = r.raw.riskOccurrence - 1;

            for (var item in rm.currentSelection) {
                if (rm.currentSelection[item]) {
                    if (rm.theColors[r.raw.riskOccurrence - 1][r.raw.riskSeverity - 1] == item) {
                        return true;
                    }
                }
            }


            return false;
        });

        for (var item in rm.currentSelection) {
            if (rm.currentSelection[item]) {
                $('.matrix ul.row li.' + item).addClass('the-selected-' + item);
                $('.matrix .filter li.' + item).addClass('the-selected-' + item);
            } else {
                $('.matrix ul.row li.' + item).removeClass('the-selected-' + item);
                $('.matrix .filter li.' + item).removeClass('the-selected-' + item);
            }
        }
    },

    initComponent: function () {
        dashboard.startLoading();

        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 10 10 10',
                    items: [
                        { xtype: 'text', text: 'Occurrence', margin: '0 0 0 25', degrees: 0 },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                { xtype: 'text', text: 'Severity', margin: '10 0 0 0', degrees: -90 },
                                {
                                    xtype: 'dataview',
                                    width: 216,
                                    listeners: {
                                        scope: this,
                                        itemclick: function (dataview, record, item, index, e, eOpts) {
                                            var store = this.down('grid').store;
                                            store.clearFilter();
                                            store.filter("riskSeverity", record.data.severity);
                                            store.filter("riskOccurrence", record.data.occurrence);
                                        }

                                    },
                                    singleSelect: true,
                                    overItemCls: 'x-view-over',
                                    itemSelector: '.clickable',
                                    emptyText: 'No data available',
                                    deferInitialRefresh: false,
                                    tpl: new Ext.XTemplate(
                                        '<div class="matrix">',
                                        '<tpl for=".">',
                                        '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                                        '</tpl>',
                                        '<div class="filter">',
                                            '<span>Filters</span>',
                                            '<ul>',
                                                '<li class="insignificant" data-e-value="insignificant">&nbsp;</li>',
                                                '<li class="low" data-e-value="low">&nbsp;</li>',
                                                '<li class="medium" data-e-value="medium">&nbsp;</li>',
                                                '<li class="high" data-e-value="high">&nbsp;</li>',
                                                '<li class="extreme" data-e-value="extreme">&nbsp;</li>',
                                            '</ul>',
                                        '</div>',
                                        '</div>',
                                        {
                                            disableFormats: true,
                                            doVal: function (r, c, v) {
                                                var rm = Ext.getCmp('dashboardPortletRiskMatrix');
                                                var s = '';
                                                if (c === 1) {
                                                    s = s + '<ul class="row">';
                                                }
                                                if (v === 0) {
                                                    s = s + '<li data-e-value="'+rm.theColors[r - 1][c - 1]+'" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + '' + '&nbsp;</li>';
                                                } else {
                                                    s = s + '<li data-e-value="' + rm.theColors[r - 1][c - 1] + '" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + v + '&nbsp;</li>';
                                                }
                                                if (c === 5) {
                                                    s = s + '</ul>';
                                                }
                                                return s;
                                            }
                                        }
                                    )
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    id:'gridStore',
                    margin: '27 15 0 0',
                    flex: 1,
                    height: 241,
                    columns: [
                        { text: 'Name', name: 'riskName', dataIndex: 'riskName', width: 300, menuDisabled: true, flex: 1 },
                        { text: 'S', name: 'riskSeverity', dataIndex: 'riskSeverity', width: 40, menuDisabled: true },
                        { text: 'O', name: 'riskOccurrence', dataIndex: 'riskOccurrence', width: 40, menuDisabled: true },
                        { text: 'R', name: 'riskScore', dataIndex: 'riskScore', width: 40, menuDisabled: true, tdCls: 'x-riskScore-cell' }
                    ],
                    viewConfig: {
                        getRowClass: function (record, index) {
                            
                            var theColor = this.up('panel').up('panel').theColors[record.get('riskOccurrence') - 1][record.get('riskSeverity') - 1];
                            var color = theColor + '-r';
                            return color;
                        }
                    }

                }
            ]
        });
        this.callParent(arguments);

        this.getData();


    },

    getData: function () {

        if (com.proxy === 'xmemoryProxy') {
            //me.loadTestData();
        }
        else {
            var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
            var getParams = { type: 1, projectId: parseFloat(project.projectId) };
            var me = this;
            $.ajax({
                url: theUrl,
                type: 'POST',
                crossDomain: true,
                data: Ext.encode(getParams),
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                dataType: 'json',
                async: true
            })
                .done(function (data) {

                    //if (com.proxy === 'memoryProxy') {
                    //    data = { "Matrix": [{ "severity": 1, "occurrence": 1, "count": 0 }, { "severity": 1, "occurrence": 2, "count": 9 }, { "severity": 1, "occurrence": 3, "count": 1 }, { "severity": 1, "occurrence": 4, "count": 0 }, { "severity": 1, "occurrence": 5, "count": 0 }, { "severity": 2, "occurrence": 1, "count": 3 }, { "severity": 2, "occurrence": 2, "count": 9 }, { "severity": 2, "occurrence": 3, "count": 1 }, { "severity": 2, "occurrence": 4, "count": 0 }, { "severity": 2, "occurrence": 5, "count": 0 }, { "severity": 3, "occurrence": 1, "count": 0 }, { "severity": 3, "occurrence": 2, "count": 4 }, { "severity": 3, "occurrence": 3, "count": 10 }, { "severity": 3, "occurrence": 4, "count": 0 }, { "severity": 3, "occurrence": 5, "count": 0 }, { "severity": 4, "occurrence": 1, "count": 0 }, { "severity": 4, "occurrence": 2, "count": 2 }, { "severity": 4, "occurrence": 3, "count": 0 }, { "severity": 4, "occurrence": 4, "count": 0 }, { "severity": 4, "occurrence": 5, "count": 0 }, { "severity": 5, "occurrence": 1, "count": 0 }, { "severity": 5, "occurrence": 2, "count": 0 }, { "severity": 5, "occurrence": 3, "count": 1 }, { "severity": 5, "occurrence": 4, "count": 0 }, { "severity": 5, "occurrence": 5, "count": 0 }], "Risks": [{ "riskSequence": 8, "riskName": "Modulation not recognized at surface due to channel distortion", "riskSeverity": 5, "riskOccurrence": 3, "riskScore": 15, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Physical data rates from 30k to 50k ft, Modulation, Spec 9" }, { "riskSequence": 9, "riskName": "Too many false alarms", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Physical data rates from 30k to 50k ft, Diagnostics, alarms, and automation, Spec 10" }, { "riskSequence": 10, "riskName": "Receivers and noise cancellation not working below 7 dB SNR", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Physical data rates from 30k to 50k ft, Receivers and noise cancellation, Spec 12" }, { "riskSequence": 13, "riskName": "Implementation errors", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for Pressure and Sampling tools, Data compression, Spec 21" }, { "riskSequence": 17, "riskName": "Implementation errors", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on DDR\/EMLA, Data compression, Spec 26" }, { "riskSequence": 20, "riskName": "Implementation errors", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for RSS tools, Data compression, Spec 29" }, { "riskSequence": 26, "riskName": "Implementation errors", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on Seismic measurements, Data compression, Spec 41" }, { "riskSequence": 30, "riskName": "Too many false alarms", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "RT diagnostics and smart alarms, Diagnostics, alarms, and automation, Spec 47" }, { "riskSequence": 31, "riskName": "Receivers and noise cancellation not working below 7 dB SNR", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Demodulation error rates, Receivers and noise cancellation, Spec 49" }, { "riskSequence": 36, "riskName": "Implementation errors", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Drilling Mechanics\/Dynamics data through mud pulse telemetry, Data compression" }, { "riskSequence": 38, "riskName": "Target depth not achieved with the required reliability", "riskSeverity": 3, "riskOccurrence": 3, "riskScore": 9, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Demodulation error rates, Receivers and noise cancellation" }, { "riskSequence": 34, "riskName": "Missing data", "riskSeverity": 4, "riskOccurrence": 2, "riskScore": 8, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "EcoScope's NGD measurements thorugh mud pulse telemetry, Receivers and noise cancellation" }, { "riskSequence": 35, "riskName": "Decoding false commands", "riskSeverity": 4, "riskOccurrence": 2, "riskScore": 8, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for Pressure and Sampling tools, Frame structure\/downlink protocol" }, { "riskSequence": 37, "riskName": "Not enough flexibility in the frame structure for drilling dynamics data", "riskSeverity": 3, "riskOccurrence": 2, "riskScore": 6, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Drilling Mechanics\/Dynamics data through mud pulse telemetry, Frame structure\/downlink protocol" }, { "riskSequence": 16, "riskName": "Missing commands", "riskSeverity": 3, "riskOccurrence": 2, "riskScore": 6, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for Pressure and Sampling tools, Frame structure\/downlink protocol, Spec 24" }, { "riskSequence": 7, "riskName": "NGD measurements not recovered at surface, NGD channels quality compromised due to compression", "riskSeverity": 3, "riskOccurrence": 2, "riskScore": 6, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "EcoScope's NGD measurements thorugh mud pulse telemetry, Decompression, Spec 8" }, { "riskSequence": 39, "riskName": "Loss of experienced technical contributors", "riskSeverity": 2, "riskOccurrence": 3, "riskScore": 6, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Project Development Time, Overall Product" }, { "riskSequence": 40, "riskName": "RSI from operating keyboard during development of software or using it", "riskSeverity": 3, "riskOccurrence": 2, "riskScore": 6, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Health, Safety and Environment, Overall Product" }, { "riskSequence": 15, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for Pressure and Sampling tools, Decompression, Spec 23" }, { "riskSequence": 5, "riskName": "Data compression algorithm not behaving as during the feasibility tests (offline data)", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "EcoScope's NGD measurements thorugh mud pulse telemetry, Data compression, Spec 6" }, { "riskSequence": 1, "riskName": "Algorithms takes too long to compute compressed curve", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Pumps-off APWD profile through mud pulse telemetry, Data compression, Spec 1" }, { "riskSequence": 2, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Pumps-off APWD profile through mud pulse telemetry, Decompression, Spec 2" }, { "riskSequence": 19, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on DDR\/EMLA, Decompression, Spec 28" }, { "riskSequence": 21, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for RSS tools, Decompression, Spec 30" }, { "riskSequence": 23, "riskName": "Algorithms takes too long to compute compressed curve", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Drilling Mechanics\/Dynamics data through mud pulse telemetry, Data compression, Spec 33" }, { "riskSequence": 24, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Drilling Mechanics\/Dynamics data through mud pulse telemetry, Decompression, Spec 34" }, { "riskSequence": 28, "riskName": "Decompressed channel data quality compromised due to compression", "riskSeverity": 2, "riskOccurrence": 2, "riskScore": 4, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on Seismic measurements, Decompression, Spec 44" }, { "riskSequence": 33, "riskName": "Budget reductions", "riskSeverity": 1, "riskOccurrence": 3, "riskScore": 3, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Project Development Time, Overall Product, Spec 55" }, { "riskSequence": 29, "riskName": "Data loss due to frames miss interpreted at surface", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on Seismic measurements, Frame structure\/downlink protocol, Spec 45" }, { "riskSequence": 32, "riskName": "Model not accurate", "riskSeverity": 2, "riskOccurrence": 1, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "SPT placement prediction accuracy, Pre-job preparation, Spec 50" }, { "riskSequence": 25, "riskName": "Data loss due to frames miss interpreted at surface", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Drilling Mechanics\/Dynamics data through mud pulse telemetry, Frame structure\/downlink protocol, Spec 35" }, { "riskSequence": 27, "riskName": "DPOINTS received in error are fed back to the decompression algorithm", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on Seismic measurements, Receivers and noise cancellation, Spec 42" }, { "riskSequence": 22, "riskName": "Data loss due to frames miss interpreted at surface", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for RSS tools, Frame structure\/downlink protocol, Spec 31" }, { "riskSequence": 3, "riskName": "Data loss due to frames miss interpreted at surface", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Pumps-off APWD profile through mud pulse telemetry, Frame structure\/downlink protocol, Spec 3" }, { "riskSequence": 4, "riskName": "DPOINTS received in error are fed back to the decompression algorithm", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Pumps-off APWD profile through mud pulse telemetry, Receivers and noise cancellation, Spec 4" }, { "riskSequence": 11, "riskName": "Model not accurate", "riskSeverity": 2, "riskOccurrence": 1, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Physical data rates from 30k to 50k ft, Pre-job preparation, Spec 13" }, { "riskSequence": 12, "riskName": "Model not accurate", "riskSeverity": 2, "riskOccurrence": 1, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "SPT placement application for different conditions, Pre-job preparation, Spec 16" }, { "riskSequence": 6, "riskName": "DPOINTS received in error are fed back to the decompression algorithm", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "EcoScope's NGD measurements thorugh mud pulse telemetry, Receivers and noise cancellation, Spec 7" }, { "riskSequence": 14, "riskName": "Data loss due to frames miss interpreted at surface", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Bandwidth optimization for Pressure and Sampling tools, Frame structure\/downlink protocol, Spec 22" }, { "riskSequence": 18, "riskName": "DPOINTS received in error are fed back to the decompression algorithm", "riskSeverity": 1, "riskOccurrence": 2, "riskScore": 2, "riskExposureCategorySequence": null, "riskExposureCategoryName": null, "placesUsed": "Compression on DDR\/EMLA, Receivers and noise cancellation, Spec 27" }] };
                    //}

                    var storeMatrix = Ext.create('Ext.data.Store', {
                        fields: ['count', 'occurrence', 'severity'],

                        data: data.Matrix

                    });
                    me.down('dataview').bindStore(storeMatrix);

                    var storeGrid = Ext.create('Ext.data.Store', {
                        fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
                        data: data.Risks
                    });

                    storeGrid.filter("riskSeverity", 10);
                    storeGrid.filter("riskOccurrence", 10);
                    me.down('grid').bindStore(storeGrid);

                    me.updateFilter(me);

                    dashboard.endLoading();

                })
                .fail(function (data) {
                    throw data.status + '-' + data.statusText + ': ' + theUrl;
                    //window.onerror(data.status + '-' + data.statusText + ': ' + theUrl, 'dashboardPortletKPI.js', 999);
                });
        }



    }

    //constructor: function (cfg) {
    //    this.initConfig(cfg);
    //    this.callParent(arguments);
    //},

    //get: function (s) {
    //    return this.currConfig.get(s);
    //},

    //configModified: function (s) {
    //    this.theConfig = s;
    //    this.loadPage();
    //}
});


$(function () {
    
    $('body').on('click', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value'),
            rm = Ext.getCmp('dashboardPortletRiskMatrix');
        
        rm.currentSelection[type] = !rm.currentSelection[type];
        rm.updateFilter(rm);

    });

    $('body').on('click', '.matrix ul.row li', function () {
        var color = $(this).attr('data-e-value');
        clearSelection();

        $(this).addClass('the-selected-' + color);

    });

    // filters
    $('body').on('mouseover', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).addClass('the-hover-' + type);

    }).on('mouseout', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).removeClass('the-hover-' + type);
    });

    var clearSelection = function () {
        rm = Ext.getCmp('dashboardPortletRiskMatrix');
        
        for (var item in rm.currentSelection) {
            rm.currentSelection[item] = false;
        }

        $('.matrix li').removeClass(function (index, classNames) {
            var currentClasses = classNames.split(" "),
                classesToRemove = [];

            $.each(currentClasses, function(index, className) {
                if (/the-selected.*/.test(className)) {
                    classesToRemove.push(className);
                }
            });

            return classesToRemove.join(" ");
        });

    };
    
});








//var store = Ext.create('Ext.data.Store', {
//    //autoLoad: true,
//    fields: ['Matrix', 'Risks'],
//    proxy: {
//        type: com.proxy,
//        root: '',
//        service: 'ProjectService',
//        method: 'GetRiskBurndown',
//        jsonData: { type: 1, projectId: parseFloat(com.getProjectId()) }
//    }
//});
//store.load({
//    scope: this,
//    callback: function (records, operation, success) {
//        if (success === true) {

//            var storeMatrix = Ext.create('Ext.data.Store', {
//                fields: ['count', 'occurrence', 'severity'],

//                data: store.data.items[0].raw.Matrix

//            });
//            this.down('dataview').bindStore(storeMatrix);

//            var storeGrid = Ext.create('Ext.data.Store', {
//                fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
//                data: store.data.items[0].raw.Risks
//            });

//            storeGrid.filter("riskSeverity", 10);
//            storeGrid.filter("riskOccurrence", 10);
//            this.down('grid').bindStore(storeGrid);

//            var temprm = Ext.getCmp('dashboardPortletRiskMatrix');
//            var tempstore = Ext.getCmp('gridStore').store;
//            this.updateFilter(tempstore, temprm);

//            dashboard.endLoading();
//        }
//        else {
//            alert('error');
//            dashboard.endLoading();
//            debugger;
//        }
//    }
//});
