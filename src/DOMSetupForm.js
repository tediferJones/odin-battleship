const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');
const DOMDisplayController = require('./DOMDisplayController');

const DOMSetupForm = () => {
  function makeShipInput(player, shipName) {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('shipInput');

    const label = document.createElement('div');
    label.textContent = shipName;
    resultDiv.appendChild(label);

    const rowSelectorLabel = document.createElement('label');
    rowSelectorLabel.setAttribute('for', `${player}${shipName}RowSelector`);
    rowSelectorLabel.textContent = 'Row #:';
    resultDiv.appendChild(rowSelectorLabel);

    const rowSelectorInput = document.createElement('input');
    rowSelectorInput.setAttribute('id', `${player}${shipName}RowSelector`);
    rowSelectorInput.setAttribute('name', `${player}${shipName}RowSelector`);
    rowSelectorInput.setAttribute('placeholder', 'number 0 - 9');
    resultDiv.appendChild(rowSelectorInput);

    const colSelectorLabel = document.createElement('label');
    colSelectorLabel.setAttribute('for', `${player}${shipName}ColSelector`);
    colSelectorLabel.textContent = 'Column #:';
    resultDiv.appendChild(colSelectorLabel);

    const colSelectorInput = document.createElement('input');
    colSelectorInput.setAttribute('id', `${player}${shipName}ColSelector`);
    colSelectorInput.setAttribute('name', `${player}${shipName}ColSelector`);
    colSelectorInput.setAttribute('placeholder', 'number 0 - 9');
    resultDiv.appendChild(colSelectorInput);

    const dirSelectorLabel = document.createElement('label');
    dirSelectorLabel.setAttribute('for', `${player}${shipName}DirSelector`);
    dirSelectorLabel.textContent = 'Direction: ';
    resultDiv.appendChild(dirSelectorLabel);

    const dirSelectorInput = document.createElement('select');
    dirSelectorInput.setAttribute('id', `${player}${shipName}DirSelector`);
    dirSelectorInput.setAttribute('name', `${player}${shipName}DirSelector`);

    const horizontalOption = document.createElement('option');
    horizontalOption.setAttribute('value', 'horizontal');
    horizontalOption.textContent = 'Horizontal';
    dirSelectorInput.appendChild(horizontalOption);

    const verticalOption = document.createElement('option');
    verticalOption.setAttribute('value', 'vertical');
    verticalOption.textContent = 'Vertical';
    dirSelectorInput.appendChild(verticalOption);

    resultDiv.appendChild(dirSelectorInput);

    return resultDiv;
  }

  const setupContainer = document.createElement('div');
  setupContainer.classList.add('setupContainer');

  const formContainer = document.createElement('form');
  formContainer.classList.add('formContainer');

  const player1Container = document.createElement('div');
  player1Container.classList.add('player1Container');

  const player1NameLabel = document.createElement('label');
  player1NameLabel.setAttribute('for', 'p1Name');
  player1NameLabel.textContent = 'Player 1 Name:';
  player1Container.appendChild(player1NameLabel);

  const player1NameInput = document.createElement('input');
  player1NameInput.setAttribute('id', 'p1Name');
  player1NameInput.setAttribute('placeholder', 'Your Name');
  player1NameInput.setAttribute('name', 'p1Name');
  player1Container.appendChild(player1NameInput);

  const ship1 = makeShipInput('p1', 'Carrier');
  player1Container.appendChild(ship1);

  const ship2 = makeShipInput('p1', 'Battleship');
  player1Container.appendChild(ship2);

  const ship3 = makeShipInput('p1', 'Cruiser');
  player1Container.appendChild(ship3);

  const ship4 = makeShipInput('p1', 'Submarine');
  player1Container.appendChild(ship4);

  const ship5 = makeShipInput('p1', 'Destroyer');
  player1Container.appendChild(ship5);

  formContainer.appendChild(player1Container);

  const player2Container = document.createElement('div');
  player2Container.classList.add('player2Container');

  const player2NameLabel = document.createElement('label');
  player2NameLabel.setAttribute('for', 'p2Name');
  player2NameLabel.textContent = 'Player 2 Name:';
  player2Container.appendChild(player2NameLabel);

  const player2NameInput = document.createElement('input');
  player2NameInput.setAttribute('id', 'p2Name');
  player2NameInput.setAttribute('name', 'p2Name');
  player2NameInput.setAttribute('placeholder', 'Your Name');
  player2Container.appendChild(player2NameInput);

  const p2Carrier = makeShipInput('p2', 'Carrier');
  player2Container.appendChild(p2Carrier);

  const p2Battleship = makeShipInput('p2', 'Battleship');
  player2Container.appendChild(p2Battleship);

  const p2Cruiser = makeShipInput('p2', 'Cruiser');
  player2Container.appendChild(p2Cruiser);

  const p2Submarine = makeShipInput('p2', 'Submarine');
  player2Container.appendChild(p2Submarine);

  const p2Destroyer = makeShipInput('p2', 'Destroyer');
  player2Container.appendChild(p2Destroyer);

  formContainer.appendChild(player2Container);

  setupContainer.appendChild(formContainer);

  startGameBtn = document.createElement('button');
  startGameBtn.textContent = 'Start Game';
  startGameBtn.addEventListener('click', () => {
    const myForm = document.querySelector('.formContainer');

    const player1 = Player(myForm.p1Name.value, Gameboard());
    const player2 = Player(myForm.p2Name.value, Gameboard());
    player1.currentTurn = true;

    player1.playerBoard.placeShip(Number(myForm.p1CarrierRowSelector.value), Number(myForm.p1CarrierColSelector.value), myForm.p1CarrierDirSelector.value, Ship(5, 'carrier'));
    player1.playerBoard.placeShip(Number(myForm.p1BattleshipRowSelector.value), Number(myForm.p1BattleshipColSelector.value), myForm.p1BattleshipDirSelector.value, Ship(4, 'battleship'));
    player1.playerBoard.placeShip(Number(myForm.p1CruiserRowSelector.value), Number(myForm.p1CruiserColSelector.value), myForm.p1CruiserDirSelector.value, Ship(3, 'cruiser'));
    player1.playerBoard.placeShip(Number(myForm.p1SubmarineRowSelector.value), Number(myForm.p1SubmarineColSelector.value), myForm.p1SubmarineDirSelector.value, Ship(3, 'submarine'));
    player1.playerBoard.placeShip(Number(myForm.p1DestroyerRowSelector.value), Number(myForm.p1DestroyerColSelector.value), myForm.p1DestroyerDirSelector.value, Ship(2, 'destroyer'));

    player2.playerBoard.placeShip(Number(myForm.p2CarrierRowSelector.value), Number(myForm.p2CarrierColSelector.value), myForm.p2CarrierDirSelector.value, Ship(5, 'carrier'));
    player2.playerBoard.placeShip(Number(myForm.p2BattleshipRowSelector.value), Number(myForm.p2BattleshipColSelector.value), myForm.p2BattleshipDirSelector.value, Ship(4, 'battleship'));
    player2.playerBoard.placeShip(Number(myForm.p2CruiserRowSelector.value), Number(myForm.p2CruiserColSelector.value), myForm.p2CruiserDirSelector.value, Ship(3, 'cruiser'));
    player2.playerBoard.placeShip(Number(myForm.p2SubmarineRowSelector.value), Number(myForm.p2SubmarineColSelector.value), myForm.p2SubmarineDirSelector.value, Ship(3, 'submarine'));
    player2.playerBoard.placeShip(Number(myForm.p2DestroyerRowSelector.value), Number(myForm.p2DestroyerColSelector.value), myForm.p2DestroyerDirSelector.value, Ship(2, 'destroyer'));

    document.querySelector('.setupContainer').remove();

    DOMDisplayController(player1, player2);
  });
  setupContainer.appendChild(startGameBtn);

  document.querySelector('#content').appendChild(setupContainer);
};

module.exports = DOMSetupForm;
