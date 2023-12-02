function toggleTheme() {
    var body = document.body;
    var themeSwitcher = document.getElementById("themeSwitcher");
    var latexInput = document.getElementById("latexInput");
    var preview = document.getElementById("preview");
    if (themeSwitcher.textContent == "🌙") {
        body.style.backgroundColor = "#ffffff";
        themeSwitcher.textContent = "🔅";
        themeSwitcher.style.backgroundColor = "white";
        latexInput.style.backgroundColor = "white";
        latexInput.style.color = "black";
        preview.style.backgroundColor = "white";
        preview.style.color = "black";
    } else {
        body.style.backgroundColor = "#2b2b2b";
        themeSwitcher.textContent = "🌙";
        themeSwitcher.style.backgroundColor = "#4e4e4e";
        latexInput.style.backgroundColor = "#4e4e4e";
        latexInput.style.color = "white";
        preview.style.backgroundColor = "#363636";
        preview.style.color = "white";
    }
}
