const mockTargetLoc = {
  latitude: 53,
  longitude: -3,
};

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const updateUi = (speed, heading) => {
  speed.textContent = speed;
  arrow.style.transform = `rotate(${heading}deg)`;
};

const handleSuccessLocation = (position) => {
  const currLocation = position.coords;
  console.log(currLocation);
  console.log(currLocation.latitude);
  console.log(currLocation.longitude);

  updateUi(currLocation.speed || 0, currLocation.heading || 30);
  //Some other logic
  if (
    mockTargetLoc.latitude === Math.round(currLocation.latitude) &&
    mockTargetLoc.longitude === Math.round(currLocation.longitude)
  ) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
};

const handleLocationErr = (err) =>
  console.error(`ERROR(${err.code}): ${err.message}`);

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(
  handleSuccessLocation,
  handleLocationErr,
  options
);
