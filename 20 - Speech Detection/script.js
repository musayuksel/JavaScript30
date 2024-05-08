window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let isStop = false;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-UK';

const wordsElement = document.querySelector('.words');

function createParagraph() {
  const p = document.createElement('p');
  wordsElement.appendChild(p);
  return p;
}

let currentParagraph = createParagraph();

recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  currentParagraph.textContent = transcript;

  if (e.results[0].isFinal) {
    if (transcript.includes('cats')) {
      const specialText = document.createElement('h2');
      specialText.innerText =
        '😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻';
      wordsElement.appendChild(specialText);
    }

    if (transcript.includes('stop typing')) {
      isStop = true;
      recognition.abort();
    }

    currentParagraph = createParagraph();
  }
};

recognition.onend = () => !isStop && recognition.start();

recognition.start();
