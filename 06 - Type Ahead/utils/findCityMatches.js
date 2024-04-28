export const findCityMatches = (searchWord = '', cities) =>
  cities.filter(
    (city) =>
      city.city.toLowerCase().includes(searchWord) ||
      city.state.toLowerCase().includes(searchWord)
  );
