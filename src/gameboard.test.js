const Gameboard = require('./gameboard');
const Ship = require('./ship');

test('creates a 10x10 array of nulls for ships', () => {
  expect(Gameboard().myBoard).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('creates a 10x10 array of nulls for guesses', () => {
  expect(Gameboard().enemyGuesses).toStrictEqual(new Array(10).fill(new Array(10).fill(null)));
});

test('placeship001: horizontal', () => {
  const x = Gameboard();
  x.placeShip(9, 8, 'horizontal', Ship(2, 'boat'));
  expect(x.myBoard[9][8]).toBe('0boat');
  expect(x.myBoard[9][9]).toBe('1boat');
});

test('placeship001: vertical', () => {
  const x = Gameboard();
  x.placeShip(8, 9, 'vertical', Ship(2, 'boat'));
  expect(x.myBoard[8][9]).toBe('0boat');
  expect(x.myBoard[9][9]).toBe('1boat');
});

test('recieveAttack: miss', () => {
  const x = Gameboard();
  x.placeShip(0, 0, 'horizontal', Ship(2, 'boat'));
  expect(x.receiveAttack(1, 1)).toBe(false);
  expect(x.enemyGuesses[1][1]).toBe(false);
});

test('recieveAttack: hit', () => {
  const x = Gameboard();
  x.placeShip(0, 0, 'horizontal', Ship(2, 'boat'));
  expect(x.receiveAttack(0, 0)).toBe(true);
  expect(x.enemyGuesses[0][0]).toBe(true);
  expect(x.myBoard[0][0]).toBe(false);
});

test('allSunk: false', () => {
  const x = Gameboard();
  const boat = Ship(2, 'boat');
  x.placeShip(0, 0, 'horizontal', boat);
  x.receiveAttack(0, 0);
  expect(x.allSunk()).toBe(false);
});

test('allSunk: true', () => {
  const x = Gameboard();
  const boat = Ship(2, 'boat');
  x.placeShip(9, 8, 'horizontal', boat);
  x.receiveAttack(9, 8);
  x.receiveAttack(9, 9);
  expect(x.allSunk()).toBe(true);
});
