const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('span#text');

function onChangeFontSize(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}

inputRange.addEventListener('change', onChangeFontSize);
