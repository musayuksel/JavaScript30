const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const showBands = () => {
  const bandsContainer = document.querySelector('#bands');
  sortWithoutArticles();

  const bandList = bands.map((band) => {
    const li = document.createElement('li');
    li.innerText = band;
    return li;
  });

  bandsContainer.replaceChildren(...bandList);
};

const isStartWithArticle = (band) =>
  band.startsWith('A ') || band.startsWith('An ') || band.startsWith('The ');

const sortWithoutArticles = () => {
  bands.sort((a, b) => {
    //if a start with an article, get rest else get all
    //if b start with an article, get rest else get all
    // compare newA and newB
    const newA = isStartWithArticle(a) ? a.split(' ').slice(1).join(' ') : a;
    const newB = isStartWithArticle(b) ? b.split(' ').slice(1).join(' ') : b;

    return newA > newB ? 1 : -1;
    //More performances
    // if (newA > newB) {
    //   return 1;
    // } else if (newA < newB) {
    //   return -1;
    // }
    // return 0;
  });
};

showBands();
