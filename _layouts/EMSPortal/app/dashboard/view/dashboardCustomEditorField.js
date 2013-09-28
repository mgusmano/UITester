Ext.define('EMSPEED.dashboard.view.dashboardCustomEditorField', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.customeditorfield',
    editable: false,
    hideTrigger: true,
    pickerOffset: [0, -20],
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
            title: 'Enter CDP Details',
            bodypadding: 5,
            pickerField: me,
            ownerCt: me.ownerCt,
            renderTo: document.body,
            floating: true,
            bodyPadding: 8,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    labelAlign: 'top',
                    anchor: '100%',
                    name: 'product'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Next CDP',
                    labelAlign: 'top',
                    anchor: '100%',
                    name: 'tagline'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            name: 'cancel',
                            text: 'Cancel',
                            //iconCls: 'cancelicon',
                            handler: function (btn, e, opts) {
                                me.cancelEdit();
                            }
                        },
                        '->',
                        {
                            xtype: 'button',
                            name: 'save',
                            text: 'Save',
                            //iconCls: 'accepticon',
                            handler: function (btn, e, opts) {
                                me.applyValues();
                            }
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: function (panel, opts) {
                    panel.getForm().setValues(
                        Ext.decode(me.getValue())
                    );
                }
            }
        })
    }
});
