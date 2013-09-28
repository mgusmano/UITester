 function getResults() {
   return {
        "name": "Allow Circulation of Fluids Around the Packer Element while RIH",
        "reqId": "3"
    }
    
}

function getOtherResults() {
	return {
		"name": "Sample",
		"reqId": "4"
	}
}
		
function getFields() {
    return [
        
        { name: 'name', type: 'string' },
        { name: 'reqId', type: 'string' }
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
            var theObject = getOneJsonObjectOfStore(store, 'name', 'Allow Circulation of Fluids Around the Packer Element while RIH');
			t.isDeeply(theObject, getResults(), 'First requirement has a REQ ID of 3')
			var theOtherObject = getOneJsonObjectOfStore(store, 'name', 'Sample');            
			debugger;            
			t.isDeeply(theOtherObject, getOtherResults(), 'Second requirement has a REQ ID of 4')
        }
    });
})

function getSoap() {

}
