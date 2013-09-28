function getJsonOfStore(store) {
    var datar = new Array();
    var jsonDataEncode = "";
    var records = store.getRange();
    for (var i = 0; i < records.length; i++) {
        datar.push(records[i].data);
    }

    
    return datar;
}

function getOneJsonObjectOfStore(store, theField, theValue) {
    var datar = new Array();
    var jsonDataEncode = "";
    var records = store.getRange();
    for (var i = 0; i < records.length; i++) {
        if (records[i].get(theField) === theValue) {
            return records[i].data
        }
    }
}

function getTheStore(o) {
    switch(o.theType)
    {
    case 'stature':
        o.thePrefix = 'tns:';
        o.theUrl = 'http://localhost/stature/control/StatureWebServices';
        o.theNamespace = 'http://www.dyadem.com/stature/ws';
        o.theNs = ' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"' +
                  ' xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"' +
                  ' xmlns:tns="http://www.dyadem.com/stature/ws"' +
                  ' xmlns:types="http://www.dyadem.com/stature/ws/encodedTypes"' +
                  ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
                  ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"';

        break;
    case 'asmx':
        o.thePrefix = '';
        o.theUrl = 'http://localhost:1111/WebService.asmx';
        o.theNamespace = 'http://tempuri.org/';
        o.theNs = ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
		          ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
		          ' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"';
        break;
    default:
      //code to be executed if n is different from case 1 and 2
    }

    var store = Ext.create('Ext.data.Store', {
        fields: o.theFields,
        proxy: {
            envelopeTpl: [
                '<?xml version="1.0" encoding="utf-8" ?>',
                '<soap:Envelope' + o.theNs + '>',
                    '{[values.bodyTpl.apply(values)]}',
                '</soap:Envelope>'
            ],

            readBodyTpl: [
                '<soap:Body soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">',
                    '<' + o.thePrefix + '{operation}>',
                        '<tpl foreach="params">',
                            '<{$}>{.}</{$}>',
                        '</tpl>',
                    '</' + o.thePrefix + '{operation}>',
                '</soap:Body>'
            ],
            type: 'soap',
            url: o.theUrl,
            api: {
                read: o.theMethod
            },
            soapAction: {
                read: o.theNamespace + o.theMethod
            },
            targetNamespace: o.theNamespace,
            reader: {
                type: 'soap',
                record: o.theRecord
            }
        }
    });
    return store;
}















//1. Existing Required Services Methods that need to remain in place. 
//a. Get Current Cdp 0800
//b. Get Changed Project IDs 0700
//c. Get Metrics Snapshot. 1000

//2. Modified web services based on the latest version of the WSDL that have to be delivered:
//a. Get Requirements 1500
//b. Get CDP Dfx (Cdp Index)
//c. Get Physical Architecture 1200
//d. Get Physical Architecture Risk Mapping 1100
//e. Get Risks 1600


function getReturnedData(responseText, o) {
    var theTotalJSONString = '';

    var xmlDoc;
    if (true) {
//    if (window.DOMParser) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(responseText, "application/xml");
        xmlDoc.getElementsByTagName(o.theMethod + 'Return');

        var theRoot = xmlDoc.getElementsByTagName(o.theMethod + 'Return')[0];
        var theQuote = '';
        theTotalJSONString = '{';
        for (n = 0; n < theRoot.childNodes.length; n++) {
            var theCurrentNode = theRoot.childNodes[n];
            if (n > 0) { theTotalJSONString += ', '; }
            if (theCurrentNode.attributes.getNamedItem('xsi:type').value == "soapenc:Array") {

                theTotalJSONString += '"' + theCurrentNode.nodeName + '"' + ': ' + '[';

                for (g = 0; g < theCurrentNode.childNodes.length; g++) {
                    if (g > 0) { theTotalJSONString += ', '; }
                    for (k = 0; k < theCurrentNode.childNodes[0].childNodes.length; k++) {
                       if (k > 0) { theTotalJSONString += ', '; }
                       if (k == 0) { theTotalJSONString += '{'; }
 
                        var theCurrentArrayNode = theCurrentNode.childNodes[0].childNodes[k];

                        var theText = '';

                        if (theCurrentArrayNode.attributes.getNamedItem('xsi:type').value == "soapenc:Array") {
                            theTotalJSONString += '"' + theCurrentArrayNode.nodeName + '"' + ': ' + '[]';
                        }
                        else {

                           switch (theCurrentArrayNode.attributes.getNamedItem('xsi:type').value) {
                                case 'xsd:string':
                                    theQuote = '"';
                                    if (theCurrentArrayNode.textContent != null) {
                                        theText = theCurrentArrayNode.textContent;
                                    }                                
                            break;
                                case 'xsd:int':
                                case 'xsd:float':
                                case 'xsd:long':
                                    theQuote = '';
                                    if (theCurrentArrayNode.textContent != '') {
                                        theText = theCurrentArrayNode.textContent;
                                    }
                                    else {
                                        theText = 'null';
                                    }
                                    break;
                            }

                            theTotalJSONString += '"' + theCurrentArrayNode.nodeName + '"' + ': ' + theQuote + theText + theQuote;
                        }

                        if (theCurrentNode.childNodes[0].childNodes.length == k + 1) { theTotalJSONString += '}'; }

                    }
                }
                theTotalJSONString += ']';
            }
            else {

                switch (theCurrentNode.attributes.getNamedItem('xsi:type').value) {
                    case 'xsd:string':
                        theQuote = '"';
                        break;
                    case 'xsd:int':
                        theQuote = '';
                        break;
                }
                var theText = '';
                if (theCurrentNode.textContent != null) {
                    theText = theCurrentNode.textContent;
                }
                theTotalJSONString += '"' + theCurrentNode.nodeName + '"' + ': ' + theQuote + theText + theQuote;
            }
        }
        theTotalJSONString += '}';
    }

//    else // Internet Explorer
//    {
//        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//        xmlDoc.async = false;
//        xmlDoc.loadXML(responseText);
//    
//        var ns = '';
//        ns += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ';
//        ns += 'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ';
//        ns += 'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"  ';
//        ns += 'xmlns:ns1="http://www.dyadem.com/stature/ws" ';
//        xmlDoc.setProperty('SelectionNamespaces', ns);    


//        var theTotalJSONString = '{';

//        var theReturnNode = xmlDoc.selectSingleNode('//' + o.theMethod + 'Return');
//        for (n = 0; n < theReturnNode.childNodes.length; n++) {
//            var theType = '';
//            for (a = 0; a < theReturnNode.childNodes[n].attributes.length; a++) {
//                if (theReturnNode.childNodes[n].attributes[a].baseName === 'type') {
//                    theType = theReturnNode.childNodes[n].attributes[a].text;
//                }
//            }
//            if (theType != 'soapenc:Array') {
//                if (n > 0) {
//                    theJSONString += ', ';
//                }
//                var theQuote = '';
//                if (theType === 'xsd:string') {
//                    theQuote = '"';
//                }

//                var theText = '';
//                if (theReturnNode.childNodes[n].text === null) {
//                    theText = '';
//                }
//                else {
//                    theText = theReturnNode.childNodes[n].text;
//                }

//                theTotalJSONString += '"' + theReturnNode.childNodes[n].baseName + '"' + ': ' + theQuote + theText + theQuote;
//                theTotalJSONString += ', ';
//            }
//        }

//        theTotalJSONString += ' "' + o.theElement + '"' + ': [';
//        var theItems = xmlDoc.selectNodes('//' + o.theElement + o.theAttribute);
//        for (i = 0; i < theItems.length; i++) {
//            var theJSONString = '{';
//            for (f = 0; f < o.theFields.length; f++) {
//                if (f > 0) {
//                    theJSONString += ', ';
//                }
//                if (o.theFields[f].type != 'array') {
//                    var theQuote = '';
//                    if (o.theFields[f].type === 'string') {
//                        theQuote = '"';
//                    }
//                    var theNode = theItems[i].selectSingleNode(o.theFields[f].name);
//                    var theNodeText = theNode.text;
//                    if (theNodeText === '') {
//                        if (o.theFields[f].type === 'string') {
//                            theNodeText = ''
//                        }
//                        else {
//                            theNodeText = 'null'
//                        }
//                    }
//                    theJSONString += '"' + theNode.baseName + '"' + ': ' + theQuote + theNodeText + theQuote;
//                }
//                else {
//                    //var theNode = theItems[i].selectSingleNode(o.theFields[f].name);
//                    //theJSONString += '"' + theNode.baseName + '"' + ': ' + '[]';
//                    if (theItems[i].attributes[0].value === 'xsd:string') {
//                        theQuote = '';
//                        theJSONString += '"' + theItems[i].baseName + '"' + ': ' + theQuote + theItems[i].text + theQuote;
//                    }
//                    else {
//                        var theIndexItems = theItems[i].selectNodes(o.theFields[f].name + '/*');
//                        var allItems = '"' + o.theFields[f].name + '": [';
//                        if (theIndexItems != null) {
//                            for (j = 0; j < theIndexItems.length; j++) {
//                                if (j > 0) {
//                                    allItems += ', ';
//                                }
//                                allItems += '{'
//                                for (k = 0; k < theIndexItems[j].childNodes.length; k++) {
//                                    if (k > 0) {
//                                        allItems += ', ';
//                                    }
//                                    var theNode = theIndexItems[j].childNodes[k];
//                                    var theNodeText = theNode.text;
//                                    if (theNodeText == '') {
//                                        theQuote = '"';
//                                    }
//                                    else {
//                                        if (isNaN(theNodeText)) {
//                                            theQuote = '"';
//                                        }
//                                        else {
//                                            theQuote = '';
//                                        }
//                                    }

//                                    allItems += '"' + theNode.baseName + '"' + ': ' + theQuote + theNodeText + theQuote;
//                                }
//                                allItems += '}'
//                            }
//                            allItems += ']';
//                        }
//                        theJSONString += allItems;
//                    }
//                }
//            }

//            theJSONString += '}';
//            if (i > 0) {
//                theTotalJSONString += ', ';
//            }
//            theTotalJSONString += theJSONString;
//        }
//        theTotalJSONString += ']}';

//    }

    debugger;
    var theTotalJSONObject = Ext.decode(theTotalJSONString);
    return theTotalJSONObject;
}








//addTeamMemberRoleToProject
//cloneProject
//createPMTClone
//createProject
//createProjectSnapshot
//getCdpIndex
//getChangedProjectIds
//getCurrentCdp
//getDfxIndexes
//getMetricsSnapshot
//getPhysicalArchitectureRiskMappings
//getPhysicalArchitectures
//getPMTClones
//getProjectSnapshots
//getRequirements
//getRisks
//getTests
//removeTeamMemberRoleFromProject
//renameProject
//updateTeamMemberRolesInProject 

//1.       Existing Required Services Methods that need to remain in place. 
//a.       Get Current Cdp
//b.      Get Changed Project IDs
//c.       Get Metrics Snapshot.

//2.       Modified web services based on the latest version of the WSDL that have to be delivered:
//a.       Get Requirements
//b.      Get CDP Dfx (Cdp Index)
//c.       Get Physical Architecture
//d.      Get Physical Architecture Risk Mapping
//e.      Get Risks





function getSoapStoreStature(o) {
    debugger;
    Ext.DomQuery.matchers.push({
        re: /^(?:([\[\{])(?:@)?([\w-]+(?:\:[\w-]+))\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/,
        select: 'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'
    });

    o.theUrl = 'http://localhost/stature/control/StatureWebServices';
    o.theNamespace = 'http://www.dyadem.com/stature/ws';

    var store = Ext.create('Ext.data.Store', {
        fields: o.theFields,
        proxy: {

            envelopeTpl: [
                '<?xml version="1.0" encoding="utf-8" ?>',
                '<soap:Envelope',
		        ' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"',
                ' xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"',
                ' xmlns:tns="http://www.dyadem.com/stature/ws"',
                ' xmlns:types="http://www.dyadem.com/stature/ws/encodedTypes"',
                ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
                ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"',
                '>',
                    '{[values.bodyTpl.apply(values)]}',
                '</soap:Envelope>'
            ],
            readBodyTpl: [
                '<soap:Body soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">',
                    '<tns:{operation}>',
                        '<tpl foreach="params">',
                            '<{$}>{.}</{$}>',
                        '</tpl>',
                    '</tns:{operation}>',
                '</soap:Body>'
            ],

            type: 'soap',
            url: o.theUrl,
            api: {
                read: o.theMethod
            },
            soapAction: {
                read: o.theNamespace + o.theMethod
            },
            targetNamespace: o.theNamespace,
            reader: {
                type: 'soap'
                //record: '//' + o.theElement + o.theAttribute
            }
        }
    });

    store.load({
        params: o.theParams,
        callback: o.theFunction,
        scope: o.theTest
    });

    return store;
}



//function getReturnedData2(responseText, o) {
//    var xmlDoc;
//    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//    xmlDoc.async = false;
//    xmlDoc.loadXML(responseText);

//    var ns = '';
//    ns += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ';
//    ns += 'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ';
//    ns += 'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"  ';
//    ns += 'xmlns:ns1="http://www.dyadem.com/stature/ws" ';
//    xmlDoc.setProperty('SelectionNamespaces', ns);

//    var theTotalJSONString = '{';

//    var theReturnNode = xmlDoc.selectSingleNode('//' + o.theMethod + 'Return');

//    var theStatusCode = theReturnNode.selectSingleNode('statusCode');
//    theTotalJSONString += '"' + theStatusCode.baseName + '"' + ': ' + '' + theStatusCode.text + '';
//    theTotalJSONString += ', ';

//    var theFailureMessage = theReturnNode.selectSingleNode('failureMessage');
//    theTotalJSONString += '"' + theFailureMessage.baseName + '"' + ': ' + '"' + theFailureMessage.text + '"';
//    theTotalJSONString += ', ';

//    if (o.extraRootItem != '') {
//        var theExtraRootItem = theReturnNode.selectSingleNode(o.extraRootItem);
//        theTotalJSONString += '"' + theExtraRootItem.baseName + '"' + ': ' + '"' + theExtraRootItem.text + '"';
//        theTotalJSONString += ', ';
//    }

//    theTotalJSONString += '"' + o.theElement + '"' + ': [';
//    var theItems = xmlDoc.selectNodes('//' + o.theElement + o.theAttribute);
//    for (i = 0; i < theItems.length; i++) {
//        var theJSONString = '{';
//        for (f = 0; f < o.theFields.length; f++) {
//            if (f > 0) {
//                theJSONString += ', ';
//            }
//            if (o.theFields[f].type != 'array') {
//                var theQuote = '';
//                if (o.theFields[f].type === 'string') {
//                    theQuote = '"';
//                }
//                var theNode = theItems[i].selectSingleNode(o.theFields[f].name);
//                var theNodeText = theNode.text;
//                if (theNodeText === '') {
//                    if (o.theFields[f].type === 'string') {
//                        theNodeText = ''
//                    }
//                    else {
//                        theNodeText = 'null'
//                    }
//                }
//                theJSONString += '"' + theNode.baseName + '"' + ': ' + theQuote + theNodeText + theQuote;
//            }
//            else {
//                //var theNode = theItems[i].selectSingleNode(o.theFields[f].name);
//                //theJSONString += '"' + theNode.baseName + '"' + ': ' + '[]';
//                if (theItems[i].attributes[0].value === 'xsd:string') {
//                    theQuote = '';
//                    theJSONString += '"' + theItems[i].baseName + '"' + ': ' + theQuote + theItems[i].text + theQuote;
//                }
//                else {
//                    var theIndexItems = theItems[i].selectNodes(o.theFields[f].name + '/*');
//                    var allItems = '"' + o.theFields[f].name + '": [';
//                    if (theIndexItems != null) {
//                        for (j = 0; j < theIndexItems.length; j++) {
//                            if (j > 0) {
//                                allItems += ', ';
//                            }
//                            allItems += '{'
//                            for (k = 0; k < theIndexItems[j].childNodes.length; k++) {
//                                if (k > 0) {
//                                    allItems += ', ';
//                                }
//                                var theNode = theIndexItems[j].childNodes[k];
//                                var theNodeText = theNode.text;
//                                if (theNodeText == '') {
//                                    theQuote = '"';
//                                }
//                                else {
//                                    if (isNaN(theNodeText)) {
//                                        theQuote = '"';
//                                    }
//                                    else {
//                                        theQuote = '';
//                                    }
//                                }

//                                allItems += '"' + theNode.baseName + '"' + ': ' + theQuote + theNodeText + theQuote;
//                            }
//                            allItems += '}'
//                        }
//                        allItems += ']';
//                    }
//                    theJSONString += allItems;
//                }
//            }
//        }

//        theJSONString += '}';
//        if (i > 0) {
//            theTotalJSONString += ', ';
//        }
//        theTotalJSONString += theJSONString;
//    }
//    theTotalJSONString += ']}';
//    debugger;
//    var theTotalJSONObject = Ext.decode(theTotalJSONString);
//    return theTotalJSONObject;
//}




//function mkXML(text) //turns xml string into XMLDOM
//{
//    if (typeof DOMParser != "undefined") {
//        var d = new DOMParser();
//        //return (new DOMParser()).parseFromString(text, "text/xml");
//        return d.parseFromString(text, "text/xml");
//    }
//    else if (typeof ActiveXObject != "undefined") {
//        var doc = new ActiveXObject("MSXML2.DOMDocument");
//        //doc = new ActiveXObject("Microsoft.XMLDOM");
//        //doc.async = false;

//        doc.loadXML(text);
//        return doc;
//    }
//    else {
//        var url = "data:text/xml;charset=utf-8," + escape(text);
//        var request = new XMLHttpRequest();
//        request.open("GET", url, false);
//        request.send(null);
//        return request.responseXML;
//    }


//    //xmlDoc = mkXML(responseText);
//    //    var error = "";
//    //    var file = root + "/inc/xml/linguas_" + lg + ".xml";
//    //    try //Internet Explorer
//    //    {
//    //        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//    //        xmlDoc.async = false;
//    //        //xmlDoc.load(file);
//    //        xmlDoc.loadXML(responseText);
//    //    }
//    //    catch (e) {
//    //        try //Firefox, Mozilla, Opera, etc.
//    // {
//    //            xmlDoc = document.implementation.createDocument("", "", null);
//    //            xmlDoc.async = false;
//    //            //xmlDoc.load(file);
//    //            xmlDoc.loadXML(responseText);
//    //        }
//    //        catch (e) {
//    //            try //Google Chrome
//    //  {
//    //                var xmlhttp = new window.XMLHttpRequest();
//    //                xmlhttp.open("GET", file, false);
//    //                xmlhttp.send(null);
//    //                xmlDoc = xmlhttp.responseXML.documentElement;
//    //            }
//    //            catch (e) {
//    //                error = e.message;
//    //            }
//    //        }
//    //    }







//};
