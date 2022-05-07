'use strict';
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);

let score = 20;
// document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  //   console.log(guessNum);

  if (secretNum === guessNum) {
    document.querySelector('.message').textContent =
      'You have guessed it right!';
    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (!guessNum) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNum < secretNum ? '📉 Too Low' : '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
});
