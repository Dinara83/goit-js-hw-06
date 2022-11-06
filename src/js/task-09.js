const widgetRef = document.querySelector('.widget');
const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnRef.addEventListener('click', onClick);

function onClick(event) {
  const color = getRandomHexColor();
  document.body.style.background = color;
  spanRef.textContent = color;
}
