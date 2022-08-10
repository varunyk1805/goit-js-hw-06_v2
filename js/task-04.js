const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const decrease = () => {
    counterValue -= 1;
    value.textContent = counterValue;
    return;
};

const increase = () => {
    counterValue += 1;
    value.textContent = counterValue;
    return;
};

decrementBtn.addEventListener('click', decrease);
incrementBtn.addEventListener('click', increase);