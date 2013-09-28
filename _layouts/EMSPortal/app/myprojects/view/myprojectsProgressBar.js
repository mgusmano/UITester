Ext.define('EMSPEED.myprojects.view.myprojectsProgressBar', {
    //    extend: 'Ext.ProgressBar',
    extend: 'Ext.container.Container',
    alias: 'widget.myprojectsprogressbar',
    layout: 'hbox',
    border: false,
    //height: 200,
    //cls: 'EMSPEED-Transparent' ,

    //config: {
    //    value: 20
    //},

    constructor: function (config) {
        //	debugger;
        //this.initConfig(config);
        this.callParent(arguments);
    },

    initComponent: function () {
        var theValue = parseFloat(this.value) / 100.0;


        this.items = [
            { xtype: 'label', text: this.value + '%', height: 15, width: 30, margin: '0 10 0 0', xcls: 'EMSPEED-Transparent' },
            { xtype: 'progressbar', value: theValue, height: 13, width: 100, border: true, margin: '0 10 0 0', flex: 1, cls: 'EMSPEED-StatusBar meter xred xnostripes' }
        ];
        this.callParent(arguments);
    }
});
