function getResults() {
    return {
        "dirty": true,
        "name": "Allow Circulation of Fluids Around the Packer Element while RIH"       
     }
    
}

function getFields() {
    return [
        
        { name: 'dirty', type: 'boolean' },
        { name: 'name', type: 'string' }
		]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectID: 97222 };
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
            var theObject = getOneJsonObjectOfStore(store, 'name', 'Allow Circulation of Fluids Around the Packer Element while RIH');	
            debugger;
            t.isDeeply(theObject, getResults(), 'Requirement found and flagged as dirty')
        }
    });
})

function getSoap() {

}
