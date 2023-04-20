//agrego evento submit para la pagina de contacto cuando llena el formulario y guardarlo en session storage
//eventos de teclado 
let campoNombre = document.getElementById('nombre');
let campoEdad = document.getElementById('edad');
let campoCumple = document.getElementById ('cumple');

campoNombre.oninput = () => {
    if(isNaN(campoNombre.value)){
        campoNombre.style.color='black'; //si escribe letras en el campoNombre se pone en negro
    }else{
        campoNombre.style.color = 'red'; //si escribe numeros en el campoNombre se pone en negro
    }
}
//Evento submit para que se valide lo que se envie si esta correcto y completos los campos especiales mencionados (nombre, edad y email)
let formulario = document.getElementById('fomulario1');
formulario1.addEventListener('submit', validar);

 
function validar(evento){
    if((campoNombre.value == '') || (campoEdad.value == '') || (campoCumple.value == '')){
        evento.preventDefault();
        alert('Ingrese nombre, edad o fecha de cumpleaños validos para que se pueda enviar el formulario!');
    }
}


