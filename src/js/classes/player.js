import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
    constructor(name) {
        this.name = name;
        this.prevMoves = [];
        this.gameboard = new Gameboard();
        this.ships = generateShips()
    }
    
    placeShip(x, y, axis) {
        const nextShip = this.ships.shift();
        const result = this.gameboard.placeShip({x: x, y: y}, axis, nextShip)

        if (result === "collision") {
            this.ships.unshift(nextShip);
        }

    }
}

function generateShips() {
    const lengths = [2, 3, 3, 4, 5];
    const ships = []

    lengths.forEach(length => {
        ships.push(new Ship(length))
    })

    return ships;
}