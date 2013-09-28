function getResults() {
    return [
   {
       "reqDbId": "1000088365",
       "sequence": 1,
       "testDbId": "1000088134"
   },
   {
       "reqDbId": "1000088365",
       "sequence": 1,
       "testDbId": "1000088134"
   },
   {
       "reqDbId": "1000088415",
       "sequence": 1,
       "testDbId": "1000088135"
   },
   {
       "reqDbId": "1000088458",
       "sequence": 1,
       "testDbId": "1000088136"
   },
   {
       "reqDbId": "1000088516",
       "sequence": 1,
       "testDbId": "1000088137"
   },
   {
       "reqDbId": "1000088546",
       "sequence": 1,
       "testDbId": "1000088138"
   },
   {
       "reqDbId": "1000088577",
       "sequence": 1,
       "testDbId": "1000088137"
   },
   {
       "reqDbId": "1000088611",
       "sequence": 1,
       "testDbId": "1000088139"
   },
   {
       "reqDbId": "1000088638",
       "sequence": 1,
       "testDbId": "1000088140"
   },
   {
       "reqDbId": "1000088679",
       "sequence": 1,
       "testDbId": "1000088137"
   },
   {
       "reqDbId": "1000088706",
       "sequence": 1,
       "testDbId": "1000088136"
   },
   {
       "reqDbId": "1000088738",
       "sequence": 1,
       "testDbId": "1000088141"
   },
   {
       "reqDbId": "1000088783",
       "sequence": 1,
       "testDbId": "1000088142"
   },
   {
       "reqDbId": "1000088814",
       "sequence": 1,
       "testDbId": "1000088138"
   },
   {
       "reqDbId": "1000088892",
       "sequence": 1,
       "testDbId": "1000088143"
   },
   {
       "reqDbId": "1000088935",
       "sequence": 1,
       "testDbId": "1000088144"
   },
   {
       "reqDbId": "1000088969",
       "sequence": 1,
       "testDbId": "1000088136"
   },
   {
       "reqDbId": "1000088996",
       "sequence": 1,
       "testDbId": "1000088145"
   },
   {
       "reqDbId": "1000089076",
       "sequence": 1,
       "testDbId": "1000088146"
   },
   {
       "reqDbId": "1000089251",
       "sequence": 1,
       "testDbId": "1000088147"
   }
]
}
function getFields() {
    return [
        { name: 'reqDbId', type: 'long' },
        { name: 'sequence', type: 'int' },
        { name: 'testDbId', type: 'long' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getRequirementValidationTestMappings';
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

