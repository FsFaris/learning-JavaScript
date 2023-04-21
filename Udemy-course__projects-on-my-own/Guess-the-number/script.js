'use strict';
const button = document.getElementsByClassName('check')[0];
const reset = document.getElementsByClassName('again')[0];
let input = document.getElementsByClassName('guess')[0];
let score = document.getElementsByClassName('score')[0];
let highscore = document.getElementsByClassName('highscore')[0];
let message = document.getElementsByClassName('message')[0];
let number = document.getElementsByClassName('number')[0];
let correctNumber = Math.floor(Math.random() * 20) + 1;
const body = document.querySelector('body');
console.log(correctNumber);
let rezultat = 20;

button.addEventListener('click', function () {
  if (input.value > correctNumber) {
    message.innerHTML = 'You are too high!';
    score.innerHTML = rezultat--;
  } else if (input.value < correctNumber) {
    message.innerHTML = 'You are too low!';
    score.innerHTML = rezultat--;
  } else {
    message.innerHTML = 'Correct number!';
    number.innerHTML = input.value;
    score.innerHTML = rezultat;
    highscore.innerHTML = rezultat;
    body.style.backgroundColor = '#60b347';
  }
});

let najboljiRezultat = 0;
if (score.innerHTML > najboljiRezultat) {
  najboljiRezultat = score.innerHTML;
}
highscore.innerHTML = najboljiRezultat;
localStorage.setItem('highscore', highscore);

reset.addEventListener('click', function () {
  input.value = '';
  rezultat = 20;
  score.innerHTML = rezultat;
  number.innerHTML = '?';
  message.innerHTML = 'Start guessing...';
  body.style.backgroundColor = '#222';
  correctNumber = Math.floor(Math.random() * 20) + 1;
});
