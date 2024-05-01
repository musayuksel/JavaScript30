const videoPlayerContainer = document.querySelector('.player');
const video = videoPlayerContainer.querySelector('.viewer');
const playButton = videoPlayerContainer.querySelector('.toggle');

const skipButtons = videoPlayerContainer.querySelectorAll('[data-skip]');
const sliders = videoPlayerContainer.querySelectorAll('.player__slider');

const progressBar = videoPlayerContainer.querySelector('.progress__filled');
const progressBarContainer = videoPlayerContainer.querySelector('.progress');

//Play and stop
const togglePlay = () => {
  const isVideoPause = video.paused;
  isVideoPause ? video.play() : video.pause();
};

const updatePlayIcon = (event) => {
  const isVideoPause = event.target.paused;
  playButton.textContent = isVideoPause ? '►' : '❚ ❚';
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
playButton.addEventListener('click', togglePlay);

// Skip buttons
const handleSkip = (e) => (video.currentTime += +e.target.dataset.skip);

skipButtons.forEach((skipButton) =>
  skipButton.addEventListener('click', handleSkip)
);

// Sliders
const handleSliderChange = (e) => {
  const currentAttribute = e.target.name;
  const currentValue = +e.target.value;

  video[currentAttribute] = currentValue;
};

sliders.forEach((slider) =>
  slider.addEventListener('change', handleSliderChange)
);

// Progress bar
const updateProgressBar = () => {
  const currentProgress = Math.round(
    (video.currentTime / video.duration) * 100
  );

  progressBar.style.flexBasis = `${currentProgress}%`;
};

video.addEventListener('timeupdate', updateProgressBar);

// Progress bar drag
let isDraggable = false;
const updateCurrentTime = (e) => {
  console.log({ isDraggable });

  video.currentTime =
    (e.offsetX / progressBarContainer.offsetWidth) * video.duration;
};

progressBarContainer.addEventListener('click', updateCurrentTime);

progressBarContainer.addEventListener('mousedown', () => (isDraggable = true));
progressBarContainer.addEventListener('mouseup', () => (isDraggable = false));
progressBarContainer.addEventListener(
  'mousemove',
  (e) => isDraggable && updateCurrentTime(e)
);
