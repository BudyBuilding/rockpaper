const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const rockrand = document.querySelector(".rock-random");
const paperrand = document.querySelector(".paper-random");
const scissorsrand = document.querySelector(".scissors-random");

const bottombutton = document.querySelectorAll(".bottom-button");

const message = document.querySelector(".message");
const point = document.querySelector(".points");

let comppoint = 0;
let playerpoint = 0;

point.innerHTML = playerpoint + "/" + comppoint;

let playerChoice = "rock";

rock.addEventListener("click", () => {
  playerChoice = "rock";
  startGame();
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  startGame();
});

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  startGame();
});

const strings = ["rock", "paper", "scissors"];
const buttons = [rockrand, paperrand, scissorsrand];

const computerChoice = getRandomString(strings);

function getRandomString(stringsArray) {
  const randomIndex = Math.floor(Math.random() * stringsArray.length);
  return stringsArray[randomIndex];
}
/////////////////////////
function startGame() {
  disablebuttons();
  message.innerHTML = "";
  console.log("it was pressed");

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      buttons[i % 3].classList.remove("hidden");
      setTimeout(() => {
        buttons[i % 3].classList.add("hidden");
      }, 100);
    }, i * 200); // Adjust the delay time as needed
  }

  setTimeout(() => {
    const computerChoice = getRandomString(strings);
    const classs = "." + computerChoice + "-random";
    const comp = document.querySelector(classs);

    comp.classList.remove("hidden");

    // Game logic conditions
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      gamewin();
    } else if (playerChoice === computerChoice) {
      gametie();
    } else {
      gamelose();
    }

    enablebuttons();
  }, 2000); // Adjust the delay before showing the computer's choice
}

/////////////////////////
function enablebuttons() {
  bottombutton.forEach((button) => {
    button.classList.remove("disabled");
  });
}

function disablebuttons() {
  bottombutton.forEach((button) => {
    button.classList.add("disabled");
  });
}

function gamewin() {
  playerpoint++;
  point.innerHTML = playerpoint + "/" + comppoint;
  message.innerHTML = "You won!";
  enablebuttons();
}

function gametie() {
  message.innerHTML = "It's a tie!";
  enablebuttons();
}

function gamelose() {
  comppoint++;
  point.innerHTML = playerpoint + "/" + comppoint;
  message.innerHTML = "You lost!";
  enablebuttons();
}

// if (
//   (playerChoice === "rock" && computerChoice === "scissor") ||
//   (playerChoice === "scissor" && computerChoice === "paper") ||
//   (playerChoice === "paper" && computerChoice === "parockper")
// ) {
//   gamewin();
// }

// if (
//   (playerChoice === "rock" && computerChoice === "rock") ||
//   (playerChoice === "scissor" && computerChoice === "scissor") ||
//   (playerChoice === "paper" && computerChoice === "paper")
// ) {
//   gametie();
// }

// if (
//   (playerChoice === "rock" && computerChoice === "paper") ||
//   (playerChoice === "scissor" && computerChoice === "rock") ||
//   (playerChoice === "paper" && computerChoice === "scissor")
// ) {
//   gamelose();
// }
