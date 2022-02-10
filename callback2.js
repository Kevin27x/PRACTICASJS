//Ejercicio guiado: Obteniendo usuarios por ID
//Simular una petición asíncrona como si se tratara de una API, retornando la información de
//un usuario pero en formato JSON. La información para el primer usuario será la siguiente:
//data = {id: 1,name: 'John',lastName: 'Doe',age: 24}. Mientras que la información
//para el segundo usuario será: data = {id: 2,name: 'Jane',lastName: 'Smith',age:
//19}.
////Por lo tanto, se debe enviar el parámetro “id” a la función para simular que se requieren los
////datos de un usuario en específico y que el tiempo de respuesta será de 1000 milisegundos.
//
//const data = [{
//    id: 1,
//    name: 'John',
//    lastName: 'Doe',
//    age: 24
//},
//{
//    id: 2,
//    name: 'Jane',
//    lastName: 'Smith',
//    age:19
//}];
//
//function datos(json, id, callback){
//    let user = id-1;
//    setTimeout(() => {
//        callback(json[user].name)
//    }, 2000)
//}
//datos(data, 2, (resultado)=>{
//    console.log(resultado)
//});

//---------------

//const data = [
//    {id: 2356256,name: 'Juan',lastName: 'Duran',age: 35},
//    {id: 27564512,name: 'Manuel',lastName: 'Perez',age: 31},
//    {id: 17658624,name: 'Jocelyn',lastName: 'Rodriguez',age: 30},
//    {id: 12345678,name: 'Maria',lastName: 'Garrido',age: 30}
//];
//function getUser(nombre, id, callback){
//    setTimeout(()=>{
//        if(nombre == "Juan" || id == "2356256"){
//            callback(`${data[0].name} ${data[0].lastName} ${data[0].age}`);
//        } else if(nombre == "Manuel" || id == "27564512"){
//            callback(`${data[1].name} ${data[1].lastName} ${data[1].age}`);
//        } else if(nombre == "Jocelyn" || id == "17658624"){
//            callback(`${data[2].name} ${data[2].lastName} ${data[2].age}`);
//        } else if(nombre == "Maria" || id == "Garrido"){
//            callback(`${data[3].name} ${data[3].lastName} ${data[3].age}`);
//        } else {
//            console.log("Ingrese un id o nombre válido")
//        }
//    }, 2000)
//};
//getUser("Juana", 2356256, result => console.log(result));

//Asumir que data es el archivo JSON que trae la API

const data = [
    {id: 2356256,name: 'Juan',lastName: 'Duran',age: 35},
    {id: 27564512,name: 'Manuel',lastName: 'Perez',age: 31},
    {id: 17658624,name: 'Jocelyn',lastName: 'Rodriguez',age: 30},
    {id: 12345678,name: 'Maria',lastName: 'Garrido',age: 30}
];
const promise = new Promise((resolve, reject) => {
    //Valor puede ser la respuesta del servidor, es decir, 404 - 200 - etc. 
    const valor = true;
    //Operación ternaria, es una contracción de un "If". Cuestiona el valor de "valor". Si "valor" es True (es decir, se cumple la condición), se ejecuta el código antes de los ":" puntos.
    valor ? resolve(data) : reject("Rechazado");
});
promise.then(
    response => console.log(response[0].name)
    ).catch(response => console.log(response));
//Then ejecuta la función callback "resolve" cuando la promesa se cumple. Mientras que Catch ejecuta la función callback "reject" cuando la promesa se rechaza. Finally, ejecuta la función callback "end" tanto si se cumple como si se rechaza.
// Las promesas pueden estar: pendiente, aceptada o rechazada
//-----------------------------------------------------------------

const x = 30;
const promise1 = new Promise((resolve, reject) => {
    if( x > 20){
        resolve(x);
    }else {
        reject("La variable es menor que 20")
    }
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve(data[0].name);
        
    }, 5000)
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data[0].lastName);
        
    }, 2000);
});
//Promise all evalúa que todas las promesas se cumplan para entregar todos los resultados
Promise.all([promise1, promise2, promise3])
    .then(
        response => {
            console.log(response) //array
            console.log(`Exito: ${response}`); //string + array
            response.forEach(element => { //elementos del array
                console.log(element);
            })
        }
    ).catch(responseError => console.log(responseError))
//Devuelve un arreglo de los resultados de cada una de las promesas.
//Podemos imprimir por separado el arreglo, iterando el array con forEach
//--------------------------------
//Ejercicio propuesto (6)
//Crear un programa con JavaScript utilizando promesas que calcule un número aleatorio
//entre el “1” y el “100”, pero que muestre el número aleatorio si y sólo si este número está
//comprendido entre “20” y “60”, ambos valores incluidos.
const promise4 = new Promise ((resolve,reject) => {
    const aleatorio = Math.floor(Math.random() *100);
    if(aleatorio >= 20 && aleatorio <=60){
        resolve(aleatorio)
    }else{
        reject(`El número es ${aleatorio}. Está fuera del rango `)
    }
    
});
promise4.then(response => console.log(`El número es ${response}. Está entre 20 y 60`)).catch(response => console.log(response))
//Usar el método promise.race y poner en carrera 3 promesas con setTimeout y valores de tiempo aleatorios. 

const promise5 = new Promise((resolve, reject) => {
    let aleatorio = Math.floor(Math.random()*10000);
    setTimeout( () => {
        resolve(`Promesa ganadora: 5 ||
    tiempo: ${aleatorio} milisegundos`)
    }, aleatorio);
});
const promise6 = new Promise((resolve, reject) => {
    let aleatorio = Math.floor(Math.random()*10000);
    setTimeout( () => {
        resolve(`Promesa ganadora: 6 ||
    tiempo: ${aleatorio} milisegundos`)
    }, aleatorio);
});
const promise7 = new Promise((resolve, reject) => {
    let aleatorio = Math.floor(Math.random()*10000);
    setTimeout( () => {
        resolve(`Promesa ganadora: 6 ||
    tiempo: ${aleatorio} milisegundos`)
    }, aleatorio);
});
Promise.race([promise5, promise6,promise7])
    .then(response => console.log(response));

//Ejercicio guiado: Promise.race, la respuesta más rápida
//En un colegio, la profesora decide dar incentivos a quien responda primero las preguntas
//que hace. El que lo haga obtendrá décimas para la próxima evaluación. Selecciona a Carlos,
//María y Cristian para que respondan. Los estudiantes piensan y dan su respuesta casi al
//mismo tiempo, ¿quién da la respuesta más rápido?//
const random = () => {
    return (Math.floor(Math.random()*2000))
};
const carlosPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Carlos")
    }, random(1000, 2000));
});
const mariaPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Maria")
    }, random(1000, 2000));
});
const cristianPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Cristian")
    }, random(1000, 2000));
});
Promise.race([carlosPromesa,mariaPromesa,cristianPromesa])
    .then(response => console.log(`El ganador es: ${response}`))


//---------------------- ASYNC/AWAIT
// getDatosExternos retorna una promesa
const getDatosExternos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve("Hola que tal")
        },1000);
    });
};
//getDatos devuelve el valor de la promesa "getDatosExternos"
const getDatos = async() =>{
    const response = await getDatosExternos();
    console.log(response)
}
getDatos()