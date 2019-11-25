const productos =require('./otroej'); 

const Producto = productos.Producto;
const Perfume = productos.Perfume;
const Auriculares = productos.Auriculares;
const Chocolate = productos.Chocolate;
const Cupon = productos.Cupon;
let listaProductos = productos.listaProductos;
const carritoDeCompras = productos.carritoDeCompras;

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

test('buscar por id', () => {
    const perfume1 = new Perfume(99,"Kenzo", 500,0, "Rosas");
    const chocolate1 = new Chocolate (76,"Milka", "Uno", 40, 0,"50%",false,"aireado","almendras");
    const auriculares1 = new Auriculares (88,"Samson","T-1000", 2500,0, true, "cerrados");
    expect(listaProductos.buscarProducto(99)).toBe(perfume1)
});

test('me muestra todos los productos', ()=>{
    const perfume1 = new Perfume(99,"Kenzo", 500, 0, "Rosas",);
    const chocolate1 = new Chocolate (76,"Milka", "Uno", 40, 0, "50%",false,"aireado","almendras");
    const auriculares1 = new Auriculares (88,"Samson","T-1000", 2500, 0, true, "cerrados");
    expect(listaProductos.lista.length).toBe(3);
});

test('a ver si funciona el coso para hacer el descuento', ()=>{
    const perfume3 = new Perfume(100, "Blah", 200, 50,"jazmin");
    expect(perfume3.precioConDescuento).toBe(100);
});

test('que me tire el precio final de toda la compra con el descuento y toda la bola',()=>{
    const perfume1 = new Perfume(99,"Kenzo", 500, 0, "Rosas",);
    const chocolate1 = new Chocolate (76,"Milka", "Uno", 500, 0, "50%",false,"aireado","almendras");
    const auriculares1 = new Auriculares (88,"Samson","T-1000", 2000, 0, true, "cerrados");
    carritoDeCompras.agregarProductos(99);
    carritoDeCompras.agregarProductos(76);
    carritoDeCompras.agregarProductos(88);
    carritoDeCompras.asignarDescuento(50)
    expect(carritoDeCompras.ticket).toBe(1500)
});


