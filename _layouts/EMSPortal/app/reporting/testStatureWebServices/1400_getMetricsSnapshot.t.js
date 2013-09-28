function getResults() {
    return [
   {
       "overallLifecycleIndex": "0.0",
       "productMaturity": "0.0",
       "productMaturity2": "13.04",
       "projectId": "97368",
       "reqMaturityIndex": "88.31",
       "riskMaturityIndex": "17.17",
       "snapshotTime": "2013-04-23T00:00:00.000Z"
   }
]
}
function getFields() {
    return [
        { name: 'overallLifecycleIndex', type: 'double' },
        { name: 'productMaturity', type: 'double' },
        { name: 'productMaturity2', type: 'double' },
        { name: 'projectId', type: 'string' },
        { name: 'reqMaturityIndex', type: 'double' },
        { name: 'riskMaturityIndex', type: 'double' },
        { name: 'snapshotTime', type: 'dateTime' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getMetricsSnapshot';
    o.theRecord = 'maturityMetrics';

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

