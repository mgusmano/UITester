Ext.define('EMSPEED.stature.view.statureBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.statureBasePanel',
    id: 'statureBasePanel',


    getReportType: function (sUrl) {
        debugger;
        var sPrefixStart = "?/Reports/",
            iPrefixStart = sUrl.indexOf(sPrefixStart),
            start = iPrefixStart + sPrefixStart.length,
            sString = sUrl.substring(start),
            sPrefixEnd = '&',
            iPrefixEnd = sString.indexOf(sPrefixEnd),
            sValue = sString.substring(0, iPrefixEnd);
        return sValue;
    },



    initComponent: function () {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        eventer(messageEvent, function (e) {
//            debugger;
            console.log('parent received message!:  ', e.data);

            var reportType = Ext.getCmp('statureBasePanel').getReportType(e.data);
            var theCharm = '';
            switch(reportType)
            {
                case 'Mock-Requirements':
                    theCharm = 'Requirements'
                    break;
                case 'Mock-SpecificationByPhysicalArchitecture':
                    theCharm = 'PAE'
                    break;
                default:
                    theCharm = 'Requirements'
            }


            Ext.getCmp('frame' + theCharm).setSrc(e.data);
            Ext.getCmp('statureBasePanel').layout.setActiveItem(theCharm);

            
            //panel.setSrc('http://www.sencha.com');
            //* panel.reset();
            //* panel.reload();
            //* panel.getSrc();
            //* panel.update('<div><b>Some Content....</b></div>');
            //* panel.destroy();




            //nextUrl(e.data, "inter02");
            //nextUrl('http://emspeed-devdb' + e.data.substring(3), "inter02");
            //var fr = document.getElementById("inter01");
            //fr.style.display = "none";

            //Ext.getCmp('btnInterPrev').setDisabled(false);
            //Ext.getCmp('btnInterNext').setDisabled(true);
        }, false);
        this.callParent(arguments);

    },




    layout:'card',
    activeItem: 0, // index or id
    dockedItems: [
                {
                    xtype: 'container',
                    html: '<div class="interactive">' +
                            '<table>' +
                                '<tr>' +
                                    '<td class="gradient"><div class="">PMT</div></td>' +
                                    '<td class="gradient"><div>Requirements</div></td>' +
                                    '<td class="gradient"><div>PAE</div></td>' +
                                    '<td class="gradient"><div>Specifications</div></td>' +
                                    '<td class="gradient"><div>Risks</div></td>' +
                                    '<td class="gradient"><div>Tests</div></td>' +
                                    '<td class="gradient"><div>Specifications</div></td>' +
                                    '<td class="gradient"><div>Risks</div></td>' +
                                    '<td class="gradient"><div>Tests</div></td>' +
                                '</tr>' +
                            '</table>' +
                        '</div>',
                    dock: 'bottom'
                }
    ],
   /* bbar: [
        {
            text: 'PMT',
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        },
        {
            text: 'Requirements',
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        },
        {
            text: 'PAE', //Physical Architecture Elements
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        },
        {
            text: 'Specifications',
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        },
        {
            text: 'Risks',
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        },
        {
            text: 'Tests',
            width: 100,
            handler: function () {
                this.up('panel').layout.setActiveItem(this.text);
            }
        }
    ],*/
    items: [
        {
            id: 'framePMT',
            itemId: 'PMT',
            xtype: 'simpleIframe'
            //src: 'http://emspeed-devdb.nam.slb.com/ReportServer/Pages/ReportViewer.aspx?/Reports/Mock-PMT&rs:Command=Render&rc:parameters=false&contextId=97476',
            //src: 'http://emspeed-devdb/Reports/Pages/Report.aspx?ItemPath=/Reports/003-PMT-XLSxMHTML"http://emspeed-devdb/Reports/Pages/Report.aspx?ItemPath=%2fReports%2f003-PMT-XLSxMHTML'
        },
        {
            id: 'frameRequirements',
            itemId: 'Requirements',
            xtype: 'simpleIframe'
        },
        {
            id: 'framePAE',
            itemId: 'PAE',
            //html: 'PAE'
            xtype: 'simpleIframe'
        },
        {
            id: 'frameSpecifications',
            itemId: 'Specifications',
            html: 'Specifications'
            //xtype: 'simpleIframe'
        },
        {
            id: 'frameRisks',
            itemId: 'Risks',
            html: 'Risks'
            //xtype: 'simpleIframe'
        },
        {
            id: 'frameTests',
            itemId: 'Tests',
            html: 'Tests'
            //xtype: 'simpleIframe'
        }
    ]
       





//    initComponent: function () {
//        this.items = [
//            { xtype: 'image', src: project.imagesFolder + 'wireframes/summarydetail.png' }


////            {
////                height: '100%',
////                xtype: 'simpleIframe',
////                deferredRender: true,
////                //id: 'simpleIframe',
////                //src: 'http://localhost:214/LoadSLBStudy.htm'
////                //src: 'http://emspeed1.nam.slb.com/stature/control/loadSlbStudyRedirected?versionId=1000013001&viewName=Requirement&defaultRowId=1000109113&ignoreViewGroup=true'
////                //src: 'http://emspeed1.nam.slb.com/stature/control/loadSlbStudyRedirected?versionId=1000011036&viewName=RiskRegister&defaultRowId=1000100675&ignoreViewGroup=true'
////                //src: 'http://emspeed1.nam.slb.com/stature/control/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&defaultRowId=1000130053&ignoreViewGroup=true'
////                //src: 'http://emspeed.dev.slb.com/stature/control/loadSlbStudyRedirected?versionId=1000132005&viewName=RiskRegister&defaultRowId=1007979022&ignoreViewGroup=true'
////            }        
//        ];
//        this.callParent(arguments);
//        this.setTheTitle('PDD Summary');
//    }
});
