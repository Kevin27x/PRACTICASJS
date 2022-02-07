//class Producto{
//    constructor(nombre, precio, sku){
//        this.nombre = nombre;
//        this.precio = precio;
//        this.sku = sku;
//    }
//    generarCodigo(){
//        console.log(this.nombre + this.precio + this.sku);
//    };
//};
//
//class Movil extends Producto{
//    constructor(nombre, precio, sku, sistemaOperativo){
//        super(nombre,precio,sku);
//        this.sistemaOperativo = sistemaOperativo;
//    }
//    generarCodigo(){
//        console.log(this.nombre + this.precio + this.sku + this.sistemaOperativo);
//    }
//}
//Agregar closures al código anterior para proteger la informacion

class Producto{
    constructor(nombre, precio, sku){
        let _nombre = nombre;
        let _precio = precio;
        let _sku = sku;

        this.getNombre = () => {
            return _nombre;
        }
        this.setNombre = (nuevoNombre) => {
            _nombre = nuevoNombre;
        }
        this.getPrecio = () => {
            return _precio;
        }
        this.setPrecio = (nuevoPrecio) => {
            _precio = nuevoPrecio;
        }
        this.getSku = () => {
            return _sku;
        }
        this.setSku = (nuevoSku) => {
            _sku = nuevoSku;
        }
    }
    get nombre(){
        return this.getNombre();
    }
    set nombre(nuevo_nombre){
        this.setNombre(nuevo_nombre);
    }
    get precio(){
        return this.getPrecio();
    }
    set precio(nuevo_precio){
        this.setPrecio(nuevo_precio);
    }
    get sku(){
        return this.getSku()
    }
    set sku(nuevo_sku){
        this.setSku(nuevo_sku)
    }
    generarCodigo(){
        console.log(`${this.nombre} | ${this.precio} | ${this.sku}`);
    };
};

class Movil extends Producto{
    constructor(nombre, precio, sku, sistemaOperativo){
        super(nombre,precio,sku);
        this.sistemaOperativo = sistemaOperativo;
    }
    generarCodigo(){
        console.log(this.nombre + this.precio + this.sku + this.sistemaOperativo);
    }
}

//var a = function(){
//    console.log("Hola soy una función dentro de una variables global")
//};
//var b = (function(){
//    console.log("SOY una función autoejecutable, dentro de una variable global")
//})();
//const fexterna = () => {
//    let texto = "Varible dentro de la funcion"
//    closure = () => {
//        console.log(texto);
//    }
//    return closure;
//};
////
//console.log(fexterna()())

//const suma = () => {
//    return {
//        calculo: function calculo(a,b){
//            return a+b
//        }
//    }
//    
//}
////console.log(suma().calculo(5,8))
//function crearContador(conteo = 0){
//    
//    function aumenta(){
//        let conteoNuevo = conteo++;
//        return conteoNuevo;
//    }
//    function resta(){
//        let conteoNuevo = conteo--;
//        return conteoNuevo;
//    }
//    function muestra(){
//        let conteoNuevo = conteo;
//        return conteoNuevo;
//    }
//    return{
//        aumenta,
//        resta,
//        muestra
//    }
//}
//const contadorX = crearContador();
//console.log(contadorX.aumenta())
//console.log(contadorX.aumenta())
//console.log(contadorX.aumenta())
//console.log(contadorX.resta())
//console.log(contadorX.muestra())

//Patron módulo es la mezcla entre "closures" y funciones IFFE (autoejecutadas)
//const modulo = (function (){
//    let password;
//    function getPass(){
//        return password;
//    };
//    function setPass(nuevoPass){
//        password = nuevoPass;
//    };
//    return {
//        get: getPass(),
//        set: function(nuevo){
//            setPass(nuevo)
//        }
//    }
//})();
console.log("hola")