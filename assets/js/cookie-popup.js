document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("cookie-popup");
    const button = document.getElementById("accept-cookies");

    // If user has not accepted cookies, show popup
    if (!localStorage.getItem("cookie_accepted")) {
        popup.style.display = "block";
    }

    // When user clicks Accept
    button.addEventListener("click", () => {
        localStorage.setItem("cookie_accepted", "true");
        popup.style.display = "none";
    });

});



