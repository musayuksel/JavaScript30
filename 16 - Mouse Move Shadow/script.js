const container = document.querySelector('.hero');
const shadowElement = document.querySelector('h1');
const maxShadowPx = 100;

const updateShadow = (event) => {
  const { x, y } = event; //mouse position
  const { offsetWidth: containerWidth, offsetHeight: containerHeight } =
    container;

  const shadowX = (x / containerWidth) * maxShadowPx - maxShadowPx / 2;
  const shadowY = (y / containerHeight) * maxShadowPx - maxShadowPx / 2;

  shadowElement.style.textShadow = `${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.5)`;
};

container.addEventListener('mousemove', updateShadow);
