// Declaración de Variables a usar para eventos
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

// Evento para el botón de submit
btnSubmit.addEventListener("click", (e)=>
{
    let submit = 0;
    // Prevengo default para evitar que la página se recargue
    e.preventDefault();
    // Input para el Nombre
    // Pregunto si el input vino vacío
    if(formName.value === "")
    {
        // Habilito los mensajes e imágenes de error
        formName.placeholder = "";
        formName.style.borderColor = "#ff7a7a";
        formErrorName.style.display = "block";
        formValidName.style.display= "block";
    }
    // Pregunto si el input no está vacío
    else
    {
        // Deshabilito los mensajes e imágenes de error
        formName.style.borderColor = "#b9b6d3";
        formErrorName.style.display = "none";
        formValidName.style.display= "none";    
        submit++;
    }
    // Input para el Apellido
    // Pregunto si el input vino vacío
    if(formLast.value === "")
    {
        // Habilito los mensajes e imágenes de error
        formLast.placeholder = "";
        formLast.style.borderColor = "#ff7a7a";
        formErrorLast.style.display = "block";
        formValidLast.style.display= "block";    
    }
    // Pregunto si el input no está vacío
    else
    {
        // Deshabilito los mensajes e imágenes de error
        formLast.style.borderColor = "#b9b6d3";
        formErrorLast.style.display = "none";
        formValidLast.style.display= "none";    
        submit++;
    }
    // Input para el Correo
    // Pregunto si el input es válido
    if(!formEmail.value.includes("@"))
    {
        // Habilito los mensajes e imágenes de error
        formEmail.placeholder = "email@example/com";
        formEmail.value = "";
        formEmail.style.borderColor = "#ff7a7a";
        formErrorEmail.style.display = "block";
        formValidEmail.style.display= "block";    
    }
    // Pregunto si el input no es válido
    else
    {
        // Deshabilito los mensajes e imágenes de error
        formEmail.style.borderColor = "#b9b6d3";
        formErrorEmail.style.display = "none";
        formValidEmail.style.display= "none";    
        submit++;
    }
    // Input para el Password
    // Pregunto si el input esta vacío
    if(formPassword.value === "")
    {
        // Habilito los mensajes e imágenes de error
        formPassword.placeholder = "";
        formPassword.style.borderColor = "#ff7a7a";
        formErrorPassword.style.display = "block";
        formValidPassword.style.display= "block";    
    }
    // Pregunto si el input no esta vacío
    else
    {
        // Deshabilito los mensajes e imágenes de error
        formPassword.style.borderColor = "#b9b6d3";
        formErrorPassword.style.display = "none";
        formValidPassword.style.display= "none";    
        submit++;
    }
    // Si los 4 inputs son válidos, resetear los placeholder de los inputs
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
