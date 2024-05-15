const displayTimerEl = document.querySelector('.display__time-left');
const displayEndTimeEl = document.querySelector('.display__end-time');

const timerButtons = document.querySelectorAll('[data-time');
const minuteInputForm = document.querySelector('#custom');

const counterEvent = {
  countdownInterval: null,
};

function startTimer(second = 0) {
  //clear previous ones
  clearInterval(counterEvent.countdownInterval);
  const now = Date.now();

  const finishTime = now + second * 1000;
  displayEndTime(finishTime);

  displaySecondLeft(second); //initial timer

  counterEvent.countdownInterval = setInterval(() => {
    const secondLeft = Math.round((finishTime - Date.now()) / 1000);

    if (secondLeft <= 0) {
      clearInterval(counterEvent.countdownInterval);
    }
    displaySecondLeft(secondLeft);
  }, 1000);
}

function convertTimeToISO(seconds) {
  const date = new Date(null);
  date.setSeconds(seconds);

  return date.toISOString().substring(14, 19);
}

function displaySecondLeft(second) {
  const formattedTime = convertTimeToISO(second);
  displayTimerEl.textContent = formattedTime;
  console.log();
}

function displayEndTime(endTime) {
  const timeFormat = new Date(endTime);
  const hour = timeFormat.getHours();
  const min = timeFormat.getMinutes();

  displayEndTimeEl.textContent = `Be Back At ${hour}:${min}`;
}

minuteInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputMinute = e.target.querySelector("[name='minutes']").value;
  const inputSec = inputMinute * 60;
  startTimer(inputSec);
});

timerButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    startTimer(e.target.dataset.time);
  })
);

displaySecondLeft(0);
