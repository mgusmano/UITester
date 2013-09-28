Ext.define('EMSPEED.reporting.view.reportingFilterBaseClass', {
    extend: 'Ext.container.Container',
    alias: 'widget.reportingFilterBaseClass',
    requires: ['Ext.form.field.Radio'],
    margin: '0 0 0 0',
    layout: 'vbox',
    labelAlign: 'top',
    theTextMargin: '3 5 0 0', //date
    theControlMargin: '0 5 0 0', //date

    style: {
        borderWidth: '1px',
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderTop: '1px',
        //borderBottom: '1px',
        borderLeft: '1px',
        borderRight: '1px'
    },

    config: {
        localOrGlobal: null,
        filtersAvailableObject: null,
        section: null,
        rangeTypes: null
    },

    getTheId: function (section, name) {
        var theId = section + '-' + name;
        theId = theId.split(' ').join('_');
        theId = theId.split('%').join('_');
        theId = theId.split('/').join('_');
        return theId;
    },

    getTheItemId: function (section, name, itemName) {
        var theItemId = section + '-' + name + '-' + itemName;
        theItemId = theItemId.split(' ').join('_');
        theItemId = theItemId.split('%').join('_');
        theItemId = theItemId.split('/').join('_');
        return theItemId;
    },

    getStringValue: function () {
        var theSummary = '';
        theSummary += this.filtersAvailableName + ': ';
        var o = this.getFilterValuesObject();
        if (o.lowerValueSelected != null) {
            if (o.rangeTypeSelectedName === null) {
                //                theSummary += ' ' + o.prefixText + ' ' + o.lowerValueSelected;
                theSummary += ' ' + "" + ' ' + o.lowerValueSelected;
            }
            else {
                theSummary += ' ' + o.rangeTypeSelectedName + ' ' + o.lowerValueSelected;
                if (o.upperValueSelected != null) {
                    theSummary += ' and ' + o.upperValueSelected;
                }
            }
            //theSummary += '<br>';
        }
        return theSummary;
    },

    constructor: function (cfg) {
        this.initConfig(cfg);
        this.callParent(arguments);
    },

    initComponent: function () {
        this.filtersAvailableId = this.filtersAvailableObject.id;
        this.filtersAvailableName = this.filtersAvailableObject.name;
        this.globalFilterId = this.filtersAvailableObject.globalFilterID;
        this.filterTypeId = this.filtersAvailableObject.filterTypeId;
        this.lowerValue = this.filtersAvailableObject.lowerValue;
        this.upperValue = this.filtersAvailableObject.upperValue;
        this.singleSelectFilterValueIdSelected = this.filtersAvailableObject.singleSelectFilterValueIdSelected;
        this.multiSelectFilterValuesSelected = this.filtersAvailableObject.multiSelectFilterValuesSelected;

        this.sequence = this.filtersAvailableObject.id;

        var theMargin;
        if (this.localOrGlobal === 'local') {
            theMargin = '7 0 0 0';
        }
        else {
            theMargin = '5 10 0 0';
        }

        var theTooltip = { xtype: 'label', width: 16, height: 1 };
        if (this.filtersAvailableObject.shortDescription != null) {
            if (this.filtersAvailableObject.longDescription != null) {
                theTooltip = { xtype: 'button', text: '?', width: 16, height: 16, margin: theMargin, tooltip: this.filtersAvailableObject.shortDescription, scope: this,
                    handler: function (button, event) {
                        Ext.Msg.show({
                            title: 'Help for ' + this.filtersAvailableObject.name + ' section filter',
                            msg: this.filtersAvailableObject.longDescription,
                            //msg: 'further detail on ' + this.filtersAvailableObject.name + ' section filter<h3>h3</h3><p>paragraph1</p><br><p>paragraph2</p>',
                            //width: 400,
                            //height: 800,
                            closable: false,
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.INFO
                        })
                    }
                };
            }
            else {
                theTooltip = { xtype: 'button', text: '?', width: 16, height: 16, margin: theMargin, tooltip: this.filtersAvailableObject.shortDescription, scope: this };
            }
        }


        if (this.localOrGlobal === 'local') {
            this.layout = 'hbox';
            this.items = [
                    theTooltip,
                    { xtype: 'label', cls: 'x-form-item', width: this.filterRowTitleWidth, margin: '10 0 5 5', text: this.filtersAvailableObject.name + ':' },
                    { xtype: 'container', itemId: 'theDetails', layout: 'hbox', margin: '7 0 7 10', items: this.theItems }
                ]
        }
        else {
            this.layout = 'vbox';
            this.items = [
                { xtype: 'container', layout: 'hbox', margin: '0 0 0 0',
                    items: [
                        theTooltip,
                        { xtype: 'label', cls: 'x-form-item', margin: '9 0 0 0', width: 200, text: this.filtersAvailableObject.name + ':' }
                    ]
                },
                { xtype: 'container', itemId: 'theDetails', layout: 'hbox', margin: '5 0 10 0', items: this.theItems }
            ]
        }
        this.callParent(arguments);
    }
});


//"FilterTypes": [
//    { "Id": 1, "Name": "Multi-Select List"},
//    { "Id": 2, "Name": "Single-Select List"},
//    { "Id": 3, "Name": "Date" },
//    { "Id": 4, "Name": "Date Range"},
//    { "Id": 5, "Name": "Numeric"},
//    { "Id": 6, "Name": "Numeric Range"},
//],
