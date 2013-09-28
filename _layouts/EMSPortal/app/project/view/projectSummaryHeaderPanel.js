Ext.define('EMSPEED.project.view.projectSummaryHeaderPanel', {
    extend: 'EMSPEED.baseclass.view.baseclassContainer',
    alias: 'widget.projectSummaryHeaderPanel',
    id: 'projectSummaryHeaderPanel',
    style: {
        backgroundColor: COMMON.backgroundColor
    },
    dock: 'top',
    layout: 'hbox',




    items: [
    //        { xtype: 'image', src: 'wireframes/summaryheader.jpg', height: '100px' },
   //     {xtype: 'image', margin: '0 0 1px 20px', src: project.imagesFolder + 'EMSPEED.jpg' },
    //        {
    //            xtype: 'toolbar',
    //            items: [
//        {xtype: 'image', id: 'summaryheader', margin: '0 0 0 0', src: project.imagesFolder + 'wireframes/menuspacer.png', width: '100px', height: '90px' },
//        { xtype: 'image', margin: '0 0 0 50', src: project.imagesFolder + 'wireframes/summaryheaderMAD.png', height: '90px' },
//                {
//                xtype: 'button',
//                margin: '0 0 15px 60px',
//                enableToggle: true,
//                text: 'show',
//                scope: this,

//                handler: function (btn, e, eOpts) {
//                    Ext.getCmp('pddSummary').setVisible(btn.pressed);
//                    if (btn.pressed === true) {
//                        btn.setText('show');
//                    }
//                    else {
//                        btn.setText('show');

//                    }
//                }
//            },
    //            ]
    //        },
        { xtype: 'image', id: 'pddSummary', hidden: true, src: project.imagesFolder + 'wireframes/summarydetail.png', margin: '0 0 0 240px' }
    //        {
    //            xtype: 'fieldset',
    //            margin: '0 0 0 160px',
    //            labelAlign: 'right',
    //            autoHeight: true,
    //            layout: 'column',
    //            buttonAlign: 'right',
    //            bodyStyle: 'align:center',
    //            border: false,
    //            margin: '0 0 0 0',
    //            padding: '0 5 0 5',
    //            listeners: {
    //                beforeshow: onBeforeShow,
    //                beforehide: onBeforeHide
    //            },
    //            title: 'More...',
    //            collapsible: true,
    //            collapsed: true,
    //            layout: 'anchor',
    //            items: [
    //                { xtype: 'image', src: 'wireframes/summarydetail.png', margin: '0 0 0 173px' }
    //            ]
    //        }
    ]

});

function onBeforeShow(me, eOpts ) {
    alert('onBeforeShow');
}

function onBeforeHide(me, eOpts ) {
    alert('onBeforeHide');
}


//        {
//            xtype: 'displayfield',
//            id: 'txtProjectLabel',
//            fieldStyle: {
//                color: '#000000',
//                font: 'normal 12px tahoma, arial, verdana, sans-serif',
//                marginTop: '5px',
//                marginLeft: '10px'
//            },
//            value: 'Project:'
//        },
//        {
//            xtype: 'displayfield',
//            id: 'txtProject',
//            fieldStyle: {
//                color: '#000000',
//                font: 'normal 18px tahoma, arial, verdana, sans-serif',
//                marginTop: '-5px',
//                marginLeft: '10px'
//            },
//            value: 'No Project Selected'
//        }
//        ,
