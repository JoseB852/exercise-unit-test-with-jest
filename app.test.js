 const { fromEuroToDollar, fromDollarToYen , fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test( "One yen is", function(){
    
    const yen = fromDollarToYen (156.5)

    const expected = 1.07 * 156.5;

    expect (fromDollarToYen(1.07)).toBe(167.455);  

})

test( "One pound", function(){
    
    const pound = fromYenToPound (156.5)

    const expected = 156.5 * 0.87;

    expect (pound).toBe(136.155);  

})