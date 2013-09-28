StartTest(function (t) {

    t.diag("Test - Sections Configured");
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
        function (next) {
            if (document.getElementById('btnReportSectionsAllClear-btnInnerEl').innerHTML = 'all') {
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
            }
            else {
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
                t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
                t.click(Ext.getCmp('btnReportSectionsAllClear'), next);
            }
        },
         function (next) {
             t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
         },
        function (next) {
            var grid = Ext.getCmp('grdReportSections');
            var recLength = grid.store.getCount();

            //for (i = 0; i < recLength - 1; i++) {
            //                var rec = grid.store.getAt(i);
            //                inJSON = rec.get('name');
            //                var secName = Ext.encode(inJSON).toString().replace(/"/g, '');
            
            var secNameArray = new Array();
            secNameArray[0] = Ext.encode(grid.store.getAt(0).get('name')).toString().replace(/"/g, '');
            secNameArray[1] = Ext.encode(grid.store.getAt(1).get('name')).toString().replace(/"/g, '');
            secNameArray[2] = Ext.encode(grid.store.getAt(2).get('name')).toString().replace(/"/g, '');
            secNameArray[3] = Ext.encode(grid.store.getAt(3).get('name')).toString().replace(/"/g, '');
            secNameArray[4] = Ext.encode(grid.store.getAt(4).get('name')).toString().replace(/"/g, '');
            secNameArray[5] = Ext.encode(grid.store.getAt(5).get('name')).toString().replace(/"/g, '');
            secNameArray[6] = Ext.encode(grid.store.getAt(6).get('name')).toString().replace(/"/g, '');
            secNameArray[7] = Ext.encode(grid.store.getAt(7).get('name')).toString().replace(/"/g, '');
            secNameArray[8] = Ext.encode(grid.store.getAt(8).get('name')).toString().replace(/"/g, '');
            secNameArray[9] = Ext.encode(grid.store.getAt(9).get('name')).toString().replace(/"/g, '');
            secNameArray[10] = Ext.encode(grid.store.getAt(10).get('name')).toString().replace(/"/g, '');
            secNameArray[11] = Ext.encode(grid.store.getAt(11).get('name')).toString().replace(/"/g, '');
            secNameArray[12] = Ext.encode(grid.store.getAt(12).get('name')).toString().replace(/"/g, '');
            secNameArray[13] = Ext.encode(grid.store.getAt(13).get('name')).toString().replace(/"/g, '');
            secNameArray[14] = Ext.encode(grid.store.getAt(14).get('name')).toString().replace(/"/g, '');
            secNameArray[15] = Ext.encode(grid.store.getAt(15).get('name')).toString().replace(/"/g, '');
            secNameArray[16] = Ext.encode(grid.store.getAt(16).get('name')).toString().replace(/"/g, '');
            secNameArray[17] = Ext.encode(grid.store.getAt(17).get('name')).toString().replace(/"/g, '');
            secNameArray[18] = Ext.encode(grid.store.getAt(18).get('name')).toString().replace(/"/g, '');
            secNameArray[19] = Ext.encode(grid.store.getAt(19).get('name')).toString().replace(/"/g, '');
            secNameArray[20] = Ext.encode(grid.store.getAt(20).get('name')).toString().replace(/"/g, '');
            secNameArray[21] = Ext.encode(grid.store.getAt(21).get('name')).toString().replace(/"/g, '');
            //            secNameArray.sort(
            //            function (a, b) {
            //                if (a.toLowerCase() < b.toLowerCase()) return -1;
            //                if (a.toLowerCase() > b.toLowerCase()) return 1;
            //                return 0;
            //            });
            //    }
            var secConfig = document.getElementById('lblCdpSection').innerHTML;
            var secConfigSplit = secConfig.split('<br>');
            var secConfigSlice = secConfigSplit.slice(1, secConfigSplit.length + 1);

            t.isDeeply(true, true, '1. Checking to see if all selected Section Names are also listed in Sections Configured...');
            for (i = 0; i < recLength; i++) {
                if (secNameArray[i] == secConfigSlice[i + 1]) {
                    t.isDeeply(true, true, 'SUCCESS - SECTION NAME: ' + secNameArray[i] + ' SECTION CONFIG: ' + secConfigSlice[i + 1] + ' - MATCHES AND IN ORDER');
                }
                else {
                    t.isDeeply(true, true, 'FAILURE - SECTION NAME: ' + secNameArray[i] + ' SECTION CONFIG: ' + secConfigSlice[i + 1] + ' - DOESNT MATCH AND NOT IN ORDER');
                }
            }


            var check = t.getCell(grid, 0, 0);
            t.diag("Tests- Selecting Section Names");
            t.chain(
                function (next) {
                    t.click(check, next);
                    t.isDeeply(true, true, '2. Un-checking "Enabled" for first Section Name item and checking change in Sections Configured');
                },

                function (next) {
                    var second_secConfig = document.getElementById('lblCdpSection').innerHTML;
                    var second_secConfigSplit = second_secConfig.split('<br>');
                    var second_secConfigSlice = second_secConfigSplit.slice(1, second_secConfigSplit.length + 1);

                    if (second_secConfigSlice.indexOf(secNameArray[0]) == -1) {
                        t.isDeeply(true, true, secNameArray[0] + ' Does not appear in the Section Configured menu anymore - SUCCESS');
                    }
                    else {
                        t.isDeeply(true, true, secNameArray[0] + ' Still appears in the Secion Configured menu - FAIL');
                    }


                }
            )

        }



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


)
}
)
