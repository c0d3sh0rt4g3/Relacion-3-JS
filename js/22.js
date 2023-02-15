let times = parseFloat(prompt("¿Cuantas veces se debe imprimir?", 15))
const phrase = prompt("Introduzca lo que desea repetir:")

if(Number.isInteger(times)){
    exercise22(times, phrase)
}else{
    alert("ERROR: Solo se admiten números enteros.")
}

function exercise22(times, phrase){
    if (times){
        if(times <= 0){
            alert("ERROR: El número introducido no es válido.")
        }else{
            while (times > 0){
                document.write(phrase + "<br>")
                times -= 1
            }
        }
    }else if(times == 0){
        alert("Has introducido 0 por tanto no se escribirá la frase ninguna vez.")
    }else{
        alert("ERROR: No has introducido un número.")
    }
}
