// HTML Elements And Variables
const computerOptions = document.querySelectorAll('.players__computer > .choices > span');
const durationChoices = document.querySelectorAll('.initial-setup > .choices > li');
const computerScore   = document.querySelector('#score__computer');
const resultMessage   = document.querySelector('.message');
const userOptions     = document.querySelectorAll('.players__user > .choices > span');
const scoreBoard      = document.querySelector('.scoreboard');
const userScore       = document.querySelector('#score__user');
const backArrow       = document.querySelector('#back-arrow');

let score = { userScore: 0, computerScore: 0 };
let gameDuration;

// Interactivity
durationChoices.forEach(val => {
  val.addEventListener('click', () => {
    gameDuration = Number(val.getAttribute('id'));
    scoreBoard.classList.add('active');
  });
});

backArrow.addEventListener('click', () => {
  resetScore();
  scoreBoard.classList.remove('active');
});

userOptions.forEach(val => val.addEventListener('click', compareChoices));

// Functionality
function compareChoices(e) {
  e.preventDefault();

  let computerChoice = computerOptions[Math.floor(Math.random() * 3)].getAttribute('id');
  let userChoice = e.target.id;

  if (userChoice === 'r' && computerChoice === 'r') {
    resultMessage.innerHTML = '👊🤷‍♂️👊';
  } else if (userChoice === 'r' && computerChoice === 'p') {
    score.computerScore += 1;
    resultMessage.innerHTML = '👊☠️🤚';
  } else if (userChoice === 'r' && computerChoice === 's') {
    score.userScore += 1;
    resultMessage.innerHTML = '👊⚡️✌️';
  } else if (userChoice === 'p' && computerChoice === 'r') {
    score.userScore += 1;
    resultMessage.innerHTML = '🤚⚡️👊';
  }  else if (userChoice === 'p' && computerChoice === 'p') {
    resultMessage.innerHTML = '🤚🤷‍🤚';
  } else if (userChoice === 'p' && computerChoice === 's') {
    score.computerScore += 1;
    resultMessage.innerHTML = '🤚☠️✌️';
  } else if (userChoice === 's' && computerChoice === 'r') {
    score.computerScore += 1;
    resultMessage.innerHTML = '✌️☠️👊';
  } else if (userChoice === 's' && computerChoice === 'p') {
    score.userScore += 1;
    resultMessage.innerHTML = '✌️⚡️🤚';
  } else if (userChoice === 's' && computerChoice === 's') {
    resultMessage.innerHTML = '✌️🤷‍✌️';
  }

  userScore.innerHTML = score.userScore;
  computerScore.innerHTML = score.computerScore;
  endGame();
}

function endGame() {
  if (score.userScore === gameDuration) {
    userOptions.forEach(val => val.removeEventListener('click', compareChoices));
    resultMessage.innerHTML = '👑💪'
    setTimeout(() => {
      resetScore();
    }, 1500);
  } else if (score.computerScore === gameDuration) {
    userOptions.forEach(val => val.removeEventListener('click', compareChoices));
    resultMessage.innerHTML = '🙁👎'
    setTimeout(() => {
      resetScore();
    }, 1500);
  }
}

function resetScore() {
  score = { userScore: 0, computerScore: 0 };
  userScore.innerHTML = score.userScore;
  computerScore.innerHTML = score.computerScore;
  resultMessage.innerHTML = '';
  userOptions.forEach(val => val.addEventListener('click', compareChoices));
}