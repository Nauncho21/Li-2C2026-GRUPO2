const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");
});


// Confirmacion de llenado de formulario en contacto.html
const formulario = document.getElementById("formulariocontacto");
formulario.addEventListener("submit", ()=>{
const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();

    if ((nombre === ""|| email === ""))
    {
        alert("Por favor, complete todos los campos obligatorios incluidos en el formulario");  
    }
    else
    {
        alert("Formulario exitosamente enviado"
        )
    }


})