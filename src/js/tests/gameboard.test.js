import { Gameboard } from "../classes/gameboard";
import { Ship } from "../classes/ship";

describe("Testing the Gameboard", () => {
  test("Creating the gameboard", () => {
    const gameboard = new Gameboard();
    expect(gameboard.gameboard.length).toBe(10);
    expect(gameboard.gameboard[0].length).toBe(10);
  });

  test("Placing a ship (x)", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);

    gameboard.placeShip({x: 3, y: 0}, "horizontal", ship);
    expect(gameboard.gameboard[0]).toStrictEqual(["", "", "", ship, ship, ship, ship, ship, "", ""]);
  });

  test("Placing a ship (y)", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);

    gameboard.placeShip({x: 1, y: 0}, "vertical", ship);
    expect(gameboard.gameboard[0]).toStrictEqual(["", ship, "", "", "", "", "", "", "", ""]);
    expect(gameboard.gameboard[1]).toStrictEqual(["", ship, "", "", "", "", "", "", "", ""]);
    expect(gameboard.gameboard[2]).toStrictEqual(["", ship, "", "", "", "", "", "", "", ""]);
    expect(gameboard.gameboard[3]).toStrictEqual(["", "", "", "", "", "", "", "", "", ""]);
  })
  
  test("Recieving an attack (miss)", () => {
    const gameboard = new Gameboard();

    expect(gameboard.recieveAttack({x: 0, y: 0})).toBe("missed");
    expect(gameboard.gameboard[0]).toStrictEqual(["m", "", "", "", "", "", "", "", "", ""])
  })

  test("Recieving an attack (hit)", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);

    gameboard.placeShip({x: 3, y: 0}, "horizontal", ship);
    expect(gameboard.recieveAttack({x: 4, y: 0})).toBe("hit");

    expect(gameboard.gameboard[0]).toStrictEqual(["", "", "", ship, "h", ship, "", "", "", ""]);
  })

  test("Sinking a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);

    gameboard.placeShip({x: 1, y: 0}, "horizontal", ship);
    expect(gameboard.recieveAttack({x: 0, y: 0})).toBe("missed");
    expect(gameboard.recieveAttack({x: 1, y: 0})).toBe("hit");
    expect(gameboard.recieveAttack({x: 2, y: 0})).toBe("sunk");
  })
});
