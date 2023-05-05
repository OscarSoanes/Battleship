import { Player } from "../classes/player";
import { createGame } from "../components/createGameLoop";
import { endingScreen } from "./end";

let isPlayerTurn = true;
let move;
let waitingTurn = false;
let gameover = false;

export function gameLoop(playersGrid, player) {
  createGame(playersGrid);
  move = document.getElementById("move");
  const computer = new Player("Computer");
  computer.autoPlaceShips();
  console.log(computer.gameboard.gameboard);
  const enemyGrid = document.querySelectorAll("#enemy-grid .cell");
  enemyGrid.forEach((cell) =>
    cell.addEventListener("click", () =>
      clickEventListeners(cell, computer, player)
    )
  );
}

function clickEventListeners(cell, computer, player) {
  enemyClick(cell, computer, player.name);
  enemyAttack(player);

  if (cell.classList.contains("attacked")) {
    const clone = cell.cloneNode(true);
    cell.replaceWith(clone);
  }
}

function enemyClick(cell, computer, playerName) {
  if (isPlayerTurn !== true || gameover) {
    return;
  }
  isPlayerTurn = !isPlayerTurn;

  const position = JSON.parse(cell.getAttribute("location"));
  const x = parseInt(position.x);
  const y = parseInt(position.y);

  const result = computer.incomingAttack(x, y);
  modifyBoard(result, cell, playerName, "the enemy");
  isGameOver(computer, playerName);
}

function enemyAttack(player) {
  if (isPlayerTurn !== false || waitingTurn || gameover) {
    return;
  }
  waitingTurn = true;
  setTimeout(() => {
    move.textContent = "Awaiting enemy attack!";
    setTimeout(() => {
      const result = player.randomAttack();
      const lastMove = player.prevMoves.slice(-1)[0];

      const element = document.querySelector(
        `#player-grid [location=\'{"x": "${lastMove.x}", "y": "${lastMove.y}"}\']`
      );
      modifyBoard(result, element, "The enemy", "our");
      isPlayerTurn = !isPlayerTurn;
      waitingTurn = false;
      isGameOver(player, "Computer");
    }, 400);
  }, 2000);
}

function modifyBoard(result, cell, name, target) {
  switch (result) {
    case "sunk": {
      move.textContent = `${name} fire's into ${target} waters... ${name} sunk the ${target} ship!`;
      cell.classList.add("attacked", "hit");
      cell.ariaLabel = "hit";
      break;
    }
    case "hit": {
      move.textContent = `${name} fire's into ${target} waters... ${name} hit the ${target} ship!`;
      cell.classList.add("attacked", "hit");
      cell.ariaLabel = "hit";
      break;
    }
    case "missed": {
      move.textContent = `${name} fire's into ${target} waters... ${name} missed.`;
      cell.classList.add("attacked", "miss");
      cell.ariaLabel = "miss";
      break;
    }
  }
}

function isGameOver(player, name) {
  const result = player.gameboard.isSunk();

  if (!result) {
    return;
  }

  gameover = true;

  const main = document.querySelector("main");
  const container = document.getElementById("game-screen");

  main.removeChild(container);

  endingScreen(name);
}
