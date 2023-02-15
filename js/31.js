function exercise31(cadena, caracter){
    var regex = new RegExp(caracter,"g")
    numerodecaracter = (cadena.match(regex) || []).length
    return numerodecaracter
}

let cadena = prompt("Introduce una cadena: ")
let caracter = prompt("Introduce lo que quieras contar: ")
let resultado = exercise31(cadena, caracter)
document.write(`En ${cadena} aparecen ${resultado} de ${caracter}`)