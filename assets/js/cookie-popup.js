// cookie-popup.js

const popup = document.getElementById("cookie-popup");
const button = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookie_accepted")) {
    popup.style.display = "block";
}

button.addEventListener("click", () => {
    localStorage.setItem("cookie_accepted", "true");
    popup.style.display = "none";
});



