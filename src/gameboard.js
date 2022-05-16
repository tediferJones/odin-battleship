// const Ship = require('./ship');

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
    placeShip(row, col, direction, ship) {
      let count = 0;
      if (direction === 'horizontal') {
        if (col + ship.length >= 0 && col + ship.length < 11) {
          while (col + count < col + ship.length) {
            this.myBoard[row][col + count] = `${count}${ship.name}`;
            count += 1;
          }
        }
      } else if (direction === 'vertical') {
        if (row + ship.length > 0 && row + ship.length < 11) {
          while (row + count < row + ship.length) {
            this.myBoard[row + count][col] = `${count}${ship.name}`;
            count += 1;
          }
        }
      }
    },
    receiveAttack(row, col) {
      let isHit = false;
      if (this.myBoard[row][col] != null) {
        // just return a true or false value for the coordinates,
        // other functinos in index.js will handle hit() and marking the appropiate board
        isHit = true;
      }
      return isHit;
    },
  };
};

module.exports = Gameboard;
