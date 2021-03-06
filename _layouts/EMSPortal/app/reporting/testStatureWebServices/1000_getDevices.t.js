function getResults(){
return [
    {
        "devices": "",
        "failureMessage": ""
    }
]
}
function getFields() {
    return [
        { name: 'devices', type: 'string' },
        { name: 'failureMessage', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getDevices';
    o.theRecord = 'devices';

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

