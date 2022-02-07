class User{
    constructor(name, apellido){
        //Privado
        let _name = name;
        let _apellido = apellido;

        this.getName = () => {
            return _name;
        }
        this.getApellido = () => {
            return _apellido;
        }
        this.setName = (nuevoNombre) => {
            _name = nuevoNombre;
        }
        //Privado
    }
    //Público
    get name(){
        return this.getName();
    }
    get apellido(){
        return this.getApellido();
    }
    set Name(nuevoNombre){
        this.Name(nuevoNombre)
    }
    //Público
}
const user1 = new User("Kevin","Collao");
console.log(user1.apellido)
console.log(user1.name)

