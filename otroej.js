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
const carritoDeCompras= {
   _carrito: [ ],
    _ticket: 0,
    cupon: null,
    agregarProductos(id){
        for (let producto of listaProductos.lista){
            if (producto.id == id){
                this._carrito.push(producto);
            }
        }
    },

    borrarProducto (id) {
        let index = this._carrito.findIndex((producto)=>{
            return producto.id == ID;
        });
        this._carrito.splice(index, 1);
    },

    get carrito () {
        let carrito = [ ];
        for (let producto of this._carrito) {
            carrito.push(producto.infoProd)
        }
        return carrito
    },

    asignarDescuento (descuento) {
        this.cupon = new Cupon (descuento);
    },

    get ticket () {
        let ticket= 0;
        for (let producto of this._carrito){
            ticket += producto.precioConDescuento;
        }
        
        return this.cupon.aplicarDescuento(ticket);
    }
}

const listaProductos = {
    lista: [],
    agregarProductos(producto){
        this.lista.push(producto);
    },
    
    buscarProducto(id){
        for (let producto of this.lista) {
            if (producto.id == id){
                return producto
            }
        }
    },

    modificarPrecio(id, newPrice){
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
     constructor (id, marca, precio, descuento){
        this.id= id;
        this.marca = marca;
        this.precio = precio;
        this.descuento = (descuento*this.precio)/100;
        this.precioConDescuento = this.precio - this.descuento;
        listaProductos.agregarProductos(this)
    }
}

class Perfume extends Producto {
    constructor(id, marca, precio, descuento,fragancia){
        super(id, marca, precio, descuento),
        this.fragancia= fragancia
    }

    get infoProd () {
        return `${this.id} - Perfume ${this.marca}, fragancia de ${this.fragancia}. Precio de lista: ${this.precio} Precio con descuento: ${this.precioConDescuento}`
     };
}



class Chocolate extends Producto {
    constructor(id, marca, nombre, precio, descuento, porcentaje, leche, tipo, extras){
        super(id, marca, precio, descuento),
        this.nombre = nombre,
        this.porcentaje=porcentaje,
        this.leche=leche,
        this.tipo=tipo,
        this.extras=extras
    }

    get infoProd () {
        let tieneLeche = "con"
        if (this.leche==false){
            tieneLeche="sin"
        } 
        return ` ${this.id} - Chocolate ${this.marca} ${this.nombre}, ${this.porcentaje} de cacao, ${tieneLeche} leche, con ${this.extras}. Precio de lista: ${this.precio} Precio con descuento: ${this.precioConDescuento}`
     };
}

class Auriculares extends Producto {
    constructor(id, marca, modelo, precio, descuento, wireless, tipo){
        super(id, marca, precio, descuento),
        this.modelo = modelo,
        this.wireless=wireless,
        this.tipo=tipo
    }

    get infoProd () {
        let esWireless = "";
        if (this.wireless==true){
            esWireless = "wireless"
        }
        return `${this.id} - Auriculares ${this.marca}, modelo ${this.modelo} ${esWireless}, ${this.tipo}. Precio de lista: ${this.precio} Precio con descuento: ${this.precioConDescuento}`
     };
}

class Cupon {
    constructor (descuento){
        this.descuento = descuento;
    }
    aplicarDescuento(precio) {
        precio -= (this.descuento*precio)/100;
        return precio
    }
}


module.exports  = {
    Producto,
    Perfume,
    Chocolate,
    Auriculares,
    Cupon,
    listaProductos,
    carritoDeCompras
}