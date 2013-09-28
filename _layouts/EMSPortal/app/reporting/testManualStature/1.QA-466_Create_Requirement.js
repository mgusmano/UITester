function getResults() {
    return {
        "achievedValue": "3bpm",
        "dbId": "1007843818",
        "description": "Allow Circulation of Fluids Around the Packer Element while RIH. This is not required while running with Open Perf Adapter.",
        "dirty": false,
        "isLocked": false,
        "isValidated": false,
        "maturity": 3,
        "maturityIndex": 1.5,
        "maxRisk": 0,
        "maxRiskCost": 0,
        "maxRiskPerformance": 0,
        "maxRiskTime": 0,
        "maxRiskType": "",
        "name": "Allow Circulation of Fluids Around the Packer Element while RIH",
        "numberOfTestsCompleted": 1,
        "numberOfTestsPassed": 0,
        "numberOfValidationTestsCompleted": 1,
        "numberOfValidationTestsPassed": 0,
        "numberOfVerificationTestsCompleted": 0,
        "numberOfVerificationTestsPassed": 0,
        "parenttypeSequence": "",
        "percentOfTestsCompleted": 1,
        "prioritization": "Must Have",
        "references": null,
        "reqId": "3",
        "requirementUrl": "/stature/control/loadSlbStudy?versionId=1000119007&viewName=Requirement&defaultRowId=1007843818&ignoreViewGroup=true",
        "sequence": 1,
        "target": "100F",
        "testPassed": false,
        "tolerance": "5 bpm(both reverse and direct circulation)",
        "type": "Functional",
        "typeSequence": "1",
        "typeShortDescription": "Functional",
        "validationComment": "",
        "version": "1"
    }
    
}

function getFields() {
    return [
        { name: 'achievedValue', type: 'string' }, 
        { name: 'dbId', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'dirty', type: 'boolean' },
        { name: 'isLocked', type: 'boolean' },
        { name: 'isValidated', type: 'boolean' },
        { name: 'maturity', type: 'int' }, 
        { name: 'maturityIndex', type: 'float' },
        { name: 'maxRisk', type: 'float' },
        { name: 'maxRiskCost', type: 'float' },
        { name: 'maxRiskPerformance', type: 'float' }, 
        { name: 'maxRiskTime', type: 'float' },
        { name: 'maxRiskType', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'numberOfTestsCompleted', type: 'int' },
        { name: 'numberOfTestsPassed', type: 'int' },
        { name: 'numberOfValidationTestsCompleted', type: 'int' },
        { name: 'numberOfValidationTestsPassed', type: 'int' },
        { name: 'numberOfVerificationTestsCompleted', type: 'int' },
        { name: 'numberOfVerificationTestsPassed', type: 'int' }, 
        { name: 'parenttypeSequence', type: 'string' },
        { name: 'percentOfTestsCompleted', type: 'int' },
        { name: 'prioritization', type: 'string' }, 
        { name: 'references', type: 'array' },
        { name: 'reqId', type: 'string' },
        { name: 'requirementUrl', type: 'string' },
        { name: 'sequence', type: 'int' },
        { name: 'target', type: 'string' },
        { name: 'testPassed', type: 'boolean' },
        { name: 'tolerance', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'typeSequence', type: 'string' },
        { name: 'typeShortDescription', type: 'string' },
        { name: 'validationComment', type: 'string' },
        { name: 'version', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = {projectID: 97222};
    o.theMethod = 'getRequirements';
    o.theRecord = 'requirements';
 


    return o;
}

StartTest(function (t) {
    debugger;
    var o = getParameters()
    var store = getTheStore(o);
    store.load({
        params: o.theParams,
        callback: function () {
		 //t.isDeeply(getJsonOfStore(store), getResults(), t.url)
            var theObject = getOneJsonObjectOfStore(store, 'name', 'Allow Circulation of Fluids Around the Packer Element while RIH');
            debugger;
            t.isDeeply(theObject, getResults(), t.url)
        }
    });
})

function getSoap() {

}
