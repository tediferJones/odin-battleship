import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

function gameLoop() {
  // this loop should create 2 players and their gameboards, and then start a loop that switches
  // turns between the players until all of someone's ships are sunk

  // there should be no new functions required in this document, only use object methods

  const player1 = Player('p1', Gameboard());
  const player2 = Player('p2', Gameboard());

  let currentTurn = player1;
  let winner = null;

  // NEED TO PLACE SHIPS BEFORE GAME STARTS

  player1.playerBoard.placeShip(0, 0, 'horizontal', Ship(2, 'destroyer'));

  while (winner === null) {
    if (currentTurn === player1) {
      // let player 1 call out an attack
      currentTurn = player2;
    } else if (currentTurn === player2) {
      // let player 2 call out an attack
      currentTurn = player1;
    }
    // check both player boards, if one is 'fully sunk'
  }
}

gameLoop();

// Generate and place ships for players
// figure out turn logic
// consider making a player method that manages the turn events
// also need to make a simple computerPlay method for player
//    - need simple way for computer to determine computer player or human player
//    - if computer player, use computerPlay method

// ship names:
// carrier (5)
// battleship (4)
// cruiser (3)
// submarine (3)
// destroyer (2)
