<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EmspeedContent.ascx.cs" Inherits="SLB.EMSPortal.UITester.EmspeedContent" %>

<div id="divloading" class="loading-app">
    <div class="padding">
        <div class="logo emspeed-logo"></div>
        <div class="loading-message emspeed-loading-icon">
            <p>Please wait, loading the EMSPEED Portal...</p>
        </div>
    </div>
</div>


<div class="emspeed-error-page" id="emspeed-error-page" style="display: none;">
    <div class="padding">
        <div class="logo emspeed-logo"></div>
        <h3>The following failure(s) occurred, please report to level 2 support:</h3>
        <div class="error-table" id="error-table">
        </div>
    </div>
</div>
