const grid = document.querySelector(".grid");
const sizeSlider = document.getElementById("size-slider");
const sizeLabel = document.getElementById("size-label");

createGrid();

grid.addEventListener("mouseover", (event) => {
    const target = event.target;
    target.setAttribute("style", `background-color: ${generateRandomColor()}`);
});

sizeSlider.addEventListener("change", (event) => {
    const size = event.target.value;
    updateGridSize(size);
    sizeLabel.textContent = `${size} x ${size}`;
});

function generateRandomColor() {
    const randomHue = Math.random() * 360;
    return `hsla(${randomHue}, 100%, 50%, 1)`;
}

function clearGrid() {
    grid.textContent = '';
}

function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        grid.appendChild(gridRow);

        for (let i = 0; i < size; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-column");
            gridRow.appendChild(gridColumn);
        }
    }
}

function updateGridSize(size) {
    console.log("Update");
    clearGrid();
    createGrid(size);
}
