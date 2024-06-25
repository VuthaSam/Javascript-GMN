'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Winner';
document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 9;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
*/

let number = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const checking = Number(document.querySelector('.guess').value);
  console.log(checking, typeof checking);

  if (!checking) {
    // document.querySelector('.message').textContent = 'You guess nothing.';
    displayMessage('You guess nothing.');
  } else if (checking === number) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (checking !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   checking > number ? 'Too high' : 'Too low';
      displayMessage(checking > number ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game.';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (checking > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (checking < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.floor(Math.random() * 21);
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
