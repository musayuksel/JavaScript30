const links = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.appendChild(highlight);

const highlightLink = () => {
  links.forEach((link) => {
    link.addEventListener('mouseenter', (mouseEvent) => {
      const { left, top, height, width } =
        mouseEvent.target.getBoundingClientRect();

      highlight.style.width = `${width}px`;
      highlight.style.height = `${height}px`;

      const scrolledLeft = left + window.scrollX;
      const scrolledTop = top + window.scrollY;
      highlight.style.transform = `translate(${scrolledLeft}px,${scrolledTop}px)`;
    });
  });
};

highlightLink();
