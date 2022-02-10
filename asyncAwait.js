//Base de datos
const datosProductos = [
    {id :"1", producto : "Notebook", precio : 2000},
    {id :"2", producto : "Computador", precio : 3500},
    {id :"3", producto : "Televisor", precio : 1500},
    {id :"4", producto : "Samsung", precio : 2200},
    {id :"5", producto : "Ipad", precio : 5500},
    {id :"6", producto : "Iphone", precio : 6100}
];
//Función que devuelve la base de datos en una promesa
function dataExterna(id){
    
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`El id es: ${datosProductos[id].id} || Producto: ${datosProductos[id].producto} || Precio: ${datosProductos[id].precio}`)
        },1000); 
    });
};
//Función asíncrona que "espera" (await) el resultado de la promesa 
async function obtenerDataExterna(id){
    const resolve = await dataExterna(id)
    console.log(resolve);
};
//Ejecución de la función Async/Await
obtenerDataExterna(2);