var hasFeedbackLoaded = false;
var feedbackSection;

feedbackSection = document.getElementById("TheFeeedBack");
function openFeedBackDialog() {
    if (!hasFeedbackLoaded) {
        $.ajax({
            type: "GET",
            url: "/feedback.aspx",
            success: function (data) {
                $('#TheFeeedBack').html(data);
                hasFeedbackLoaded = true;
                openFeedbackWindow();
            }
        });
    } else {
        openFeedbackWindow();
    }
}

function openFeedbackWindow() {
    var options = {
        html: feedbackSection,
        width: 800,
        height: 450,
        title: "Feedback"
    };
    feedbackSection.style.display = "block";
    SP.UI.ModalDialog.showModalDialog(options);

    // Hides the error message div tag.
    // This line have to go after the showModalDialog() is called	
    formReset();
}


$(function () {
    $('#feedbackSubmit').live('click', null, function () {
        // Hide error display
        $('#feedback-errors').hide();

        //$('#feedbackShortDescription').removeClass('error-input');
        $('#feedbackLongDescription').removeClass('error-input');

        // do validate 
        var validate = [];
        /*
        if ($('#feedbackShortDescription').val() == "") {
        $('#feedbackShortDescription').addClass('error-input');
        validate.push("Short Description");
        }
        */

        if ($('#feedbackLongDescription').val() == "") {
            $('#feedbackLongDescription').addClass('error-input');
            validate.push("Description");
        }


        if (validate.length == 0) {
            // Show loading image. 
            $('#feedback-loading').show();

            // Hide the feedback form
            $('#feedback-errors').hide();
            $('#feedback-request').hide();

            var feedbackType = $('#feedbackFeedbackType').val();
            var impact = $('#feedbackImpact').val();
            var urgency = $('#feedbackUrgency').val();
            var summary = $('#feedbackFeedbackType').val();
            var notes = $('#feedbackLongDescription').val();
            var jparams = '{ "feedbackType" : "' + summary + '", "longDescription" : "' + notes + '", "impact" : "' + impact + '", "urgency" : "' + urgency + '"}';
            $.ajax({
                type: "POST",
                data: jparams,
                contentType: "application/json; charset=utf-8",
                url: "/feedback.aspx/CreateTicket",
                dataType: "json",
                success: function (data) {
                    $('#feedback-loading').hide();
                    if (data.d.length == 15) {
                        $('#feedback-remedy-ticket').html(data.d);
                        $('#feedback-response').show();
                    }
                    else {
                        $("#feedback-error-message").html(data.d);
                        $('#feedback-response-error').show();
                    }
                }
            });
        } else {
            $('#feedback-errors ul li').remove();
            $(validate).each(function (i, v) {
                $('#feedback-errors ul').append('<li>' + v + '</li>');
            });
            $('#feedback-errors').show();
        }
    });

    // Close modal window on cancel click
    $('#feedbackCancel').live('click', null, function () {
        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel, '');
    });

    $('#feedbackOK').live('click', null, function () {
        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, '');
    });

    $('#feedbackOK-errorWindow').live('click', null, function () {
        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, '');
    });

    submitFeedback = function () {
        formReset();
    };

    formReset = function () {
        $('#feedback-errors').hide();
        $('#feedbackShortDescription').removeClass('error-input');
        $('#feedbackLongDescription').removeClass('error-input');
        $('#feedback-errors').hide();
        $('#feedback-request').show();
        $('#feedback-response').hide();
        $('#feedback-loading').hide();

        $('#feedbackShortDescription').val("");
        $('#feedbackLongDescription').val("");
    };

});
