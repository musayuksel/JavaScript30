const checkboxes = document.querySelectorAll('input[type="checkbox"');

const checkboxIndexes = {
  lastCheckedIndex: -1,
};

const checkAllBetween = (...indexes) => {
  const [startIndex, endIndex] = indexes.sort((a, b) => a - b);

  if (startIndex !== -1) {
    checkboxes.forEach((checkbox, currentIndx) => {
      if (currentIndx >= startIndex && currentIndx <= endIndex)
        checkbox.checked = true;
    });
  }
};

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', (event) => {
    if (!checkbox.checked) {
      checkboxIndexes.lastCheckedIndex = -1;
      return;
    }

    if (event.shiftKey && checkbox.checked) {
      // check between lastCheckedIndex and current one
      checkAllBetween(index, checkboxIndexes.lastCheckedIndex);
      checkboxIndexes.lastCheckedIndex = index;
    }
    checkboxIndexes.lastCheckedIndex = index;
  });
});
