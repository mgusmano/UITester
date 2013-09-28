//var a = function (message, url, linenumber) {
window.onerror = function (message, url, linenumber) {
    debugger;
    if (Ext.getCmp('center') != undefined) {
        Ext.getCmp('north').hide();
        Ext.getCmp('center').hide();
        Ext.getCmp('south').hide();
    }


    if (dashboard.loading > 0) {
        dashboard.loading = 1;
        dashboard.endLoading();
    }

    // hide loading page section 
    document.getElementById('divloading').style.display = 'none'; //loading-app
    
    // show error section 
    document.getElementById('emspeed-error-page').style.display = 'block';
    

    //document.getElementById('divloading').style.display = 'block';
    //document.getElementById('txtloading').style.display = 'none';
    //document.getElementById('theErrorMessageHeading').style.display = 'block';
    //document.getElementById('theErrorMessageDiv').style.display = 'block';

    var theVersion = "not defined";
    try {
        theVersion = EMSPEED_VERSION;
    }
    catch (err) {
    }
    
    var theMessage = '<table>' + 
                     '<tr><th>Message:</th><td>' + message + '</td></tr>' + 
                     '<tr><th>File:</th><td>' + url + '</td></tr>' +
                     '<tr><th>Line:</th><td>' + linenumber + '</td></tr>' +
                     '<tr><th>Version:</th><td>' + theVersion + '</td></tr>' +
                     '</table>';


    document.getElementById('error-table').innerHTML = document.getElementById('error-table').innerHTML + theMessage + '<br/><br/>';



    return true;
}
