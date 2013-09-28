Ext.define('EMSPEED.reporting.model.reportingProjectsModel', {
    extend: 'Ext.data.Model',
    fields: [
                 { name: 'projectId', mapping: 'projectId', type: 'int' },
                 { name: 'projectName', mapping: 'projectName', type: 'string' },
                 { name: 'pddNumber', mapping: 'pddNumber', type: 'string' },
                 { name: 'parentProjectId', mapping: 'parentProjectId', type: 'int' },
                 { name: 'parentProjectName', mapping: 'parentProjectName', type: 'string' },
                 { name: 'level', mapping: 'level', type: 'int' },
                 { name: 'isChild', mapping: 'isChild', type: 'boolean' },
                 { name: 'isParent', mapping: 'isParent', type: 'boolean' },
                 { name: 'projectManager', mapping: 'projectManager', type: 'string' },
                 { name: 'productChampion', mapping: 'productChampion', type: 'string' },
                 { name: 'productGroupId', mapping: 'productGroupId', type: 'int' },
                 { name: 'productGroupCode', mapping: 'productGroupCode', type: 'string' },
                 {
                     name: 'leaf',
                     mapping: 'isParent',
                     convert: function (v, rec) {
                         var leaf = !rec.data.isParent;
                         if (rec.data.projectId === 0) {
                             leaf = false
                         }
                         return leaf;
                     }
                 },
                 { name: 'checked', mapping: 'selected', type: 'boolean', defaultValue: false },
                 { name: 'expanded', mapping: 'expanded', type: 'boolean', defaultValue: true, persist: false }
    ]
});
