import { getData } from './utils/getData.js';
import { findCityMatches } from './utils/findCityMatches.js';
import { createNewCityLi } from './utils/createNewCityLi.js';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const updateUiWithCities = (matchedCities, searchInput) => {
  const suggestions = document.querySelector('.suggestions');

  const listItems = matchedCities.map((city) =>
    createNewCityLi(city, searchInput)
  );

  suggestions.replaceChildren(...listItems);
};

const handleSearchInput = (cities) => {
  document.querySelector('input').addEventListener('input', (event) => {
    const searchInput = event.target.value.toLowerCase();

    const matchedCities = findCityMatches(searchInput, cities);

    updateUiWithCities(matchedCities, searchInput);
  });
};

const onStart = async () => {
  const cities = await getData(endpoint);

  handleSearchInput(cities);
};

onStart();
