/* Game configuration variables ========================*/
const sideLength = 3;

/* Game state variables  ===============================*/
const playerObj = {
  x: true, // X goes first
  o: false,
};
const board = {};

/* Game state helper functions  ========================*/

// Sets board to 'false' at every cell
const initialize = function(board, player) {
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      board[`r${i + 1}c${j + 1}`] = false;
    }
  }
}
initialize(board, playerObj);

const getPlayer = function(obj) {
  let currPlayer;
  if (obj.x) {
    currPlayer = 'X';
  } else {
    currPlayer = 'O';
  }
  obj.x = !obj.x;
  obj.o = !obj.o;
  return currPlayer;
}

const renderWinMessage = function(player) {
  const header = document.getElementsByClassName('win');
  header[0].innerHTML = `Player ${player} is the winner!`;
}

/* Create tic tac toe html table ===================*/

// Renders square table of specified sideLength
// Each cell has id tag specifying row, col in form r?c?
const renderTable = function() {
  const tables = document.getElementsByTagName('table');
  const table = tables[0];
  for (let i = 0; i < sideLength; i++) {
    const row = document.createElement('tr');
    table.appendChild(row);
    for (let j = 0; j < sideLength; j++) {
      const cell = document.createElement('td');
      cell.setAttribute('id', `r${i + 1}c${j + 1}`);
      row.appendChild(cell);
    }
  }
}
renderTable();

/* Event Listeners =================================*/

// On table click, update cell, if valid
const table = document.getElementsByTagName('table');
table[0].addEventListener('click', (event) => {
  if (event.target.innerHTML === '') { // space not used yet
      if (!isWin()) {
        currPlayer = getPlayer(playerObj);
        event.target.innerHTML = currPlayer;
        board[event.target.id] = true;
        if (isWin()) {
          renderWinMessage(currPlayer);
        }
      }
    }
});

// On reset button click, refresh page
const button = document.getElementsByTagName('button');
button[0].addEventListener('click', (event) => {
  window.location.reload();
});

/* Win Logic ======================================*/

const isWin = function() {
  let x = 0;
  let o = 0;
  let counter = 0;
  const cellObj = {};

  const cells = document.getElementsByTagName('td');

  // for (let cell of cells) {
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
        cellObj[`r${i+1}c${j+1}`] = cells[counter];
        counter++;
      }
    }

  // check rows
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      if (cellObj[`r${i + 1}c${j + 1}`].innerHTML === 'X') {
        x++;
      } else if (cellObj[`r${i + 1}c${j + 1}`].innerHTML === 'O') {
        o++;
      }
    }
    if (x === sideLength || o === sideLength) {
      return true;
    } else {
      x = 0;
      o = 0;
    }
  }
  // check cols
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      if (cellObj[`r${j + 1}c${i + 1}`].innerHTML === 'X') {
        x++;
      } else if (cellObj[`r${j + 1}c${i + 1}`].innerHTML === 'O') {
        o++;
      }
    }
    if (x === sideLength || o === sideLength) {
      return true;
    } else {
      x = 0;
      o = 0;
    }
  }

  // check diags
  for (var i = 0; i < sideLength; i++) {
      if (cellObj[`r${i + 1}c${i + 1}`].innerHTML === 'X') {
        x++;
      } else if (cellObj[`r${i + 1}c${i + 1}`].innerHTML === 'O') {
        o++;
      }
  }
  if (x === sideLength || o === sideLength) {
    return true;
  } else {
    x = 0;
    o = 0;
  }

  return false;
};