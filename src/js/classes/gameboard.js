export class Gameboard {
  constructor() {
    this.gameboard = createGameboard();
  }

  placeShip(location, axis, ship) {
    for (let index = 0; index < ship.length; index++) {
      this.gameboard[location.y][location.x] = ship
      
      if (axis === "vertical") {
        location.y++
      } else {
        location.x++;
      }
    }
  }

  recieveAttack(location) {
    const valueAt = this.gameboard[location.y][location.x]; 
    
    if (valueAt === "") {
      this.gameboard[location.y][location.x] = "m";
      return "missed";
    }

    if (typeof(valueAt) === "object") {
      valueAt.hit();
      this.gameboard[location.y][location.x] = "h";

      if (valueAt.isSunk()) {
        return "sunk";
      }

      return "hit";
    }
  }

  isSunk() {
    function checkRow(element) {
      if (typeof(element) === "object") {
        return false; 
      }
      return true;
    }

    return this.gameboard.every((row) => {
      return row.every(checkRow);
    })
  }
}

function createGameboard() {
  let gameboard = [];

  for (let x = 0; x < 10; x++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
      row.push("");
    }
    gameboard.push(row);
  }

  return gameboard;
}
