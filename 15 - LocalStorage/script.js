const newItemForm = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) ?? [];

const showItems = (items, listContainer) => {
  const itemList = items.map((item, i) => {
    const itemLi = document.createElement('li');

    const isDoneCheckbox = document.createElement('input');
    isDoneCheckbox.type = 'checkbox';
    isDoneCheckbox.id = `item${i}`;
    isDoneCheckbox.dataset.index = i;
    isDoneCheckbox.checked = item.isDone;

    const label = document.createElement('label');
    label.htmlFor = `item${i}`;
    label.innerText = item.itemName;

    itemLi.appendChild(isDoneCheckbox);
    itemLi.appendChild(label);

    return itemLi;
  });

  listContainer.replaceChildren(...itemList);
};

const addItemToList = (e) => {
  e.preventDefault();

  const itemName = newItemForm.children.namedItem('item').value;
  items.push({ itemName, isDone: false });

  showItems(items, itemsList);

  localStorage.setItem('items', JSON.stringify(items));
  e.target.reset(); //clear input
};

newItemForm.addEventListener('submit', addItemToList);

// EVENT DELEGATION
itemsList.addEventListener('click', (e) => {
  if (e.target.matches('input')) {
    const elementIndex = e.target.dataset.index;
    items[elementIndex].isDone = !items[elementIndex].isDone;

    localStorage.setItem('items', JSON.stringify(items));
  }
});

const updateStorageAndUi = () => {
  localStorage.setItem('items', JSON.stringify(items));
  showItems(items, itemsList);
};

const deleteAllItems = () => {
  items.length = 0;
  updateStorageAndUi();
};

const checkAllItems = () => {
  items.forEach((item) => (item.isDone = true));

  updateStorageAndUi();
};
const uncheckAllItems = () => {
  items.forEach((item) => (item.isDone = false));

  updateStorageAndUi();
};

document.getElementById('deleteAll').addEventListener('click', deleteAllItems);
document.getElementById('checkAll').addEventListener('click', checkAllItems);
document
  .getElementById('uncheckAll')
  .addEventListener('click', uncheckAllItems);

window.onload = () => showItems(items, itemsList);
