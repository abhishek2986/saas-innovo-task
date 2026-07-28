// Get the form element
const form = document.getElementById("form");

// Get all input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("conf_password");

// Submit button
const submitBtn = document.getElementById("submit");

// Error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

let nameTouched = false;
let emailTouched = false;
let passwordTouched = false; // Track whether each input field has been visited by the user.
let confirmTouched = false;

// -------------------- Name Validation --------------------
function validateName() {
  if (!nameTouched) return false;

  // Allow only letters and spaces
  const namePattern = /^[A-Za-z ]+$/;

  // Name should be at least 3 characters
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Minimum 3 characters required";
    nameError.style.color = "red";
    return false;
  }

  // Check if name contains only valid characters
  if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = "Only letters are allowed";
    nameError.style.color = "red";
    return false;
  }

  // Show success message
  nameError.textContent = "✓ Valid Name";
  nameError.style.color = "green";
  return true;
}

// -------------------- Email Validation --------------------
function validateEmail() {
  if (!emailTouched) return false;

  // Basic email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Email should not be empty
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailError.style.color = "red";
    return false;
  }

  // Check email format
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    emailError.style.color = "red";
    return false;
  }

  // Valid email
  emailError.textContent = "✓ Valid Email";
  emailError.style.color = "green";
  return true;
}

// -------------------- Password Validation --------------------
function validatePassword() {
  if (!passwordTouched) return false;

  // Password must have uppercase, lowercase, number and special character
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // Password should not be empty
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordError.style.color = "red";
    return false;
  }

  // Check password strength
  if (!passwordPattern.test(passwordInput.value.trim())) {
    passwordError.textContent =
      "Minimum 8 characters with uppercase, lowercase, number and special character.";
    passwordError.style.color = "red";
    return false;
  }

  // Strong password
  passwordError.textContent = "✓ Strong Password";
  passwordError.style.color = "green";
  return true;
}

// -------------------- Confirm Password --------------------

// Confirm password should not be empty
function validateConfirmPassword() {
  if (!confirmTouched) return false;

  if (confirmInput.value.trim() === "") {
    confirmError.textContent = "Confirm your password";
    confirmError.style.color = "red";
    return false;
  }

  // Check if both passwords match
  if (passwordInput.value !== confirmInput.value) {
    confirmError.textContent = "Passwords do not match";
    confirmError.style.color = "red";
    return false;
  }

  // Passwords matched
  confirmError.textContent = "✓ Password Matched";
  confirmError.style.color = "green";
  return true;
}

// -------------------- Form Validation --------------------
function checkForm() {
  // Enable button only when all fields are valid
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

// Run validation whenever user types
nameInput.addEventListener("input", () => {
  nameTouched = true;
  validateName();
  checkForm();
});

emailInput.addEventListener("input", () => {
  emailTouched = true;
  validateEmail();
  checkForm();
});

passwordInput.addEventListener("input", () => {
  passwordTouched = true;
  validatePassword();
  if (confirmTouched) {
    validateConfirmPassword();
  }
  checkForm();
});

confirmInput.addEventListener("input", () => {
  confirmTouched = true;
  validateConfirmPassword();
  checkForm();
});
