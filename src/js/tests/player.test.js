import { Gameboard } from '../classes/gameboard';
import { Player } from '../classes/player'
import { Ship } from '../classes/ship';

describe("Testing the player", () => {
    test("Creating a player", () => {
        const player = new Player("test");
        const gameboard = new Gameboard();
        const ships = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)]

        expect(player).toEqual({name: "test", prevMoves: [], gameboard: gameboard, ships: ships})
    });

    test("Placing a ship", () => {
        const player = new Player("test");
        const ship = new Ship(2);

        player.placeShip(3, 0, "horizontal")

        expect(player.ships.length).toBe(4);
        expect(player.gameboard.gameboard[0]).toEqual(["", "", "", ship, ship, "", "", "", "", ""])
    });

    test("Overlapping a ship", () => {
        const player = new Player("test");
        player.placeShip(3, 0, "horizontal");
        player.placeShip(4, 0, "vertical");

        expect(player.ships.length).toBe(4);
    });

    test("Out-of-bounds ship", () => {
        const player = new Player("test");
        player.placeShip(10, 0, "horizontal");

        expect(player.ships.length).toBe(5);
    });

    test("Incoming attack", () => {
        const player = new Player("test");
        player.placeShip(0, 0, "horizontal");

        expect(player.incomingAttack(7, 0)).toBe("missed");
        expect(player.incomingAttack(0, 0)).toBe("hit");
        expect(player.incomingAttack(1, 0)).toBe("sunk");
    })
})