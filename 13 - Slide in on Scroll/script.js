function debounce(targetFunction, wait = 20, immediate = true) {
  let timeout;

  return function () {
    const context = this;
    const functionArgs = arguments;

    const delayedExecution = function () {
      timeout = null;
      if (!immediate) targetFunction(context, ...functionArgs);
      // if (!immediate) targetFunction.apply(context, functionArgs);
    };

    const isReadForCall = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(delayedExecution, wait);
    if (isReadForCall) targetFunction(context, ...functionArgs);
    // if (isReadForCall) targetFunction.apply(context, functionArgs);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

const handleScroll = () => {
  console.log(this);
  sliderImages.forEach((image) => {
    const slideInPoint = window.scrollY + window.innerHeight - image.height / 2;
    const bottomOfImage = image.offsetTop + image.height;

    const isHalfOfImagePassed = slideInPoint > image.offsetTop;
    const isNotScrollPassed = window.scrollY < bottomOfImage;

    isHalfOfImagePassed && isNotScrollPassed
      ? image.classList.add('active')
      : image.classList.remove('active');
  });
};

const debouncedScroll = debounce(handleScroll, 20);
// window.addEventListener('scroll', debouncedScroll);

// USING IntersectionObserver
const ENTRY_THRESHOLD = 0.75;
const EXIT_THRESHOLD = 0.1;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= ENTRY_THRESHOLD) {
        entry.target.classList.add('active');
      } else if (entry.intersectionRatio <= EXIT_THRESHOLD) {
        entry.target.classList.remove('active');
      }
    });
  },
  { threshold: [ENTRY_THRESHOLD, EXIT_THRESHOLD] }
);

sliderImages.forEach((image) => observer.observe(image));
