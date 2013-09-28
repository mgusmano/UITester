function getResults() {
    return [
   {
       "id": "1",
       "date": "",
       "dbId": "1000105581",
       "group": "",
       "name": "Allow Circulation of Fluid Around the Packer Element While RIH",
       "references": "",
       "sequence": 1,
       "stakeholderName": "",
       "stakeholderOrganization": "",
       "stakeholderPriority": "",
       "stakeholderTitle": ""
   }
]
}
function getFields() {
    return [
        { name: 'id', type: 'long' },
        { name: 'date', type: 'dateTime' },
        { name: 'dbId', type: 'long' },
        { name: 'group', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'references', type: 'string' },
        { name: 'sequence', type: 'int' },
        { name: 'stakeholderName', type: 'string' },
        { name: 'stakeholderOrganization', type: 'string' },
        { name: 'stakeholderPriority', type: 'string' },
        { name: 'stakeholderTitle', type: 'string' }
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getOpportunityAnalysis';
    o.theRecord = 'opportunityAnalysis';

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

