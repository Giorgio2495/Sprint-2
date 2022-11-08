let inputs = document.querySelectorAll("input");
let formulario = document.querySelector('#formulario');

inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.setCustomValidity("");
        input.checkValidity();
    })
})

inputs.forEach(input => {
    input.addEventListener("invalid", () => {
        input.setCustomValidity("Error...!!!")
    })
})

function capturar() {
    function Persona(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var apellidoCapturar = document.getElementById("apellido").value;
    var correoCapturar = document.getElementById("correo").value;

    nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar, correoCapturar);
    console.log(nuevoSujeto);
    agregar();
    return nuevoSujeto;

   
}

var baseDatos = [];
function agregar() {
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let general = localStorage.getItem('input')
    let respuestas;

    if (general == undefined ) {
        respuestas = []
    } else {
        respuestas = JSON.parse(general);
    }

    respuestas.push(capturar());

    localStorage.setItem("input", JSON.stringify( respuestas )  );

})