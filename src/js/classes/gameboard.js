export class Gameboard {
  constructor() {
    this.gameboard = createGameboard();
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
