Ext.define('EMSPEED.baseclass.view.baseclassContainer', {
    extend: 'Ext.container.Container',
    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },


    border: false,
    //        t   r   b   l
    padding: '8px 0px 8px 8px',

//    dockedItems: [{
//        xtype: 'container',
//        height: '25px',
//        dock: 'top',
//        items: [
//            {
//                xtype: 'label', itemId: 'theTitle', height: 30, text: 'hitest for title', margin: '0 0 0 8px',
//                style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '24px' }
//            }
//        ]
//    }],

    initComponent: function () {
        //    console.info('initComponent BaseContainer: ' + this.id);
        this.callParent(arguments);

//        this.insert(0,
//            {
//                xtype: 'container',
//                //height: '25px',
//                dock: 'top',
//                items: [
//                        {
//                            xtype: 'label', itemId: 'theTitle', height: 30, text: 'hitest for title', margin: '0 0 0 8px',
//                            style: { fontFamily: 'Univers 57 condensed', color: '#000000', fontSize: '24px' }
//                        }
//                    ]
//            }        
//        );
    },
    onRender: function () {
        //    console.info('onRender BaseContainer: ' + this.id);
        this.callParent(arguments);
    },
    listeners: {
        beforeactivate: function (t, eOpts) {
            //        console.info('beforeactivate BaseContainer: ' + this.id);
        }
    }
});
