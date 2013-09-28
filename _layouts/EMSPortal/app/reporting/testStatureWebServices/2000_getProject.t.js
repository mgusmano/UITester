function getResults() {
    return [
    
]

}
function getFields() {
    return [
        { name: 'actions', type: 'string' },
        { name: 'cdps', type: 'string' },
        { name: 'currentCdp', type: 'string' },
        { name: 'devices', type: 'string' },
        { name: 'failureMessage', type: 'string' },
        { name: 'fmeaTopicDiscussion', type: 'string' },
        { name: 'OpportunityAnalyses', type: 'string' },
        { name: 'physicalArchitecture', type: 'string' },
        { name: 'plannedCommercializationDate', type: 'dateTime' },
        { name: 'projectGroup', type: 'string' },
        { name: 'projectSnapshots', type: 'string' },
        { name: 'requirementOpportunityAnalysisMapping', type: 'string' },
        { name: 'requirementRiskActionMappings', type: 'string' },
        { name: 'requirementValidationTestMappings', type: 'string' },
        { name: 'requirements', type: 'string' },
        { name: 'riskExperimentalTestMappings', type: 'string' },
        { name: 'specificationRiskActionMappings', type: 'string' },
        { name: 'specificationRiskMappings', type: 'string' },
        { name: 'specificationVerificationTestMappings', type: 'string' },
        { name: 'specifications', type: 'string' },
        { name: 'statusCode', type: 'int' },
        { name: 'testDeviceMappings', type: 'string' },
        { name: 'tests', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getProject';
    o.theRecord = 'getProjectReturn';

    return o;
}

StartTest(function (t) {
    var o = getParameters()
    var store = getTheStore(o);
    store.load({
        params: o.theParams,
        callback: function () {
            t.isDeeply(getJsonOfStore(store), getResults(), t.url)
        }
    });
})

function getSoap() {
}

