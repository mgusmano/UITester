function getResults() {
    return [
    {
        "failureMessage": "",
        "requirementRiskTestMappings": "",
        "specificationRiskTestMappings": ""
    }
]   

}
function getFields() {
    return [
        { name: 'failureMessage', type: 'string' },
        { name: 'requirementRiskTestMappings', type: 'string' },
        { name: 'specificationRiskTestMappings', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getRiskExperimentalTestMappings';
    o.theRecord = 'getRiskExperimentalTestMappingsReturn';

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

