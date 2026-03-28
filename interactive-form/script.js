let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();  // 🔥 THIS IS IMPORTANT

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    // reset
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
    }
});