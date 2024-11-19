var prompt = require('prompt-sync')();

let electrodomesticos = ["tv", "pc", "heladera", "microhondas", "licuadora", "batidora"]

//let getUbicacionElectro = prompt("ingerse el electro a buscar: ")

//electrodomesticos[+getUbicacionElectro]

//console.log(electrodomesticos[+getUbicacionElectro]);

//let ejercicio4B =  electrodomesticos.shift()

//electrodomesticos.push(ejercicio4B)

//console.log(electrodomesticos);

/* ejercicio 4 c */ 

//electrodomesticos.push("horno electrico", "cafetera")

//console.log(electrodomesticos);


//let ejercicio4D = electrodomesticos.length

//console.log(ejercicio4D);

//ejercicio 4e

/* let buscar = prompt("Ingrese el producto a buscar: ")

const buscaElectro = (product,buscado) => {
    for (let i = 0; i < product.length ; i++) {
        if(product[i] == buscado) {
            return console.log("Producto encontrado");
            
        } else {
            return console.log("El producto buscado no existe");
            
        }
    }
}

console.log(buscaElectro(electrodomesticos,buscar));
 */

// ejercicio 4f

/* let unificaArray = (product) => product.join(" ")

console.log(unificaArray(electrodomesticos)); */

// ejercicio 4g

/* let cantProduct = (product) => product.length;

console.log(cantProduct(electrodomesticos)); */

// ejercicio 4h

/* let nombreProduct = "computadora"
let nombreCambio = prompt("ingrese el producto a renombrar: ")
function cambioNombre (product,cambio) {
    let index = product.indexOf(cambio)
    if (index !== -1) {
        product[index] = "renombrado"

    }
}
cambioNombre(electrodomesticos,nombreCambio)
console.log(electrodomesticos); */

// ejercicio 4i

let unificaArray = (product) => product.join(" ")
console.log(unificaArray(electrodomesticos));
