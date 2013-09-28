function getResults() {
    return [ 
  { "opportunityAnalysisDBid" : "",
    "requirementDBid" : "",
    "sequence" : 0
  }
]
}
function getFields() {
    return [
        { name: 'opportunityAnalysisDBid', type: 'long' },
        { name: 'requirementDBid', type: 'long' },
        { name: 'sequence', type: 'int' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getRequirementOpportunityAnalysisMappings';
    o.theRecord = 'mappings';

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

