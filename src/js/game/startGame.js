import { createGame } from "../components/createGame";
import { Player } from "../classes/player";
import { getOrientation } from "./getAxis";
import { errorContainer } from "../components/createErrorContainer";

export function startGame(name) {
  createGame();

  let player = new Player(name);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      removeHoverClassFromCell(cells);
      gridEventListener(cell, player.ships[0], player);
    });
    cell.addEventListener("click", () => {
      placeShip(cell, player);
    });
  });

  const reset = document.getElementById("reset-button");
  reset.addEventListener("click", () => {
    player = new Player(name);

    resetCells(cells);
  });

  const autoPlace = document.getElementById("auto-place-button");
  autoPlace.addEventListener("click", () => {
    placeAutoMode(player, cells);
  });

  const startButton = document.getElementById("start-game");
  startButton.addEventListener("click", () => {
    goToGameLoop(player);
  });
}

/**
 *
 * @param {HTMLDivElement} cell
 * @param {*} ship
 */
function gridEventListener(cell, ship, player) {
  if (player.ships.length === 0) {
    return;
  }

  const length = ship.length;
  const axis = getOrientation();

  const position = JSON.parse(cell.getAttribute("location"));

  const shipLengthArr = new Array(ship.length).fill(" ");
  let positionToInt = { x: parseInt(position.x), y: parseInt(position.y) };

  if (
    player.gameboard.checkOutOfBounds(shipLengthArr, positionToInt, axis) ===
    "collision"
  ) {
    positionToInt = { x: parseInt(position.x), y: parseInt(position.y) };
    goUntilError(positionToInt, axis, shipLengthArr, player);
    return;
  }

  hoverOnShip(length, axis, position);
}

/**
 *
 * @param {NodeListOf<Element>} cells
 */
function removeHoverClassFromCell(cells) {
  cells.forEach((cell) => {
    cell.classList.remove("hover-effect");
    cell.classList.remove("cell-error");
  });
}

function hoverOnShip(length, axis, position) {
  for (let index = 0; index < length; index++) {
    const element = document.querySelector(
      `[location=\'{"x": "${position.x}", "y": "${position.y}"}\']`
    );

    element.classList.add("hover-effect");

    if (axis === "vertical") {
      position.y++;
    } else {
      position.x++;
    }
  }
}

function goUntilError(position, axis, lengthArr, player) {
  lengthArr.every(() => {
    const startingPos = JSON.parse(JSON.stringify(position));

    if (
      player.gameboard.checkOutOfBounds([" "], position, axis) === "collision"
    ) {
      return false;
    }

    const element = document.querySelector(
      `[location=\'{"x": "${startingPos.x}", "y": "${startingPos.y}"}\']`
    );
    element.classList.add("cell-error");

    if (axis === "vertical") {
      startingPos.y++;
    } else {
      startingPos.x++;
    }

    position = startingPos;
    return true;
  });
}

/**
 *
 * @param {HTMLDivElement} cell
 * @param {Player} player
 */
function placeShip(cell, player) {
  if (player.ships.length === 0) {
    return;
  }

  if (cell.classList.contains("error-cell")) {
    return;
  }
  const allHover = document.querySelectorAll(".hover-effect");
  allHover.forEach((shipElement) => {
    shipElement.classList.add("ship");
    shipElement.classList.remove("hover-effect");
  });

  const position = JSON.parse(cell.getAttribute("location"));
  const axis = getOrientation();

  player.placeShip(position.x, position.y, axis);
}

function resetCells(cells) {
  cells.forEach((cell) => {
    cell.classList.remove("ship");
    cell.classList.remove("hover-effect");
    cell.classList.remove("cell-error");
  });
}

function placeAutoMode(player) {
  player.autoPlaceShips();

  const gameboard = player.gameboard.gameboard;
  for (let x = 0; x < gameboard.length; x++) {
    const row = gameboard[x];
    for (let y = 0; y < gameboard.length; y++) {
      const cell = row[y];

      if (typeof cell === "object") {
        const element = document.querySelector(
          `[location=\'{"x": "${x}", "y": "${y}"}\']`
        );

        element.classList.add("ship");
      }
    }
  }
}

function goToGameLoop(player) {
  if (player.ships.length != 0) {
    const startContainer = document.getElementById("start-game-container");
    const error = errorContainer("Place all your ships before starting!");

    startContainer.prepend(error);
    return;
  }
}
