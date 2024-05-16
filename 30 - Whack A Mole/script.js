const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.startGame');

const MIN_PEEP_MS = 500;
const MAX_PEEP_MS = 2000;
const GAME_TIME_MS = 10000;

const gameStates = {
  lastHole: -1,
  isTimeUp: false,
  score: 0,
};

const randomTime = (min = 300, max = 1300) =>
  Math.floor(Math.random() * (max - min) + min);

const randomHoleElement = () => {
  const newHole = holes[Math.floor(Math.random() * holes.length)];
  if (newHole === gameStates.lastHole) {
    return randomHoleElement();
  }
  gameStates.lastHole = newHole;
  return newHole;
};

const peepMole = () => {
  const currentHole = randomHoleElement();
  const holeTime = randomTime();

  currentHole.classList.add('up');

  setTimeout(() => {
    currentHole.classList.remove('up');
    // if there is time, peep the next mole
    !gameStates.isTimeUp && peepMole();
  }, holeTime);
};

moles.forEach((mole) =>
  mole.addEventListener('click', (e) => {
    if (!e.isTrusted) return; // fake click

    e.target.parentElement.classList.remove('up');
    gameStates.score++;
    scoreBoard.textContent = gameStates.score;
  })
);

const startGame = () => {
  scoreBoard.textContent = 0;
  gameStates.isTimeUp = false;
  gameStates.score = 0;

  startBtn.disabled = true;

  peepMole();

  setTimeout(() => {
    gameStates.isTimeUp = true;
    startBtn.disabled = false;
  }, GAME_TIME_MS);
};
