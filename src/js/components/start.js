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

  const label = document.createElement("label");
  label.textContent = "Name";
  label.htmlFor = "name";
  label.classList.add("invisible");

  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
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
    console.log("ok");
  } else {
    console.log("something went wrong");
  }
}
