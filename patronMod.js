// Definir módulo. Función anonima autoejecutable y closures, con objeto literal
const usuario1 = {
    nombre: "Juan",
    apellido: "Perez",
    password: "123456",
    saludar: function(){
        console.log(`Bienvenido ${nombre} ${apellido}`)
    }
};

const usuario2 = (function(){
    const nombre = "Juan";
    const apellido = "Perez";
    const password = "123456";
    const saludar = function(){
        return (`Bienvenido ${nombre} ${apellido}`)
    }
    
    return {
        saludar,
        nombre
    }
})();
