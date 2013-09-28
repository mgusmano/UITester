function getResults() {
    return [
   {
       "cdpName": "Project Request",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Project Request",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Project Launch",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Concurrent Team Launch",
       "current": true,
       "indexes": ""
   },
   {
       "cdpName": "Requirement & Concept Review / Validation",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Realization Strategy Review / Realization Launch",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "ENP Production Launch",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Field Introduction",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "EPS Production Launch",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Product Readiness Review / Commercialization",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Project Closure",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "Obsolescence Strategy",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "End of Production",
       "current": false,
       "indexes": ""
   },
   {
       "cdpName": "End of Support",
       "current": false,
       "indexes": ""
   }
]
}
function getFields() {
    return [
        { name: 'cdpName', type: 'string' },
        { name: 'current', type: 'boolean' },
        { name: 'indexes', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getDfxIndexes';
    o.theRecord = 'items';

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

