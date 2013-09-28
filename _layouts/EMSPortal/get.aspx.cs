using System;
using Microsoft.SharePoint;
using Microsoft.SharePoint.WebControls;

namespace SLB.EMSPortal.UI.SharePoint.Layouts.EMSPortal
{
    public partial class get : LayoutsPageBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (SPContext.Current.Web != null)
                {
                    SPList list = SPContext.Current.Web.Lists.TryGetList("StatureInstallers");

                    if (list != null)
                    {
                        foreach (SPListItem item in list.Items)
                        {
                            if (item["Environment"].ToString() == "Production")
                            {
                                this.production.InnerText = item["LinkText"] as string;
                                this.production.HRef = item["InstallerName"] as string;
                            }
                            else if (item["Environment"].ToString() == "QA")
                            {
                                this.qa.InnerText = item["LinkText"] as string;
                                this.qa.HRef = item["InstallerName"] as string;
                            }
                        }
                    }
                }
            }
            catch
            {

            }
        }
    }
}
/*+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal:get.aspx.cs;1 */
/*       1*[1733916] 27-FEB-2013 20:54:29 (GMT) JMohan2 */
/*         "add get.aspx application page to the solution" */
/*+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal:get.aspx.cs;1 */
