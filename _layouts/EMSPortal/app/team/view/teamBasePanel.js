Ext.define('EMSPEED.team.view.teamBasePanel', {
    extend: 'EMSPEED.baseclass.view.baseclassPanel',
    alias: 'widget.teamBasePanel',
    //layout: 'absolute',
    id: 'teamBasePanel',

    initComponent: function () {

        this.items = [
            {
                xtype: 'tabpanel',
                margin: '10 0 0 0', 
                tabBar: {
                    style: {backgroundColor: '#FFFFFF' },
                    bodyStyle: { backgroundColor: '#FFFFFF' }
                },
                items: [
                    {
                        title: 'Manage Team',
                        xtype: 'container',
                        html: '<div style=xmin-height:600px; xwidth:100%; overflow:auto;"><object data="data:application/x-silverlight-2," type="application/x-silverlight-2" height="600px" width="975px" ><param name="windowless" value="true" /><param name="background" value="transparent" /><param name="source" value="/_layouts/clientbin/emsportal/ManageTeam.xap"/><param name="onError" value="onSilverlightError" /><param name="background" value="white" /><param name="minRuntimeVersion" value="4.0.50401.0" /><param name="autoUpgrade" value="true" /><a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=4.0.50401.0" style="text-decoration:none"><img src="http://go.microsoft.com/fwlink/?LinkId=161376" alt="Get Microsoft Silverlight" style="border-style:none"/></a></object><iframe id="_sl_historyFrame" style="visibility:hidden;height:0px;width:0px;border:0px"></iframe></div>'
                    },
                    {
                        title: 'Stakeholders',
                        xtype: 'usersinroleBasePanel'
                    }                    
                ]
            }
        ];
        this.callParent(arguments);
        this.setTheTitle('Project Team');
    }
});
