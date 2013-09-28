StartTest(function (t) {

    t.diag("test - Configurations Match Configuration Name");
    var grid;
    var inJSON;
    var outJSON;
    t.chain(
        function (next) {
            t.waitForSelector('.thumb-wrap', next, this, 80000);
        },
        function (next) {
            theItems = document.getElementsByClassName('thumb-wrap');
            t.doubleClick(theItems[0], next);
        },
        function (next) {
            t.waitForComponentVisible('reportingCdpDetailPanel', next, this, 40000);
        },
        function (next) {
            t.click(Ext.getCmp('btnSaveAsConfiguration'), next);
        },
        function (next) {
            t.click(Ext.getCmp('button-1005'), next);
        },
        function (next) {
            if (Ext.getCmp('messagebox-1001').innerHTML = 'Enter a name for your new configuration:') {
                t.isDeeply(true, true, 'Error Message appears when trying to save configuration name before changing the name');
            }
            else {
                t.isDeeply(true, true, 'FAIL - Error Message doesnt appear');
            }
            t.click(Ext.getCmp('messagebox-1001-testfield'), next);
        },

        function (next) {
            t.type(Ext.getCmp('messagebox-1001-testfield'), '2', next);
        },
        function (next) {
            t.click(Ext.getCmp('button-1005'), next);
        },

    //START TEST CONFIGURATION MATCH
        function (next) {
            var a = Ext.getCmp('cbxConfigurations');
            t.click(a, next);

        },

            function (next) {
                for (i = 0; i < Ext.getCmp('cbxConfigurations').getPicker().getNodes().length; i++) {

                    var config = Ext.getCmp('cbxConfigurations').getPicker().getNode(i).innerHTML;
                    var configString = config.toString();

                    t.click(Ext.getCmp('cbxConfigurations').getPicker().getNode(i));
                    var configName = Ext.getCmp('txtConfigurationName').getValue().toString();
                    if (configName.indexOf(configString) > -1) {
                        t.isDeeply(true, true, configString + ' Matches Configuration Name');
                    }
                    else {
                        t.isDeeply(true, true, configString + ' DOESNT Match Configuration Name');
                    }
                }
                for (i = 0; i < Ext.getCmp('cbxConfigurations').getPicker().getNodes().length; i++) {

                    var config = Ext.getCmp('cbxConfigurations').getPicker().getNode(i).innerHTML;
                    var configString = config.toString();
                    var occurence = 0;
                    for (j = 0; j < Ext.getCmp('cbxConfigurations').getPicker().getNodes().length; j++) {
                        
                        var configCompare = Ext.getCmp('cbxConfigurations').getPicker().getNode(j).innerHTML;
                        if (config == configCompare) {
                            occurence += +1;
                        }
                    }
                    t.isLessOrEqual(occurence, 1, 'SUCCESS: ' + configString + ' - NO DUPLICATES');
                }
            }
         )
    }
) 

