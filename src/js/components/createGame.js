import { createGrid } from "./grid";

export function createGame() {
  const main = document.querySelector("main");

  const gameContainer = document.createElement("div");
  gameContainer.setAttribute("id", "setup-container");

  const grid = createGrid("Create our Loadout");

  const axisContainer = document.createElement("section");
  axisContainer.classList.add("axis-container");

  const heading = document.createElement("h2");
  heading.setAttribute("id", "current-axis");
  heading.textContent = "Current Axis: x";

  const button = document.createElement("button");
  button.textContent = "Change axis to y";
  button.addEventListener("click", () =>
    changeAxisEventListener(heading, button)
  );

  const buttonContainer = document.createElement("section");
  buttonContainer.setAttribute("id", "button-container");
  const reset = document.createElement("button");
  reset.textContent = "Reset";
  reset.setAttribute("id", "reset-button");

  const auto = document.createElement("button");
  auto.textContent = "Auto Place";
  auto.setAttribute("id", "auto-place-button");

  buttonContainer.append(reset, auto);

  axisContainer.append(heading, button);
  gameContainer.append(grid, axisContainer, buttonContainer);

  main.appendChild(gameContainer);
}

function changeAxisEventListener(heading, button) {
  if (heading.textContent === "Current Axis: x") {
    heading.textContent = "Current Axis: y";
    button.textContent = "Change axis to x";
    return;
  }
  heading.textContent = "Current Axis: x";
  button.textContent = "Change axis to y";
}
