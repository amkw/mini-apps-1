console.log(`dis gon be gud`);

// Variable that tracks whether current turn is for player1
let player1 = true;

// Add click event listeners to tic tac toe table
const cells = document.getElementsByTagName('td');

for (let cell of cells) {
  cell.addEventListener('click', (event) => {
    // toggle X vs O
    if (cell.innerHTML === '_____') { // space not used yet
      if(player1) {
        if (!isWin()) {
          cell.innerHTML = '__X__';
          player1 = !player1;
          if (isWin()) {
            alert('Winner!');
          }
        }
      } else {
        if (!isWin()) {
          cell.innerHTML = '__O__';
          player1 = !player1;
          if (isWin()) {
            alert('Winner!');
          }
        }
      }
    }
  });
}

const isWin = function() {
  let x = 0;
  let o = 0;
  let counter = 0;
  const cellObj = {};

  const cells = document.getElementsByTagName('td');
  const sideLength = 3;

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
      if (cellObj[`r${i + 1}c${j + 1}`].innerHTML === '__X__') {
        x++;
      } else if (cellObj[`r${i + 1}c${j + 1}`].innerHTML === '__O__') {
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
      if (cellObj[`r${j + 1}c${i + 1}`].innerHTML === '__X__') {
        x++;
      } else if (cellObj[`r${j + 1}c${i + 1}`].innerHTML === '__O__') {
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
      if (cellObj[`r${i + 1}c${i + 1}`].innerHTML === '__X__') {
        x++;
      } else if (cellObj[`r${i + 1}c${i + 1}`].innerHTML === '__O__') {
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

// Reset game
const button = document.getElementsByTagName('button');
button[0].addEventListener('click', (event) => {
  window.location.reload();
});