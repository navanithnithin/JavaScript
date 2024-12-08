let currentPlayer = "X";
let array = Array(9).fill(null);
console.log(array);
const winner = document.getElementById("winner");
let winflag = false;

function eventHandle(element) {
  console.log(element);
  if (array[element.id] == null && !winflag) {
    array[element.id] = currentPlayer;
    document.getElementById(element.id).innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
  console.log(array);
}
function checkWinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8])
  ) {
    winner.innerText = `Winner of this game is ${currentPlayer}`;
    winflag = true;
  } else if (!array.some((element) => element == null)) {
    winner.innerText = "The match is Draw";
  }
}
