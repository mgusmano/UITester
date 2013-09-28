function getResults() {
    return [
   {
       "id": "10020",
       "cdpName": "Concurrent Team Launch",
       "phases": ""
   },
   {
       "id": "10130",
       "cdpName": "Requirement & Concept Review / Validation",
       "phases": ""
   },
   {
       "id": "10630",
       "cdpName": "Realization Strategy Review / Realization Launch",
       "phases": ""
   },
   {
       "id": "12350",
       "cdpName": "ENP Production Launch",
       "phases": ""
   },
   {
       "id": "13800",
       "cdpName": "Field Introduction",
       "phases": ""
   },
   {
       "id": "13880",
       "cdpName": "EPS Production Launch",
       "phases": ""
   },
   {
       "id": "14100",
       "cdpName": "Product Readiness Review / Commercialization",
       "phases": ""
   },
   {
       "id": "14640",
       "cdpName": "Project Closure",
       "phases": ""
   },
   {
       "id": "15000",
       "cdpName": "Obsolescence Strategy",
       "phases": ""
   }
]
}

function getFields() {
    return [
        { name: 'id', type: 'string' },
        { name: 'cdpName', type: 'string' },
        { name: 'phases', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getCdpIndex';
    o.theRecord = 'cdps';

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

