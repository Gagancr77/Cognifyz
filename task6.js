document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());


        let name = form.querySelector('input[name="name"]');
        let email = form.querySelector('input[name="email"]');
        let password = form.querySelector('input[name="password"]');

        let valid = true;


        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
            valid = false;
        }

        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            valid = false;
        } else if (!email.value.includes('@')) {
            showError(email, 'Please enter a valid email.');
            valid = false;
        }
        if (password.value.trim() === '') {
            showError(password, 'Password is required.');
            valid = false;
        } else if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters long.');
            valid = false;
        }

        if (valid) {
            form.submit();
        }
    });

    function showError(input, message) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        input.parentElement.appendChild(errorMessage);
        input.style.borderColor = 'red'; // Highlight the input border in red
    }
});
