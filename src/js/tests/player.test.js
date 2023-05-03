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
        expect(player.prevMoves.length).toBe(3);
    })

    test("Auto place ships", () => {
        const player = new Player("test");
        player.autoPlaceShips();

        expect(player.ships).toStrictEqual([]);
        
        const gameboard = player.gameboard.gameboard;
        console.log(gameboard);
        let total = 0;

        for (let x = 0; x < gameboard.length; x++) {
            for (let y = 0; y < gameboard.length; y++) {
                if (typeof(gameboard[y][x]) === "object") {
                    total++;
                }   
            }
        }

        expect(total).toBe(17);
    })

    test("Prevent duplicated moves", () => {
        const player = new Player("test");
        player.incomingAttack(0, 0);
        expect(player.prevMoves.length).toBe(1);
        player.incomingAttack(0, 0);
        expect(player.prevMoves.length).toBe(1);
    })

    test("Random attack", () => {
        const player = new Player("test"); 
    
        for (let index = 0; index < 100; index++) {
            expect(player.prevMoves.length).toBe(index);
            player.randomAttack()
        }
      })
})