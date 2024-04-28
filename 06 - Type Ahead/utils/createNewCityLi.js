import { formatHighlightedCityName } from './formatHighlightedCityName.js';

const appendFormattedName = (container, formattedName) => {
  const { before, highlightText, after } = formattedName;

  if (before) {
    container.append(before);
  }
  if (highlightText) {
    const highlightSpan = document.createElement('span');
    highlightSpan.classList.add('hl');
    highlightSpan.innerText = highlightText;

    container.append(highlightSpan);
  }

  if (after) {
    container.append(after);
  }
};

const createPopulationEl = (city) => {
  const cityPopulation = document.createElement('span');
  cityPopulation.innerText = `${(+city.population).toLocaleString()}`;
  cityPopulation.classList.add('population');

  return cityPopulation;
};

export const createNewCityLi = (city, searchInput) => {
  const cityElement = document.createElement('li');

  const cityName = document.createElement('span');
  cityName.classList.add('name');

  const formattedCityName = formatHighlightedCityName(city.city, searchInput);
  appendFormattedName(cityName, formattedCityName);

  cityName.append(',');

  const formattedStateName = formatHighlightedCityName(city.state, searchInput);

  appendFormattedName(cityName, formattedStateName);

  cityElement.append(cityName);

  const populationEl = createPopulationEl(city);
  cityElement.append(cityName, populationEl);

  return cityElement;
};
