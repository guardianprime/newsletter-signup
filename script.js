const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismissBtn");
const main = document.getElementById("main");
const successMessage = document.getElementById("success-message");
const successEmailSpanEl = document.getElementById("success-email");
const emailInput = document.getElementById("emailAdd");
const errorMessage = document.getElementById("error-message");

/* Functions */

const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailRegex.test(email)
}

function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const userEmail = data.get("email");
    if (validateEmail(userEmail)) {
        main.classList.toggle("hide");
        successMessage.classList.toggle("hide");
        emailInput.classList.remove("invalid");
        errorMessage.classList.add("hide");

    } else {
        emailInput.classList.add("invalid");
        errorMessage.classList.remove("hide");
    }

}

function dissmis() {
    main.classList.toggle("hide");
    successMessage.classList.toggle("hide");
}


form.addEventListener("submit", handleSubmit)

dismissBtn.addEventListener("click", dissmis);