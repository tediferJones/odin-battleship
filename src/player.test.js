const Player = require('./player');

test('Player name', () => {
  x = Player('timmy');
  expect(x.name).toBe('timmy');
});
