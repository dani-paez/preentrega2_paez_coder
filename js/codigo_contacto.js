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
let formulario = document.getElementById('envioformulario');
formulario.addEventListener('submit', validar);

 
function validar(evento){
    if((campoNombre.value == '') || (campoEdad.value == '') || (campoCumple.value == '')){
        evento.preventDefault();
        alert('Ingrese nombre, edad o fecha de cumpleaños validos para que se pueda enviar el formulario!');
        
    } else {
        alert('Formulario enviado!!! Gracias!!!');
        //puse el alert anterior porque el sweet alert no se porqué me lo tome una milesima de segundo cuando le doy aceptar al alert anterior
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 3000
          })
    }
    

}

validar();

