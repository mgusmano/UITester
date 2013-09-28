using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace SLB.EMSPortal.UITester
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string path = HttpContext.Current.Server.MapPath("/sites/"); //ResolveUrl("/sites");
            var projects = Directory.EnumerateDirectories(path, "*", SearchOption.AllDirectories);

            foreach (var item in projects)
            {
                string test = item.Split('\\').Last();
                ProjectList.Items.Add(new ListItem { Text = test, Value = test });
            }

        }
    }
}
/*+- OmniWorks Replacement History - EPort`src`UITester:Default.aspx.cs;2 */
/*       1*[1710695] 24-JUL-2013 20:05:31 (GMT) AMathew */
/*         "Adding UI Tester Project" */
/*       2*[1777632] 13-AUG-2013 15:12:29 (GMT) AMathew */
/*         "Setting up sass files" */
/*+- OmniWorks Replacement History - EPort`src`UITester:Default.aspx.cs;2 */
