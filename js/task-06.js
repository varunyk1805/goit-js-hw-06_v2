const input = document.querySelector('#validation-input');

const validateInput = ({target: {value, dataset}}) => {
    if (value.length === Number(dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    };
    input.classList.remove('valid');
    input.classList.add('invalid');
    return;
};

input.addEventListener('blur', validateInput);