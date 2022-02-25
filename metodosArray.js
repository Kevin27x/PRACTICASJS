//Comprobar si un valor existe en un arreglo
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
const meses2 = ["Mayo", "Junio", "Julio"]
const meses3 = ["Agosto", "Septiembre"]
const carrito = [
    {nombre: "Monitor", precio: 500},
    {nombre: "Tv", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300}
]
//INCLUDES
const resultado = meses.includes("Enero");
console.log(resultado)
//SOME para un arreglo de objetos
const existe = carrito.some( e => {
    return e.nombre === "Celular"
});
console.log(existe)
//findIndex
const indice = meses.findIndex(mes => mes === "Abril")
console.log(indice)

const indiceCarrito = carrito.findIndex(prod => prod.nombre === "Monitor")
console.log(indiceCarrito)

const indicePrecio = carrito.findIndex(prod => prod.precio === 300)
console.log(indicePrecio)
//Redux: función reductora. Total, es la sumatoria. El último dígito es el número de inicio para total
let resultadoSuma = carrito.reduce( (total,producto) => total + producto.precio, 0)
console.log(resultadoSuma)
//Filter: Filtra según condicional (De los más utilizados)
let resultadoFiltro = carrito.filter(prod => prod.precio>200)
console.log(resultadoFiltro);
//Find: Crea un nuevo arreglo según condicional. Retorna el primer elemento que cumple con la condicion
let resultadoFind = carrito.find(prod => prod.nombre === "Tablet")
console.log(resultadoFind)
//Every: Retorna un true o false, según condicional. Todos los elementos deben cumplir la condicion para retornar true. (para and)
let resultadoEvery = carrito.every(e => e.precio<1000)
console.log(resultadoEvery)
let resultadoEvery2 = carrito.every(e => e.nombre !== "Tablet")
console.log(resultadoEvery2)
//Some: Parecido al every, pero almenos 1 debe cumplir. (para or)
let resultadoSome = carrito.some(e => e.precio > 499)
console.log(resultadoSome)
//Concat: Une múltiples arreglos
const meses4 = meses.concat(meses2,meses3)
console.log(meses4)
//operador Spread: También concatena los arreglos (es más usado)
const usoSpread = [...meses, ...meses2, ...meses3]
console.log(usoSpread)
//Otros usos del operador Spread. (AGREGAR UN NUEVO OBJETO)
prodNuevo = {nombre: "Celular", precio: 1000}
const carrito2 = [...carrito, prodNuevo]
console.log(carrito2)