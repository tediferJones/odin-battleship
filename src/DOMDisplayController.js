const DOMDisplayController = (player1, player2) => {
  const idk = [
    player2.playerBoard.enemyGuesses,
    player1.playerBoard.enemyGuesses,
    player1.playerBoard.myBoard,
    player2.playerBoard.myBoard,
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

        if (player1.currentTurn && !player1.playerBoard.allSunk()) {
          if (idk[aBoard] === player2.playerBoard.enemyGuesses) {
            cell.addEventListener('click', () => {
              player2.playerBoard.receiveAttack(row, col);
              player1.currentTurn = false;
              player2.currentTurn = true;
              DOMDisplayController(player1, player2);
            });
          }
        }

        if (player2.currentTurn && !player2.playerBoard.allSunk()) {
          if (idk[aBoard] === player1.playerBoard.enemyGuesses) {
            cell.addEventListener('click', () => {
              player1.playerBoard.receiveAttack(row, col);
              player1.currentTurn = true;
              player2.currentTurn = false;
              DOMDisplayController(player1, player2);
            });
          }
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

  if (document.querySelector('.turnDialog')) {
    document.querySelector('.turnDialog').remove();
  }

  const turnDialog = document.createElement('div');
  turnDialog.classList.add('turnDialog');
  if (!player1.playerBoard.allSunk() && !player2.playerBoard.allSunk()) {
    if (player1.currentTurn) {
      turnDialog.textContent = `It's ${player1.name}'s turn`;
    } else if (player2.currentTurn) {
      turnDialog.textContent = `It's ${player2.name}'s turn`;
    }
  } else if (player1.playerBoard.allSunk()) {
    turnDialog.textContent = `The Winner Is ${player2.name}`;
  } else if (player2.playerBoard.allSunk()) {
    turnDialog.textContent = `The Winner Is ${player1.name}`;
  }
  document.querySelector('#content').appendChild(turnDialog);
};

module.exports = DOMDisplayController;

// consider labeling boards as 'playBoard' and 'guessBoard' to better control display colors
