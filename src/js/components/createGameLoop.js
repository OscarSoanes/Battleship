import { createGrid } from "./grid";

export function createGame(player) {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.setAttribute("id", "game-screen");

  const moveContainer = document.createElement("section");
  moveContainer.setAttribute("id", "move-container");

  const move = document.createElement("p");
  move.setAttribute("id", "move");
  move.textContent = "Awaiting your move!";

  moveContainer.appendChild(move);

  const enemyGrid = createGrid("Enemies Water");
  enemyGrid.setAttribute("id", "enemy-grid");

  player.childNodes[0].textContent = "Our Water";
  player.setAttribute("id", "player-grid");

  container.append(moveContainer, enemyGrid, player);
  main.appendChild(container);
}
