const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    nameColor.textContent = color;
    return;
};

buttonChangeColor.addEventListener('click', changeColor);