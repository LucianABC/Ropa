const coso = require('./clases.js');
const Ropa = coso.Ropa;
const Calzado = coso.Calzado;
const Falda = coso.Falda;




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

