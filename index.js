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
            //
            return fiii;
        }
        //
        return fii;
    }
    //
    return fi;
}
console.log(fe()()()())
///
const Q = "ABCD";
const feX = () => {
    const W = "EFGH";
    
    return fi = () => {
        const R = "IJK";
        return Q + W + R;        
    };
};
const anidadas = (feX()());
console.log(anidadas)




//CONTADOR
//contadorUno existe como argumento de la función, y toma el valor de cero por defecto (si no se señala un valor )
function crearContador(contadorUno = 0){
    
    //devuelve un objeto con diferentes funciones asignadas a sus propiedades
    return {
        aumentar: function(){
            return contadorUno++;
        },
        disminuir: function(){
            return contadorUno--; 
        },
        obtenerValor: function(){
            return contadorUno;
        }
    }
};
//contador1 devuelve un objeto (return)
const contador1 = crearContador();
//como es un objeto, podemos acceder a sus propiedades con el punto
//Como sus propiedades son funciones closures, entonces deben ejecutarse con ()
//Solo podemos acceder al valor de contador usando su función desde .obtenerValor
//tampoco podemos modificar el contadorUno
contador1.aumentar()
console.log(contador1.obtenerValor())
contador1.aumentar()
contador1.aumentar()
contador1.aumentar()
console.log(contador1.obtenerValor())
contador1.disminuir()
console.log(contador1.obtenerValor())

const contador2 = crearContador(500)
console.log(contador2.obtenerValor())
contador2.aumentar()
contador2.aumentar()
contador2.aumentar()
console.log(contador2.obtenerValor())

//
console.log('%c Éxito: usuario registrado!', 'background:green; color:white; padding: 10px; border-radius: 15px;')




