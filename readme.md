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
