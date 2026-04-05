const container = document.querySelector("#container");
const button = document.querySelector("button");
let gridSize = 16;

function loadGrid() {
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");

        for(let j = 0; j < gridSize; j++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.style.height = `${750 / gridSize}px`;
            pixel.style.width = `${750 / gridSize}px`;
            div.appendChild(pixel);
        }

        div.setAttribute("class", "line");
        container.appendChild(div);
    }
}

loadGrid();

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    if(target.classList.contains("pixel")) {
        target.style.backgroundColor = "#0000ff";
    }
});

button.addEventListener("click", (event) => {
    let input = prompt("Enter new grid size:", "16");

    if(input > 100) {
        alert("max size is 100");
    } else if (input < 1) {
        alert("minimum input is 1");
    } else if (input != Math.round(input)) {
        alert("please enter a whole number");
    } else {
        gridSize = Number(input);
        container.innerHTML = "";
        loadGrid();
    }
})