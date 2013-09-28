function getResults() {
    return {
        
        "projectId": "85984",
        "reqMaturityIndex": "83.33"
        
    }
    
}

function getFields() {
    return [
        
        { name: 'projectId', type: 'string' },
        { name: 'reqMaturityIndex', type: 'double' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = {projectID: 97222};
    o.theMethod = 'getMetricsSnapshot';
    o.theRecord = 'maturityMetrics';
 


    return o;
}

StartTest(function (t) {
    debugger;
    var o = getParameters()
    var store = getTheStore(o);
    store.load({
        params: o.theParams,
        callback: function () {
		 //t.isDeeply(getJsonOfStore(store), getResults(), t.url)
            var theObject = getOneJsonObjectOfStore(store, 'projectId', '85984');
            debugger;
            t.isDeeply(theObject, getResults(), t.url)
        }
    });
})

function getSoap() {

}
