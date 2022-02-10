//Crear un programa que consulte una URL que entregue fotos aleatorias de perros, siendo esta URL: https://dog.ceo/api/breeds/image/random. Además se debe implementar AsyncAwait a lo largo del ejercicio y utilizar la estructura try...catch. Para ejecutar el código y atrapar un error en el caso de existir uno. Se solicita implementar el método fetch
// -- 1era solución
/*
const div = document.getElementById("div");
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        response.json()
        .then(response => {
            div.innerHTML = `<img src="${response.message}">`
        }) 

    });
*/
// -----------2da solución
//const div = document.getElementById("div");
//const getPhoto = () => {
//    return new Promise((resolve,reject)=>{
//        const url = "https://dog.ceo/api/breeds/image/random";
//        fetch(url)
//            .then(response => {
//                response.json()
//                .then(response => {
//                    resolve(div.innerHTML = `<img src="${response.message}">`)
//                    
//                });
//            });
//    });
//};
//async function Photo(){
//    const response = await getPhoto()
//};
//Photo()
// -------------------------3ra solución
