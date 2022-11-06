const refs = {
  textInput: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
refs.textInput.addEventListener('input', onOutputEntering);

function onOutputEntering(event) {
  refs.output.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === '') {
    refs.output.textContent = 'Anonymous';
  }
}
