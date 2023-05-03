import { Gameboard } from '../classes/gameboard';
import { Player } from '../classes/player'

describe("Testing the player", () => {
    test("Creating a player", () => {
        const player = new Player("test");
        const gameboard = new Gameboard();

        expect(player).toEqual({name: "test", prevMoves: [], gameboard: gameboard})
    })
})