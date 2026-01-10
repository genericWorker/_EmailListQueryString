"use strict";

const $ = (id) => document.getElementById(id);

const confirmData = function() {
    $("confirm_form").submit(); 
}; 

document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the query string from the URL
    const queryString =                                            window.location.search;
    
    // 2. Parse the parameters
    const urlParams = new URLSearchParams(queryString);
    
    // 3. Extract the specific values (matching the 'name' attribute from your previous form)
    const firstName = urlParams.get("first_name");
    const email = urlParams.get("email_address1");

    // 4. Display the data in the spans
    if (firstName) {
        $("first_name_display").textContent = firstName;
    }
    if (email) {
        $("email_display").textContent = email;
    }
});