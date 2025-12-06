fetch("../cookie-popup.html")
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


