const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    container.appendChild(gridRow);

    for (let i = 0; i < 16; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridRow.appendChild(gridColumn);
    }
}

