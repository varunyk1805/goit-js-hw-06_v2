const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const getName = event => outputName.textContent = event.target.value || 'Anonymous';

inputName.addEventListener('input', getName);