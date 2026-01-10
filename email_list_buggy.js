"use strict";

const $ = (id) => document.getElementById(id);

const joinList = function(evt) {
    // 1. STOP THE ADVANCEMENT
    // The browser is now locked on this page.
    evt.preventDefault(); 
    console.log("Form advancement stopped. Starting validation...");

    const email1 = $("email_address1").value;
    const email2 = $("email_address2").value;
    const firstName = $("first_name").value;
    
    let errorMessage = "";

    // 2. THE INADVERTENT ERROR (The "Freeze" Trigger)
    // We refer to 'emailAddress1' instead of 'email1'.
    // Since 'emailAddress1' is undefined, the script throws a ReferenceError and DIES.
    if (emailAddress1 ===  "") { 
        errorMessage = "Email address entries required";
         $("email_address1").focus();
    } else if (email2 === "") {
        errorMessage = "Email address entries required";
          $("email_address2").focus()
    } else if (email2 != email1) {
        errorMessage = "Email address entries must match";
    } else if (fName === "") {
        errorMessage = "First name entry required";
        $("first_name").focus();
    }

    // 3. THE SILENCE
    // Because the script crashed above, the browser never reaches this line.
    // The user never sees an error message, so the form looks "frozen."
    if (errorMessage !== "") {
        evt.preventDefault(); 
        $("error_message").textContent = errorMessage;
    } else {
        $("error_message").textContent = "";
        $("email_form").submit();
    }
};

const clearForm = () => {
    $("email_form").reset();
    $("error_message").textContent = "";
    $("email_address1").focus();
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
  /* 
  onsole.log(isValidEmail("hello@example.com")); // true
  console.log(isValidEmail("invalid-email@"));    // false
  console.log(isValidEmail("user@domain.co.uk")); // true
  */
};

document.addEventListener("DOMContentLoaded", () => {
    // Correct ID ensures the listener is successfully added.
    const joinBtn = $("join_list"); 

    if (joinBtn) {
        joinBtn.addEventListener("click", joinList);
    }
    
    $("clear_btn").addEventListener("click", clearForm);
    $("email_address1").focus();
});