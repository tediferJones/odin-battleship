import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import DOMDisplayController from './DOMDisplayController';

function gameLoop() {
  // this loop should create 2 players and their gameboards, and then start a loop that switches
  // turns between the players until all of someone's ships are sunk

  // there should be no new functions required in this document, only use object methods

  const player1 = Player('p1', Gameboard());
  const player2 = Player('p2', Gameboard());

  let currentTurn = player1;
  let winner = null;

  // NEED TO PLACE SHIPS BEFORE GAME STARTS
  // simpilify this with a loop, need to generate the ships, but allow user to place them
  player1.playerBoard.placeShip(0, 0, 'horizontal', Ship(5, 'carrier'));
  player1.playerBoard.placeShip(2, 2, 'horizontal', Ship(4, 'battleship'));
  player1.playerBoard.placeShip(4, 4, 'horizontal', Ship(3, 'cruiser'));
  player1.playerBoard.placeShip(6, 6, 'horizontal', Ship(3, 'submarine'));
  player1.playerBoard.placeShip(8, 8, 'horizontal', Ship(2, 'destroyer'));

  player2.playerBoard.placeShip(1, 5, 'horizontal', Ship(5, 'carrier'));
  player2.playerBoard.placeShip(3, 3, 'horizontal', Ship(4, 'battleship'));
  player2.playerBoard.placeShip(5, 1, 'horizontal', Ship(3, 'cruiser'));
  player2.playerBoard.placeShip(7, 6, 'horizontal', Ship(3, 'submarine'));
  player2.playerBoard.placeShip(9, 4, 'horizontal', Ship(2, 'destroyer'));

  DOMDisplayController(player1.playerBoard, player2.playerBoard);
  // console.log(player1.playerBoard);

  // receiveAttack will be attached to an event listener in the DOM,
  // that's how each turn should be taken
  // while (winner === null) {

  // if (winner === null) {
  //   if (currentTurn === player1) {
  //     player2.playerBoard.receiveAttack(0, 0);
  //     // console.log(player2.playerBoard.myShips);
  //     if (player2.playerBoard.allSunk()) {
  //       winner = player2;
  //     }
  //     currentTurn = player2;
  //   } else if (currentTurn === player2) {
  //     player1.playerBoard.receiveAttack(0, 0);
  //     if (player1.playerBoard.allSunk()) {
  //       winner = player1;
  //     }
  //     currentTurn = player1;
  //   }
  //   DOMDisplayController(player1.playerBoard, player2.playerBoard);
  //   // once you exit the while loop, declare winner, update the DOM
  // }
}

gameLoop();

// Generate and place ships for players
// Address ship overlap issue in placeShip
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

// SIMPLE DISPLAY FUNCTION

// for (const row in player1Gameboard.myBoard) {
//   const rows = document.createElement('div');
//   rows.classList.add('rows');
//   for (const col in player1Gameboard.myBoard[row]) {
//     // console.log(player1Gameboard.myBoard[row][col]);
//     const cell = document.createElement('div');
//     cell.classList.add('cell');
//     if (player1Gameboard.myBoard[row][col] === null) {
//       cell.classList.add('empty');
//     } else if (player1Gameboard.myBoard[row][col] === false) {
//       cell.classList.add('hit');
//     } else {
//       cell.classList.add('ship');
//     }
//     rows.appendChild(cell);
//   }
//   boardContainer.appendChild(rows); // allBoards.appendChild(rows);
// }
