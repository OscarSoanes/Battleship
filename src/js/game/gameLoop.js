import { Player } from "../classes/player";
import { createGame } from "../components/createGameLoop";

export function gameLoop(playersGrid, player) {
  createGame(playersGrid);

  const computer = new Player("Computer");
  computer.autoPlaceShips();

  console.log(computer);
}
