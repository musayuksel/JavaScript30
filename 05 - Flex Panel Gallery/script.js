const toggleOpen = (panel) => panel.classList.toggle('open');
const toggleActive = (panel) => panel.classList.toggle('active');

const handlePanelAnimation = (panel) =>
  panel.addEventListener('click', () => toggleOpen(panel));

const handleActiveAnimation = (panel) => {
  panel.addEventListener('transitionend', (e) =>
    e.propertyName.includes('flex') ? toggleActive(panel) : null
  );
};

document.querySelectorAll('.panel').forEach((panel) => {
  handlePanelAnimation(panel);
  handleActiveAnimation(panel);
});
