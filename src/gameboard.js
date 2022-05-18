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
  const myOtherBoardCuzJS = [
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
    enemyGuesses: myOtherBoardCuzJS,
    myShips: {},
    placeShip(row, col, direction, ship) {
      // add ship to myShips here
      this.myShips[`${ship.name}`] = ship;
      // NEED TO ADD SANITIZATION, make sure all spots are null before placing
      // otherwise ships can overlap which will break the game

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
      let isHit;
      if (this.myBoard[row][col] !== null && this.myBoard[row][col] !== false) {
        // console.log('HIT')
        const value = this.myBoard[row][col];
        const location = value[0];
        const name = value.slice(1);
        this.myShips[`${name}`].hit(location);

        this.enemyGuesses[row][col] = true;
        this.myBoard[row][col] = false;
        // just return a true or false value for the coordinates,
        // other functinos in index.js will handle hit() and marking the appropiate board

        // the above is kind of a lie, call correct ship from myShips, and hit it
        isHit = [name, location];
      } else {
        this.enemyGuesses[row][col] = false;
        isHit = false;
      }
      return isHit;
    },
    allSunk() {
      // make sure myBoard only contains [null, false]
      let result = true;
      const flatBoard = this.myBoard.flat();
      for (const i in flatBoard) {
        if (![null, false].includes(flatBoard[i])) {
          result = false;
        }
      }
      return result;
    },
  };
};

module.exports = Gameboard;
