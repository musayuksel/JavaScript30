export const formatHighlightedCityName = (cityName, searchInput) => {
  const lowerCaseCity = cityName.toLowerCase();
  const searchIndex = lowerCaseCity.indexOf(searchInput);

  if (searchIndex !== -1) {
    const before = cityName.slice(0, searchIndex);
    const highlightText = cityName.slice(
      searchIndex,
      searchIndex + searchInput.length
    );
    const after = cityName.slice(searchIndex + searchInput.length);

    return { before, highlightText, after };
  } else {
    return { before: cityName };
  }
};
