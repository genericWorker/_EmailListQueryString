"use strict";

const $ = (id) => document.getElementById(id);

const joinList = function(evt) { // Added 'evt' parameter here
    const email1 = $("email_address1").value;
    const email2 = $("email_address2").value;
    const firstName = $("first_name").value;
    let errorMessage = "";

    // Validate the entries
    if (email1 === "") {
        errorMessage = "Email address entries required";
        $("email_address1").focus();
    } else if (email2 === "") {
        errorMessage = "Email address entries required";
        $("email_address2").focus();
    } else if (email2 !== email1) {
        errorMessage = "Email address entries must match";
        $("email_address2").focus();
    } else if (firstName === "") {
        errorMessage = "First name entry required";
        $("first_name").focus();
    }

    // Submit or Display Error
    if (errorMessage === "") {
        $("error_message").textContent = ""; // Removed '#'
        $("email_form").submit(); 
    } else {
        evt.preventDefault(); // This now works because 'evt' is defined
        $("error_message").textContent = errorMessage;
    }
};

const clearForm = () => {
    $("email_address1").value = "";
    $("email_address2").value = "";
    $("first_name").value = "";
    $("error_message").textContent = ""; // Clear the error message area too
    $("email_address1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("join_list").addEventListener("click", joinList);
    $("clear_btn").addEventListener("click", clearForm);
    $("email_address1").focus();
});