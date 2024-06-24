'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Winner';
document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 9;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
*/
const number = Math.floor(Math.random() * 21);
console.log(number);
document.querySelector('.number').textContent = number;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const checking = Number(document.querySelector('.guess').value);
  console.log(checking, typeof checking);

  if (!checking) {
    document.querySelector('.message').textContent = 'You guess nothing.';
  } else if (checking === number) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (checking > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (checking < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
