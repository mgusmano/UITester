Ext.define('EMSPEED.reporting.view.reportingProgramProjects', {
    extend: 'EMSPEED.reporting.view.reportingCommonFieldSet',
    alias: 'widget.reportingProgramProjects',
    width: '100%',
    layout: 'vbox',
    collapsible: false,
    collapsed: false,
    title: 'Roll Up Filters',
    itemId: 'reportingProgramProjects',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 300
    },
    items: [
        {
            xtype: 'reportingProgramProjectTreeGrid'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Risk Threshold',
            displayField: 'name',
            valueField: 'id',
            labelAlign: 'top',
            matchFieldWidth: false,
            margin: '5 10 25 0',
            emptyText: 'Select a Filter',
            selectOnFocus: true,
            listConfig: {
                autoHeight: true,
                minWidth: 300,
                maxWidth: 500,
                getInnerTpl: function () {
                    var tpl = '<div class="emspeed-menu-icon emspeed-tooltip"  data-tooltip="Risk between {lowerBoundary} and {upperBoundary}"><img style="margin:0px 5px 5px 0px" border="0" src="/_layouts/EMSPortal/app/reporting/resources/images/{image}.png" alt="" title=""/ align="top"> <span>{name}</span>'
                    return tpl;
                }
            }
        }
    ]
});
