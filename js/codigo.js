//en la pagina de proyectos_talleres.html:
//armo las tarjetas con bootstrap para que aparezca el boton click con el precio 
//y caracteristicas de lo que quiero vender de cada lab

const carrito = [];
let contenedor = document.getElementById("labsprod");


function mostrarLabs (){
    //armamas las tarjetas para cada labs de productos
    for(const lab of labs){
        contenedor.innerHTML += `
            <div class="card col-sm-2" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">${lab.id}</h5>
                    <p class="card-text">${lab.nombre}</p>
                    <p class="card-text">${lab.caracteristica}</p>
                    <p class="card-text">$ ${lab.precio}</p>
                    <button id='btn${lab.id}' class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;    
    }

    //agregamos eventos
    labs.forEach((lab)=>{
        document.getElementById(`btn${lab.id}`).addEventListener('click', function(){
            agregarACarrito(lab);
        })
    })
}

mostrarLabs();

function agregarACarrito(labAAgregar){
    carrito.push(labAAgregar);
    console.table(carrito);
    alert(`Agregaste el ${labAAgregar.nombre} al Carrito!!`)
    //armo un alert para que le aparezca lo que va sumando al carrito como aviso y no como tabla 
    let totalCarrito = carrito.reduce((acumulador,lab)=>acumulador+lab.precio,0);
    alert('Total hasta el momento a pagar: $ '+totalCarrito);

}


//aplique JSON para guardar los datos en el storage que van marcando para el carrito y que se vaya mostrando en consola el array y lo que se va almacenando

const guardarLocal = (claveLab, precio) => {sessionStorage.setItem(claveLab, precio)};

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

const almacenados = JSON.parse(sessionStorage.getItem("listaLabs"));
console.table(almacenados);

