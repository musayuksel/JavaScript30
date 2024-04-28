export const getData = async (endpoint) => {
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
