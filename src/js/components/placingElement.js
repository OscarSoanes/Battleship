export function placingElement(size) {
  const container = document.createElement("section");
  container.setAttribute("id", "next-ship");

  const heading = document.createElement("h2");

  if (size === 0) {
    heading.textContent = "All ships placed";
    container.appendChild(heading);

    return container;
  }

  heading.textContent = "Next Ship: ";
  heading.ariaValueText = `Next Ship: ${size} Long`;

  const row = document.createElement("div");
  row.classList.add("row");

  for (let index = 0; index < size; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    row.appendChild(cell);
  }

  container.append(heading, row);
  return container;
}
