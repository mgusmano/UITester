function getResults() {
    return [
   {
       "id": "1",
       "comments": "",
       "correctiveAction": "Carry out feasibility study",
       "correctiveActionType": "Engineering Actions",
       "dbid": "",
       "dueByCDP": "",
       "group": "",
       "maxRpn": 15,
       "maxSxO": 15,
       "mppFlag": false,
       "pushed": "",
       "sequence": 1,
       "status": "",
       "targetCompletionDate": ""
   },
   {
       "id": "2",
       "comments": "",
       "correctiveAction": "Define suitable flase alarm rate",
       "correctiveActionType": "Engineering Actions",
       "dbid": "",
       "dueByCDP": "",
       "group": "",
       "maxRpn": 9,
       "maxSxO": 9,
       "mppFlag": false,
       "pushed": "",
       "sequence": 2,
       "status": "",
       "targetCompletionDate": ""
   },
   {
       "id": "3",
       "comments": "",
       "correctiveAction": "Carry out synthetic data simulations",
       "correctiveActionType": "Engineering Actions",
       "dbid": "",
       "dueByCDP": "",
       "group": "",
       "maxRpn": 9,
       "maxSxO": 9,
       "mppFlag": false,
       "pushed": "",
       "sequence": 3,
       "status": "",
       "targetCompletionDate": ""
   },
   {
       "id": "4",
       "comments": "",
       "correctiveAction": "Internal knowledge sharing events",
       "correctiveActionType": "Engineering Actions",
       "dbid": "",
       "dueByCDP": "",
       "group": "",
       "maxRpn": 6,
       "maxSxO": 6,
       "mppFlag": false,
       "pushed": "",
       "sequence": 4,
       "status": "",
       "targetCompletionDate": ""
   }
]
}

function getFields() {
    return [
        { name: 'id', type: 'long' }, 
        { name: 'comments', type: 'string' },
        { name: 'correctiveAction', type: 'string' },
        { name: 'correctiveActionType', type: 'string' },
        { name: 'dbid', type: 'long' },
        { name: 'dueByCDP', type: 'string' },
        { name: 'group', type: 'string' },
        { name: 'maxRpn', type: 'int' },
        { name: 'maxSxO', type: 'int' },
        { name: 'mppFlag', type: 'boolean' },
        { name: 'pushed', type: 'string' },
        { name: 'sequence', type: 'int' },
        { name: 'status', type: 'string' },
        { name: 'targetCompletionDate', type: 'dateTime' } 
    ]
}

function getParameters() {
    var o = {};
    o.theType = 'stature';
    o.theFields = getFields();

    o.theParams = { projectId: 97368 };
    o.theMethod = 'getActions';
    o.theRecord = 'actions';

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

