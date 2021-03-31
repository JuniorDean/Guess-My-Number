'use strict';
// console.log(document.querySelector('.label-highscore').textContent);

// document.querySelector('.message').textContent = ' Bitch !';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 19;
// document.querySelector('.number').textContent = 77;

// document.querySelector('.guess').value = 79;
// console.log(document.querySelector('.guess').value);

let numberGuess = Math.trunc(Math.random() * 20) + 1;
// Cela veut dire que le nombre magique sera entre 0 et 20

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // Quand l'input est vide
    document.querySelector('.message').textContent = ' Bitch !';

    // Quand le joueur gagne
  } else if (guess === numberGuess) {
    document.querySelector('.message').textContent = ' Correct';

    // NumberGuess a deviné
    document.querySelector('.number').textContent = numberGuess;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '80rem';

    // Quand le chiffre est supérieur
  } else if (guess > numberGuess) {
    if (score > 1 || score == 0) {
      document.querySelector('.message').textContent = ' Supérieur au nombre';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Vous avez perdu';
      document.querySelector('.score').textContent = 0;
    }
    // Quand le chiffre est inférieur
  } else if (guess < numberGuess) {
    if (score > 1 || score == 0) {
      document.querySelector('.message').textContent = ' Inférieur au nombre';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Vous avez perdu';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Bouton actualisé

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberGuess = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
