function getResults() {
return [
    {
        "Name": "Sean Connery",
        "Phone": "001"
    },
    {
        "Name": "Pierce Brosnan",
        "Phone": "002"
    },
    {
        "Name": "Daniel Craig",
        "Phone": "003"
    }
]
}

function getFields() {
    return [
        { name: 'Name', type: 'string' },
        { name: 'Phone', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'asmx';
    o.theFields = getFields();

    o.theParams = {};
    o.theMethod = 'GetJamesBondActors';
    o.theRecord = 'PhoneItem';

    return o;
}

StartTest(function (t) {
    debugger;
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
