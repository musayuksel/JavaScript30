const allVideosWithTime = Array.from(document.querySelectorAll('[data-time]'));

const totalVideoTime = allVideosWithTime.reduce((totalTimeSec, currVideo) => {
  const [currVideoMin, currVideoSec] = currVideo.dataset.time.split(':');

  //We can do it readable with Number(currVideoMin)
  return totalTimeSec + +currVideoMin * 60 + +currVideoSec;
}, 0);

const convertTimeToISO = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  console.log(date.toISOString().substring(11, 19));
};

convertTimeToISO(totalVideoTime);
