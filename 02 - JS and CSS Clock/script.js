const SECOND_HAND_SIZE = 1;
const MIN_HAND_SIZE = 0.75;
const HOUR_HAND_SIZE = 0.5;
const updateRotation = (hand, degrees, scale) => {
  hand.style.transform = `rotate(${degrees}deg)  scaleX(${scale})`;
};

const runClock = (secondHand, minuteHand, hourHand) => {
  const currentTime = new Date();

  let secondDeg = currentTime.getSeconds() * 6 + 90;
  updateRotation(secondHand, secondDeg, SECOND_HAND_SIZE);

  const minuteDeg = currentTime.getMinutes() * 6 + 90;
  updateRotation(minuteHand, minuteDeg, MIN_HAND_SIZE);

  const hourDeg = (currentTime.getHours() % 12) * 30 + 90;
  updateRotation(hourHand, hourDeg, HOUR_HAND_SIZE);
};

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => runClock(secondHand, minuteHand, hourHand), 1000);
