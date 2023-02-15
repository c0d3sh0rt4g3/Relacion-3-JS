function exercise30(cadena){
    numerodea = (cadena.match(/a/g) || []).length
    numdeA = (cadena.match(/A/g) || []).length
    return [numerodea, numdeA]
}

let cadena = prompt("Introduce una cadena: ")
let resultado = exercise30(cadena)
document.write(`En ${cadena} aparecen ${resultado[0]} "a" y ${resultado[1]} "A"`)

