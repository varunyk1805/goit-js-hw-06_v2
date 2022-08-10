const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${fontSizeControl.value}px`;

const changeFontSize = event => {
    text.style.fontSize = `${event.target.value}px`;
    return;
};

fontSizeControl.addEventListener('input', changeFontSize);