import { Ship } from "../classes/ship";

describe("Testing the ships", () => {
  test("Creating a ship", () => {
    const ship = new Ship(5);
    expect(ship).toBeDefined();
  });

  test("Hitting a ship", () => {
    const ship = new Ship(5);
    ship.hit();

    expect(ship.hits).toBe(1);
  });

  test("Sinking a ship", () => {
    const ship = new Ship(2);
    ship.hit();

    expect(ship.isSunk()).toBeFalsy();
    ship.hit();

    expect(ship.isSunk()).toBeTruthy();
  });
});
