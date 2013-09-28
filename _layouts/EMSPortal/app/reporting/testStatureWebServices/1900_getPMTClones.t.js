function getResults() {
    return [ 
  { "creationTime" : "",
    "name" : "",
    "pmtCloneURI" : "",
    "updateTime" : ""
  }
]
}
function getFields() {
    return [
        { name: 'creationTime', type: 'dateTime' },
        { name: 'name', type: 'string' },
        { name: 'pmtCloneURI', type: 'string' },
        { name: 'updateTime', type: 'dateTime' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getPMTClones';
    o.theRecord = 'pmtClones';

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

