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

    autoPlaceShips() {
        const axis = ["horizontal", "vertical"];
        while (this.ships.length != 0) {
            const x = Math.floor(Math.random() * 9); 
            const y = Math.floor(Math.random() * 9); 
            const thisAxis = axis[Math.round(Math.random())]
            this.placeShip(x, y, thisAxis);
        }
    }

    incomingAttack(x, y) {
        return this.gameboard.recieveAttack({x: x, y: y});
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