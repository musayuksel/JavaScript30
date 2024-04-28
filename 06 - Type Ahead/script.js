const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const getData = async (endpoint) => {
  //check if data already exist in the localStorage
  const localStorageCities = localStorage.getItem('cities');
  if (localStorageCities) {
    return JSON.parse(localStorageCities);
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  localStorage.setItem('cities', JSON.stringify(data));
  return data;
};

const findCityMatches = (searchWord = '', cities) =>
  cities.filter(
    (city) =>
      city.city.toLowerCase().includes(searchWord) ||
      city.state.toLowerCase().includes(searchWord)
  );

const formatHighlightedCityName = (cityName, searchInput) => {
  const lowerCaseCity = cityName.toLowerCase();
  const searchIndex = lowerCaseCity.indexOf(searchInput);

  if (searchIndex !== -1) {
    const before = cityName.slice(0, searchIndex);
    const highlightText = cityName.slice(
      searchIndex,
      searchIndex + searchInput.length
    );
    const after = cityName.slice(searchIndex + searchInput.length);
    console.log({ before, highlightText, after });
    return { before, highlightText, after };
  } else {
    return { before: cityName };
  }
};

formatHighlightedCityName('New York', 'ew');
formatHighlightedCityName('Bossies city', 'boss');
const createNewCityLi = (city, searchInput) => {
  const cityElement = document.createElement('li');

  const { before, highlightText, after } = formatHighlightedCityName(
    city.city,
    searchInput
  );

  const cityName = document.createElement('span');
  cityName.classList.add('name');

  if (before) {
    cityName.append(before);
  }
  if (highlightText) {
    const highlightSpan = document.createElement('span');
    highlightSpan.classList.add('hl');
    highlightSpan.innerText = highlightText;

    cityName.append(highlightSpan);
  }

  if (after) {
    cityName.append(after);
  }
  cityName.append(',');

  const fState = formatHighlightedCityName(city.state, searchInput);
  if (fState.before) {
    cityName.append(fState.before);
  }

  if (fState.highlightText) {
    const highlightSpan = document.createElement('span');
    highlightSpan.classList.add('hl');
    highlightSpan.innerText = fState.highlightText;

    cityName.append(highlightSpan);
  }

  if (fState.after) {
    cityName.append(fState.after);
  }
  // cityName.innerText = `${city.city}, ${city.state}`;
  cityElement.append(cityName);

  const cityPopulation = document.createElement('span');
  cityPopulation.innerText = `${(+city.population).toLocaleString()}`;
  cityPopulation.classList.add('population');

  cityElement.append(cityName, cityPopulation);

  return cityElement;
};

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
