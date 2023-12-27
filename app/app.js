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
 * Creates the HTML Elements to make a generic Sidebar (i.e. its rectangle, title and
 * ruler).
 * 
 * The result can be seen on the HTML file as this section being included inside the 
 * `body` element:
 * ```
 * <div id="[type]-bar" class="bar">
 *     <span class="bar-title">[Type]</span>
 *     <hr>
 *     ...
 * </div>
 * ```
 * where `[type]` is the value of the given parameter (capitalized for the span
 * element), and the space after the horizontal ruler is left for the elements
 * collection to be added later by `get[Type]Bar()` functions.
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

// TESTING
let sidebarOn = false;
let activeBar = "objects";

const sidebarButton = document.getElementById("sidebarToggle");
sidebarButton.addEventListener("click", () => toggleBar());
