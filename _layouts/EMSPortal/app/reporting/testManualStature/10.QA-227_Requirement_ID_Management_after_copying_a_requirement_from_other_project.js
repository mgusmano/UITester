function getResults() {
    return {
        
        "dbId": "1007843818",
        "description": "Allow Circulation of Fluids Around the Packer Element while RIH. This is not required while running with Open Perf Adapter.",
        "dirty": false,
        "isLocked": false,
        "isValidated": false,
        "maturity": 3,
        "maturityIndex": 1.5
      
    }
    
}

function getFields() {
    return [
        
        { name: 'dbId', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'dirty', type: 'boolean' },
        { name: 'isLocked', type: 'boolean' },
        { name: 'isValidated', type: 'boolean' },
        { name: 'maturity', type: 'int' }, 
        { name: 'maturityIndex', type: 'float' }
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
		 t.isDeeply(getJsonOfStore(store), getResults(), t.url)
         //   var theObject = getOneJsonObjectOfStore(store, 'name', 'Allow Circulation of Fluids Around the Packer Element while RIH');
            debugger;
          //  t.isDeeply(theObject, getResults(), t.url)
        }
    });
})

function getSoap() {

}
