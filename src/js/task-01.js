const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

console.log('');
itemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listItemEl = item.lastElementChild;
  console.log(`Elements: ${listItemEl.children.length}`);
  console.log('');
});
