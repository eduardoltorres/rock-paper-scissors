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
}

backArrow.addEventListener('click', () => {
  resetScore();
  scoreBoard.classList.remove('active');
});
// function clearResult() {
  // clearTimeout(timer1);
  // let timer1 = setTimeout(() => resultMessage.innerHTML = "", 3000);
// }

function compareChoices(e) {
  e.preventDefault();

  let computerChoice = computerOptions[Math.floor(Math.random() * 3)].getAttribute('id');
  let userChoice = e.target.id;

  if (userChoice === 'r' && computerChoice === 'r') {
    console.log('tie');
    resultMessage.innerHTML = '👊🤷‍♂️👊';
    // clearResult();
  } else if (userChoice === 'r' && computerChoice === 'p') {
    console.log('user loses');
    score.computerScore += 1;
    resultMessage.innerHTML = '👊☠️🤚';
    // clearResult();
  } else if (userChoice === 'r' && computerChoice === 's') {
    console.log('user wins');
    score.userScore += 1;
    resultMessage.innerHTML = '👊⚡️✌️';
    // clearResult();
  } else if (userChoice === 'p' && computerChoice === 'r') {
    console.log('user wins');
    score.userScore += 1;
    resultMessage.innerHTML = '🤚⚡️👊';
    // clearResult();
  }  else if (userChoice === 'p' && computerChoice === 'p') {
    console.log('tie');
    resultMessage.innerHTML = '🤚🤷‍🤚';
    // clearResult();
  } else if (userChoice === 'p' && computerChoice === 's') {
    console.log('user loses');
    score.computerScore += 1;
    resultMessage.innerHTML = '🤚☠️✌️';
    // clearResult();
  } else if (userChoice === 's' && computerChoice === 'r') {
    console.log('user loses');
    score.computerScore += 1;
    resultMessage.innerHTML = '✌️☠️👊';
    // clearResult();
  } else if (userChoice === 's' && computerChoice === 'p') {
    console.log('user wins');
    score.userScore += 1;
    resultMessage.innerHTML = '✌️⚡️🤚';
    // clearResult();
  } else if (userChoice === 's' && computerChoice === 's') {
    console.log('tie');
    resultMessage.innerHTML = '✌️🤷‍✌️';
    // clearResult();
  }

  userScore.innerHTML = score.userScore;
  computerScore.innerHTML = score.computerScore;

  if (score.userScore === gameDuration || score.computerScore === gameDuration) {
    if (score.userScore === gameDuration) {
      resultMessage.innerHTML = '👑💪'
      // resetScore();
      // userScore.innerHTML = score.userScore;
      // computerScore.innerHTML = score.computerScore;
      setTimeout(() => {
        resetScore();
      }, 1500);
    } else if (score.computerScore === gameDuration) {
      resultMessage.innerHTML = '☹️👎'
      setTimeout(() => {
        resetScore();
      }, 1500);
    }
  }
}


// Interactivity
userOptions.forEach(val => val.addEventListener('click', compareChoices));