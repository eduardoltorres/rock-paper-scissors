// HTML Elements
const userOptions = document.querySelectorAll('.user-player > .choices > span');
const computerOptions = document.querySelectorAll('.user-computer > .choices > span');
const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
let score = { userScore: 0, computerScore: 0 };

// Functionality

function resetValues() {
  score = { userScore: 0, computerScore: 0 };
}

function compareChoices(e) {
  let computerChoice = computerOptions[Math.floor(Math.random() * 3)].getAttribute('id');
  let userChoice = e.target.id;


  if (userChoice === 'r' && computerChoice === 'r') {
    console.log('tie');
  } else if (userChoice === 'r' && computerChoice === 'p') {
    console.log('user loses');
    score.computerScore += 1;
  } else if (userChoice === 'r' && computerChoice === 's') {
    console.log('user wins');
    score.userScore += 1;
    console.log(score);
  } else if (userChoice === 'p' && computerChoice === 'r') {
    console.log('user wins');
    score.userScore += 1;
  }  else if (userChoice === 'p' && computerChoice === 'p') {
    console.log('tie');
  } else if (userChoice === 'p' && computerChoice === 's') {
    console.log('user loses');
    score.computerScore += 1;
  } else if (userChoice === 's' && computerChoice === 'r') {
    console.log('user loses');
    score.computerScore += 1;
  } else if (userChoice === 's' && computerChoice === 'p') {
    console.log('user wins');
    score.userScore += 1;
  } else if (userChoice === 's' && computerChoice === 's') {
    console.log('tie');
  }

  userScore.innerHTML = score.userScore;
  computerScore.innerHTML = score.computerScore;

  if (score.userScore === 3 || score.computerScore === 3) {
    console.log('score is 3');
  }
}


// Interactivity
userOptions.forEach(val => val.addEventListener('click', compareChoices));