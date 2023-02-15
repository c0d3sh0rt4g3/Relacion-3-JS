function exercise25(limit){
    var product = 1
    for(let i=1; i <= limit; i++){
        product *= i
    } 
    return product
}

let limit = prompt("Introduzca el límite:")
if(limit > 0 && limit == parseInt(limit)){
    document.write(`El resultado del product es ${exercise25(limit)}`)
} else { document.write("Introduzca un número entero positivo.") }