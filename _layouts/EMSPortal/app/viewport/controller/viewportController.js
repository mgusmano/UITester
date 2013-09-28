Ext.define('EMSPEED.viewport.controller.viewportController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEED.viewport.view.viewportNorth',
        'EMSPEED.viewport.view.viewportCenter',
        'EMSPEED.viewport.view.viewportSouth'
    ]
});
