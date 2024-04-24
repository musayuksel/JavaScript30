const runClock = (secondHand, minuteHand, hourHand) => {
  const currentTime = new Date();

  const secondDeg = currentTime.getSeconds() * 6 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg) scaleY(0.5)`;

  const minuteDeg = currentTime.getMinutes() * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)  scaleX(0.75)`;

  const hourDeg = (currentTime.getHours() % 12) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg) scaleX(0.5)`;
  console.log({ hourDeg, minuteDeg, secondDeg });
};

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
setInterval(() => runClock(secondHand, minuteHand, hourHand), 1000);
