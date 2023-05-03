import { Gameboard } from "../classes/gameboard";
import { Ship } from "../classes/ship";

describe("Testing the Gameboard", () => {
  test("Creating the gameboard", () => {
    const gameboard = new Gameboard();
    expect(gameboard.gameboard.length).toBe(10);
    expect(gameboard.gameboard[0].length).toBe(10);
  });

  test("Placing a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);

    gameboard.placeShip({x: 3, y: 0}, ship);
    expect(gameboard.gameboard[0]).toStrictEqual(["", "", "", "s", "s", "s", "s", "s", "", "",]);
  });
});
