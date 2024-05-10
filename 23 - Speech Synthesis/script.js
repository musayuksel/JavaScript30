const WELCOME_MSG = 'Hello! I loved this... 👍';

const synth = window.speechSynthesis;
const speechRequest = new SpeechSynthesisUtterance(WELCOME_MSG);

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];

const updateVoicesDropdown = () => {
  const voicesOptions = voices
    .filter((voice) => voice.lang.includes('en'))
    .map((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;

      return option;
    });

  voicesDropdown.append(...voicesOptions);
};

const loadVoices = () => {
  voices = synth.getVoices();
  updateVoicesDropdown();
};

const resetSpeak = (isSpeakImmediate = true) => {
  synth.cancel();
  isSpeakImmediate && synth.speak(speechRequest);
};

const setNewVoice = (e) => {
  const selectedVoiceIndex = +e.target.value;
  speechRequest.voice = voices[selectedVoiceIndex];

  resetSpeak();
};

const updateOptions = (e) => {
  //RATE, PITCH, TEXT
  const { name, value } = e.target;
  speechRequest[name] = value;

  resetSpeak();
};

options.forEach((option) => {
  option.addEventListener('change', updateOptions);
});

voicesDropdown.addEventListener('change', setNewVoice);
speakButton.addEventListener('click', resetSpeak);
stopButton.addEventListener('click', () => resetSpeak(false));

// in Google Chrome the voices are not ready on page load
if ('onvoiceschanged' in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}
