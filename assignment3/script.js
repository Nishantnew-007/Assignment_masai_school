document.addEventListener('DOMContentLoaded', function() {
    // Get form and input elements
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long.';
        } else {
            nameError.textContent = '';
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
        } else {
            passwordError.textContent = '';
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Form submission event
    form.addEventListener('submit', function(event) {
        validateName();
        validateEmail();
        validatePassword();
        
        if (nameError.textContent || emailError.textContent || passwordError.textContent) {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });
});
