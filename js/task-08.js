const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitBtn = document.querySelector('button[type="submit"]');

const submitForm = event => {
    event.preventDefault();

    if (emailInput.value && passwordInput.value) {
        const { email, password } = event.target.elements;
        console.log({
            email: email.value,
            password: password.value
        });
        event.target.reset();
        return;
    };

    alert('Усі поля повинні бути заповнені!!!');
    return;
};

loginForm.addEventListener('submit', submitForm);