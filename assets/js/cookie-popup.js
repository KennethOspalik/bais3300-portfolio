// cookie-popup.js  (keep this file in the SAME folder as index.html)

if (localStorage.getItem("cookie_accepted") === "true") {
    // User already accepted – don't show it again
} else {
    fetch("cookie-popup.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);

            const popup = document.getElementById("cookie-popup");
            const button = document.getElementById("accept-cookies");

            // Show popup
            popup.style.display = "block";

            // When user clicks Accept
            button.addEventListener("click", () => {
                localStorage.setItem("cookie_accepted", "true");
                popup.style.display = "none";
            });
        });
}



