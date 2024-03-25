//ALERTA ENVIAR MENSAJE EN FORMULARIO

document.getElementById('mensaje', 'mensaje-texto', 'email', 'nombre').onclick = function () {
    alert('Tu mensaje fue enviado correctamente.');
}

//ACTIVAR TOOLTIP FORMULARIO

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
console.log(tooltipTriggerList)
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
