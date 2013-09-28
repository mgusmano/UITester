function getResults() {
    return {
        
        "name": "Sample Req"
        
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
    o.theMethod = 'getRequirements';
    o.theRecord = 'requirements';
 


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
            var theObject = getOneJsonObjectOfStore(store, 'name', 'Sample Req');
            debugger;
            t.isNot(theObject, getResults(), t.url)
        }
    });
})

function getSoap() {

}
