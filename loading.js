let body = document.getElementById("body");
body.style.opacity = "0";
function loadingScreen() {
    body.style.opacity = "100";
    body.style.transition = "3s";
}