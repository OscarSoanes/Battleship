export function createGrid(message) {
  const gridContainer = document.createElement("section");
  gridContainer.classList.add("grid-container");

  const heading = document.createElement("h2");
  heading.textContent = message;

  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let x = 0; x < 10; x++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let y = 0; y < 10; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("location", `{x: ${x}, y: ${y}}`);

      row.appendChild(cell);
    }

    grid.appendChild(row);
  }

  gridContainer.append(heading, grid);
  return gridContainer;
}
