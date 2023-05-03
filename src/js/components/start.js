import { startGame } from "../game/startGame";
import Warning from "../../assets/warning.svg";

export function startMenu() {
  const menu = document.querySelector("main");

  const container = document.createElement("div");
  container.setAttribute("id", "start-menu");

  const nameContainer = buildNameContainer();
  const startButton = buildStartButton();

  container.append(nameContainer, startButton);
  menu.appendChild(container);
}

function buildNameContainer() {
  const nameContainer = document.createElement("div");
  nameContainer.setAttribute("id", "name-container");

  const label = document.createElement("label");
  label.textContent = "Enter your name:";
  label.htmlFor = "name";

  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
  input.placeholder = "What is your name?";

  input.setAttribute("id", "name");

  nameContainer.append(label, input);

  return nameContainer;
}

function buildStartButton() {
  const startButton = document.createElement("button");
  startButton.type = "button";
  startButton.setAttribute("id", "start-button");
  startButton.textContent = "Start Game";

  startButton.addEventListener("click", (event) =>
    startButtonEventHandler(event)
  );

  return startButton;
}

function startButtonEventHandler(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  if (name.trim() !== "") {
    const startMenu = document.getElementById("start-menu");
    startMenu.classList.add("hide-game-menu");

    startGame();
  } else {
    const nameContainer = document.getElementById("name-container");

    if (nameContainer.children.length >= 3) {
      return;
    }

    const errorContainer = document.createElement("div");
    errorContainer.classList.add("errorContainer");

    const warningIcon = new Image();
    warningIcon.src = Warning;

    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.textContent = "Please enter a name!";

    errorContainer.append(warningIcon, errorMsg);

    nameContainer.appendChild(errorContainer);
  }
}
