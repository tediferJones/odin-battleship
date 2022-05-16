const Ship = (length, name) => ({
  // remove length arg, let the name dictate the length
  length,
  name,
  damage: new Array(length).fill(false),
  sunk: false,
  hit(location) {
    if (this.sunk === false) {
      this.damage[location] = true;
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
