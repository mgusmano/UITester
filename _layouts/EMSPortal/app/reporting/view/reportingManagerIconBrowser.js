Ext.define('EMSPEED.reporting.view.reportingManagerIconBrowser', {
    extend: 'Ext.view.View',
    alias: 'widget.reportingManagerIconBrowser',
    requires: [
        'EMSPEED.reporting.view.reporting'
    ],
    uses: 'Ext.data.Store',
    singleSelect: true,
    overItemCls: 'x-view-over',
    itemSelector: 'div.thumb-wrap',

    initComponent: function () {
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            model: 'EMSPEED.reporting.model.reportingReportTypesModel',
            data: reporting.theReportTypes
        });
        this.store.sort();
        this.callParent(arguments);
    },

    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    (!Ext.isIE6 ? '<img width=72px height=72px src=' + com.appFolder + '/reporting' + '/resources/images/' + '{iconFile} />' :
                    '<div style="width:72px;height:72px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'wicons/{iconFile}\')"></div>'),
                    '</div>',
                    '<span>{name}</span>',
                '</div>',
            '</div>',
        '</tpl>'
    ]
});
