const container = document.querySelector(".container");
createGrid();

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    target.classList.add("highlight");
});

const newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", newGrid);

function createGrid(size = 16) {
    container.textContent = '';
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        container.appendChild(gridRow);

        for (let i = 0; i < size; i++) {
            console.log(i);
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-column");
            gridRow.appendChild(gridColumn);
        }
    }
}

function newGrid() {
    let size = 16;
    let firstTime = true;

    while (size > 100 || size < 2 || firstTime) {
        size = firstTime ? +prompt("Enter a grid size") : +prompt("Grid size must be between 2 and 100");
        firstTime = false;
    }

    createGrid(size);
}