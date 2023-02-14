let times = parseFloat(prompt("Introduzca un número:", 1))
let character = prompt("Introduzca un carácter:")
if(times){
    exercise07(times)
}else if(times == 0){
    alert("Has introducido 0 por tanto no se escribirá el * ninguna vez.")
}else{
    alert("ERROR: No has introducido un número.")
}

function exercise07(times){
    if (Number.isInteger(times) && Math.sign(times) == 1){
        document.write(character.repeat(times))
    }else{
        alert("ERROR: Solo se admiten números positivos y enteros.")
    }
}