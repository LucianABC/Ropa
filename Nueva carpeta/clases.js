
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
    constructor(color, material, marca) {
        this.color = color,
        this.material = material,
        this.marca = marca,
        this.materialesLavables= ["algodon", "jean", "jersey", "poliester"];
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

/**
  * Transformar los distintos tipos de ropa
  * del ejercicio anterior a nuevas clases
  * que extiendan de la clase principal.
*/

class Calzado extends Ropa{
    constructor(talle, color, material, marca,tieneCordones){
        super(color, material,marca);
        this.cordones = {
            tiene: tieneCordones, 
            atados: false};
        this.talle = talle;
    } 

    calzar () {
        return "Te calzaste"
    };

    atarCordones () {
        if (this.cordones.tiene==false || this.cordones.atados==true){
            throw "Este calzado no puede ser atado"
        }
        return "Te ataste los cordones"
    }
}

class Bottom extends Ropa {
    constructor(color, material, marca, talle){
        super(color, material, marca);
        this.talle = talle;
    } 
}

class Falda extends Bottom {
    constructor(color, material, marca, talle, tipo, largo){
        super(color, material, marca, talle);
        this.tiposDeFalda = ["A-line", "recta", "campana", "lápiz"]
        this.tipo="";
        if (this.tiposDeFalda.indexOf(tipo)==-1){
            throw "No es un tipo de falda válido"
        } else {
            this.tipo=tipo;
        }
        this.largo=largo;     
    }
}

class Pantalon extends Bottom {
    constructor(color, material, marca, talle, largo){
        super(color, material, marca, talle);
        this.largosDePantalon = ["shorts", "pescadores", "largos"];
        this.largo="";
        if  (this.largosDePantalon.indexOf(largo)==-1){
            throw "No es un largo válido"
        } else {
            this.largo=largo;
        }
    }
    
    poner() {
        return "Te pusiste el pantalon"
    }
}

class Top extends Ropa {
    constructor(color, material, marca, talle){
        super(color, material, marca);
        this.talle = talle;
    }    
}

class Remera extends Top {
    constructor(color, material, marca, talle, mangas){
        super(color, material, marca, talle);
        this.mangas=mangas;
    }
}

class Camisa extends Top {
    constructor(color, material, marca, talle, mangas, abotonada=false){
        super(color, material, marca, talle);
        this.mangas=mangas;
        this.abotonada = abotonada;
    }

    abotonar() {
        if (this.abotonada==true){
            throw "Ya está abotonada"
        }
        return "Te abotonaste la camisa"
    }
}

module.exports = {
    Ropa,
    Calzado,
    Bottom,
    Top,
    Falda,
    Pantalon,
    Camisa,

 }

