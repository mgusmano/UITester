Ext.require("Ext.app.EventBus");
Ext.override(Ext.app.EventBus, {
    constructor: function () {
        this.mixins.observable.constructor.call(this);
        this.bus = {};
        var me = this;
        Ext.override(Ext.Component, {
            fireEvent: function (ev) {
                if (this.callParent(arguments) !== false) {
                    return me.dispatch.call(me, ev, this, arguments);
                }
                return false;
            }
        });
    }
});
Ext.define('EMSPEED.common.com', {
    singleton: true,
    alternateClassName: 'com',

    constructor: function () {

        //this.proxy = 'memoryProxy';
        this.proxy = 'emspeedProxy';

        if (typeof layoutsFolder === 'undefined') {
            this.layoutsFolder = '/_layouts/EMSPortal/';
        }
        else {
            this.layoutsFolder = layoutsFolder;
        }
        this.appFolder = this.layoutsFolder + 'app';

        this.siteRoot = 'http://' + location.hostname + ':' + location.port + '/';
        this.serviceRoot = 'http://' + location.hostname + ':8095/';
        this.usesWithCredentials = true;
        this.currentTab = "Project Management";
        
        /*if (this.proxy === 'emspeedProxy') {
            var pingUrl = 'http://' + location.hostname + ':8095/' + 'ReportConfigurationService.svc/json/Ping';
            try {

                /***************************************************************************************
                The whole reason for this ajax call is to set the usesWithCredentials to false 
                for IE browsers depending on where the ajax call used Xhr object or active x object.
                Users with windows xp had this bug
                ***************************************************************************************#1#
                Ext.Ajax.request({
                    url: pingUrl,
                    method: "POST",
                    timeout: 90000,
                    withCredentials: true,
                    scope: this,
                    //async: false,
                    success: function (response, opts) {
                    },

                    failure: function (response, opts) {
                        throw new Error("UNKNOWN_EMSPEED_JS_ERROR: " + response.status + " - " + response.statusText);
                    }
                });
            }
            catch (err) {
                if (err.message.indexOf("UNKNOWN_EMSPEED_JS_ERROR:") == 0) {
                    throw new Error(err.message);
                } else {
                    this.usesWithCredentials = false;
                }
            }
        }*/

    },

    setTheTitle: function (me, value) {
        return me.up().dockedItems.items[0].setText(value);
    },



    //function getProjectId() {
    //var sSitePrefix = "/sites/",
    //    sSiteUrl = location.href,
    //    iPrefixStart = sSiteUrl.indexOf(sSitePrefix),
    //    start = iPrefixStart + sSitePrefix.length,
    //    projectId = sSiteUrl.substring(start, start + 5);
    //return projectId;
    //},

    getProjectId: function () {
        var sSitePrefix = "/sites/";
        var sSiteUrl = location.pathname;
        var iStart = sSiteUrl.indexOf(sSitePrefix) + sSitePrefix.length;
        var iEnd = sSiteUrl.indexOf("/", iStart);
        var sProjectID = sSiteUrl.substring(iStart, iEnd);
        var iProjectId = parseInt(sProjectID);
        if (isNaN(iProjectId)) {
            return 97366;
        }
        else {
            return iProjectId;
        }
    },

    getComboText: function (comboboxId) {
        var combo = Ext.getCmp(comboboxId);
        var value = combo.getValue();
        var valueField = combo.valueField;
        var record;
        combo.getStore().each(function (r) {
            if (r.data[valueField] == value) {
                record = r;
                return false;
            }
        });
        return record.data.name;
    },

    showError: function (response, opts) {
        var theErrorMessageHeadingText = 'The following failure occured, please report to level 2 support:';
        var theMessage = '';
        try {
            var r = Ext.decode(response.responseText);
            if (r.correlationId === undefined) {
                theMessage += 'Status: ' + response.status + '-' + response.statusText;
            }
            else {
                theMessage = r.message + ' ' + r.correlationId;
            }
        }
        catch (err) {
            theMessage += 'Status: ' + response.status + '-' + response.statusText + ', URL: ' + opts.url;
        }
        com.showErrorFromTry2(theMessage);
    },

    showErrorFromTry2: function (error) {
        alert(error);
        var theErrorMessageHeadingText = 'The following try failure occured, please report to level 2 support:';

        var theErrorMessageText = document.createElement('div');
        theErrorMessageText.setAttribute('id', 'theErrorMessageText');
        theErrorMessageText.style.fontSize = '18px';
        theErrorMessageText.style.marginTop = '100px';
        theErrorMessageText.style.marginLeft = '5px';
        theErrorMessageText.style.marginBottom = '20px';
        theErrorMessageText.innerHTML = theErrorMessageHeadingText;

        var theErrorMessage = document.createElement('div');
        theErrorMessage.setAttribute('id', 'theErrorMessage');
        theErrorMessage.style.fontSize = '14px';
        theErrorMessage.style.marginTop = '20px';
        theErrorMessage.style.marginLeft = '5px';
        theErrorMessage.style.marginBottom = '100px';
        if (error.stack != undefined) {
            theErrorMessage.innerHTML = error.stack;
        }
        else if (error.message != undefined) {
            theErrorMessage.innerHTML = error.message;
        }
        else {
            theErrorMessage.innerHTML = error;
        }

        document.getElementById("content").appendChild(theErrorMessageText);
        document.getElementById("content").appendChild(theErrorMessage);

        if (Ext.get('loading') != null) {
            Ext.get('loading').remove();
        }
        if (Ext.getCmp('reportingBasePanel') != null) {
            Ext.getCmp('reportingBasePanel').setLoading(false);
            Ext.getCmp('reportingBasePanel').setVisible(false);
        }
    },

    getIndexFromId: function (array, id) {
        var index;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                index = i;
            }
        }
        return index;
    },

    compareSequence: function (a, b) {
        if (a.sequence < b.sequence)
            return -1;
        if (a.sequence > b.sequence)
            return 1;
        return 0;
    },

    compareSectionId: function (a, b) {
        if (a.sectionId < b.sectionId)
            return -1;
        if (a.sectionId > b.sectionId)
            return 1;
        return 0;
    },

    compareSectionsAvailableId: function (a, b) {
        if (a.sectionsAvailableId < b.sectionsAvailableId)
            return -1;
        if (a.sectionsAvailableId > b.sectionsAvailableId)
            return 1;
        return 0;
    },

    compareId: function (a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }
});


//    setCursorByID: function (id, cursorStyle) {
//        var elem;
//        if (document.getElementById &&
//        (elem = document.getElementById(id))) {
//            if (elem.style) elem.style.cursor = cursorStyle;
//        }
//    },

//    initialiseHistory: function () {
//        Ext.getBody().createChild({
//            tag: 'form',
//            action: '#',
//            cls: 'x-hidden',
//            id: 'history-form',
//            children: [
//                {
//                    tag: 'input',
//                    id: Ext.History.fieldId,
//                    type: 'hidden'
//                },
//                {
//                    tag: 'iframe',
//                    id: Ext.History.iframeId
//                }
//            ]
//        });

//        Ext.History.init();
//        Ext.History.on('change', handleHistoryChange, this);
//    },

//    handleHistoryChange: function (token) {
//        switch (token) {
//            case 'SelectReportType':
//                Ext.getCmp('pnlReporting').setChild(0);
//                break;
//            case 'CreateCdpReport':
//                Ext.getCmp('pnlReporting').setChild(1);
//                break;
//            //        case '': //nothing after the #, show a default view                                                                                                                                                                                                                           
//        }
//    },

//time
var startDate; // = new Date();
var startTime; // = startDate.getTime();

//'<span class="label">Time since data was refreshed:</span> <span id="theTime" class="value"></span>',

//at end of app.js
//startDate = new Date();
//startTime = startDate.getTime();
//time_spent();

//at end of dashboard.reloadPortlets()
//startDate = new Date();
//startTime = startDate.getTime();

function seconds_elapsed() {
    var date_now = new Date();
    var time_now = date_now.getTime();
    var time_diff = time_now - startTime;
    var seconds_elapsed = Math.floor(time_diff / 1000);
    return (seconds_elapsed);
}

function time_spent() {
    var secs = seconds_elapsed();
    var mins = Math.floor(secs / 60);
    secs -= mins * 60;
    var hour = Math.floor(mins / 60);
    mins -= hour * 60;
    document.getElementById('theTime').innerHTML = pad(hour) + ":" + pad(mins) + ":" + pad(secs);
    setTimeout("time_spent ()", 500);
}

function pad(num) {
    return ((num > 9) ? num : "0" + num);
}
