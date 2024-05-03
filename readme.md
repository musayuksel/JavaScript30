![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

## Day-1

[event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

## Day-3

- To access the `data-*` attributes of an HTML element using JS, we can use the `element.dataset` property

```js
<input
  //...
  data-sizing="px"
  data-my-var="my special data"
/>
//element.dataset = {sizing: 'px', myVar: 'my special data'}
```

- The `:root` CSS _pseudo-class_ matches the root element of a tree representing the document.
- To set a CSS variable, we can use `document.documentElement.style.setProperty()`

```js
document.documentElement.style.setProperty('--blur', '10px');
```

## Day-6

Don't use `innerHTML`, use [replaceChildren() ](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)

## Day-8

`<canvas>` is an HTML element which can be used to draw graphics via JavaScript.

```
<canvas id="tutorial" width="150" height="150"></canvas>
```

The `<canvas>` element has only two attributes, `width` and `height`. Default values are 300 pixels wide and 150 pixels high.

The `<canvas>` element has a method called `getContext()`, used to obtain the rendering context and its drawing functions.

The canvas coordinate system like this:

<img src='./08 - Fun with HTML5 Canvas/canvas_default_grid.png' />

### Drawing paths

- `beginPath()`: Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
- `stroke()`: Draws the shape by stroking its outline.
- `fill()`: Draws a solid shape by filling the path's content area.
- `moveTo(x, y)`: Moves the pen to the coordinates specified by x and y.

## Day-11

### Basic Events

- `play`: Playback has begun.
- `pause`: Playback has been paused.
- `timeupdate`: The time indicated by the currentTime attribute has been updated.

## Day-12

Adding function into `prototype`:

```js
Array.prototype.isEqual = function (array) {
  //...
  //this => refers the Array
};
```

## Day-12

### Scroll Event Optimization: Debounce vs. Throttle

When handling scroll events, it's important to optimize performance by reducing the frequency of event handler execution. Two common techniques for achieving this are `debounce` and `throttle`.

#### Debounce

Delays the execution of a function until a **certain amount of time has passed since the last time it was triggered**. This ensures the function is called only once after a period of inactivity.

Here's a simple implementation of a `debounce` function:

```javascript
function debounce(func, waitingTime) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), waitingTime);
  };
}

const handleScroll = () => {
  // Your scroll handling logic goes here
  console.log('Scrolled!');
};

const debouncedScroll = debounce(handleScroll, 100); // Debounce after 100ms of inactivity
```

OR more advance one like this

```js
function debounce(targetFunction, wait = 20, immediate = true) {
  let timeout;

  return function () {
    const context = this;
    const functionArgs = arguments;

    const delayedExecution = function () {
      timeout = null;
      if (!immediate) targetFunction.apply(context, functionArgs);
    };

    const isReadForCall = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(delayedExecution, wait);
    if (isReadForCall) targetFunction.apply(context, functionArgs);
  };
}
```

#### Throttle

While debounce is generally preferred for scroll events, throttle can be useful in certain situations, such as:

- **Infinite Scrolling:** Here, you might want to constantly check the scroll position to trigger content `fetching` before the user reaches the bottom. Throttle ensures regular checks at defined intervals.

```js
function throttle(func, timeFrame) {
  let lastCallTime = 0;

  return function () {
    const now = Date.now();

    if (now - lastCallTime >= timeFrame) {
      func.apply(this, arguments);
      lastCallTime = now;
    }
  };
}

function checkScrollPositionForFetching() {
  // Your logic to check scroll position and trigger fetching
  console.log('Checking scroll position...');
}

const throttledScroll = throttle(checkScrollPositionForFetching, 200); // Check every 200ms

window.addEventListener('scroll', throttledScroll);
```

### Intersection Observer API

[The Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

```js
const ENTRY_THRESHOLD = 0.75;
const EXIT_THRESHOLD = 0.1;

const options = {
  threshold: [ENTRY_THRESHOLD, EXIT_THRESHOLD],
  //threshold :1.0 means that when 100% of the target is visible within the element
  root: document.querySelector('#scrollArea'),
  // The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target.
  rootMargin: '0px',
  // Margin around the root.
};
const callback = (entries) => {
  entries.forEach((entry) => {
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    if (entry.intersectionRatio >= ENTRY_THRESHOLD) {
      entry.target.classList.add('active');
    } else if (entry.intersectionRatio <= EXIT_THRESHOLD) {
      entry.target.classList.remove('active');
    }
  });
};
const observer = new IntersectionObserver(callback, options);

sliderImages.forEach((image) => observer.observe(image));
```
