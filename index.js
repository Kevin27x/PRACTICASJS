//CLOSURES
const a = "Hola ";
function global(){
    const b = "¿Qué ";
    function local(){
        const c = "tál?";
        return a + b + c;
    }
    
    return local();
}
//console.log(global())

const miContador = (function(){
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }
    function decrementar(){
        return _contador--;
    }
    function valor(){
        return _contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})();
//console.log(typeof(miContador))
//console.log(miContador.valor())
//console.log(miContador.incrementar())
//console.log(miContador.incrementar())
//console.log(miContador.incrementar())
//console.log(miContador.incrementar())

function externa(){
    var saludar = "Hola como estás"
    return function interna(){
        return saludar
    }
}
//el doble paréntesis ejecuta la función externa e interna
//La función interna tiene acceso a las variables definidas en la función externa. Y solo está disponible si se llama a la función padre
console.log(externa()())


//CLOSURE DE FUNCIÓN SUMA
function suma(a){
    return function calculo(b){
        return a+b;
    }
}
console.log(suma(2)(6))
// 4 FUNCIONES ANIDADAS
const x = "ABCD";
const fe = () => {
    const y = "EFGH";
    //
    const fi = () => {
        const z = "IJK";
        //
        const fii = () => {
            const u = "LMN"
            //
            const fiii = () =>{
                const p = "OPQ";
                return x + y + z + u + p;
            }
            return fiii;
        }
        //
        return fii;
    }
    //
    return fi;
}
console.log(fe()()()())