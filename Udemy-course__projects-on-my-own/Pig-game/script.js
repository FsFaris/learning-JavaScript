'use strict';
const btnNew = document.getElementsByClassName('btn')[0];
const btnRoll = document.getElementsByClassName('btn')[1];
const btnHold = document.getElementsByClassName('btn')[2];
let dice = document.getElementsByClassName('dice')[0];
const player1 = document.getElementsByClassName('player')[0];
const player2 = document.getElementsByClassName('player')[1];
let activePlayer = document.getElementsByClassName('player--active');
let radnomNumber1;
let radnomNumber2;
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');
let kurent1 = 0;
let kurent2 = 0;
let skor1 = 0;
let skor2 = 0;

btnRoll.addEventListener('click', () => {
  //player1
  if (player1.classList.contains('player--active')) {
    radnomNumber1 = Math.floor(Math.random() * 6 + 1);
    console.log(radnomNumber1);
    if (radnomNumber1 === 1) {
      dice.src = 'dice-1.png';
      kurent1 = 0;
      current1.innerHTML = kurent1;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (radnomNumber1 === 2) {
      dice.src = 'dice-2.png';
      kurent1 += 2;
      current1.innerHTML = kurent1;
    } else if (radnomNumber1 === 3) {
      dice.src = 'dice-3.png';
      kurent1 += 3;
      current1.innerHTML = kurent1;
    } else if (radnomNumber1 === 4) {
      dice.src = 'dice-4.png';
      kurent1 += 4;
      current1.innerHTML = kurent1;
    } else if (radnomNumber1 === 5) {
      dice.src = 'dice-5.png';
      kurent1 += 5;
      current1.innerHTML = kurent1;
    } else if (radnomNumber1 === 6) {
      dice.src = 'dice-6.png';
      kurent1 += 6;
      current1.innerHTML = kurent1;
      return;
    }
    kurent2 = 0;
    radnomNumber2 = '';
    current2.innerHTML = 0;
  } //player2
  else if (player2.classList.contains('player--active')) {
    radnomNumber2 = Math.floor(Math.random() * 6 + 1);
    console.log(radnomNumber2);
    if (radnomNumber2 === 1) {
      dice.src = 'dice-1.png';
      kurent2 = 0;
      current2.innerHTML = kurent2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    } else if (radnomNumber2 === 2) {
      dice.src = 'dice-2.png';
      kurent2 += 2;
      current2.innerHTML = kurent2;
    } else if (radnomNumber2 === 3) {
      dice.src = 'dice-3.png';
      kurent2 += 3;
      current2.innerHTML = kurent2;
    } else if (radnomNumber2 === 4) {
      dice.src = 'dice-4.png';
      kurent2 += 4;
      current2.innerHTML = kurent2;
    } else if (radnomNumber2 === 5) {
      dice.src = 'dice-5.png';
      kurent2 += 5;
      current2.innerHTML = kurent2;
    } else if (radnomNumber2 === 6) {
      dice.src = 'dice-6.png';
      kurent2 += 6;
      current2.innerHTML = kurent2;
    }
    kurent1 = 0;
    radnomNumber1 = '';
    current1.innerHTML = 0;
  }
});
btnHold.addEventListener('click', function () {
  //player1
  if (player1.classList.contains('player--active')) {
    skor1 += kurent1;
    score1.innerHTML = skor1;
    if (skor1 >= 100) {
      name1.innerHTML = 'WINNER!';
      name2.innerHTML = 'LOSER!';
      btnRoll.disabled = true;
      btnHold.disabled = true;
      dice.classList.add('hidden');
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      current1.innerHTML = 0;
    }
  }
  //player2
  else {
    skor2 += kurent2;
    score2.innerHTML = skor2;
    if (skor2 >= 100) {
      name2.innerHTML = 'WINNER!';
      name1.innerHTML = 'LOSER!';
      btnRoll.disabled = true;
      btnHold.disabled = true;
      dice.classList.add('hidden');
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      current2.innerHTML = 0;
    }
  }
});

btnNew.addEventListener('click', () => {
  radnomNumber1 = 0;
  radnomNumber2 = 0;
  kurent1 = 0;
  kurent2 = 0;
  skor1 = 0;
  skor2 = 0;
  current1.innerHTML = kurent1;
  current2.innerHTML = kurent2;
  score1.innerHTML = skor1;
  score2.innerHTML = skor2;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  name1.innerHTML = 'PLAYER 1';
  name2.innerHTML = 'PLAYER 2';
  btnRoll.disabled = false;
  btnHold.disabled = false;
  dice.classList.add('hidden');
});
