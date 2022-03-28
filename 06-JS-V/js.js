class Persona {
    constructor(name, lastName, age, gender) {
        this.name = name,
        this.lastName = lastName,
        this.age = age,
        this.gender = gender;
    }
    bienvenida(){
        console.log(`Hola ${this.name} ${this.lastName}!!`)
    }
    despedida(){
        console.log(`Adiós ${this.name} ${this.lastName}!!`)
    }
    compraRealizada(){
        console.log(`La compra a nombre de: ${this.name} ${this.lastName}
                    \nHa sido realizada con exito!!`)
    }
} 

const peter = new Persona("Peter", "Newman", 36, "M");
const lucas = new Persona("Lucas", "Newman", 33, "M");
const roberto = new Persona("Roberto", "Newman", 6, "M");
const juana = new Persona("Juana", "Oldman", 46, "F");
const lucresia = new Persona("lucresia", "Newoldman", 3, "F");



Persona.prototype.sexual = this.sexual || "Default";