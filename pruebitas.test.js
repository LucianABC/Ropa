const coso = require('./clases.js');
const Ropa = coso.Ropa;



test('me quiero calzar una remera y me tira que todo mal', () =>{
    const remera = new Ropa("top", "remera", "L", "violeta", "algodon");
    expect(()=>{
        remera.calzar()
    }).toThrow("No se puede calzar algo que no es un calzado, genix");
});

test('me quiero abotonar una camisa', ()=>{
    const camisa = new Ropa("top", "camisa", "M", "azul", "algodon", true);
    expect(camisa.abotonar()).toBe("Te abotonaste tu camisa")
});

test('me quiero abotonar algo que no es abotonable(?)', ()=>{
    const remera = new Ropa("top", "remera", "L", "violeta", "algodon");
    expect(()=>{
        remera.abotonar()
    }).toThrow("No podés abotonar algo que no tiene botones lol");
});

test('quiero lavar en lavarropas algo que no se debe lavar en lavarropas', ()=> {
    const blazer = new Ropa("abrigo", "blazer", "S", "rojo", "pana", true);
    expect(()=>{
        blazer.lavarEnLavarropas()
    }).toThrow("Se te va a hacer percha si metes tu blazer en el lavarropas");
});

test('quiero lavar en lavarropas', ()=> {
    const remera = new Ropa("top", "remera", "XL", "verde", "pana");
    expect(()=>{
        remera.lavarEnLavarropas()
    }).toThrow("Se te va a hacer percha si metes tu remera en el lavarropas");
        
});

test('quiero planchar algo y si lo plancho se prende fuego', ()=>{
    const vestido = new Ropa ("vestido", "vestido", "XXL", "estampado", "seda")
    expect(()=>{
        vestido.esPlanchable()
        }).toThrow("Si lo planchas se va a prender fuego");
});