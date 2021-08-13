function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error" );
    messageElement.classList.add('form__message--${type}');
}

function setInputError(inputElement,message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error"); 
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// document.addEventListener("DOMContentLoaded",() => {
//     const SigninForm = document.querySelector("#Signin")
//     const CreateAccountForm = document.querySelector("#CreateAccount")
//     const footer = document.querySelector(".footer")

    // document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    //     e.preventDefault();
    //     SigninForm.classList.add("form--hidden");
    //     CreateAccountForm.classList.remove("form--hidden");
    // });

    // document.querySelector("#linkSignin").addEventListener("click", e => {
    //     e.preventDefault();
    //     SigninForm.classList.remove("form--hidden");
    //     CreateAccountForm.classList.add("form--hidden");
    //     document.body.appendChild(footer)
    // });

    SigninForm.addEventListener("submit", e => {
        e.preventDefault();

        // perfrom your AJAX/Fetch login

        setFormMessage(SigninForm, "error", "Invalid username/password combination");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsernsame" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length")
            }
 
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
     });
// });

