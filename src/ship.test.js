const Ship = require('./ship');

test('make ship with length 5', () => {
  expect(Ship(5).length).toBe(5);
});

test('correct damage arr', () => {
  expect(Ship(3).damage).toStrictEqual([false, false, false]);
});

test('check sunk status', () => {
  expect(Ship(1).sunk).toBe(false);
});

test('check hit function', () => {
  const idk = Ship(5);
  idk.hit(0);
  expect(idk.damage).toStrictEqual([true, false, false, false, false]);
  idk.hit(3);
  expect(idk.damage).toStrictEqual([true, false, false, true, false]);
});

test('check sunk function', () => {
  const idk = Ship(2);
  idk.hit(0);
  expect(idk.sunk).toBe(false);
  idk.hit(1);
  expect(idk.sunk).toBe(true);
});

test('check name attribute', () => {
  expect(Ship(5, 'destroyer').name).toBe('destroyer');
});
