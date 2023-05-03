import { Ship } from "../classes/ship";

describe("Testing the ships", () => {
  test("Creating a ship", () => {
    const ship = new Ship(5);
    expect(ship).toBeDefined();
  });
});
