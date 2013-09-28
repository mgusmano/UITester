/// <reference path="/_layouts/EMSPortal/jquery-1.5-vsdoc.js" />
var loader = '<img src="/_layouts/images/EMSPortal/ajax-loader-arrows.gif" class="imageAlignMiddle" /> Adding Team Member...';
var roleList = [];
var currentTeam = [];
var properties = {
    selectedTeamMember : ""
};
var updateRoleRequest = {};
var loadingStatus = {
    addTeamMember : false,
    removeTeamMember : false
};
$(function () {
    $("input#autocomplete").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                data: '{ "name": "' + $("#autocomplete").val() + '" }',
                contentType: "application/json; charset=utf-8",
                url: "ManageTeam.aspx/AutoSuggest",
                dataType: "json",
                success: function (data) {
                    var jdata = eval(data.d);
                    response($.map(jdata, function (item) {
                        var nameAndAlias = item.Name + " (" + item.Alias + ")";
                        return {
                            label: nameAndAlias,
                            value: item.Name,
                            underTheHood: item.Alias,
                            firstName: item.FirstName,
                            lastName: item.LastName
                        }
                    }));
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            $('#hidAlias').val(ui.item.underTheHood);
            $('#hidFirstName').val(ui.item.firstName);
            $('#hidLastName').val(ui.item.lastName);
            $('#btnAdd').removeAttr('disabled');
        }
    });

    GetRoles = function () {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ManageTeam.aspx/GetRoles",
            dataType: "json",
            async: false,
            success: function (data) {
                roleList = eval(data.d);
            }
        });
    }

    btnAddTeamMember = function () {

        if ($("#hidAlias").val() == "") {
            DoLdapLookUp($('#autocomplete').val());
        }

        var alias = $("#hidAlias").val();
        var firstName = $("#hidFirstName").val();
        var lastName = $("#hidLastName").val();

        if (alias != "") {
            $('#autocomplete').val(""); // clear the value 
            $('#btnAdd').attr('disabled', 'disabled');
            $('#message').html(loader).css('visibility', 'visible');

            var selectedRole = $(ATM_RoleDropDownList).val();
            var projectID = ProjectID;
            // Add team member 
            AddTeamMember(projectID, selectedRole, alias, firstName, lastName);

        } else {
            alert("Alias is missing");
        }

    };

    AddTeamMember = function (projectID, role, alias, firstName, lastName) {
        var jparms = '{ "projectID" : "' + projectID + '", "roleCode" : "' + role + '", "alias" : "' + alias + '", "firstName" : "' + firstName + '", "lastName" : "' + lastName + '"}';
        $.ajax({
            type: "POST",
            data: jparms,
            contentType: "application/json; charset=utf-8",
            url: "ManageTeam.aspx/AddToProjectTeam",
            dataType: "json",
            success: function (data) {
                loadingStatus.addTeamMember = true;
                var message = 'Successfully added ' + firstName + ' ' + lastName + ' to ' + GetSelectATMRoleName();
                ShowStatus(message, true);
                GetCurrentTeam();
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(xhr + '\n' + errorThrown);
            }
        });
    };

    // Removing Team Member
    $('#theProjectTeam td.team-member').live("mouseover", "", function () {
        $(this).children('span.remove-team-member').show();
        $(this).children('span.change-role').show();
    });

    $('#theProjectTeam td.team-member').live("mouseout", "", function () {
        $(this).children('span.remove-team-member').hide();
        $(this).children('span.change-role').hide();
    });

    RemoveTeamMember = function (teamMember, roleCode) {
        var result = confirm("Press OK to remove team member");
        if (result) {
            RemoveTeamMemberNoConfirm(teamMember, roleCode);
        }
    };

    RemoveTeamMemberNoConfirm = function (teamMember, roleCode) {
        var jparms = '{ "projectID" : "' + ProjectID + '", "alias" : "' + teamMember + '", "roleCode" : "' + roleCode + '" }';
        $.ajax({
            type: "POST",
            data: jparms,
            contentType: "application/json; charset=utf-8",
            url: "ManageTeam.aspx/RemoveFromProjectTeam",
            dataType: "json",
            success: function (data) {
                loadingStatus.removeTeamMember = true;
                GetCurrentTeam();
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(xhr + '\n' + errorThrown);
            }
        });
    };

    //>

    // Update Role
    var changeRoleWindow = document.getElementById("changeRoleWindow");
    UpdateRole = function (teamMember, roleCode, firstName, lastName) {
        updateRoleRequest = { alias: teamMember, oldRole: roleCode, fname: firstName, lname: lastName };
        OpenChangeRoleWindow();
    };

    OpenChangeRoleWindow = function () {
        var options = {
            html: changeRoleWindow,
            width: 350,
            height: 100,
            title: "Change Role"
        };
        changeRoleWindow.style.display = "block";
        SP.UI.ModalDialog.showModalDialog(options);
    };

    $("#ChangeRole_Role").live("change", null, function () {
        if ($(this).val() != "") {
            $("#ChangeRole").removeAttr("disabled");
        }
    });

    $("#CancelChangeRole").live('click', null, function () {
        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel, '');
    });

    $("#ChangeRole").live('click', null, function () {
        if (!$.isEmptyObject(updateRoleRequest)) {
            var newRole = $("#ChangeRole_Role").val();
            // Add new role
            loadingStatus.addTeamMember = false;
            AddTeamMember(ProjectID, newRole, updateRoleRequest.alias, updateRoleRequest.fname, updateRoleRequest.lname);

            // Remove old role
            loadingStatus.removeTeamMember = false;
            RemoveTeamMemberNoConfirm(updateRoleRequest.alias, updateRoleRequest.oldRole);
        }

        CloseUpdateRoleWindow();
    });

    CloseUpdateRoleWindow = function () {
        setTimeout(
			function () {
			    if (!loadingStatus.addTeamMember && !loadingStatus.removeTeamMember) {
			        CloseUpdateRoleWindow();
			    }
			    else {
			        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, '');
			        $("#ChangeRole").attr("disabled", "disabled");
			    }
			}, 3000
		);
    };
    //>

    // This method is used to verify the validity of the typed in Team Member 
    // (alias or name) when the auto complete pick list is not used. 
    DoLdapLookUp = function () {
        $.ajax({
            type: "POST",
            data: '{ "name": "' + $("#autocomplete").val() + '" }',
            contentType: "application/json; charset=utf-8",
            url: "ManageTeam.aspx/AutoSuggest",
            dataType: "json",
            async: false,
            success: function (data) {
                var jdata = eval(data.d);

                if (jdata.length == 1) {
                    $("#hidAlias").val(jdata[0].Alias);
                    $("#hidFirstName").val(jdata[0].FirstName);
                    $("#hidLastName").val(jdata[0].LastName);
                } else if (jdata.length > 1) {
                    ShowStatus('Your search returned multiple records \nNarrow your search by using an Alias');
                }
                else {
                    ShowStatus('Narrow your search by using an Alias');
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(xhr + '\n' + errorThrown);
            }
        });
    };

    // Show status message when Team Member is added 
    ShowStatus = function (message, isSuccess) {

        $('#message').text(message).show();
        if (isSuccess) {
            $('#message').addClass('status-success');
        } else {
            $('#message').addClass('status-error');
        }

        // remove the status message after 7 seconds.
        setTimeout(function () {
            $('#message').slideUp("slow");
        }, 7000);
    };

    // Filters
    // Filter by Role
    ADV_RoleDropDownList.change(function () {
        var selectedRole = $(this).val();
        ApplyFilterByRole(selectedRole);
    });

    ApplyFilterByRole = function (selectedRole) {
        if (selectedRole != "") {
            var theFilteredList = [];
            for (var item in currentTeam) {
                if (currentTeam[item].RoleCode == selectedRole)
                    theFilteredList.push(currentTeam[item]);
            }
            UpdateDisplay(theFilteredList);

            $('input[type=radio]').each(function (j, b) {
                $(b).removeAttr('checked');
            });
            ADV_TeamMemberDropDownList[0].selectedIndex = 0;
        }
    };

    // Filter by Team Member
    ADV_TeamMemberDropDownList.change(function () {
        properties.selectedTeamMember = $(this).val();
        ApplyFilterByTeamMember();
    });

    ApplyFilterByTeamMember = function () {
        if (properties.selectedTeamMember != "") {
            var theFilteredList = [];
            for (var item in currentTeam) {
                if (currentTeam[item].Alias == properties.selectedTeamMember)
                    theFilteredList.push(currentTeam[item]);
            }
            UpdateDisplay(theFilteredList);

            $('input[type=radio]').each(function (j, b) {
                $(b).removeAttr('checked');
            });
            ADV_RoleDropDownList[0].selectedIndex = 0;
        }
    };

    ApplyFilter = function (advFilterRole) {
        // Reset pick lists
        ADV_TeamMemberDropDownList[0].selectedIndex = 0;
        ADV_RoleDropDownList[0].selectedIndex = 0;

        var theFilteredList = [];
        if (advFilterRole == "OccupiedRoles") {
            for (var item in currentTeam) {
                if (currentTeam[item].Alias != "")
                    theFilteredList.push(currentTeam[item]);
            }
        }

        if (advFilterRole == "UnoccupiedRoles") {
            for (var item in currentTeam) {
                if (currentTeam[item].Alias == "")
                    theFilteredList.push(currentTeam[item]);
            }
        }

        if (advFilterRole == "AllRoles") {
            theFilteredList = currentTeam;
        }

        UpdateDisplay(theFilteredList);

    };

    $('input[name="adv-filtering"]').click(function () {
        var advFilter = $('input[name=adv-filtering]:checked').val();
        ApplyFilter(advFilter);
    });

    // For adding Team Members 
    $(ATM_RoleTypeDropDownList).change(function (i) {
        var selectedIndex = $(this).val();
        UpdateDropDownList(ATM_RoleDropDownList, selectedIndex, false);
    });

    // For advanced filters 
    $(ADV_RoleTypeDropDownList).change(function (i) {
        var selectedIndex = $(this).val();
        UpdateDropDownList(ADV_RoleDropDownList, selectedIndex, true);
    });

    // For changing role
    $(ChangeRole_RoleType).change(function (i) {
        var selectedIndex = $(this).val();
        UpdateDropDownList($('#ChangeRole_Role'), selectedIndex, true);
    });

    UpdateDropDownList = function (theDropDown, index, is_pm_pc_shown) {
        $(theDropDown).find('option').remove().end();

        if (index == "") {
            AddToDropDownList("Filter by Role", "", theDropDown);
            $(theDropDown).attr('disabled', 'disabled');
        } else {
            $(theDropDown).removeAttr('disabled');

            if (roleList == 0)
                GetRoles();

            AddToDropDownList("Filter by Role", "", theDropDown);
            $(roleList).each(function (j, v) {
                if (v.RoleTypeID == index) {
                    // remove PM and PC form the filter by role for the add team member section
                    if (!is_pm_pc_shown && (v.RoleCode == "PM" || v.RoleCode == "PC")) {
                        // Do nothing;
                    } else {
                        AddToDropDownList(v.RoleName, v.RoleCode, theDropDown);
                    }
                }
            });
        }
    }

    AddToDropDownList = function (key, value, theSelect) {
        $(theSelect)
            .append($('<option></option>')
            .attr('value', value)
            .text(key));
    }

    $(ATM_RoleDropDownList).change(function () {
        if ($(this).val() == "") {
            $('#autocomplete').attr('disabled', 'disabled');
        } else {
            $('#autocomplete').removeAttr('disabled');
        }
    });

    GetCurrentTeam = function () {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ManageTeam.aspx/GetCurrentTeam",
            dataType: "json",
            success: function (data) {
                currentTeam = [];
                currentTeam = eval(data.d);
                GetActiveFilter();
                TeamMemberDropDownList();
                $('span.loading').hide();
            }
        });
    };

    TeamMemberDropDownList = function () {
        $(ADV_TeamMemberDropDownList).find('option').remove().end();
        var list = [];
        var tempCurrentTeam = currentTeam.slice();

        // Sort the team member list by first name
        tempCurrentTeam.sort(function (a, b) {
            if (a.FirstName > b.FirstName)
                return 1;
            else if (a.FirstName < b.FirstName)
                return -1;

            return 0;
        });

        AddToDropDownList("Filter by name or LDAP alias", "", ADV_TeamMemberDropDownList);
        for (var item in tempCurrentTeam) {
            if ($.inArray(tempCurrentTeam[item].Alias, list) == -1) {
                list.push(tempCurrentTeam[item].Alias);
                AddToDropDownList(tempCurrentTeam[item].TeamMember, tempCurrentTeam[item].Alias, ADV_TeamMemberDropDownList);
            }
        }
        // force css style.
        $(ADV_TeamMemberDropDownList).addClass('manage-team-select');

        if (properties.selectedTeamMember != "") {
            $(ADV_TeamMemberDropDownList).val(selectedTeamMember);
        }
    };

    GetSelectATMRoleName = function () {
        var id = $(ATM_RoleDropDownList).attr('id');
        var theID = '#' + id + ' option:selected';
        return $(theID).text();
    };

    GetActiveFilter = function () {
        var advFilter = "";
        $('input[name=adv-filtering]').each(function (i, v) {
            if ($(v).is(':checked'))
                advFilter = $(v).val();
        });
        if (advFilter != "")
            ApplyFilter(advFilter);
        else if ($(ADV_RoleDropDownList).val() != "")
            ApplyFilterByRole($(ADV_RoleDropDownList).val());
        else if ($(ADV_TeamMemberDropDownList).val() != "")
            ApplyFilterByTeamMember($(ADV_TeamMemberDropDownList).val());
    };

    UpdateDisplay = function (list) {
        $('#TheCurrentTeam').empty();
        $('#CurrentTeam').tmpl(list).appendTo('#TheCurrentTeam');
    };

    $('span.loading').show();
    GetCurrentTeam();

});
