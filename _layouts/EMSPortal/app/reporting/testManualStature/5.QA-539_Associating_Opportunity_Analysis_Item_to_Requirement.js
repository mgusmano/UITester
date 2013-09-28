function getResults() {
    return {
        
        "name": "Create a dial-in pad for making calls"
        
    }
    
}

function getFields() {
    return [
        
        { name: 'name', type: 'string' }
        
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = {projectID: 97222};
    o.theMethod = 'getOpportunityAnalysis';
    o.theRecord = 'opportunityAnalysis';

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
            var theObject = getOneJsonObjectOfStore(store, 'name', 'Create a dial-in pad for making calls');
            debugger;
            t.isDeeply(theObject, getResults(), t.url)
        }
    });
})

function getSoap() {

}
