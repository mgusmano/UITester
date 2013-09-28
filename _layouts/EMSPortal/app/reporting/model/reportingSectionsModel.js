Ext.define('EMSPEED.reporting.model.reportingSectionsModel', {
    extend: 'Ext.data.Model',
    fields: [
            { name: 'enabled', type: 'bool', mapping: 'enabled' },
            { name: 'allowsSnapshot', type: 'bool', mapping: 'allowsSnapshot' },
            { name: 'cdp', type: 'string', mapping: 'cdp', persist: false },
            { name: 'id', type: 'int', mapping: 'id' },
            { name: 'name', type: 'string', mapping: 'name' },
            { name: 'description', type: 'string', mapping: 'description' },
            { name: 'sortWindowWidth', type: 'auto', mapping: 'sortWindowWidth' },
            { name: 'sortWindowHeight', type: 'auto', mapping: 'sortWindowHeight' },
            { name: 'sortRowTitleWidth', type: 'auto', mapping: 'sortRowTitleWidth' },
            { name: 'sortRowValueWidth', type: 'auto', mapping: 'sortRowValueWidth' },

            { name: 'filterWindowWidth', type: 'auto', mapping: 'filterWindowWidth' },
            { name: 'filterWindowHeight', type: 'auto', mapping: 'filterWindowHeight' },
            { name: 'filterRowTitleWidth', type: 'auto', mapping: 'filterRowTitleWidth' },

            { name: 'sectionFiltersAvailable', type: 'auto', mapping: 'sectionFiltersAvailable' },
            { name: 'sectionSortGroupsAvailable', type: 'auto', mapping: 'sectionSortGroupsAvailable' },
            { name: 'sectionFiltersSelected', type: 'auto', mapping: 'sectionFiltersSelected' },
            { name: 'sectionSortGroupsSelected', type: 'auto', mapping: 'sectionSortGroupsSelected' }
    ]
});
