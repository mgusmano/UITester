 
function OpenUrl(url, name)
{   
    var newWin = window.open(url, name,"resizable=1,toolbar=0");
    newWin.focus();
}

// jQuery document.ready()
$(function () {
    supportedUserAgent = function () {
        if (!Silverlight.supportedUserAgent()) {
            $("#NoSl").show();
        }
    }

    supportedUserAgent();
});

//TODO: remove after 1.2 release
//Disable Provision Project
function openDialog() {
    var provisionSection = document.createElement("div");
    provisionSection.innerHTML = document.getElementById("ProvisionProject").innerHTML;
    provisionSection.style.display = "block";
    provisionSection.style.padding = "1em";
    var options = {
        html: provisionSection,  // ID of the HTML tag
        width: 400,
        height: 200,
        title: "Warning - Provision Project Disabled",
        allowMaximize: false
    };

    SP.UI.ModalDialog.showModalDialog(options);

}
