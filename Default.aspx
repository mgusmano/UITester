<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SLB.EMSPortal.UITester.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h2>UI Tester App</h2>
        Project <select name="projectList" runat="server" id="ProjectList"> 
                <option value="">Select Project</option>
            </select>
    </div>
    </form>

    <script src="/_layouts/EMSPortal/common/jQuery/jquery-1.9.1.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            var $projectList = $('#ProjectList');
            var $projectId = 0;
            $projectList.change(function () {
                $projectId = $(this).val();

                if ($projectId != 0) {
                    window.location = '/sites/' + $projectId + '/Portal.aspx';
                }
            });
        });
    </script>
</body>
</html>
<%--+- OmniWorks Replacement History - EPort`src`UITester:Default.aspx;2 --%>
<%--       1*[1710695] 24-JUL-2013 20:05:31 (GMT) AMathew --%>
<%--         "Adding UI Tester Project" --%>
<%--       2*[1789288] 12-SEP-2013 15:15:00 (GMT) AMathew --%>
<%--         "adding menu hider icons" --%>
<%--+- OmniWorks Replacement History - EPort`src`UITester:Default.aspx;2 --%>
