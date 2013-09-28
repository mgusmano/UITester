Ext.define('EMSPEED.myprojects.view.myprojectsHeaderPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.myprojectsHeaderPanel',
    config: {
        theStore: null
    },
    style: {
        background: '#EDEDED'
    },
    id: 'myprojectsHeaderPanel',
    border: false,
    layout: 'hbox',
    width: 1150,
    height: 65,

    initComponent: function () {

        //        var filters = {
        //            ftype: 'filters',
        //            encode: false, // json encode the filter query
        //            local: false   // defaults to false (remote filtering)
        //        };

        this.items = [
            {
                xtype: 'label',
                text: 'My Projects',
                width: 200,
                //id: 'lblProjectName',
                style: { margin: '20px 0px 0px 25px', fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '25px' }

            },
            {
                width: 400,
                labelStyle: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '25px' },
                fieldLabel: 'Search',
                labelWidth: 50,
                xtype: 'searchfield',
                margin: '25 0 0 0',
                store: this.theStore
            },
            {
                xtype: 'component',
                itemId: 'status',
                width: 150,
                tpl: 'Matching projects: {count}',
                margin: '30 0 0 5'
            },
        //            { xtype: 'button', margin: '25 5 0 0', id: 'btnmyprojects', text: 'CLEAR' },
            {
            xtype: 'button',
            cls: 'myprojects-button',
            margin: '15px 5px 0px 160px',
            height: 35, width: 150,
            id: 'btnprovisionproject',
            text: 'PROVISION PROJECT',
            handler: function () {
                if (this.c === undefined) {
                    this.c = Ext.create('EMSPEED.provision.view.provisionBasePanel', {  });
                }
                this.c.show();
            }


        }
         ]
        this.callParent(arguments);
    }
});


//                    {
//                        xtype: 'combobox',
//                        fieldLabel: 'FILTER',
//                        //id: 'cbxCDP',
//                        labelAlign: 'left',
//                        margin: '25 10 0 0',
//                        width: 225,
//                        defaultListConfig: { loadingHeight: 70, minWidth: 70, maxHeight: 400, shadow: 'sides' },
//                        valueField: 'id',
//                        displayField: 'name',
//                        editable: false,
//                        readonly: true,
//                        queryMode: 'local'
//                    },




//                    {
//                        xtype: 'textfield',
//                        //id: 'txtCdpReportTitle',
//                        //fieldLabel: 'Title:',
//                        //labelAlign: 'top',
//                        margin: '25 5 0 0',
//                        width: 200,
//                        name: 'reportTitle'
//                    },
//                    { xtype: 'button', margin: '25 5 0 0', id: 'btnmyprojects', text: 'CLEAR' },
//                    { xtype: 'button', height: 35, width: 150, margin: '15 5 0 260', id: 'btnprovisionproject', text: 'PROVISION PROJECT' }
