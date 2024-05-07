// import { redEffect } from './helpers';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
    video.play();
    console.log({ stream });
  } catch (e) {
    alert(e);
  }
};

const blueEffect = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
};

const paintCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);

    pixels = blueEffect(pixels);
    ctx.globalAlpha = 0.75;

    ctx.putImageData(pixels, 0, 0);
  }, 190);
};

const takePhoto = () => {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');

  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'HEYYY');
  //   link.textContent = 'DOWNLOAD';

  const takenImageEl = document.createElement('img');
  takenImageEl.src = data;
  takenImageEl.alt = 'HEEYYYY';
  link.appendChild(takenImageEl);

  strip.insertBefore(link, strip.firstChild);
};

getVideo();
video.addEventListener('canplay', paintCanvas);
