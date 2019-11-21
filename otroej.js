/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
*/


const listaProductos = {
    lista: [],
    agregarProductos(producto){
        this.lista.push(producto);
    },
    
    eliminarProductos(id){

    },
    
    buscarProducto(id){
        for (let producto of this.lista) {
            if (producto.id == id){
                return producto
            }
        }
    },

    modificarPrecio(id, newPrsice){
        for (let producto of this.lista) {
            if (producto.id == id){
                producto.precio = newPrice;
            }
            return producto
        }
    },

    borrarProducto (ID) {
        let index = this.lista.findIndex((producto)=>{
            return producto.id == ID;
        });
        this.lista.splice(index, 1);
            
        return this.lista;
    }
}

class Producto {
     constructor (id, marca, precio){
        this.id= id;
        this.marca = marca;
        this.precio = precio;
        this.descuentosDisponibles = [10,15,25,30]
        listaProductos.agregarProductos(this)
    }

    aplicarDescuento (descuento) {
        if(this.descuentosDisponibles.indexOf(descuento)==-1){
            throw "No es un descuento disponible"
        }
        descuento = (descuento*this.precio)/100;
        let precioConDescuento = this.precio - descuento;
        return precioConDescuento
    }
}

class Perfume extends Producto {
    constructor(id, marca, precio, fragancia){
        super(id, marca, precio),
        this.fragancia = fragancia
    }
}

class Chocolate extends Producto {
    constructor(id, marca, nombre, precio,  porcentaje, leche, tipo, extras){
        super(id, marca, precio),
        this.nombre = nombre,
        this.porcentaje=porcentaje,
        this.leche=leche,
        this.tipo=tipo,
        this.extras=extras
    }
}

class Auriculares extends Producto {
    constructor(id, marca, modelo, precio, wireless, tipo){
        super(id, marca, precio),
        this.modelo = modelo,
        this.wireless=wireless,
        this.tipo=tipo
    }
}

class Cupon {
    constructor (){
        this.descuento = 0;
    }
}


module.exports  = {
    Producto,
    Perfume,
    Chocolate,
    Auriculares,
    Cupon,
    listaProductos
}