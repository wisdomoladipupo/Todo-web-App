const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(board, player) {
  return winConditions.find((condition) =>
    condition.every((index) => board[index].textContent === player)
  );
}

let flag = 1;
let round = 1;

function HandleMove(index) {
  const buttons = Array.from(document.querySelectorAll(".ticbtns"));
  const currentPlayer = flag ? "x" : "0";

  buttons[index].textContent = currentPlayer;
  buttons[index].disabled = true;
  buttons[index].classList.add(currentPlayer === "x" ? "x_move" : "o_move");

  const winningCondition = checkWin(buttons, currentPlayer);

  if (winningCondition) {
    winningCondition.forEach((idx) => {
      buttons[idx].classList.add("win_color");
    });

    document.getElementById("print").innerHTML = `player ${
      flag ? "x" : "0"
    } won!`;
    setTimeout(resetBoard, 4000);
  } else if (buttons.every((btn) => btn.textContent !== "")) {
    document.getElementById("print").innerHTML = `it's is a tie`;
    setTimeout(resetBoard, 4000);
  } else {
    flag = 1 - flag;
    document.getElementById("print").innerHTML = `its player ${
      flag ? "x" : "0"
    } turn`;
  }
}

function resetBoard() {
  const buttons = Array.from(document.querySelectorAll(".ticbtns"));
  buttons.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
    btn.classList.remove("win_color", "x_move", "o_move");
  });
  round++;
  document.getElementById("round").innerHTML = `Round :${round}`;
  flag = 1;
  document.getElementById("print").innerHTML = `it's player x turn`;
}

const buttons = Array.from(document.querySelectorAll(".ticbtns"));
buttons.forEach((btns, index) =>
  btns.addEventListener("clcik", () => HandleMove(index))
);

document.getElementById("round").innerHTML = `Round :${round}`;
document.getElementById("print").innerHTML = `it's player x turn`;
