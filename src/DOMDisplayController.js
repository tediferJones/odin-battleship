const DOMDisplayController = (player1Gameboard, player2Gameboard) => {
  // console.log(player1Gameboard);
  // console.log(player2Gameboard);
  const idk = [
    player2Gameboard.enemyGuesses,
    player1Gameboard.enemyGuesses,
    player1Gameboard.myBoard,
    player2Gameboard.myBoard,
  ];

  if (document.querySelector('.allBoards')) {
    document.querySelector('.allBoards').remove();
  }

  const allBoards = document.createElement('div');
  allBoards.classList.add('allBoards');

  for (const aBoard in idk) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');

    for (const row in idk[aBoard]) {
      const rows = document.createElement('div');
      rows.classList.add('rows');
      for (const col in idk[aBoard][row]) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // P1 guess board
        if (idk[aBoard] === player2Gameboard.enemyGuesses) {
          cell.addEventListener('click', () => {
            console.log(row, col);
            player2Gameboard.receiveAttack(row, col);
            DOMDisplayController(player1Gameboard, player2Gameboard);
          });
        }

        // P2 guess board
        if (idk[aBoard] === player1Gameboard.enemyGuesses) {
          cell.addEventListener('click', () => {
            console.log(row, col);
          });
        }

        if (idk[aBoard][row][col] === null) {
          cell.classList.add('empty');
        } else if (idk[aBoard][row][col] === false) {
          cell.classList.add('hit');
        } else if (idk[aBoard][row][col] === true) {
          cell.classList.add('goodGuess');
        } else {
          cell.classList.add('ship');
        }
        rows.appendChild(cell);
      }
      boardContainer.appendChild(rows);
    }
    allBoards.appendChild(boardContainer);
  }
  document.querySelector('#content').appendChild(allBoards);
};

module.exports = DOMDisplayController;

// need seperate guess boards from myBoards
// if guessBoard, add event listener for receiveAttack(row, col)
