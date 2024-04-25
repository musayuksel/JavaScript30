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
