// HTML Elements
const userOptions = document.querySelectorAll('.user-player > .choices > span');
const computerOptions = document.querySelectorAll('.user-computer > .choices > span');
const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const resultMessage = document.querySelector('.message');
const durationChoices = document.querySelectorAll('.initialSetup > .choices > li');
const scoreBoard = document.querySelector('.scoreBoard');
const backArrow = document.querySelector('#back-arrow');
let gameDuration;
let score = { userScore: 0, computerScore: 0 };

// Functionality

durationChoices.forEach(val => {
  val.addEventListener('click', () => {
    gameDuration = Number(val.getAttribute('id'));
    scoreBoard.classList.add('active');
  });
});


function resetScore() {
  score = { userScore: 0, computerScore: 0 };
  userScore.innerHTML = score.userScore;
  computerScore.innerHTML = score.computerScore;
  resultMessage.innerHTML = '';
  userOptions.forEach(val => val.addEventListener('click', compareChoices));
}

backArrow.addEventListener('click', () => {
  resetScore();
  scoreBoard.classList.remove('active');
});

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

  if (score.userScore === gameDuration || score.computerScore === gameDuration) {
    if (score.userScore === gameDuration) {
      userOptions.forEach(val => val.removeEventListener('click', compareChoices));
      resultMessage.innerHTML = '👑💪'
      setTimeout(() => {
        resetScore();
      }, 1500);
    } else if (score.computerScore === gameDuration) {
      userOptions.forEach(val => val.removeEventListener('click', compareChoices));
      resultMessage.innerHTML = '☹️👎'
      setTimeout(() => {
        resetScore();
      }, 1500);
    }
  }
}


// Interactivity
userOptions.forEach(val => val.addEventListener('click', compareChoices));