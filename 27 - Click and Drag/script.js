const sliderContainer = document.querySelector('.items');
const SCROLL_SPEED = 2;
const sliderState = {
  isMouseDown: false,
  dragStartPoint: 0,
  scrollLeft: 0,
};

const handleMouseDown = (e) => {
  sliderContainer.classList.add('active');

  sliderState.isMouseDown = true;
  sliderState.dragStartPoint = e.pageX - sliderContainer.offsetLeft;
  sliderState.scrollLeft = sliderContainer.scrollLeft;
};

const handleMouseUp = () => {
  sliderContainer.classList.remove('active');

  sliderState.isMouseDown = false;
};

const handleMouseLeave = () => {
  sliderContainer.classList.remove('active');

  sliderState.isMouseDown = false;
};

const handleMouseMove = (e) => {
  if (!sliderState.isMouseDown) return;

  e.preventDefault();

  const mousePosition = e.pageX - sliderContainer.offsetLeft;
  const scrollDistance =
    (mousePosition - sliderState.dragStartPoint) * SCROLL_SPEED;

  sliderContainer.scrollLeft = sliderState.scrollLeft - scrollDistance;
};

sliderContainer.addEventListener('mousedown', handleMouseDown);
sliderContainer.addEventListener('mouseup', handleMouseUp);
sliderContainer.addEventListener('mouseleave', handleMouseLeave);
sliderContainer.addEventListener('mousemove', handleMouseMove);
