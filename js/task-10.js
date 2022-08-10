const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let count = 0;

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = amount => {
    const arrayBoxes = [];
    for (let i = count; i < (count + amount); i += 1) {
        arrayBoxes.push(`<div style="width:${30 + 10 * i}px; height:${30 + 10 * i}px; background-color:${getRandomHexColor()}"></div>`);
    };
    count += amount;
    return boxes.insertAdjacentHTML('beforeend', arrayBoxes.join(''));
};

const destroyBoxes = () => {
    boxes.innerHTML = '';
    count = 0;
    return;
};

btnCreate.addEventListener('click', () => createBoxes(Number(input.value)));
btnDestroy.addEventListener('click', destroyBoxes);