const coso = require('./clases.js');
const Ropa = coso.Ropa;
const Calzado = coso.Calzado;
const Falda = coso.Falda;
const Pantalon = coso.Pantalon;
const Camisa = coso.Camisa;




test('me quiero atar los cordones', ()=> {
    const zapatillas = new Calzado ("38", "negro", "lona", "Vans", true);
    expect(zapatillas.atarCordones()).toBe("Te ataste los cordones");
});


test('me quiero atar los cordones y son panchas', ()=> {
    const panchas = new Calzado ("38", "cuadriculado", "lona", "Vans", false);
    expect(()=>{
        panchas.atarCordones()}).toThrow("Este calzado no puede ser atado");
});

test('creo una falda y mando fruta en el tipo',()=>{
    expect(()=>{
        const falda = new Falda ("roja", "algodon", "Complot", "L", "fruta")
    }).toThrow("No es un tipo de falda válido")
});

test('ingreso un largo de pantalon que no va',()=>{
    expect(()=>{
        const pantalon2 = new Pantalon ("azul", "jean", "Levis","42","cortos")
    }).toThrow("No es un largo válido")
});

test('me pongo el pantalon',()=>{
    const pantalon = new Pantalon ("azul", "jean", "Levis","42","pescadores");
    expect(pantalon.poner()).toBe("Te pusiste el pantalon");
});

test('me abotono la camisa',()=>{
    const camisa = new Camisa ("negra", "materal","Blah", "40","largas");
    expect(camisa.abotonar()).toBe("Te abotonaste la camisa");
});

test('me abotono la camisa que ya esta abotonada',()=>{
    const camisa2 = new Camisa ("negra", "materal","Blah", "40","largas",true);
    expect(()=>{camisa2.abotonar()}).toThrow("Ya está abotonada");
});