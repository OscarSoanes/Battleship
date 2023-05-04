import { createGame } from "../components/createGame";
import { Player } from "../classes/player";
import { getOrientation } from "./getAxis";

export function startGame(name) {
  createGame();

  const player = new Player(name);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      removeHoverClassFromCell(cells);
      gridEventListener(cell, player.ships[0], player);
    })
  );
}

/**
 *
 * @param {HTMLDivElement} cell
 * @param {*} ship
 */
function gridEventListener(cell, ship, player) {
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
    // console.log(`[location=\'{"x": "${position.x}", "y": "${position.y}"}\']`);
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
