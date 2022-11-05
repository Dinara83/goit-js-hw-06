const refs = {
  addBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
  subBtn: document.querySelector('[data-action="increment"]'),
};
console.log(refs);

let counterValue = 0;

const render = () => {
  refs.value.textContent = counterValue;
};

const handleDecrement = () => {
  counterValue -= 1;
  render();
};
const handleIncrement = () => {
  counterValue += 1;
  render();
};

render();
refs.addBtn.addEventListener('click', handleDecrement);
refs.subBtn.addEventListener('click', handleIncrement);
