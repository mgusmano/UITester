function getResults() {
    return [
   {
       "sequence": 1,
       "specificationDbId": "1000088192",
       "testDbId": "1000088148"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088192",
       "testDbId": "1000088148"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088194",
       "testDbId": "1000088149"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088196",
       "testDbId": "1000088150"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088198",
       "testDbId": "1000088151"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088200",
       "testDbId": "1000088152"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088202",
       "testDbId": "1000088153"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088203",
       "testDbId": "1000088151"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088205",
       "testDbId": "1000088154"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088206",
       "testDbId": "1000088155"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088207",
       "testDbId": "1000088156"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088208",
       "testDbId": "1000088157"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088209",
       "testDbId": "1000088158"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088210",
       "testDbId": "1000088159"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088211",
       "testDbId": "1000088150"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088212",
       "testDbId": "1000088152"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088213",
       "testDbId": "1000088159"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088215",
       "testDbId": "1000088160"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088216",
       "testDbId": "1000088161"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088223",
       "testDbId": "1000088167"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088225",
       "testDbId": "1000088168"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088227",
       "testDbId": "1000088169"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088248",
       "testDbId": "1000088176"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088229",
       "testDbId": "1000088170"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088230",
       "testDbId": "1000088171"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088231",
       "testDbId": "1000088163"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088232",
       "testDbId": "1000088166"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088246",
       "testDbId": "1000088156"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088249",
       "testDbId": "1000088159"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088217",
       "testDbId": "1000088162"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088218",
       "testDbId": "1000088163"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088221",
       "testDbId": "1000088165"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088220",
       "testDbId": "1000088164"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088222",
       "testDbId": "1000088166"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088235",
       "testDbId": "1000088163"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088237",
       "testDbId": "1000088166"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088238",
       "testDbId": "1000088172"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088239",
       "testDbId": "1000088173"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088258",
       "testDbId": "1000088177"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088240",
       "testDbId": "1000088174"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088242",
       "testDbId": "1000088175"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088243",
       "testDbId": "1000088163"
   },
   {
       "sequence": 1,
       "specificationDbId": "1000088245",
       "testDbId": "1000088166"
   }
]
}
function getFields() {
    return [
        { name: 'sequence', type: 'int' },
        { name: 'specificationDbId', type: 'long' },
        { name: 'testDbId', type: 'long' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getSpecificationVerificationTestMappings';
    o.theRecord = 'specificationTestMappings';

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

