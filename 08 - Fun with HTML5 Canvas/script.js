const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

// set dynamic sizes
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// path values
const pathLine = {
  x: 0,
  y: 0,
  lineHslColor: 0,
  lineWidth: 20,
  isLineDrawing: false,
  isLineGrow: true,
};

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const updateLineWidth = () => {
  const { isLineGrow, lineWidth } = pathLine;

  pathLine.lineWidth = isLineGrow ? lineWidth + 0.5 : lineWidth - 0.5;

  if ((ctx.lineWidth > 100 && isLineGrow) || (lineWidth < 10 && !isLineGrow)) {
    pathLine.isLineGrow = !pathLine.isLineGrow;
  }
};

const drawPath = (event) => {
  ctx.beginPath();
  ctx.moveTo(pathLine.x, pathLine.y);
  ctx.lineTo(event.offsetX, event.offsetY);

  updateLineWidth();
  ctx.lineWidth = pathLine.lineWidth;

  pathLine.lineHslColor = (pathLine.lineHslColor + 1) % 360;
  ctx.strokeStyle = `hsl(${pathLine.lineHslColor}, 100%, 50%)`;

  ctx.stroke();
};

canvas.addEventListener('mousedown', () => (pathLine.isLineDrawing = true));

canvas.addEventListener('mousemove', (event) => {
  pathLine.isLineDrawing ? drawPath(event) : null;

  pathLine.x = event.offsetX;
  pathLine.y = event.offsetY;
});

canvas.addEventListener('mouseup', () => (pathLine.isLineDrawing = false));
canvas.addEventListener('mouseout', () => (pathLine.isLineDrawing = false));
