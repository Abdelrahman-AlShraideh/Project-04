const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
});

