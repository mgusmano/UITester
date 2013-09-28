StartTest(function (t) {

    t.diag("test - Report Title Matches Selected CDP");
    var grid;
    var inJSON;
    var outJSON;
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 40000);           
        },
        function (next) {
            theItems = document.getElementsByClassName('thumb-wrap');
            t.doubleClick(theItems[0], next);
        },
        function (next) {
            t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
        },
//START REPORT TITLE MATCH
        function (next) {
            var a = Ext.getCmp('cbxCDP');
            t.click(a, next);

        },
        function (next) {
            for (i = 0; i < Ext.getCmp('cbxCDP').getPicker().getNodes().length; i++) {
               
                var cdp = Ext.getCmp('cbxCDP').getPicker().getNode(i).innerHTML;
                var cdpString = cdp.toString();

                
                var reportTitle = Ext.getCmp('txtCdpReportTitle').getValue().toString();
                if (reportTitle.indexOf(cdpString) > -1) {
                    t.isDeeply(true, true, cdpString + ' CDP Matches Report Title');
                }
                else {
                    t.isDeeply(false, false, cdpString + ' CDP Matches Report Title');
                }
            }
           
          }
        
       )
      }
    )
    // Needs to match selected report with the report title



    //            function (next) {
    //                t.isDeeply(true, true, Ext.getCmp('cbxCDP').getPicker().getNodes().length);
    //t.isDeeply(Ext.getCmp('txtCdpReportTitle').getValue(), 'Project 1-' + Ext.getCmp('cbxCDP').getPicker().getNode(0), 'Title and Selection match');
    //                var cbxCDPString = Ext.getCmp('cbxCDP').getPicker().getNode(0).toString();
    //                if (Ext.getCmp('txtCdpReportTitle').getValue().indexOf(cbxCDPString) > -1) {
    //                    t.isDeeply(true, true, 'Success');
    //                }
    //                else {
    //                    t.isDeeply(true, true, Ext.getCmp('txtCdpReportTitle').getValue().indexOf(Ext.getCmp('cbxCDP').getPicker().getNode(0).toString()));
    //                }


    //        function (next) { 
    //            var list = document.getElementById('boundlist-1065-listE1').getElementsByTagName('li');
    //            for (i=0; i < list.length; i++)
    //            {
    //                var listItem = list[i];
    //                var listItemString = listItem.toString(); 
    //                var reportTitleString = EXT.getCmp('txtCdpReportTitle').getValue().toString();
    //                t.chain(
    //                    function (next) {
    //                    //Ext.getCmp('cbxConfigurations').select(1);
    //                        t.click('>>[id="ext-gen1145"]', next);
    //                    },
    //                    function (next) {
    //                        t.click(listItem, next);
    //                    },
    //                    function (next) {
    //                        if (reportTitleString.indexOf(listItemString) > -1)
    //                        {
    //                            t.is(true, true, 'The Report Title ' + listItem + ' match.');
    //                        }
    //                  }
    //                )
    //            }
    //        }

//        function (next) {
//            grid = Ext.getCmp('grdReportSections');
//            var rec = grid.store.getAt(4);
//            inJSON = rec.get('SectionFiltersSelected');
//            var d = t.getCell(grid, 4, 4);
//            t.click(d, next);
//        },
//        { waitFor: 'componentQuery', args: 'reportingFilters' },
//        function (next) {
//            var theItem = document.getElementById('Group-Suspended-inputEl');
//            t.click(theItem, next);
//        },
//        { action: 'click', target: '>>[id="btnFiltersOk"]' },
//        function (next) {
//            var rec = grid.store.getAt(4);
//            outJSON = rec.get('SectionFiltersSelected');
//            theResult = getFilterResult01();
//            t.is(Ext.encode(theResult), Ext.encode(outJSON), 'JSON the same');
//        }
//    )


    //t.click('grid => .x-action-col-cell:nth-child(2)', next);
    //t.click(Ext.getCmp('cbxCDP').getPicker().getNode(2), next)
    //t.click('grid => .x-grid-row:nth-child(10)', next);
    //        function (next) {
    //            t.ok(Ext.getCmp('txtCdpReportTitle').getValue(), 'Project 1-Requirement & Concept Review', next);
    //        },
    //        function (next) {
    //            t.click(Ext.getCmp('cbxCDP').el.query('.x-trigger-cell')[0], next);
    //        },


    //{ action : 'doubleClick', target : 'grid => .x-grid-cell:nth-child(5)' }

    //        function (next) {
    //           
    //            t.click(Ext.getCmp('grdReportSections'), 'Project 1-Concurrent Team Launch', next);

    //            t.ok(Ext.getCmp('txtCdpReportTitle').getValue(), 'Project 1-Concurrent Team Launch', next);
    //            t.done();
    //        }


//})
