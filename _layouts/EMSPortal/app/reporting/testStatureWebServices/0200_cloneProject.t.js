
function getResults() {
    return {
        "failureMessage": "",
        "requirements": [
        {
            "achievedValue": "",
            "dbId": 1007456265,
            "description": "Needs to be heard through at least one wall separation. Most competitor phone have bad press due to low volume of ringers",
            "dirty": "",
            "isLocked": "",
            "isValidated": "",
            "maturity": null,
            "maturityIndex": 1.1,
            "maxRisk": 8,
            "maxRiskCost": null,
            "maxRiskPerformance": 8,
            "maxRiskTime": null,
            "maxRiskType": "Performance",
            "name": "Ring tone needs to be clearly audible",
            "numberOfTestsCompleted": 0,
            "numberOfTestsPassed": 0,
            "numberOfValidationTestsCompleted": 0,
            "numberOfValidationTestsPassed": 0,
            "numberOfVerificationTestsCompleted": 0,
            "numberOfVerificationTestsPassed": 0,
            "parenttypeSequence": "",
            "percentOfTestsCompleted": 0,
            "prioritization": "Key Differentiators",
            "references": "",
            "reqId": 1,
            "requirementUrl": "/stature/control/loadSlbStudy?versionId=1000097001&viewName=Requirement&defaultRowId=1007456265&ignoreViewGroup=true",
            "sequence": 1,
            "target": "2",
            "testPassed": "",
            "tolerance": "3",
            "type": "Functional",
            "typeSequence": "1",
            "typeShortDescription": "Functional",
            "validationComment": "",
            "version": "1"
        },
        {
            "achievedValue": "",
            "dbId": 1007456265,
            "description": "Needs to be heard through at least one wall separation. Most competitor phone have bad press due to low volume of ringers",
            "dirty": "",
            "isLocked": "",
            "isValidated": "",
            "maturity": null,
            "maturityIndex": 1.1,
            "maxRisk": 8,
            "maxRiskCost": null,
            "maxRiskPerformance": 8,
            "maxRiskTime": null,
            "maxRiskType": "Performance",
            "name": "Ring tone needs to be clearly audible",
            "numberOfTestsCompleted": 0,
            "numberOfTestsPassed": 0,
            "numberOfValidationTestsCompleted": 0,
            "numberOfValidationTestsPassed": 0,
            "numberOfVerificationTestsCompleted": 0,
            "numberOfVerificationTestsPassed": 0,
            "parenttypeSequence": "",
            "percentOfTestsCompleted": 0,
            "prioritization": "Key Differentiators",
            "references": "",
            "reqId": 1,
            "requirementUrl": "/stature/control/loadSlbStudy?versionId=1000097001&viewName=Requirement&defaultRowId=1007456265&ignoreViewGroup=true",
            "sequence": 1,
            "target": "2",
            "testPassed": "",
            "tolerance": "3",
            "type": "Functional",
            "typeSequence": "1",
            "typeShortDescription": "Functional",
            "validationComment": "",
            "version": "1"
        },
        {
            "achievedValue": "",
            "dbId": 1007456265,
            "description": "Needs to be heard through at least one wall separation. Most competitor phone have bad press due to low volume of ringers",
            "dirty": "",
            "isLocked": "",
            "isValidated": "",
            "maturity": null,
            "maturityIndex": 1.1,
            "maxRisk": 8,
            "maxRiskCost": null,
            "maxRiskPerformance": 8,
            "maxRiskTime": null,
            "maxRiskType": "Performance",
            "name": "Ring tone needs to be clearly audible",
            "numberOfTestsCompleted": 0,
            "numberOfTestsPassed": 0,
            "numberOfValidationTestsCompleted": 0,
            "numberOfValidationTestsPassed": 0,
            "numberOfVerificationTestsCompleted": 0,
            "numberOfVerificationTestsPassed": 0,
            "parenttypeSequence": "",
            "percentOfTestsCompleted": 0,
            "prioritization": "Key Differentiators",
            "references": "",
            "reqId": 1,
            "requirementUrl": "/stature/control/loadSlbStudy?versionId=1000097001&viewName=Requirement&defaultRowId=1007456265&ignoreViewGroup=true",
            "sequence": 1,
            "target": "2",
            "testPassed": "",
            "tolerance": "3",
            "type": "Functional",
            "typeSequence": "1",
            "typeShortDescription": "Functional",
            "validationComment": "",
            "version": "1"
        }
    ],
        "statusCode": 0,
        "urlToRequirementsWorksheet": "/stature/control/loadSlbStudy?versionId=1000097001&viewName=Requirement&ignoreViewGroup=true"
    }
}

StartTest(function (t) {
    var o = {};
    o.theParams = { projectId: 85984 };
    o.theMethod = 'cloneProject';

    var localTrue = true;
    if (localTrue == true) {
        t.isDeeply(getReturnedData(getSoap(), o), getResults(), o.theMethod + ': Returned data matched expected results (local)')
    }
    else {
        o.theFunction = function (records, operation, success) {
            t.isDeeply(getReturnedData(operation.response.responseText, o), getResults(), o.theMethod + ': Returned data matched expected results')
        }
        getSoapStoreStature(o);
    }
})

function getSoap() {
    return '<?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><ns1:getRequirementsResponse soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="http://www.dyadem.com/stature/ws"><getRequirementsReturn xsi:type="ns1:RequirementListServiceResponse"><failureMessage xsi:type="xsd:string" xsi:nil="true"/><requirements soapenc:arrayType="ns1:Requirement[3]" xsi:type="soapenc:Array" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"><requirements xsi:type="ns1:Requirement"><achievedValue xsi:type="xsd:string"></achievedValue><dbId xsi:type="xsd:long">1007456265</dbId><description xsi:type="xsd:string">Needs to be heard through at least one wall separation. Most competitor phone have bad press due to low volume of ringers</description><dirty xsi:type="xsd:boolean" xsi:nil="true"/><isLocked xsi:type="xsd:boolean" xsi:nil="true"/><isValidated xsi:type="xsd:boolean" xsi:nil="true"/><maturity xsi:type="xsd:int" xsi:nil="true"/><maturityIndex xsi:type="xsd:float">1.1</maturityIndex><maxRisk xsi:type="xsd:float">8.0</maxRisk><maxRiskCost xsi:type="xsd:float" xsi:nil="true"/><maxRiskPerformance xsi:type="xsd:float">8.0</maxRiskPerformance><maxRiskTime xsi:type="xsd:float" xsi:nil="true"/><maxRiskType xsi:type="xsd:string">Performance</maxRiskType><name xsi:type="xsd:string">Ring tone needs to be clearly audible</name><numberOfTestsCompleted xsi:type="xsd:int">0</numberOfTestsCompleted><numberOfTestsPassed xsi:type="xsd:int">0</numberOfTestsPassed><numberOfValidationTestsCompleted xsi:type="xsd:int">0</numberOfValidationTestsCompleted><numberOfValidationTestsPassed xsi:type="xsd:int">0</numberOfValidationTestsPassed><numberOfVerificationTestsCompleted xsi:type="xsd:int">0</numberOfVerificationTestsCompleted><numberOfVerificationTestsPassed xsi:type="xsd:int">0</numberOfVerificationTestsPassed><parenttypeSequence xsi:type="xsd:string" xsi:nil="true"/><percentOfTestsCompleted xsi:type="xsd:int">0</percentOfTestsCompleted><prioritization xsi:type="xsd:string">Key Differentiators</prioritization><references soapenc:arrayType="ns1:Reference[0]" xsi:type="soapenc:Array"/><reqId xsi:type="xsd:long">1</reqId><requirementUrl xsi:type="xsd:string">/stature/control/loadSlbStudy?versionId=1000097001&amp;viewName=Requirement&amp;defaultRowId=1007456265&amp;ignoreViewGroup=true</requirementUrl><sequence xsi:type="xsd:int">1</sequence><target xsi:type="xsd:string">2</target><testPassed xsi:type="xsd:boolean" xsi:nil="true"/><tolerance xsi:type="xsd:string">3</tolerance><type xsi:type="xsd:string">Functional</type><typeSequence xsi:type="xsd:string">1</typeSequence><typeShortDescription xsi:type="xsd:string">Functional</typeShortDescription><validationComment xsi:type="xsd:string"></validationComment><version xsi:type="xsd:string">1</version></requirements><requirements xsi:type="ns1:Requirement"><achievedValue xsi:type="xsd:string"></achievedValue><dbId xsi:type="xsd:long">1007456264</dbId><description xsi:type="xsd:string">Market studies show that this has become an industry standard and expected feature on all phones</description><dirty xsi:type="xsd:boolean" xsi:nil="true"/><isLocked xsi:type="xsd:boolean" xsi:nil="true"/><isValidated xsi:type="xsd:boolean" xsi:nil="true"/><maturity xsi:type="xsd:int" xsi:nil="true"/><maturityIndex xsi:type="xsd:float">1.46</maturityIndex><maxRisk xsi:type="xsd:float">3.0</maxRisk><maxRiskCost xsi:type="xsd:float" xsi:nil="true"/><maxRiskPerformance xsi:type="xsd:float">3.0</maxRiskPerformance><maxRiskTime xsi:type="xsd:float" xsi:nil="true"/><maxRiskType xsi:type="xsd:string">Performance</maxRiskType><name xsi:type="xsd:string">Caller number and name should appear on digital display</name><numberOfTestsCompleted xsi:type="xsd:int">1</numberOfTestsCompleted><numberOfTestsPassed xsi:type="xsd:int">0</numberOfTestsPassed><numberOfValidationTestsCompleted xsi:type="xsd:int">0</numberOfValidationTestsCompleted><numberOfValidationTestsPassed xsi:type="xsd:int">0</numberOfValidationTestsPassed><numberOfVerificationTestsCompleted xsi:type="xsd:int">1</numberOfVerificationTestsCompleted><numberOfVerificationTestsPassed xsi:type="xsd:int">0</numberOfVerificationTestsPassed><parenttypeSequence xsi:type="xsd:string" xsi:nil="true"/><percentOfTestsCompleted xsi:type="xsd:int">1</percentOfTestsCompleted><prioritization xsi:type="xsd:string">Key Differentiators</prioritization><references soapenc:arrayType="ns1:Reference[0]" xsi:type="soapenc:Array"/><reqId xsi:type="xsd:long">2</reqId><requirementUrl xsi:type="xsd:string">/stature/control/loadSlbStudy?versionId=1000097001&amp;viewName=Requirement&amp;defaultRowId=1007456264&amp;ignoreViewGroup=true</requirementUrl><sequence xsi:type="xsd:int">2</sequence><target xsi:type="xsd:string">standard hearing ability through 20mm thick sheet wall</target><testPassed xsi:type="xsd:boolean">false</testPassed><tolerance xsi:type="xsd:string">1 wall thickness minimum, 3 would be great</tolerance><type xsi:type="xsd:string">Functional</type><typeSequence xsi:type="xsd:string">1</typeSequence><typeShortDescription xsi:type="xsd:string">Functional</typeShortDescription><validationComment xsi:type="xsd:string"></validationComment><version xsi:type="xsd:string">1</version></requirements><requirements xsi:type="ns1:Requirement"><achievedValue xsi:type="xsd:string"></achievedValue><dbId xsi:type="xsd:long">1007456263</dbId><description xsi:type="xsd:string">Speaker button should be clearly visible</description><dirty xsi:type="xsd:boolean" xsi:nil="true"/><isLocked xsi:type="xsd:boolean" xsi:nil="true"/><isValidated xsi:type="xsd:boolean" xsi:nil="true"/><maturity xsi:type="xsd:int" xsi:nil="true"/><maturityIndex xsi:type="xsd:float">0.82</maturityIndex><maxRisk xsi:type="xsd:float">5.0</maxRisk><maxRiskCost xsi:type="xsd:float" xsi:nil="true"/><maxRiskPerformance xsi:type="xsd:float">5.0</maxRiskPerformance><maxRiskTime xsi:type="xsd:float" xsi:nil="true"/><maxRiskType xsi:type="xsd:string">Performance</maxRiskType><name xsi:type="xsd:string">Ability to answer by either picking up headset or pressing on speaker </name><numberOfTestsCompleted xsi:type="xsd:int">0</numberOfTestsCompleted><numberOfTestsPassed xsi:type="xsd:int">0</numberOfTestsPassed><numberOfValidationTestsCompleted xsi:type="xsd:int">0</numberOfValidationTestsCompleted><numberOfValidationTestsPassed xsi:type="xsd:int">0</numberOfValidationTestsPassed><numberOfVerificationTestsCompleted xsi:type="xsd:int">0</numberOfVerificationTestsCompleted><numberOfVerificationTestsPassed xsi:type="xsd:int">0</numberOfVerificationTestsPassed><parenttypeSequence xsi:type="xsd:string" xsi:nil="true"/><percentOfTestsCompleted xsi:type="xsd:int">0</percentOfTestsCompleted><prioritization xsi:type="xsd:string">Must Have</prioritization><references soapenc:arrayType="ns1:Reference[0]" xsi:type="soapenc:Array"/><reqId xsi:type="xsd:long">3</reqId><requirementUrl xsi:type="xsd:string">/stature/control/loadSlbStudy?versionId=1000097001&amp;viewName=Requirement&amp;defaultRowId=1007456263&amp;ignoreViewGroup=true</requirementUrl><sequence xsi:type="xsd:int">3</sequence><target xsi:type="xsd:string"></target><testPassed xsi:type="xsd:boolean" xsi:nil="true"/><tolerance xsi:type="xsd:string"></tolerance><type xsi:type="xsd:string">Functional</type><typeSequence xsi:type="xsd:string">1</typeSequence><typeShortDescription xsi:type="xsd:string">Functional</typeShortDescription><validationComment xsi:type="xsd:string"></validationComment><version xsi:type="xsd:string">1</version></requirements></requirements><statusCode xsi:type="xsd:int">0</statusCode><urlToRequirementsWorksheet xsi:type="xsd:string">/stature/control/loadSlbStudy?versionId=1000097001&amp;viewName=Requirement&amp;ignoreViewGroup=true</urlToRequirementsWorksheet></getRequirementsReturn></ns1:getRequirementsResponse></soapenv:Body></soapenv:Envelope>';
}

//o.theElement = 'requirements';
//o.theAttribute = '[@xsi:type="ns1:Requirement"]';
//o.extraRootItem = 'urlToRequirementsWorksheet';
//o.theFields = getFields();


//function getFields() {
//    return [
//        { name: 'achievedValue', type: 'string' }, 
//        { name: 'dbId', type: 'long' },
//        { name: 'description', type: 'string' },
//        { name: 'dirty', type: 'boolean' },
//        { name: 'isLocked', type: 'boolean' },
//        { name: 'isValidated', type: 'boolean' },
//        { name: 'maturity', type: 'int' }, 
//        { name: 'maturityIndex', type: 'float' },
//        { name: 'maxRisk', type: 'float' },
//        { name: 'maxRiskCost', type: 'float' },
//        { name: 'maxRiskPerformance', type: 'float' }, 
//        { name: 'maxRiskTime', type: 'float' },
//        { name: 'maxRiskType', type: 'string' },
//        { name: 'name', type: 'string' },
//        { name: 'numberOfTestsCompleted', type: 'int' },
//        { name: 'numberOfTestsPassed', type: 'int' },
//        { name: 'numberOfValidationTestsCompleted', type: 'int' },
//        { name: 'numberOfValidationTestsPassed', type: 'int' },
//        { name: 'numberOfVerificationTestsCompleted', type: 'int' },
//        { name: 'numberOfVerificationTestsPassed', type: 'int' }, 
//        { name: 'parenttypeSequence', type: 'string' },
//        { name: 'percentOfTestsCompleted', type: 'int' },
//        { name: 'prioritization', type: 'string' }, 
//        { name: 'references', type: 'array' },
//        { name: 'reqId', type: 'long' },
//        { name: 'requirementUrl', type: 'string' },
//        { name: 'sequence', type: 'int' },
//        { name: 'target', type: 'string' },
//        { name: 'testPassed', type: 'boolean' },
//        { name: 'tolerance', type: 'string' },
//        { name: 'type', type: 'string' },
//        { name: 'typeSequence', type: 'string' },
//        { name: 'typeShortDescription', type: 'string' },
//        { name: 'validationComment', type: 'string' },
//        { name: 'version', type: 'string' }
//    ]
//}
