const listItems = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('nav');

const setDropDownProperties = (
  dropDownWidth,
  dropDownHeight,
  dropDownX,
  dropDownY
) => {
  background.style.setProperty('width', `${dropDownWidth}px`);
  background.style.setProperty('height', `${dropDownHeight}px`);

  background.style.setProperty(
    'transform',
    `translate(${dropDownX}px, ${dropDownY}px)`
  );
};

const handleMouseEnter = (e) => {
  const currentElement = e.target;
  currentElement.classList.add('trigger-enter');

  //add some delay for animation
  setTimeout(
    () =>
      currentElement.classList.contains('trigger-enter') &&
      currentElement.classList.add('trigger-enter-active'),
    250
  );

  background.classList.add('open');

  const currentDropDown = currentElement.querySelector('.dropdown');

  const {
    width: dropDownWidth,
    height: dropDownHeight,
    x: dropDownX,
    y: dropDownY,
  } = currentDropDown.getBoundingClientRect();

  const { x: navX, y: navY } = nav.getBoundingClientRect();

  setDropDownProperties(
    dropDownWidth,
    dropDownHeight,
    dropDownX - navX, //add offset
    dropDownY - navY
  );
};

const handleMouseLeave = (e) => {
  const currentElement = e.target;
  currentElement.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
};

listItems.forEach((item) =>
  item.addEventListener('mouseenter', handleMouseEnter)
);
listItems.forEach((item) =>
  item.addEventListener('mouseleave', handleMouseLeave)
);
