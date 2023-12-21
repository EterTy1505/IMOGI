const body = document.body;
var matrices = {};

// Variable Tracker Bar
var varTracker = {
    x: 0,
    y: 0,
    i: 1,
    t: "light",
}

function updateTracker() {
    var states = "";
    for (let [prop, val] of Object.entries(varTracker)) {
        states += `${prop} = ${val}\n`;
    }
    const statesDiv = document.getElementById("states");
    statesDiv.textContent = states;
    statesDiv.style.whiteSpace = 'pre-line';

}

function showCoords(event) {
    varTracker.x = event.clientX;
    varTracker.y = event.clientY;
    updateTracker();
}

function createMatrix(event) {
    if (!(event.clientX >= 690 && event.clientY >= 670)
        && !(event.clientX <= 100 && event.clientY <= 90)) {
        const matrix = document.createElement('math');
        const sample = `\
\$\$\begin{bmatrix}\
${varTracker.i}\
\end{bmatrix}\$\$`;
        const num = document.createTextNode(sample);
        matrix.setAttribute('class', 'matrix');
        matrix.appendChild(num);
        body.appendChild(matrix);
        matrix.style.left = event.clientX + 'px';
        matrix.style.top = event.clientY + 'px';
        matrices[varTracker.i] = matrix;

        varTracker.i++;
    }

    updateTracker();
}

function themeToggle()  {
    switch (varTracker.t) {
        case "light":
            body.style.backgroundColor = "#000";
            body.style.color = "#fff"
            varTracker.t = "dark";
            break;
        case "dark":
            body.style.backgroundColor = "#fff";
            body.style.color = "#000";
            varTracker.t = "light";
            break;
    }

    updateTracker();
}

document.addEventListener('mousemove', showCoords);
document.addEventListener('click', createMatrix);
const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener('click', themeToggle);