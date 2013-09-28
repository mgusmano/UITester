<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="get.aspx.cs" Inherits="SLB.EMSPortal.UI.SharePoint.Layouts.EMSPortal.get" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
<br>
<br>
<a id ="production" runat="server" ></a>
<br>
<br>
<a id="qa" runat="server" ></a>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
EMSPEED Installers
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
My Application Page
</asp:Content>
<%--+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal:get.aspx;3 --%>
<%--       1*[1726185] 05-FEB-2013 18:38:20 (GMT) JMohan2 --%>
<%--         "Add get.aspx to the solution" --%>
<%--       2*[1733431] 27-FEB-2013 16:44:19 (GMT) JMohan2 --%>
<%--         "delete get.aspx" --%>
<%--       3*[1733960] 27-FEB-2013 20:39:54 (GMT) JMohan2 --%>
<%--         "add get.aspx application page to the solution" --%>
<%--+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal:get.aspx;3 --%>
