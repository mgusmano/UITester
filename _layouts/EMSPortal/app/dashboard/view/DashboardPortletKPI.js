Ext.define('EMSPEED.dashboard.view.dashboardPortletKPI', {
    extend: 'EMSPEED.dashboard.view.dashboardPortletBase',
    alias: 'widget.dashboardPortletKPI',
    title: 'KPI',
    layout: 'fit',

    reload: function () {
        dashboard.startLoading();
        var me = this;
        setTimeout(function () {
            me.getData();
        }, 50);
    },

    fields: [
        {
            name: 'snapshotDate', type: 'string', text: 'Snapshot Date', dataIndex: 'snapshotDate', menuDisabled: true, flex: 1,
            convert: function (v, j) {
                return new Date(parseInt(v.replace('/Date(', '')));
            }
        },
        { name: 'dfxScore', type: 'string', text: 'DFX', dataIndex: 'dfxScore', menuDisabled: true },
        { name: 'riskMaturityIndex', type: 'string', text: 'Risk', dataIndex: 'riskMaturityIndex', menuDisabled: true },
        { name: 'productMaturityIncrementalIndex', type: 'string', text: 'PMI', dataIndex: 'productMaturityIncrementalIndex', menuDisabled: true },
        { name: 'requirementMaturityIndex', type: 'string', text: 'RMT', dataIndex: 'requirementMaturityIndex', menuDisabled: true }
    ],

    initComponent: function () {
        dashboard.startLoading();

        var chartParms = this.getAxis();

        Ext.apply(this, {
            items: [
                {
                    xtype: 'tabpanel',
                    margin: '10 10 10 10', 
                    border: true,
                    tabBar: {
                        style: { backgroundColor: '#FFFFFF' },
                        bodyStyle: { backgroundColor: '#FFFFFF' }
                    },

                    items: [
                        { xtype: 'container', title: 'Chart', layout: 'vbox', items: [
                            {
                                xtype: 'chart',
                                style: 'background:#fff',
                                height: 270,
                                width: '100%',
                                animate: false,
                                store: Ext.create('Ext.data.ArrayStore'),
                                //shadow: true,
                                //theme: 'Category1',
                                legend: false,
                                axes: [
                                    chartParms.axisPercent,
                                    chartParms.axisTime
                                ],
                                series: [
                                    this.getSeries('RMT', '#0000ff'),
                                    this.getSeries('Risk', '#ff0000'),
                                    this.getSeries('DFX', '#009900'),
                                    this.getSeries('PMT', '#ff9900')
                                ]
                            }, //chart 
                            {
                                xtype: 'container',
                                id: 'theFooter',
                                html: '<div style="margin: 0px 0px 0px 10px;background-color:white;height:25px;width:824px">' +
                                        '<span style="color:blue;font-weight:bold;">RMT</span><span style="color:black;">=Requirements Maturity</span>' + '&nbsp;&nbsp;&nbsp;' +
                                        '<span style="color:#ff0000;font-weight:bold;">Risk</span><span style="color:black;">=Risk Score</span>' + '&nbsp;&nbsp;&nbsp;' +
                                        '<span style="color:#009900;font-weight:bold;">DFX</span><span style="color:black;">=Lifecycle Attributes</span>' + '&nbsp;&nbsp;&nbsp;' +
                                        '<span style="color:#ff9900;font-weight:bold;">PMT</span><span style="color:black;">=Product Maturity</span>' +
                                        '</div>'
                            }  //footer
                        ]
                        },
                        {
                            xtype: 'grid',
                            title: 'Data',
                            border: false,
                            margin: '0 0 0 0',
                            width: '100%',
                            cls: 'myprojects-grid',
                            disableSelection: true,
                            enableCtxMenu: false,  // turn off header context menu
                            enableColLock: false,  // turn off column lock context items
                            enableColumnMove: false,  // turn off column reorder drag drop
                            enableColumnResize: false,  // turn off column resize for whole grid
                            enableRowHeightSync: true,
                            columns: this.fields
                            //store: Ext.create('Ext.data.Store', {
                            //    autoLoad: true,
                            //    fields: fields,
                            //    data:theData.Snapshots
                            //})
                        }
                    ]
                }
            ]
        });

        this.callParent(arguments);

        //var me = this;
        var theChart = this.down('chart');
        theChart.legend = Ext.create('Ext.ux.chart.SmartLegend', {
            position: 'right',
            chart: theChart,
            rebuild: true,
            boxStrokeWidth: 1
        });
        //me.setGrid(me, theData, theChart);
        this.getData();
    },

    getAxis: function () {
        var axisPercent = {
            type: 'Numeric',
            constrain: false,
            dashSize: 1,
            minimum: 0,
            maximum: 100,
            position: 'left',
            fields: ['RMT','DFX', 'PMT', 'Risk'],
            title: false,
            minorTickSteps: 1,
            grid: {
                odd: {
                    opacity: 1,
                    fill: '#ddd',
                    stroke: '#bbb',
                    'stroke-width': 0.5
                }
            }
        };
        var axisTime = {
            type: 'Time',
            position: 'bottom',
            fields: ['snapshotDate'],
            title: false,
            dateFormat: 'm/d/y',
            minorTickSteps: 0,
            constrain: false,
            label: {
                orientation: 'horizontal',
                rotate: {
                    degrees: 0
                }
            },
            grid: false
        };

        var chartParms = {};
        chartParms.axisPercent = axisPercent;
        chartParms.axisTime = axisTime;
        return chartParms;
    },

    getSeries: function (series, color) {
        var theSeries = {
            type: 'line',
            xField: 'snapshotDate',
            yField: series,
            lastVal: 0,
            selectionTolerance: 4,
            style: { fill: color, stroke: color },
            shadowAttributes: [{ stroke: color, "stroke-width": 2, "stroke-opacity": 1, translate: { x: 1, y: 1 } }],
            axis: 'left',
            smooth: false,
            fill: false,
            highlight: { stroke: color, size: 4, radius: 4 },
            tips: {
                items: {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        { xtype: 'label', itemId: 'theType' },
                        { xtype: 'label', itemId: 'theValue' },
                        { xtype: 'label', itemId: 'theSnapshotDate' },
                        { xtype: 'label', itemId: 'theSnapshotTime' }
                    ]
                },
                trackMouse: true,
                maxWidth: 500,
                width: 150,
                height: 75,
                renderer: function (klass, item) {
                    var storeItem = item.storeItem;
                    var yField = item.series.yField;
                    this.setTitle('Selected Data Point');
                    this.down('label[itemId=theType]').setText('Type: ' + yField);
                    this.down('label[itemId=theValue]').setText('Value: ' + storeItem.get(yField));

                    var convertedStartDate = new Date(storeItem.get('snapshotDate'));
                    var month = convertedStartDate.getMonth() + 1
                    var day = convertedStartDate.getDay();
                    var year = convertedStartDate.getFullYear();
                    var shortStartDate = month + "/" + day + "/" + year;

                    var d = convertedStartDate.toLocaleDateString();
                    this.down('label[itemId=theSnapshotDate]').setText('Date: ' + d);

                    var t = convertedStartDate.toLocaleTimeString().replace(/:\d+ /, ' ');
                    this.down('label[itemId=theSnapshotTime]').setText('Time: ' + t);
                }
            }
        }
        return theSeries;
    },

    getData: function () {

        var me = this;
        if (com.proxy === 'xmemoryProxy') {
            theData = { "FirstSnapshotDate": "\/Date(1360209458850-0600)\/", "LastSnapshot": { "snapshotDate": "\/Date(1374175715533-0500)\/", "dfxScore": 0, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, "LastSnapshotDate": "\/Date(1374175715533-0500)\/", "Snapshots": [{ "snapshotDate": "\/Date(1360209458850-0600)\/", "dfxScore": 100, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 87.18, "riskMaturityIndex": 33.29 }, { "snapshotDate": "\/Date(1360719057287-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 0, "riskMaturityIndex": 0 }, { "snapshotDate": "\/Date(1360721248690-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 0 }, { "snapshotDate": "\/Date(1360732021430-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360734252020-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360734491877-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 30.19, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360799772037-0600)\/", "dfxScore": 7.49, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, { "snapshotDate": "\/Date(1366761014857-0500)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, { "snapshotDate": "\/Date(1374175715533-0500)\/", "dfxScore": 0, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }] };
        }
        else {
            var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService' + '.svc/json/' + 'GetKpiTrend';
            var theParams = { filter: { orderBy: null, projectId: parseFloat(com.getProjectId()), snapshotDateRange: null } };
            $.ajax({
                url: theUrl,
                type: 'POST',
                data: Ext.encode(theParams),
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                dataType: 'json',
                async: false
            })
            .done(function (data) {

                //if (com.proxy === 'memoryProxy') {
                //    data = { "FirstSnapshotDate": "\/Date(1360209458850-0600)\/", "LastSnapshot": { "snapshotDate": "\/Date(1374175715533-0500)\/", "dfxScore": 0, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, "LastSnapshotDate": "\/Date(1374175715533-0500)\/", "Snapshots": [{ "snapshotDate": "\/Date(1360209458850-0600)\/", "dfxScore": 100, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 87.18, "riskMaturityIndex": 33.29 }, { "snapshotDate": "\/Date(1360719057287-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 0, "riskMaturityIndex": 0 }, { "snapshotDate": "\/Date(1360721248690-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 0 }, { "snapshotDate": "\/Date(1360732021430-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 0, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360734252020-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360734491877-0600)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 30.19, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 2.42 }, { "snapshotDate": "\/Date(1360799772037-0600)\/", "dfxScore": 7.49, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, { "snapshotDate": "\/Date(1366761014857-0500)\/", "dfxScore": 0, "productMaturityIndex": null, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }, { "snapshotDate": "\/Date(1374175715533-0500)\/", "dfxScore": 0, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 22.65, "requirementMaturityIndex": 49.53, "riskMaturityIndex": 6.04 }] };
                //}

                var theChart = me.down('chart');
                var theGrid = me.down('grid');

                var storeGrid = Ext.create('Ext.data.Store', {
                    autoLoad: true,
                    fields: me.fields,
                    data: data.Snapshots
                });
                theGrid.bindStore(storeGrid);

                var storeSnapshots = Ext.create('Ext.data.Store', {
                    fields: [
                        { name: 'DFX', mapping: 'dfxScore' },
                        { name: 'RMT', mapping: 'requirementMaturityIndex' },
                        { name: 'PMT', mapping: 'productMaturityIndex' },
                        { name: 'Risk', mapping: 'riskMaturityIndex' },
                        {
                            name: 'snapshotDate', mapping: 'snapshotDate', type: 'date',
                            convert: function (v, j) {
                                return new Date(parseInt(v.replace('/Date(', '')));
                            }
                        }
                    ],
                    data: data.Snapshots
                });
                theChart.bindStore(storeSnapshots);

                var lastScore = {
                    'RMT': data.LastSnapshot.requirementMaturityIndex,
                    'Risk': data.LastSnapshot.riskMaturityIndex,
                    'DFX': data.LastSnapshot.dfxScore,
                    'PMT': data.LastSnapshot.productMaturityIndex
                };
                for (var i = 0; i < theChart.series.length; i++) {
                    var s = theChart.series.getAt(i);
                    var yField = s['yField'];
                    s['lastVal'] = lastScore[yField];
                }

                if (me.theConfig.StartDate === null) {
                    me.theConfig.StartDate = new Date(parseInt(data.FirstSnapshotDate.replace('/Date(', '')));
                }
                if (me.theConfig.EndDate === null) {
                    theLastSnapshotDate = new Date(parseInt(data.LastSnapshotDate.replace('/Date(', '')));
                    var dateLastSnapshotDateMinus1 = new Date();
                    dateLastSnapshotDateMinus1.setDate(theLastSnapshotDate - 1);
                    me.theConfig.EndDate = dateLastSnapshotDateMinus1;
                }
                me.resetChart(me.theConfig.StartDate, me.theConfig.EndDate, me.theConfig.MarkerConfigSize, me.theConfig.YAxis);

                dashboard.endLoading();

            })
                .fail(function (data, x, y, z) {
                    throw data.status + '-' + data.statusText + ': ' + theUrl;
                });
        }
    },

    configModified: function (theConfig) {
        this.resetChart(theConfig.StartDate, theConfig.EndDate, theConfig.MarkerConfigSize, theConfig.YAxis);
        this.down('chart').redraw();
    },
    resetChart: function (StartDate, EndDate, MarkerConfigSize, YAxis) {
        var chart = this.down('chart');
        var dateAxis = chart.axes.getAt(1);
        dateAxis.fromDate = new Date(StartDate);
        dateAxis.toDate = new Date(EndDate);

        var iUnit = parseInt(YAxis.unit);
        switch (YAxis.step) {
            case 'day':
                dateAxis.step = [Ext.Date.DAY, iUnit];
                break;
            case 'month':
                dateAxis.step = [Ext.Date.MONTH, iUnit];
                break;
            case 'year':
                dateAxis.step = [Ext.Date.YEAR, iUnit];
                break;
            default:
                dateAxis.step = [Ext.Date.DAY, 1];
                break;
        }

        for (var i = 0; i < chart.series.items.length; i++) {
            chart.series.items[i].markerConfig = { type: 'circle', size: MarkerConfigSize, radius: MarkerConfigSize, 'stroke-width': 0 };
        }

        //An array with two components: The first is the unit of the step (day, month, year, etc). 
        //The second one is a number. If the number is an integer, it represents the number of units for the step 
        //([Ext.Date.DAY, 2] means "Every other day"). If the number is a fraction, it represents the number of steps per unit ([Ext.Date.DAY, 1/2] means "Twice a day"). If the unit is the month, the steps may be adjusted depending on the month. For instance [Ext.Date.MONTH, 1/3], which means "Three times a month", generates steps on the 1st, the 10th and the 20th of every month regardless of whether a month has 28 days or 31 days. The steps are generated as follows: - [Ext.Date.MONTH, n]: on the current date every 'n' months, maxed to the number of days in the month. - [Ext.Date.MONTH, 1/2]: on the 1st and 15th of every month. - [Ext.Date.MONTH, 1/3]: on the 1st, 10th and 20th of every month. - [Ext.Date.MONTH, 1/4]: on the 1st, 8th, 15th and 22nd of every month.

        //chart.redraw();
    },
    sourceConfig: {
        StartDate: {
            displayName: 'Start Date',
            type: 'date'
        },
        EndDate: {
            displayName: 'End Date',
            type: 'date'
        },
        MarkerConfigSize: {
            displayName: 'Marker Config Size',
            editor: new Ext.form.field.ComboBox({
                store: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
                editable: false,
                forceSelection: true
            })
        },
        YAxis: {
            displayName: 'Y Axis Display',
            //editor: new EMSPEED.dashboard.view.dashboardCustomEditorFieldYAxis({}),
            renderer: function (v) {
                var value = Ext.decode(v),
                    unit = value.unit,
                    step = value.step,
                    description = '';
                var iUnit = parseInt(unit);
                var s = '';
                if (iUnit > 1) {
                    s = 's';
                }
                description += 'Every ' + unit + '';
                description += ' ' + step + s;
                return description;
            }
        }
    }
});

//                {
//                    xtype: 'toolbar',
//                    width: '100%',
//                    border: 0,
//                    items: [
//                        {
//                            text: 'fit',
//                            width: '95px',
//                            listeners: {
//                                click: function (me, e, eOpts) {
//                                    var chart = Ext.getCmp('theChart');
//                                    //Ext.getCmp('PortletKMI').setLoading('Working...');
//                                    setTimeout(function () {
//                                        var dateAxis = chart.axes.getAt(1);
//                                        dateAxis.fromDate = new Date('2013-02-05T21:57:38.85');
//                                        dateAxis.toDate = new Date('2013-03-08T18:50:14.857');
//                                        dateAxis.step = [Ext.Date.MONTH, 1];
//                                        chart.redraw();
//                                        //Ext.getCmp('PortletKMI').setLoading(false);
//                                    }, 50);
//                                }
//                            }
//                        }, //fit

//                        {
//                        text: 'sliders',
//                        width: '95px',
//                        handler: function (me, e, eOpts) {
//                            var c = Ext.getCmp('dateSliders');
//                            c.setVisible(c.isHidden());
//                            var p = Ext.getCmp('percentSliders');
//                            p.setVisible(p.isHidden());
//                            var f = Ext.getCmp('theFooter');
//                            f.setVisible(p.isHidden());
//                        }
//                    }, //sliders

//                        {
//                        text: 'Save Chart',
//                        width: '95px',
//                        handler: function () {
//                            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function (choice) {
//                                if (choice == 'yes') {
//                                    Ext.getCmp('theChart').save({
//                                        type: 'image/png'
//                                    });
//                                }
//                            });
//                        }
//                    }, //save chart
//                        {
//                        text: 'reset',
//                        width: '95px',
//                        handler: function (me, e, eOpts) {
//                            var chart = Ext.getCmp('theChart');
//                            //Ext.getCmp('PortletKMI').setLoading('Working...');
//                            setTimeout(function () {
//                                var dateAxis = chart.axes.getAt(1);
//                                dateAxis.fromDate = dateYearAgo;
//                                dateAxis.toDate = dateToday;
//                                dateAxis.step = [Ext.Date.MONTH, 3];
//                                chart.redraw();
//                                var percentAxis = chart.axes.getAt(0);
//                                percentAxis.minimum = 0,
//                                            percentAxis.maximum = 100,
//                                            chart.redraw();

//                                Ext.getCmp('slidePercent').setValue(100);
//                                Ext.getCmp('slideDateFrom').setValue(1);
//                                Ext.getCmp('slideDateTo').setValue(365);

//                                // Ext.getCmp('PortletKMI').setLoading(false);
//                            }, 50);
//                        }
//                    } //reset
//                ]
//                }, //toolbar




//Ext.define('EMSPEED.dashboard.view.CustomEditorField', {
//    extend: 'Ext.form.field.Picker',
//    alias: 'widget.customeditorfield',
//    editable: false,
//    hideTrigger: true,
//    pickerOffset: [ 0, -23 ],
//    listeners: {
//        focus: function( fld, e, opts ) {
//            fld.expand();
//        }
//    },
//    cancelEdit: function() {
//        var me = this;
//        me.fireEvent( 'blur' );
//        me.collapse();       
//    },
//    applyValues: function() {
//        debugger;
//        var me = this,
//            form = me.picker,
//            vals = form.getForm().getValues();    
//        // set the value of the editable field        
//        me.setValue( Ext.encode( vals ) );
//        me.fireEvent( 'blur' );
//        me.collapse();        
//    },
//    createPicker: function() {
//    debugger;
//        var me = this,
//            format = Ext.String.format;
//        return Ext.create('Ext.form.Panel', {
//            title: 'Enter Product Details',
//            //height: 250,
//            bodypadding:5,
//            header: { xtype: 'container', html: 'Edit...', padding: '4 4 4 8' },
//            pickerField: me,
//            ownerCt: me.ownerCt,
//            renderTo: document.body,
//            floating: true,
//            bodyPadding:8,
//            items: [
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Product',
//                    labelAlign: 'top',
//                    anchor: '100%',
//                    name: 'product'
//                },
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Tagline',
//                    labelAlign: 'top',
//                    anchor: '100%',
//                    name: 'tagline'
//                }                           
//            ],
//            dockedItems: [
//                {
//                    xtype: 'toolbar',
//                    dock: 'bottom',
//                    items: [
//                        {
//                            xtype: 'button',
//                            name:'save',
//                            text:'Save',
//                            //iconCls: 'accepticon',
//                            handler: function( btn, e, opts ) {
//                                me.applyValues();
//                            }                                
//                        },
//                        '->',                        
//                        {
//                            xtype: 'button',
//                            name:'cancel',
//                            text:'Cancel',
//                            //iconCls: 'cancelicon',
//                            handler: function( btn, e, opts ) {
//                                me.cancelEdit();
//                            }                                
//                        }


//                    ]                    
//                }
//            ],
//            listeners: {
//                afterrender: function( panel, opts ) {
//                    panel.getForm().setValues( 
//                        Ext.decode( me.getValue() ) 
//                    );                      
//                }
//            }
//        })            
//    }
//});








//        var fields = ['DFX', 'PMT', 'RMT', 'Risk', { name: 'SnapshotDate', type: 'date', dateFormat: 'Y-m-dTH:i:s.u' } ];
//        var data = {
//            vals: [
//                { "DFX": 0, "PMT": 0, "RMT": 87.18, "Risk": 33.29, "SnapshotDate": "2013-02-06T21:57:38.85"  },
//            //                { "SnapshotDate": "2013-02-12T19:30:57.287", "DFX": 0, "PMT": 0, "RMT": 0, "Risk": 0 },
//            //                { "SnapshotDate": "2013-02-12T20:07:28.69", "DFX": 0, "PMT": 0, "RMT": 49.53, "Risk": 0 },
//            //                { "SnapshotDate": "2013-02-12T23:07:01.43", "DFX": 0, "PMT": 0, "RMT": 49.53, "Risk": 2.42 },
//            //                { "SnapshotDate": "2013-02-12T23:44:12.02", "DFX": 0, "PMT": 22.65, "RMT": 49.53, "Risk": 2.42 },
//            //                { "SnapshotDate": "2013-02-12T23:48:11.877", "DFX": 0, "PMT": 30.19, "RMT": 49.53, "Risk": 2.42 },
//            //                { "SnapshotDate": "2013-02-13T17:56:12.037", "DFX": 7.49, "PMT": 22.65, "RMT": 49.53, "Risk": 6.04 },
//            //                { "SnapshotDate": "2013-04-23T18:50:14.857", "DFX": 0, "PMT": 22.65, "RMT": 49.53, "Risk": 6.04 }
//            ],
//            lastScore: { 'RMT': 50, 'Risk': 6, 'DFX': 0, 'PMT': 23 }
//        };
//        var store2 = new Ext.data.Store({
//            fields: fields,
//            data: data.vals
//        });
//        debugger;






//                {
//                    xtype: 'toolbar',
//                    width: '100%',
//                    border: 0,
//                    items: [
//                        {
//                            text: 'fit',
//                            width: '95px',
//                            listeners: {
//                                click: function (me, e, eOpts) {
//                                    var chart = Ext.getCmp('theChart');
//                                    Ext.getCmp('PortletKMI').setLoading('Working...');
//                                    setTimeout(function () {
//                                        var dateAxis = chart.axes.getAt(1);
//                                        dateAxis.fromDate = new Date('2013-02-05T21:57:38.85');
//                                        dateAxis.toDate = new Date('2013-03-08T18:50:14.857');
//                                        dateAxis.step = [Ext.Date.MONTH, 1];
//                                        chart.redraw();
//                                        Ext.getCmp('PortletKMI').setLoading(false);
//                                    }, 50);
//                                }
//                            }
//                        }, //fit

//                        {
//                        text: 'sliders',
//                        width: '95px',
//                        handler: function (me, e, eOpts) {
//                            var c = Ext.getCmp('dateSliders');
//                            c.setVisible(c.isHidden());
//                            var p = Ext.getCmp('percentSliders');
//                            p.setVisible(p.isHidden());
//                            var f = Ext.getCmp('theFooter');
//                            f.setVisible(p.isHidden());
//                        }
//                    }, //sliders

//                        {
//                        text: 'Save Chart',
//                        width: '95px',
//                        handler: function () {
//                            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function (choice) {
//                                if (choice == 'yes') {
//                                    Ext.getCmp('theChart').save({
//                                        type: 'image/png'
//                                    });
//                                }
//                            });
//                        }
//                    }, //save chart
//                        {
//                        text: 'reset',
//                        width: '95px',
//                        handler: function (me, e, eOpts) {
//                            var chart = Ext.getCmp('theChart');
//                            Ext.getCmp('PortletKMI').setLoading('Working...');
//                            setTimeout(function () {
//                                var dateAxis = chart.axes.getAt(1);
//                                dateAxis.fromDate = dateYearAgo;
//                                dateAxis.toDate = dateToday;
//                                dateAxis.step = [Ext.Date.MONTH, 3];
//                                chart.redraw();
//                                var percentAxis = chart.axes.getAt(0);
//                                percentAxis.minimum = 0,
//                                            percentAxis.maximum = 100,
//                                            chart.redraw();

//                                Ext.getCmp('slidePercent').setValue(100);
//                                Ext.getCmp('slideDateFrom').setValue(1);
//                                Ext.getCmp('slideDateTo').setValue(365);

//                                Ext.getCmp('PortletKMI').setLoading(false);
//                            }, 50);
//                        }
//                    } //reset



//                    //                        {
//                    //                            text: 'fit2',
//                    //                            handler: function (me, e, eOpts) {
//                    //                                var chart = Ext.getCmp('theChart');
//                    //                                Ext.getCmp('PortletKMI').setLoading('Working...');
//                    //                                setTimeout(function () {
//                    //                                    var dateAxis = chart.axes.getAt(1);
//                    //                                    dateAxis.fromDate = new Date('2013-02-04T21:57:38.85');
//                    //                                    dateAxis.toDate = new Date('2013-05-01T18:50:14.857');
//                    //                                    dateAxis.step = [Ext.Date.MONTH, 1];
//                    //                                    chart.redraw();
//                    //                                    Ext.getCmp('PortletKMI').setLoading(false);
//                    //                                }, 50);
//                    //                            }
//                    //                        }, //fit2

//                    //                        {
//                    //                        text: 'toggle grid',
//                    //                        handler: function (me, e, eOpts) {
//                    //                            var chart = Ext.getCmp('theChart');
//                    //                            //Ext.getCmp('PortletKMI').setLoading('Working...');
//                    //                            setTimeout(function () {
//                    //                                var percentAxis = chart.axes.getAt(0);
//                    //                                //percentAxis.drawGrid(false);
//                    //                                //percentAxis.gridLines.hide(true);

//                    //                                if (percentAxis.grid.odd.opacity === 1) {
//                    //                                    percentAxis.grid.odd.opacity = 0;
//                    //                                }
//                    //                                else {
//                    //                                    percentAxis.grid.odd.opacity = 1;
//                    //                                }
//                    //                                chart.redraw();
//                    //                                //Ext.getCmp('PortletKMI').setLoading(false);
//                    //                            }, 50);
//                    //                        }
//                    //                    }, //toggle grid


//                    //                        {
//                    //                            text: '',
//                    //                            handler: function (me, e, eOpts) {
//                    //                                var chart = Ext.getCmp('theChart');
//                    //                                chart.setLoading('Working...');
//                    //                                setTimeout(function () {

//                    //                                    chart.redraw();
//                    //                                    chart.setLoading(false);
//                    //                                }, 50);
//                    //                            }
//                    //                        }, //

//                    //                        {
//                    //                        text: 'custom',
//                    //                        listeners: {
//                    //                            click: function (me, e, eOpts) {
//                    //                                var chart = Ext.getCmp('theChart');
//                    //                                Ext.getCmp('PortletKMI').setLoading('Working...');
//                    //                                setTimeout(function () {
//                    //                                    var dateAxis = chart.axes.getAt(1);
//                    //                                    dateAxis.fromDate = new Date('2013-02-05T21:57:38.85');
//                    //                                    dateAxis.toDate = new Date('2013-02-14T17:56:12.037');
//                    //                                    dateAxis.step = [Ext.Date.DAY, 1];
//                    //                                    chart.redraw();
//                    //                                    Ext.getCmp('PortletKMI').setLoading(false);
//                    //                                }, 50);
//                    //                            }
//                    //                        }
//                    //                    }, //custom
//                    //                        {
//                    //                        text: 'minute',
//                    //                        listeners: {
//                    //                            click: function (me, e, eOpts) {
//                    //                                var chart = Ext.getCmp('theChart');
//                    //                                Ext.getCmp('PortletKMI').setLoading('Working...');
//                    //                                setTimeout(function () {
//                    //                                    var dateAxis = chart.axes.getAt(1);
//                    //                                    dateAxis.fromDate = new Date('2013-02-12T18:30:57.287');
//                    //                                    dateAxis.toDate = new Date('2013-02-14T00:56:12.037');
//                    //                                    dateAxis.step = [Ext.Date.HOUR, 1];
//                    //                                    chart.redraw();
//                    //                                    Ext.getCmp('PortletKMI').setLoading(false);
//                    //                                }, 50);
//                    //                            }
//                    //                        }
//                    //                    }, //minute
//                    //                        {
//                    //                            text: 'test',
//                    //                            handler: function (me, e, eOpts) {
//                    //                                var chart = Ext.getCmp('theChart');
//                    //                                var dateAxis = chart.axes.getAt(1);
//                    //                                alert('fromDate:' + dateAxis.fromDate);
//                    //                                alert('toDate:' + dateAxis.toDate);
//                    //                                var percentAxis = chart.axes.getAt(0);
//                    //                            }
//                    //                        } //test
//                    ]
//                }, //toolbar

