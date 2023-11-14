var formName = document.querySelector(".card__form__name");
var formLast = document.querySelector(".card__form__last");
var formEmail = document.querySelector(".card__form__email");
var formPassword = document.querySelector(".card__form__password");
var formErrorName = document.querySelector(".card__form__error__name");
var formValidName = document.querySelector(".card__form__valid__name");
var formErrorLast = document.querySelector(".card__form__error__last");
var formValidLast = document.querySelector(".card__form__valid__last");
var formErrorEmail = document.querySelector(".card__form__error__email");
var formValidEmail = document.querySelector(".card__form__valid__email");
var formErrorPassword = document.querySelector(".card__form__error__password");
var formValidPassword = document.querySelector(".card__form__valid__password");
var btnSubmit = document.querySelector(".card__form__button");

btnSubmit.addEventListener("click", (e)=>
{
    let submit = 0;
    e.preventDefault();
    if(formName.value === "")
    {
        formName.placeholder = "";
        formName.style.borderColor = "#ff7a7a";
        formErrorName.style.display = "block";
        formValidName.style.display= "block";
    }
    else
    {
        formName.style.borderColor = "#b9b6d3";
        formErrorName.style.display = "none";
        formValidName.style.display= "none";    
        submit++;
    }
    if(formLast.value === "")
    {
        formLast.placeholder = "";
        formLast.style.borderColor = "#ff7a7a";
        formErrorLast.style.display = "block";
        formValidLast.style.display= "block";    
    }
    else
    {
        formLast.style.borderColor = "#b9b6d3";
        formErrorLast.style.display = "none";
        formValidLast.style.display= "none";    
        submit++;
    }
    if(!formEmail.value.includes("@"))
    {
        formEmail.placeholder = "email@example/com";
        formEmail.value = "";
        formEmail.style.borderColor = "#ff7a7a";
        formErrorEmail.style.display = "block";
        formValidEmail.style.display= "block";    
    }
    else
    {
        formEmail.style.borderColor = "#b9b6d3";
        formErrorEmail.style.display = "none";
        formValidEmail.style.display= "none";    
        submit++;
    }
    if(formPassword.value === "")
    {
        formPassword.placeholder = "";
        formPassword.style.borderColor = "#ff7a7a";
        formErrorPassword.style.display = "block";
        formValidPassword.style.display= "block";    
    }
    else
    {
        formPassword.style.borderColor = "#b9b6d3";
        formErrorPassword.style.display = "none";
        formValidPassword.style.display= "none";    
        submit++;
    }
    if(submit === 4)
    {
        formName.value = "";
        formName.placeholder = "First Name";
        formLast.value = "";
        formLast.placeholder = "Last Name";
        formEmail.value = "";
        formEmail.placeholder = "Email Address";
        formPassword.value = "";
        formPassword.placeholder = "Password";
    }
});
