const container = document.querySelector("#container");

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

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    if(target.getAttribute("class").includes("pixel"))
    target.style.backgroundColor = "#0000ff";
    console.log(target);
});