export class Gameboard {
  constructor() {
    this.gameboard = createGameboard();
  }

  placeShip(location, axis, ship) {
    for (let index = 0; index < ship.length; index++) {
      this.gameboard[location.y][location.x] = "s"
      
      if (axis = "vertical") {
        location.y++
      } else {
        location.x++;
      }
    }
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
