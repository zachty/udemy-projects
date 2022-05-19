'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//alternate solution to selecting current players and scores: these create an array of the elements that can then be accessed based on the current player
// const currents = document.querySelectorAll('.current-score');
// const players = document.querySelectorAll('.player');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//variables for game
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore = 0;
  activePlayer = activePlayer ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//clicking on roll dice button
btnRoll.addEventListener('click', function () {
  if (!playing) return; //button only works if game hasnt ended
  //create dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  //get current score element for active player
  const currentEl = document.getElementById(`current--${activePlayer}`);

  if (dice !== 1) {
    //rolled 2-6
    currentScore += dice;
    currentEl.textContent = currentScore;
  } else {
    //rolled a 1
    switchPlayer();
  }
});

//clicking on hold button
btnHold.addEventListener('click', function () {
  if (!playing) return; //button only works if game hasnt ended

  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //winner of game logic
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else switchPlayer();
});

//when new game button is clicked
btnNew.addEventListener('click', function () {
  //remove winning player class, reset initial values, set playing to true
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  //reset initial values
  //set all items to 0 at once then playing to true
  activePlayer =
    currentScore =
    scores[0] =
    scores[1] =
    score0El.textContent =
    score1El.textContent =
    current0El.textContent =
    current1El.textContent =
      0;

  playing = true;

  //set player 1 to active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
