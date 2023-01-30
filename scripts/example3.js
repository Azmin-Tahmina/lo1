"use strict";

/*
 Filename:    example3.js
 Author:      Michael Grzesina (cst000)
 Date:        1/4/2019
 Purpose:     Demonstrate form validation with JavaScript
*/


document.getElementById("frmSubscribe").onsubmit = validateForm;


// Add a trim() method to the String object for really old browsers
if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}


function validateForm() {
    let errorMsg = "";

    // Strip leading and trailing space from the name
    let nameField = document.getElementById("txtName");
    nameField.value = nameField.value.trim();

    // Strip leading and trailing space from the email
    let emailField = document.getElementById("txtEmail");
    emailField.value = emailField.value.trim();

    // Make sure the name is provided
    if (nameField.value.length <= 1) {
        errorMsg += "Name must be provided with at least 2 characters\n";
    }

    // Make sure the email is provided
    if ( emailField.value === "" ) {
        errorMsg += "Email address must be provided\n";
    } else {
        // Make sure the email is in the correct format
        if (!emailField.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            errorMsg += "Email address must be in the form username@host.domain";
        }
    }

    // Indicate whether we passed validation
    if (errorMsg !== "" ) {
        alert( errorMsg );
    }
    else {
        alert( "Form passed validation!" );
    }

    // For this example, we'll always stop submission
    return false;
}
