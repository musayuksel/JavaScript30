const spaceInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const colorInput = document.querySelector('#color');

const handleInputChange = (element) => {
  const elementName = element.name;
  const dataAttribute = element.dataset.sizing ?? '';

  element.addEventListener('change', (e) => {
    const newValue = e.target.value;

    document.documentElement.style.setProperty(
      `--${elementName}`,
      `${newValue}${dataAttribute}`
    );
  });
};

handleInputChange(spaceInput);
handleInputChange(blurInput);
handleInputChange(colorInput);
