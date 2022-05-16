const Ship = require('./ship');

const Gameboard = () => {
  const board = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];
  return {
    myBoard: board,
    myGuesses: board,
    placeShip(row, col, direction, magnitude, ship) {
      // direction should be horizontal or vertical
      // magnitude should be positive or negative
      // also need to determine ship length, ship should probably be an input
      let count = 0;
      if (direction === 'horizontal') {
        if (magnitude === 'positive') {
          if (col + ship.length >= 0 && col + ship.length < 11) {
            // add ship to board
            while (col + count < col + ship.length) {
              this.myBoard[row][col + count] = ship.name;
              count += 1;
            }
          }
        } else if (magnitude === 'negative') {
          if (col - ship.length >= 0 && col - ship.length < 11) {
            // add ship to board
            while (col - count > col - ship.length) {
              this.myBoard[row][col - count] = ship.name;
              count += 1;
            }
          }
        }
      } else if (direction === 'vertical') {
        if (magnitude === 'positive') {
          if (row + ship.length > 0 && row + ship.length < 11) {
            // add ship to board
            while (row + count < row + ship.length) {
              this.myBoard[row + count][col] = ship.name;
              count += 1;
            }
          }
        } else if (magnitude === 'negative') {
          if (row - ship.length > 0 && row - ship.length < 11) {
            // add ship to board
            while (row - count > row - ship.length) {
              this.myBoard[row - count][col] = ship.name;
              count += 1;
            }
          }
        }
      }
    },
    receiveAttack() {
      // take coordinates as args, determine value at said location
      // if location is null, no hit
      // if location is not null, hit
    },
  };
};

module.exports = Gameboard;
