const body = document.body;

// Sidebar Collections
const objects = {
    collection: {
        function: {
            iconHeight: 20,
        },
        matrix: {
            iconHeight: 40,
        },
        sequence: {
            iconHeight: 20,
        },
        graph: {
            iconHeight: 30,
        },
        "Add Custom Object": {
            iconHeight: 20,
        },
    },
    abbr: "obj",
};

const symbols = {
    collection: {
        advanced: {
            integral: 0,
            summation: 0,
        },
        simple: [
            "alpha",
            "beta",
            "gamma",
            "delta",
            "epsilon",
            "zeta",
            "eta",
            "theta",
            "iota",
            "kappa",
            "lambda",
            "mu",
            "xi",
            "omicron",
            "pi",
            "rho",
            "sigma",
            "tau",
            "upsilon",
            "phi",
            "chi",
            "psi",
            "omega",
        ],
    },
    abbr: "sym",
};

const variables = {
    x: 100,
    y: 200,
};

const types = [
    objects,
    symbols,
    variables,
]

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Creates the HTML Elements to make a Sidebar (i.e. a rectangle, title, ruler and
 * collection display.
 * 
 * The result can be seen on the HTML file as this section being included inside the 
 * `body` element:
 * ```
 * <div id="[type]-bar" class="bar">
 *     <span class="bar-title">[Type]</span>
 *     <hr>
 *     <div>...</div>
 *     <div>...</div>
 *     ...
 * </div>
 * ```
 * where `[type]` is the value of the given parameter (capitalized for the span
 * element), and the div's after the horizontal ruler represent each element in the
 * requested bar's collection.
 * @param {string} type `["objects" | "symbols" | "variables"]`
 */
function getBar(type) {
    // Create HTML Elements
    const barDiv = document.createElement("div");
    barDiv.setAttribute("id", `${eval(type).abbr}-bar`);
    barDiv.setAttribute("class", "bar");

    const barTitle = document.createElement("span");
    barTitle.setAttribute("class", "bar-title");
    barTitle.appendChild(document.createTextNode(capitalize(type)));

    const ruler = document.createElement("hr");

    const scriptElement = document.getElementById("script");
    body.insertBefore(barDiv, scriptElement);
    barDiv.appendChild(barTitle);
    barDiv.appendChild(ruler);

    switch (type) {
        case "objects": {
            // Add List of Objects to the Bar
            const barElements = objects.collection;
            for (const elem in barElements) {
                // Obtain Element Icon
                let iconPath = "C:\\Users\\Carlos Andres\\Code\\Projects\\IMOGI\\app\\images\\";
                iconPath += capitalize(elem);
                iconPath += " Icon.png";

                // Create and add a div for each Element
                const bar = document.getElementById("obj-bar");
                const objectDiv = document.createElement("div");
                const icon = document.createElement("img");
                icon.setAttribute("src", iconPath);
                icon.setAttribute("alt", "no image found");
                const width = icon.getAttribute("width");
                const height = icon.getAttribute("height");
                icon.setAttribute("width", width * barElements[elem].iconHeight / height);
                icon.setAttribute("height", barElements[elem].iconHeight);
                const objName = document.createElement("span");
                objName.style.position = "absolute";
                objName.style.left = "70px";
                objName.style.fontSize = "20px";
                objName.appendChild(document.createTextNode(capitalize(elem)));
                objectDiv.appendChild(icon);
                objectDiv.appendChild(objName);
                bar.appendChild(objectDiv);
            };
            break;
        }
        case "symbols": {
            // Add Pool of Simple Symbols to the Bar
            let i = 0;
            for (const symbol of symbols.collection.simple) {
                const symbolDiv = document.createElement("div");
                symbolDiv.style.top = `${150 + 30*(Math.floor(i/10))}px`;
                symbolDiv.style.left = `${50 + 30*(i%10)}px`;
                const symbolsBar = document.getElementById("sym-bar");
                symbolsBar.appendChild(symbolDiv);
                i++;
            };
            break;
        }
    }
}

function removeBar() {
    const barAbbr = eval(activeBar).abbr;
    document.getElementById(`${barAbbr}-bar`).remove();
}

function toggleBar() {
    if (!sidebarOn) {
        getBar(activeBar);
        sidebarOn = true;
    } else {
        removeBar();
        sidebarOn = false;
    }
}


// SIDEBAR TESTING
let sidebarOn = false;
let activeBar = "objects";

const sidebarButton = document.getElementById("sidebarToggle");
sidebarButton.addEventListener("click", () => toggleBar());


// GRID FUNCTIONALITY
var mouseDown = false;
var [gridLeft, gridTop] = [0, 0];
var [currentX, currentY] = [null, null];
var x_diff, y_diff, initialMouseX, initialMouseY, finalMouseX, finalMouseY;

// Create 3x3 Grid Block to simulate infinite grid
const grid = document.getElementById("grid");
for (let i = 0; i < 9; i++) {
    const gridImage = document.createElement("img");
    gridImage.setAttribute("src", "images/Grid.png");
    gridImage.setAttribute("alt", "what");
    gridImage.style.top = `${1080 * (i%3)}px`;
    gridImage.style.left = `${1920 * (Math.floor(i/3))}px`;
    grid.appendChild(gridImage)
}

// Grid Dragging
document.onmousedown = (event) => {
    // Get the position of the Grid and the Mouse separately when clicked
    // Getting Grid position relies on it being measured in px
    gridLeft = parseInt(window.getComputedStyle(grid).getPropertyValue("left").slice(0, -2));
    gridTop = parseInt(window.getComputedStyle(grid).getPropertyValue("top").slice(0, -2));
    initialMouseX = event.x;
    initialMouseY = event.y;
    x_diff = initialMouseX - gridLeft;
    y_diff = initialMouseY - gridTop;
    mouseDown = true;

    updateDebugBlock();
};
document.onmousemove = (event) => {
    if (mouseDown) {
        grid.style.left = `${event.x - x_diff}px`;
        grid.style.top = `${event.y - y_diff}px`;
    };

    updateDebugBlock();
};
document.onmouseup = (event) => {
    finalMouseX = event.x;
    finalMouseY = event.y;

    // fLeft(x) = -1920 + (-1920 + gridLeft + x (mod 20)) mod 20
    // fRight(x) = ...
    // fLeft: R |-> [-1920, -1901], fRight: R |-> [-1080, -1061]
    grid.style.left = `${-1920 + (-1920 + gridLeft + (finalMouseX-initialMouseX)%20)%20}px`;
    grid.style.top = `${-1080 + (-1080 + gridTop + (finalMouseY-initialMouseY)%20)%20}px`;
    mouseDown = false;
    currentX += finalMouseX - initialMouseX;
    currentY += finalMouseY - initialMouseY;

    updateDebugBlock();
};


// Debug Block to keep track of specific variables
var debugModeOn = true;

const debugVariables = [
    "currentX",
    "currentY",
    "gridLeft",
    "gridTop",
    "initialMouseX",
    "finalMouseX",
    "initialMouseY",
    "finalMouseY",
];
const debugDiv = document.getElementById("debug");
if (debugModeOn) {
    // Create Div
    const debugDiv = document.createElement("div");
    debugDiv.setAttribute("id", "debug");
    debugDiv.setAttribute("class", "debug");
    body.appendChild(debugDiv);

    // Fill Div with debugVariables
    for (const variable of debugVariables) {
    const variableDiv = document.createElement("div");
    variableDiv.setAttribute("id", variable);
    const variableText = document.createTextNode(`${variable} = ${eval(variable)}`);
    debugDiv.appendChild(variableDiv);
    variableDiv.appendChild(variableText);
    }
}

function updateDebugBlock() {
    if (debugModeOn) {
        for (const variable of debugVariables) {
            const variableDiv = document.getElementById(variable)
            variableDiv.textContent = `${variable} = ${eval(variable)}`;
        }
    }
}
