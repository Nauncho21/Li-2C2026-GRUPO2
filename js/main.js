// Modo oscuro 

const boton = document.getElementById("btn-modo"); // Hago una variable  para el boton con el id btn-modo, llamado "boton"

// Funcion para actualizar el boton
function actualizarBoton(){
    const oscuro = document.body.classList.contains("oscuro"); // se crea la variable "oscuro". Esta variable guarda true o false, pregutuntando si el body tiene la clase oscuro
    boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    // cambia el texto del boton mirando el booleano de la variable oscuro
    // True: La pagina se encuentra en modo oscuro y el boton muestra "☀️ Modo claro" 
    // False: La pagina se encuentra en modo Claro y el boton muestra "🌙 Modo oscuro" 
    localStorage.setItem("oscuro", oscuro);
    // Guarda localmente el valor de oscuro que tiene la funcion
}

// Este if busca el valor que tiene alojado localmente "oscuro" para saber en que modo estaba en la ultima session.
// Si el usuario anteriormente habia puesto la pagina en modo oscuro, cuando vuelta a cargarla va a seguir estando en modo oscuro. 
if (localStorage.getItem("oscuro") === "true") { // Si el valor oscuro es true se ejecuta el codigo adentro de la llave. Si no, no hace nada.
  document.body.classList.add("oscuro"); // Agrega la clase oscuro al body y la página se pone oscura.
}
actualizarBoton(); // actualiza el boton


boton.addEventListener("click", () => { // Cuando hagan click en el valor que tiene la variable boton hace lo siguiente
  document.body.classList.toggle("oscuro"); // Busca el adentro del css body y crea un toggle (Palanca en español) invirtiendo el modo, Pone o saca la clase oscuro.
  actualizarBoton(); // actualiza el boton.
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