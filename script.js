'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Initial conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = [0, 0];
let scores = [0, 0];
let activePlayer = 0;

const rollDice = function () {
  const d = Math.trunc(Math.random() * 6) + 1;
  console.log(d);
  diceEl.src = `dice-${d}.png`;
  diceEl.classList.remove('hidden');
  if (d !== 1) {
    currentScore[activePlayer] += d;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore[activePlayer];
  } else {
    currentScore[activePlayer] = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore[activePlayer];
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

const holdScore = function () {
  scores[activePlayer] += currentScore[activePlayer];
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore[activePlayer] = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore[activePlayer];
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
  currentScore = [0, 0];
  diceEl.classList.add('hidden');
  activePlayer = 0;
  if (!player0El.classList.contains('player--active')) {
    player0El.classList.add('player--active');
  }
  if (player1El.classList.contains('player--active')) {
    player1El.classList.remove('player--active');
  }
};

//Rolling dice
btnRoll.addEventListener('click', rollDice);

//Hold button
btnHold.addEventListener('click', holdScore);

//New Game button
btnNew.addEventListener('click', newGame);
