// Esta es mi función que suma dos números
const fromEuroToDollar = (a)=> {
    return a * 1.07
}

const fromDollarToYen = (b)=> {
    return b * 156.5
}

const fromYenToPound = (c)=> {
    return c * 0.87
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen , fromYenToPound };