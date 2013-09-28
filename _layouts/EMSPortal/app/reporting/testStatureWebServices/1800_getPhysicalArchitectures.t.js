function getResults() {
    return [
   {
       "id": "394",
       "dbId": "1000088274",
       "description": " ",
       "maxRisk": 6,
       "name": "Overall Product",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "1",
       "dbId": "1000088289",
       "description": "Orion elements or algorithms  that go into MWD/LWD/RSS tools",
       "maxRisk": 0,
       "name": "Downhole",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "2",
       "dbId": "1000088290",
       "description": "",
       "maxRisk": 9,
       "name": "Data compression",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "3",
       "dbId": "1000088299",
       "description": "",
       "maxRisk": 15,
       "name": "Modulation",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "4",
       "dbId": "1000088301",
       "description": "",
       "maxRisk": 0,
       "name": "MWD BHA master logic",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "5",
       "dbId": "1000088304",
       "description": "Orion elements, algorithms or applications that go into HSPM",
       "maxRisk": 0,
       "name": "Surface",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "6",
       "dbId": "1000088307",
       "description": "",
       "maxRisk": 2,
       "name": "Pre-job preparation",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "7",
       "dbId": "1000088309",
       "description": "",
       "maxRisk": 9,
       "name": "Receivers and noise cancellation",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "8",
       "dbId": "1000088314",
       "description": "",
       "maxRisk": 6,
       "name": "Decompression",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "9",
       "dbId": "1000088323",
       "description": "",
       "maxRisk": 9,
       "name": "Diagnostics, alarms, and automation",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   },
   {
       "id": "10",
       "dbId": "1000088325",
       "description": "",
       "maxRisk": 8,
       "name": "Frame structure/downlink protocol",
       "parentId": 0,
       "parentPAEDbid": "",
       "references": ""
   }
]
}
function getFields() {
    return [
        { name: 'id', type: 'long' },
        { name: 'dbId', type: 'long' },
        { name: 'description', type: 'string' },
        
        { name: 'maxRisk', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'parentId', type: 'int' },
        { name: 'parentPAEDbid', type: 'long' },
        { name: 'references', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getPhysicalArchitectures';
    o.theRecord = 'items';

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

