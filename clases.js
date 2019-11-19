
/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */

 class Ropa {
    constructor(tipo, nombre, medidas, color, material, tieneBotones=false) {
        this.tipo = tipo,
        this.nombre = nombre,
        this.medidas = medidas,
        this.color = color,
        this.material = material,
        this.tieneBotones = tieneBotones
        this.materialesLavables= ["algodon", "jean", "jersey", "poliester"];

    }
    
    calzar () {
        if (this.tipo !== "calzado") {
            throw "No se puede calzar algo que no es un calzado, genix"
        }
        return "Te calzaste"
    };

    abotonar () {
        if (this.tieneBotones==false) {
            throw "No podés abotonar algo que no tiene botones lol" 
        }
       return `Te abotonaste tu ${this.nombre}`
    }

    lavarEnLavarropas() {
        if (this.materialesLavables.indexOf(this.material) == -1){
            throw `Se te va a hacer percha si metes tu ${this.nombre} en el lavarropas`
        }
        return "Podes meterlo en el lavarropas re trank"
    }

    esPlanchable() {
        if (this.material !== "algodon") {
            throw "Si lo planchas se va a prender fuego"
        }
        return "Planchalo"
    }



}


module.exports = {
    Ropa
 }