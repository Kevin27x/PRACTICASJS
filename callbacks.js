//setTimeout(()=>{
//    console.log("hola")
//}, 2000); 
//
//setTimeout(() => {
//    function saludar(){
//        console.log("Hola wacho")
//    }
//    saludar()
//}, 3000);
//
//setTimeout( console.log("jansasd"), 10000)
//------------------------------
//ES5 
//La funciópn getName recibe como parámetro una función. Al invocar la función, declaramos la función llamada "name" e indicamos su instrucción.
function getName (callback){
    callback("John Doe")
};
getName(function name(name){
    console.log(name)
})
//ES6
// La función flecha invocada es anónima. Pero también funciona si le indicamos un nombre
getNombre = callback => callback("John Done");
getNombre(nombre => console.log(nombre))

//------------------------------
const getCuadrado = (numero, callback) => {
    callback(Math.pow(numero, 2));
}
getCuadrado(2, (mostrarCuadrado) => console.log(mostrarCuadrado));
getCuadrado(4, (mostrarCuadrado) => console.log(mostrarCuadrado));
//----
const creaArreglo = (a,b,c,d,callback) =>{
    callback([a,b,c,d]);
}
creaArreglo("E1","E2","E3","E4", (resultado) => resultado.forEach(element => {
    console.log(element)
}));
//-------- 
const crearObjeto = (nombre, apellido, edad, rut, callback) =>{
    callback({nombre, apellido, edad, rut});
}
crearObjeto("Juan", "Suarez", 40, 1089454, resultado => {
    console.log(`La persona tiene ${resultado.edad}, su nombre es ${resultado.nombre} ${resultado.apellido} y su rut es: ${resultado.rut}`)
});
//---------
console.log("")
const numero = 200;
const calculos = (numero, callback1, callback2, callback3) => {
    return setTimeout(()=>{
        callback1(numero * 2);
        callback2(numero * numero);
        callback3(numero * 0.25);
    },2000)
};
calculos(numero, result1 => console.log(`El doble de ${numero} es: ${result1}`), result2 => console.log(`al cuadrado de ${numero} es: ${result2}`), result3 => console.log(`El 25% de ${numero} es ${result3}`));
//-----------
const evaluacion = (puntaje1, puntaje2, callback) =>{
    callback(puntaje1 + puntaje2);
};
evaluacion(5, 4, resultado => {
    if (resultado > 8){
        console.log("Haz pasado la evaluación");
    }else {
        console.log("No haz pasado la evaluación");
    }
});

//--






