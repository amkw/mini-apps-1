/* Game configuration variables ========================*/
const sideLength = 3;

/* Game state variables  ===============================*/
const playerObj = {
  x: true, // X goes first
  o: false,
};
const board = {};

/* Game state helps functions  =========================*/

// Sets board to 'false' at every cell
var initialize = function(board, player) {
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      board[`r${i + 1}c${j + 1}`] = false;
    }
  }
}
initialize(board, playerObj);

var getPlayer = function(obj) {
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

// Add click event listeners to tic tac toe table
const table = document.getElementsByTagName('table');
table[0].addEventListener('click', (event) => {
  if (event.target.innerHTML === '') { // space not used yet
      if (!isWin()) {
        event.target.innerHTML = getPlayer(playerObj);
        board[event.target.id] = true;
        if (isWin()) {
          alert('Winner!');
        }
      }
    }
});
// const cells = document.getElementsByTagName('td');

// for (let cell of cells) {
//   cell.addEventListener('click', (event) => {
//     if (cell.innerHTML === '') { // space not used yet
//       if (!isWin()) {
//         cell.innerHTML = getPlayer(playerObj);
//         if (isWin()) {
//           alert('Winner!');
//         }
//       }
//     }
//   });
// }

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

/* Reset Game ======================================*/
const button = document.getElementsByTagName('button');
button[0].addEventListener('click', (event) => {
  window.location.reload();
});