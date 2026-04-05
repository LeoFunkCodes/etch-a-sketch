const container = document.querySelector("#gridContainer");

for(let i = 0; i < 16; i++) {
    const div = document.createElement("div");

    for(let j = 0; j < 16; j++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        div.appendChild(pixel);
    }

    div.setAttribute("class", "line");
    container.appendChild(div);
}