const base = Number(prompt("Introduzca la base:"))
const exponente = parseFloat(prompt("Introduzca el exponente:"))

if (base && exponente && Number.isInteger(exponente) && Math.sign(exponente) == 1){
    document.write(base + "^" + exponente + " = " + exercise15(base, exponente))
}else{
    alert("Solo se admiten números enteros")
}

function exercise15(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado *= base;
    }
    return resultado;
}

alert(resultado)