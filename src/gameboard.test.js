const Gameboard = require('./gameboard');
const Ship = require('./ship');

test('creates a 10x10 array of nulls for ships', () => {
  expect(Gameboard().myBoard).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('creates a 10x10 array of nulls for guesses', () => {
  expect(Gameboard().myGuesses).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('placeship001 horizontal', () => {
  const x = Gameboard();
  x.placeShip(9, 8, 'horizontal', Ship(2, 'boat'));
  expect(x.myBoard[9][8]).toBe('0boat');
  expect(x.myBoard[9][9]).toBe('1boat');
});

test('placeship001 vertical', () => {
  const x = Gameboard();
  x.placeShip(8, 9, 'vertical', Ship(2, 'boat'));
  expect(x.myBoard[8][9]).toBe('0boat');
  expect(x.myBoard[9][9]).toBe('1boat');
});
