/* Game configuration variables ========================*/
const sideLength = 3;

/* Game state variables and initialization =============*/
const playerObj = {
  x: true, // X goes first
  o: false,
};
const board = {};

// Sets board to 'false' at every cell
const initialize = function(board, player) {
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      board[`r${i + 1}c${j + 1}`] = false;
    }
  }
}
initialize(board, playerObj);

/* Game state helper functions  ========================*/

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

// method updates both the DOM and app.js board state
// input: DOM element (clicked by user), currPlayer
const updateBoard = function(DOMelem, player) {
  DOMelem.innerHTML = player;
  board[DOMelem.id] = player;
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
        updateBoard(event.target, currPlayer);
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

  // check rows
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      if (board[`r${i + 1}c${j + 1}`] === 'X') {
        x++;
      } else if (board[`r${i + 1}c${j + 1}`] === 'O') {
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
  // check columns
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      if (board[`r${j + 1}c${i + 1}`] === 'X') {
        x++;
      } else if (board[`r${j + 1}c${i + 1}`] === 'O') {
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

  // check diagonals
  for (var i = 0; i < sideLength; i++) {
      if (board[`r${i + 1}c${i + 1}`] === 'X') {
        x++;
      } else if (board[`r${i + 1}c${i + 1}`] === 'O') {
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