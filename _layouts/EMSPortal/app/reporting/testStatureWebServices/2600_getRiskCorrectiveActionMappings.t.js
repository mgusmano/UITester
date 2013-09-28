function getResults() {
    return [
   {
       "actionDbId": "1000088188",
       "riskDbId": "1000089311",
       "sequence": 1
   },
   {
       "actionDbId": "1000088188",
       "riskDbId": "1000089311",
       "sequence": 1
   },
   {
       "actionDbId": "1000088189",
       "riskDbId": "1000089313",
       "sequence": 1
   },
   {
       "actionDbId": "1000088190",
       "riskDbId": "1000089315",
       "sequence": 1
   },
   {
       "actionDbId": "1000088190",
       "riskDbId": "1000089338",
       "sequence": 1
   },
   {
       "actionDbId": "1000088189",
       "riskDbId": "1000089336",
       "sequence": 1
   }
]
}
function getFields() {
    return [
        { name: 'actionDbId', type: 'long' },
        { name: 'riskDbId', type: 'long' },
        { name: 'sequence', type: 'int' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getRiskCorrectiveActionMappings';
    o.theRecord = 'specificationRiskActionMappings';

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

