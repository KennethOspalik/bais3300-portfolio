document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-cookies");

    // Check if cookies were already accepted
    if (localStorage.getItem("cookie_accepted") === "yes") {
        popup.style.display = "none";
        return;
    }

    // If not accepted, show popup
    popup.style.display = "block";

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookie_accepted", "yes");
        popup.style.display = "none";
    });
});

