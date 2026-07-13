const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("conf_password");

const submitBtn = document.getElementById("submit");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const validationMessage = document.getElementById("validation_message");

function validateName() {

    const namePattern = /^[A-Za-z ]+$/;

    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Minimum 3 characters required";
        nameError.style.color = "red";
        return false;
    }

    if (!namePattern.test(nameInput.value.trim())) {
        nameError.textContent = "Only letters are allowed";
        nameError.style.color = "red";
        return false;
    }

    nameError.textContent = "✓ Valid Name";
    nameError.style.color = "green";
    return true;
}

nameInput.addEventListener("input", validateName);
function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailError.style.color = "red";
        return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email";
        emailError.style.color = "red";
        return false;
    }

    emailError.textContent = "✓ Valid Email";
    emailError.style.color = "green";
    return true;
}
emailInput.addEventListener("input", validateEmail);


function validatePassword() {

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordError.style.color = "red";
        return false;
    }

    if (!passwordPattern.test(passwordInput.value.trim())) {
        passwordError.textContent =
            "Minimum 8 characters with uppercase, lowercase, number and special character.";
        passwordError.style.color = "red";
        return false;
    }

    passwordError.textContent = "✓ Strong Password";
    passwordError.style.color = "green";
    return true;
}

passwordInput.addEventListener("input", validatePassword);

function validateConfirmPassword() {

    if (confirmInput.value.trim() === "") {
        confirmError.textContent = "Confirm your password";
        confirmError.style.color = "red";
        return false;
    }

    if (passwordInput.value !== confirmInput.value) {
        confirmError.textContent = "Passwords do not match";
        confirmError.style.color = "red";
        return false;
    }

    confirmError.textContent = "✓ Password Matched";
    confirmError.style.color = "green";
    return true;
}confirmInput.addEventListener("input", validateConfirmPassword);
passwordInput.addEventListener("input", validateConfirmPassword);

function checkForm() {

    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword()
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }

}
nameInput.addEventListener("input", () => {
    validateName();
    checkForm();
});

emailInput.addEventListener("input", () => {
    validateEmail();
    checkForm();
});

passwordInput.addEventListener("input", () => {
    validatePassword();
    validateConfirmPassword();
    checkForm();
});

confirmInput.addEventListener("input", () => {
    validateConfirmPassword();
    checkForm();
});