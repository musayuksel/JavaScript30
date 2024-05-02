const secretWord = ['a', 'n', 'd', 'ArrowRight'];
const pressedKeys = Array.from({ length: secretWord.length }, () => ''); //['', '', ...];

Array.prototype.isEqual = function (array) {
  return (
    array.length === this.length &&
    array.every((value, index) => value === this[index])
  );
};

document.addEventListener('keydown', (e) => {
  pressedKeys.shift();
  pressedKeys.push(e.key);

  pressedKeys.isEqual(secretWord) && cornify_add();
});
