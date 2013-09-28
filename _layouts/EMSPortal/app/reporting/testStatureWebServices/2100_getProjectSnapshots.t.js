function getResults() {
    return [{"failureMessage": "",
			"projectSnapshots": ""
			}
			]


}
function getFields() {
    return [
        
        { name: 'failureMessage', type: 'string' },
        { name: 'projectSnapshots', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getProjectSnapshots';
    o.theRecord = 'getProjectSnapshotsReturn';

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

