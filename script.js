const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismissBtn");
const main = document.getElementById("main");
const successMessage = document.getElementById("success-message");

/* Functions */

const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailRegex.test(email)
}

function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    main.classList.toggle("hide");
    successMessage.classList.toggle("hide");
}

function dissmis() {
    main.classList.toggle("hide");
    successMessage.classList.toggle("hide");
    console.log("working!!!")
}


form.addEventListener("submit", handleSubmit)

dismissBtn.addEventListener("click", dissmis);