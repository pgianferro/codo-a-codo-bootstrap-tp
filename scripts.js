
window.addEventListener('load', () => {
    // console.log("eventos");

//Capturamos el formulario
const form = document.querySelector("form")

//Capturamos los campos del formulario y los "smalls" que mostraran los mensajes de error

const first_name = document.getElementById("first_name")
const first_name_error = document.getElementById("first_name_error")
const last_name = document.getElementById("last_name")
const last_name_error = document.getElementById("last_name_error")
const email = document.getElementById("email")
const email_error = document.getElementById("email_error")
const qty = document.getElementById("qty")
const qty_error = document.getElementById("qty_error")
const category = document.getElementById("category")
const category_error = document.getElementById("category_error")

//Capturamos botones

const erase = document.getElementById("erase")
const resume = document.getElementById("resume")

//Capturamos total a pagar

const total = document.getElementById("total")

//Chequeamos que los estemos capturando con un console.log
// console.log(first_name_error);

//Primer campo donde queremos que se posicione el usuario al cargar la página
first_name.focus()

//Acción para validar el campo al dejar el campo

first_name.addEventListener('blur', function validateFirstName() {
    if(first_name.value.length<3){
        first_name_error.innerHTML = "El nombre no es válido";
        first_name_error.style.color = "red"
        first_name.style.borderColor="red"
    } else {
        first_name_error.innerHTML = "";
        first_name.style.borderColor="green"
    }
}
);

last_name.addEventListener('blur', function validateLastName() {
    if(last_name.value.length<3){
        last_name_error.innerHTML = "El apellido no es válido";
        last_name_error.style.color = "red"
        last_name.style.borderColor="red"
    } else {
        last_name_error.innerHTML = "";
        last_name.style.borderColor="green"
    }
}
);

email.addEventListener('blur', function validateEmail() {
    const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!expRegular.test(email.value)){
        email_error.innerHTML = "El email no es válido"
        email_error.style.color = "red"
        email.style.borderColor="red"
    } else {
        email_error.innerHTML = ""
        email.style.borderColor="green"
    }
}
);

qty.addEventListener('blur', function validateQuantity() {
    const expRegular2 = /^\d+$/
    if(!expRegular2.test(qty.value)){
        qty_error.innerHTML = "El dato ingresado es inválido"
        qty_error.style.color = "red"
        qty.style.borderColor="red"
    } 
    else if(qty.value < 1) {
        qty_error.innerHTML = "La cantidad no puede ser 0"
        qty_error.style.color = "red"
        qty.style.borderColor="red"
        console.log(qty.value);
    } else {
        qty_error.innerHTML = ""
        qty.style.borderColor="green"
    }
}
);

category.addEventListener('blur', function validateCategory() {
    if(category.value === "select") {
        category_error.innerHTML = "Selecciona una categoría"
        category_error.style.color = "red"
        category.style.borderColor="red"
    } else {
        category_error.innerHTML = ""
        category.style.borderColor="green"
    }
}
);

//Función para el botón de Borrado

erase.addEventListener('click', function eraseData() {
    first_name.value = ""
    last_name.value = ""
    email.value = ""
    qty.value = ""
    category.value = "select"
    total.innerHTML = "Total a Pagar: $ "
    resume_error.innerHTML = ""
}
);

//Función para calcular el total

resume.addEventListener('click', function calculateTotal() {

    if (first_name_error.length > 0 || last_name_error.length > 0 || email_error.length > 0 || qty_error.length > 0 || category.value === "select" ) {
        resume_error.innerHTML = "Debes completar todos los campos correctamente para calcular el total a pagar."
        resume_error.style.color = "red"     
    } else if (qty.value <=0 ) {
        resume_error.innerHTML = "Debes completar todos los campos correctamente para calcular el total a pagar."
        resume_error.style.color = "red"  
    }
    else {

        resume_error.innerHTML = ""

        switch (category.value) {
            case "student":
                let feeS = qty.value * 200 * 0.2
                total.innerHTML = "Total a Pagar: $ " + feeS + " (ahorra $ " + (qty.value * 200 * 0.8) + ")"
                break;
            case "trainee":
                let feeT = qty.value * 200 * 0.5
                total.innerHTML = "Total a Pagar: $ " + feeT + " (ahorra $ " + (qty.value * 200 * 0.5) + ")"
                break;
            case "junior":
                let feeJ = qty.value * 200 * 0.85
                total.innerHTML = "Total a Pagar: $ " + feeJ + " (ahorra $ " + (qty.value * 200 * 0.15) + ")"
                break;
            case "other":
                let feeO = qty.value * 200
                total.innerHTML = "Total a Pagar: $ " + feeO
                break;
            default:
                break;
        }
    }
}
);

})


