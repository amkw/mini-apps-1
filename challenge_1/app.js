console.log(`dis gon be gud`);

// Variable that tracks whether current turn is for player1
var player1 = true;

// Add click event listeners to tic tac toe table
var cells = document.getElementsByTagName('td');

for (let cell of cells) {
  cell.addEventListener('click', (event) => {
    // toggle X vs O
    if (cell.innerHTML === '_____') { // space not used yet
      if(player1) {
        cell.innerHTML = '__X__';
        player1 = !player1;
      } else {
        cell.innerHTML = '__O__';
        player1 = !player1;
      }
    }
  })
};