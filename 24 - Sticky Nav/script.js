const navBar = document.querySelector('nav');
const topOfNavBar = navBar.offsetTop;

const fixNavBar = () => {
  if (window.scrollY >= topOfNavBar) {
    navBar.classList.add('fixed_nav');
    document.body.style.paddingTop = `${navBar.offsetHeight}px`;
  } else {
    navBar.classList.remove('fixed_nav');
    document.body.style.paddingTop = '0px';
  }
};

window.addEventListener('scroll', fixNavBar);
