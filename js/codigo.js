//en la pagina de proyectos_talleres.html:
//armo las tarjetas con bootstrap para que aparezca el boton click con el precio 
//y caracteristicas de lo que quiero vender de cada lab


let carrito = [];
let contenedor = document.getElementById("labsprod");
let finalizarBtn = document.getElementById("finalizar");

//API de precios dolar
let dolarVenta;
obtenerDolar();



//tabla con los labs de productos
function mostrarLabs (){
    //armamas las tarjetas para cada labs de productos
    for(const lab of labs){
        contenedor.innerHTML += `
            <div class="card col-sm-2" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">${lab.id}</h5>
                    <h3 class="card-text">${lab.nombre}</h3>
                    <img src=${lab.foto} class="card-img-top" alt="...">
                    <p class="card-text">${lab.caracteristica}</p>
                    <p class="card-text">u$ ${lab.precio}</p>
                    <button id='btn${lab.id}' class="btn btn-primary">Agregar a la Salud!</button>
                </div>
            </div>
        `;
            
    }

    //agrego eventos
    labs.forEach((lab)=>{
        document.getElementById(`btn${lab.id}`).addEventListener('click', function(){
            agregarACarrito(lab);
        })
    })
}

mostrarLabs();



function tablaDeCompra(){
    for(const labs of carrito){
        document.getElementById("tablacompra").innerHTML += `
        <tr>
            <td>${labs.id}</td>
            <td>${labs.nombre}</td>
            <td>${labs.precio}</td>
        </tr>
    `;
    }
    
    
}
tablaDeCompra();

 function agregarACarrito(labAAgregar){
    carrito.push(labAAgregar);
    console.table(carrito);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Agregaste el ${labAAgregar.nombre} al Carrito!!`,
        showConfirmButton: false,
        timer: 1500
      })
    //armo la tabla para que aparezca los labs agregados al carrito
    document.getElementById('tablacompra').innerHTML += `
        <tr>
            <td>${labAAgregar.id}</td>
            <td>${labAAgregar.nombre}</td>
            <td>${labAAgregar.precio}</td>
        </tr>
    `;
    //incremento del total
    totalCarrito = carrito.reduce((acumulador,lab)=> acumulador + labAAgregar.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar u$: "+totalCarrito;
    
}


//boton finalizar compra
finalizarBtn.onclick=()=>{
    carrito=[];
    document.getElementById('tablacompra').innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar u$:';
    Swal.fire({
        title: 'Su compra de nuestros LABS ha sido realizada con exito!!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
        
}
agregarACarrito(); 
//API de precio dolar
function obtenerDolar(){
    const URLDOLAR='https://api.bluelytics.com.ar/v2/latest';
    fetch(URLDOLAR)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const dolarBlue = datos.blue;
            console.log(dolarBlue);
            document.getElementById('cotizacion').innerHTML += `
                <p>Dolar compra: $ ${dolarBlue.value_buy} - Dolar venta: $ ${dolarBlue.value_sell}</p>
            `;
            dolarVenta = dolarBlue.value_sell;
        })
}


//aplique JSON para guardar los datos en el storage 
const guardarLocal = (claveLab, precio) => {localStorage.setItem(claveLab, precio)};

guardarLocal ("listaLabs", JSON.stringify(labs));

class Labs {
    constructor(obj){
        this.nombre = obj.nombre.toUpperCase ();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaLabs"));
console.table(almacenados);

