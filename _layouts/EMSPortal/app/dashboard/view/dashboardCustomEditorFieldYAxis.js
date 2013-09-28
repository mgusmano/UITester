Ext.define('EMSPEED.dashboard.view.dashboardCustomEditorFieldYAxis', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.customeditorfieldYAxis',
    editable: false,
    hideTrigger: true,
    pickerOffset: [0, -23],

    listeners: {
        focus: function (fld, e, opts) {
            fld.expand();
        }
    },

    cancelEdit: function () {
        var me = this;
        me.fireEvent('blur');
        me.collapse();
    },
    applyValues: function () {
        var me = this,
            form = me.picker,
            vals = form.getForm().getValues();
        // set the value of the editable field        
        me.setValue(Ext.encode(vals));
        me.fireEvent('blur');
        me.collapse();
    },
    createPicker: function () {
        var me = this,
            format = Ext.String.format;
        return Ext.create('Ext.form.Panel', {
            canSetTitle: false,
            listeners: {
                afterrender: function (panel, opts) {
                    panel.getForm().setValues(
                        Ext.decode(me.getValue())
                    );
                    var s = '';
                    if (this.currentUnit > 1) {
                        s = 's';
                    }
                    panel.setTitle('Every ' + this.currentUnit + ' ' + this.currentStep + s);
                    panel.canSetTitle = true;
                }

            },
            //title: 'Enter Y Axis Details',
            bodypadding: 5,
            //header: { xtype: 'container', html: 'Edit...', padding: '4 4 4 8' },
            pickerField: me,
            ownerCt: me.ownerCt,
            renderTo: document.body,
            floating: true,
            bodyPadding: 8,
            currentStep: 'day',
            currentUnit: '1',

            items: [
                {
                    xtype: 'label', itemId: 'theTitle', height: 40, text: 'Y axis label every...', margin: '0 0 10 0',
                    style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '15px' }
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'radiogroup',
                            anchor: 'none',
                            listeners: {
                                change: function (rg, newValue, oldValue, eOpts) {
                                    var picker = this.up('panel');
                                    picker.currentUnit = newValue.unit;
                                    debugger;
                                    if (picker.canSetTitle === true) {
                                        var s = '';
                                        if (picker.currentUnit > 1) {
                                            s = 's';
                                        }
                                        picker.setTitle('Every ' + picker.currentUnit + ' ' + picker.currentStep + s);
                                    }
                                }
                            },

                            layout: {
                                type: 'vbox',
                                autoFlex: false
                            },
                            defaults: {
                                name: 'unit',
                                margin: '0 15 0 0'
                            },
                            items: [{
                                inputValue: '1',
                                boxLabel: '1',
                                checked: true
                            }, {
                                inputValue: '3',
                                boxLabel: '3'
                            }, {
                                inputValue: '5',
                                boxLabel: '5'
                            }, {
                                inputValue: '7',
                                boxLabel: '7'
                            }]
                        },
                        {
                            xtype: 'radiogroup',
                            anchor: 'none',
                            listeners: {
                                change: function (rg, newValue, oldValue, eOpts) {
                                    var picker = this.up('panel');
                                    picker.currentStep = newValue.step;
                                    debugger;
                                    if (picker.canSetTitle === true) {
                                        var s = '';
                                        if (picker.currentUnit > 1) {
                                            s = 's';
                                        }
                                        picker.setTitle('Every ' + picker.currentUnit + ' ' + picker.currentStep + s);
                                    }
                                }
                            },
                            layout: {
                                type: 'vbox',
                                autoFlex: false
                            },
                            defaults: {
                                name: 'step',
                                margin: '0 15 0 0'
                            },
                            items: [{
                                inputValue: 'day',
                                boxLabel: 'Day(s)',
                                checked: true
                            }, {
                                inputValue: 'month',
                                boxLabel: 'Month(s)'
                            }, {
                                inputValue: 'year',
                                boxLabel: 'Year(s)'
                            }]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            name: 'ok',
                            text: 'OK',
                            //iconCls: 'accepticon',
                            handler: function (btn, e, opts) {
                                me.applyValues();
                            }
                        },
                        '->',
                        {
                            xtype: 'button',
                            name: 'cancel',
                            text: 'Cancel',
                            //iconCls: 'cancelicon',
                            handler: function (btn, e, opts) {
                                me.cancelEdit();
                            }
                        }
                    ]
                }
            ]

        })
    }
});
