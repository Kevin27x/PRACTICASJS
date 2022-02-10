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
// -------------------------3ra solución (con try/catch)
const div = document.getElementById("div");
async function getPhoto(){
    const url = "https://dog.ceo/api/breeds/image/random";
    try{
        //responseFetch espera la respuesta de fetch y la guarda
        const responseFetch = await fetch(url);
        //photo espera que se guarde fetch para parsear resultado de Fetch(.json())
        const photo = await responseFetch.json();
        console.log(photo);
        div.innerHTML = `<img src="${photo.message}">`;

    }catch(error) {
        console.error(error)
    }
};
getPhoto()
