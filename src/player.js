const Player = (name, playerBoard, type = 'person') => ({
  name,
  type,
  playerBoard,
  currentTurn: false,
});

module.exports = Player;
