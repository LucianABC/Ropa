const productos =require('./otroej'); 

const Producto = productos.Producto;
const Perfume = productos.Perfume;
const Auriculares = productos.Auriculares;
const Chocolate = productos.Chocolate;
const Cupon = productos.Cupon;
let listaProductos = productos.listaProductos;

beforeEach (() => {
    listaProductos.lista = [];
    
});



test('borrar producto de la lista', () => {
    const perfume1 = new Perfume(99,"Kenzo", 500, "Rosas");
    const chocolate1 = new Chocolate (76,"Milka", "Uno", 40, "50%",false,"aireado","almendras");
    const auriculares1 = new Auriculares (88,"Samson","T-1000", 2500, true, "cerrados");
    let previousLength= listaProductos.lista.length;
    listaProductos.borrarProducto(76);
    expect(previousLength).toBeGreaterThan(listaProductos.lista.length);
});


test('aplico un descuento del 10 porciento en un chocolate',()=>{
    const chocolate2 = new Chocolate (76,"Milka", "Uno", 80, "50%",false,"aireado","almendras");
    expect(chocolate2.aplicarDescuento(10)).toBe(72);
});
