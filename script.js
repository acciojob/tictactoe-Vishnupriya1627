//your JS code here. If required.
const submit = document.querySelector("#submit");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const message = document.querySelector(".message");
const grid = document.querySelector(".grid");
const cell = document.querySelectorAll(".cell");
let player1 = "";
let player2 = "";
let val = "x";
let player = "";
let gameOver = false;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

submit.addEventListener("click", onSubmitted);

function onSubmitted(e) {
  e.preventDefault();
  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;
  console.log(player1, player2);
  player = player1;
  form.style.display = "none";
  message.innerHTML = `${player}, you're up!!`;
  grid.style.display = "grid";
  cleargrid();
}

function cleargrid() {
  for (const element of cell) {
    element.innerHTML = "";
  }
}

document.addEventListener("click", function (e) {
  if (gameOver) return;
  if (e.target.classList.contains("cell")) {
    if (e.target.innerHTML !== "") return;
    e.target.innerHTML = val;
    if (checkWinner()) {
      gameOver = true;
      return;
    }

    if (checkTie()) {
      gameOver = true;
      message.innerHTML = "It's a tie!";
      return;
    }
    val = val == "x" ? "o" : "x";
    player = player == player1 ? player2 : player1;
    message.innerHTML = `${player}, you're up!!`;
  }
});

function checkWinner() {
  for (const combo of winningCombinations) {
    const a = cell[combo[0]].innerHTML;
    const b = cell[combo[1]].innerHTML;
    const c = cell[combo[2]].innerHTML;

    if (a !== "" && a === b && b === c) {
      message.innerHTML = `${player}, congratulations you won!`;
      return true;
    }
  }
  return false;
}

function checkTie(){

    for(const element of cell){

        if(element.innerHTML === ''){
            return false;
        }

    }

    return true;
}