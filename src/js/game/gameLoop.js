import { Player } from "../classes/player";
import { createGame } from "../components/createGameLoop";

let isPlayerTurn = true;
let move;
const result = document.getElementById("result");

export function gameLoop(playersGrid, player) {
  createGame(playersGrid);
  move = document.getElementById("move");
  const computer = new Player("Computer");
  computer.autoPlaceShips();

  const enemyGrid = document.querySelectorAll(
    "#enemy-grid > .grid > .row > .cell"
  );
  enemyGrid.forEach((cell) =>
    cell.addEventListener("click", () => {
      enemyClick(cell, computer);
    })
  );
}

function enemyClick(cell, computer) {
  if (isPlayerTurn != true) {
    return;
  }
  isPlayerTurn = !isPlayerTurn;

  const position = JSON.parse(cell.getAttribute("location"));
  const x = parseInt(position.x);
  const y = parseInt(position.y);

  const result = computer.incomingAttack(x, y);

  switch (result) {
    case "sunk": {
      move.textContent =
        "You fire into enemy waters... you sunk the enemies ship!";
      cell.classList.add("attacked", "hit");
      cell.ariaLabel = "hit";
      break;
    }
    case "hit": {
      move.textContent =
        "You fire into enemy waters... you hit the enemies ship!";
      cell.classList.add("attacked", "hit");
      cell.ariaLabel = "hit";
      break;
    }
    case "missed": {
      move.textContent = "You fire into enemy waters... you missed.";
      cell.classList.add("attacked", "miss");
      cell.ariaLabel = "miss";
      break;
    }
  }
}
