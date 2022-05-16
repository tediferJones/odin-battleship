const Ship = (length, name) => ({
  length,
  name,
  damage: new Array(length).fill(false),
  sunk: false,
  hit(location) {
    if (this.sunk === false) {
      this.damage[location - 1] = true;
      this.isSunk();
    }
  },
  isSunk() {
    if (!this.damage.includes(false)) {
      this.sunk = true;
    }
  },
});

module.exports = Ship;
