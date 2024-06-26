const ANIMATION_CLASS_NAME = '.key';
const PLAYING_ANIMATION_CLASS_NAME = 'playing';
const TRANSITION_END_ANIMATION_EVENT = 'transitionend';
const TRANSITION_EVENT_PROPERTY = 'transform';

const playKeySound = (keyAudio) => {
  keyAudio.currentTime = 0;
  keyAudio.play();
};

const playKeyAnimation = (keyElement) => {
  keyElement.classList.add(PLAYING_ANIMATION_CLASS_NAME);
};

const handleKeyDown = (event) => {
  const keyCode = event.keyCode;

  const keyAudio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!keyAudio) return;
  playKeySound(keyAudio);
  playKeyAnimation(keyElement);
};

const clearAnimationsAfterPlay = () => {
  document
    .querySelector('.keys')
    .addEventListener(TRANSITION_END_ANIMATION_EVENT, (event) => {
      if (event.propertyName === TRANSITION_EVENT_PROPERTY) {
        event.target.classList.remove(PLAYING_ANIMATION_CLASS_NAME);
      }
    });
};

const onStart = () => {
  window.addEventListener('keydown', handleKeyDown);
  clearAnimationsAfterPlay();
};

onStart();
