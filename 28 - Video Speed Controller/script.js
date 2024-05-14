const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

const MIN_SPEED = 0.5;
const MAX_SPEED = 4.0;

const mouseEvent = {
  isMouseDown: false,
};

function handleMove(e) {
  e.preventDefault();
  if (!mouseEvent.isMouseDown) return;

  const speedCursorPosition = e.pageY - this.offsetTop;
  const speedBarPercentage = speedCursorPosition / this.offsetHeight;

  const speedBarHeight = Math.round(speedBarPercentage * 100) + '%';
  speedBar.style.height = speedBarHeight;

  const playbackRate = speedBarPercentage * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;

  speedBar.textContent = `${playbackRate.toFixed(2)}x`;

  video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', () => {
  mouseEvent.isMouseDown = true;
});
speed.addEventListener('mouseup', () => {
  mouseEvent.isMouseDown = false;
});
speed.addEventListener('mouseleave', () => {
  mouseEvent.isMouseDown = false;
});

speed.addEventListener('mousemove', handleMove);
