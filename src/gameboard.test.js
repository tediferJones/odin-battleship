const Gameboard = require('./gameboard');
const Ship = require('./ship');

test('creates a 10x10 array of nulls for ships', () => {
  expect(Gameboard().myBoard).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('creates a 10x10 array of nulls for guesses', () => {
  expect(Gameboard().myGuesses).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('placeship dir:horizontal mag:positive', () => {
  const x = Gameboard();
  x.placeShip(0, 0, 'horizontal', 'positive', Ship(2, 'boat'));
  expect(x.myBoard[0][0]).toBe('boat');
  expect(x.myBoard[0][1]).toBe('boat');
});

test('placeship dir:horizontal mag:negative', () => {
  const x = Gameboard();
  x.placeShip(0, 9, 'horizontal', 'negative', Ship(2, 'boat'));
  expect(x.myBoard[0][9]).toBe('boat');
  expect(x.myBoard[0][8]).toBe('boat');
});

test('placeship dir:vertical mag:positive', () => {
  const x = Gameboard();
  x.placeShip(0, 0, 'vertical', 'positive', Ship(2, 'boat'));
  expect(x.myBoard[0][0]).toBe('boat');
  expect(x.myBoard[1][0]).toBe('boat');
});

test('placeship dir:vertical mag:negative', () => {
  const x = Gameboard();
  x.placeShip(9, 0, 'vertical', 'negative', Ship(2, 'boat'));
  expect(x.myBoard[9][0]).toBe('boat');
  expect(x.myBoard[8][0]).toBe('boat');
});
