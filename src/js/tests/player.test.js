import { Gameboard } from '../classes/gameboard';
import { Player } from '../classes/player'
import { Ship } from '../classes/ship';

describe("Testing the player", () => {
    test("Creating a player", () => {
        const player = new Player("test");
        const gameboard = new Gameboard();
        const ships = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)]

        expect(player).toEqual({name: "test", prevMoves: [], gameboard: gameboard, ships: ships})
    })
})