












//        theItems.filter(function () { return $(this).attr('xsi:type'); }).each(function () {
//            // matched a div with custom::attr

//            var xlnk = $(this).getAttribute('xmlns:type');

//            alert(xlnk);
//        });



//        $(operation.response.responseText).find('item[xsi:type="ns1:CdpIndexItem"]').each(function () {
//            console.log($(this).find("cdpName").text() + ',' + $(this).find("current").text());
//        });






//            if (theItems[i].attributes[0].value === "ns1:CdpIndexItem") {
//                for (j = 0; j < theItems[i].childNodes.length; j++) {
//                    if (theItems[i].childNodes[j].baseName === 'indexes') {
//                        if (theItems[i].childNodes[j].childNodes[0] != null) {
//                            //cone.log('s:' + theItems[i].childNodes[j].baseName);
//                            for (k = 0; k < theItems[i].childNodes[j].childNodes.length; k++) {
//                                for (l = 0; l < theItems[i].childNodes[j].childNodes[k].childNodes.length; l++) {
//                                    console.log(theItems[i].childNodes[j].childNodes[k].childNodes[l].baseName + ' ' + theItems[i].childNodes[j].childNodes[k].childNodes[l].text);
//                                }
//                            }
//                            //console.log('e:' + theItems[i].childNodes[j].baseName);
//                        }
//                        else {
//                            //console.log('null:' + theItems[i].childNodes[j].baseName);
//                        }
//                    }
//                    else {
//                        //console.log(theItems[i].childNodes[j].baseName + ' ' + theItems[i].childNodes[j].text);
//                    }

//                }

//                //console.log(theItems[i].childNodes[0].baseName + ' ' + theItems[i].childNodes[0].text);
//            }
//            //console.log(theItems[i].childNodes[0].nodeValue);
//var xmlDoc;
//if (window.DOMParser) {
//    parser = new DOMParser();
//    xmlDoc = parser.parseFromString(operation.response.responseText, "text/xml");
//}
//else // Internet Explorer
//{
//    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//    xmlDoc.async = false;
//    xmlDoc.loadXML(operation.response.responseText);
//}







//        if (typeof xml.evaluate !== 'undefined') {
//            var result = xml.evaluate(
//   path,
//   xml,
//   function (prefix) {
//       if (prefix === 'bk') {
//           return 'http://purl.org/dc/elements/1.1/';
//       }
//       else {
//           return null;
//       }
//   },
//   XPathResult.ANY_TYPE,
//   null
//  );
//            // now use the code here you already have in your sample for evaluate 
//        }
//        else if (typeof xml.selectNodes !== 'undefined' && typeof xml.setProperty != 'undefined') {
//            xml.setProperty('SelectionLanguage', 'XPath');
//            xml.setProperty('SelectionNamespaces', 'xmlns:bk="http://purl.org/dc/elements/1.1/"');
//            var nodes = xml.selectNodes(path);
//            // now use the code you already have for selectNodes
//        }
//       debugger;
//var theItems = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);







//console.log($(operation.response.responseText).find(o.theMethod + "Return").text().split(" ").join("</b> <b>"));


//       var theItems = $(operation.response.responseText).find('items');
//        debugger;







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

//those are the first primary 8 that were developed for 1.02






function getGetJamesBondActorsResult() {
    return '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><GetJamesBondActorsResponse xmlns="http://tempuri.org/"><GetJamesBondActorsResult><PhoneItem><Name>Sean Connery</Name><Phone>001</Phone></PhoneItem><PhoneItem><Name>Pierce Brosnan</Name><Phone>002</Phone></PhoneItem><PhoneItem><Name>Daniel Craig</Name><Phone>003</Phone></PhoneItem></GetJamesBondActorsResult></GetJamesBondActorsResponse></soap:Body></soap:Envelope>';
}

function getFilterResult01() {
    return [
        {
            "Id": 1,
            "FiltersAvailableId": 1,
            "RangeTypeIdSelected": 4,
            "LowerValueSelected": "8/20/2012",
            "UpperValueSelected": null,
            "SingleSelectFilterValueIdSelected": null,
            "MultiSelectFilterValueIdsSelected": null
        },
        {
            "Id": 2,
            "FiltersAvailableId": 2,
            "RangeTypeIdSelected": null,
            "LowerValueSelected": null,
            "UpperValueSelected": null,
            "SingleSelectFilterValueIdSelected": null,
            "MultiSelectFilterValueIdsSelected": [
                1,
                2,
                4
            ]
        },
        {
            "Id": 3,
            "FiltersAvailableId": 3,
            "RangeTypeIdSelected": null,
            "LowerValueSelected": null,
            "UpperValueSelected": null,
            "SingleSelectFilterValueIdSelected": null,
            "MultiSelectFilterValueIdsSelected": [
                3,
                4
            ]
        }
    ]





}

