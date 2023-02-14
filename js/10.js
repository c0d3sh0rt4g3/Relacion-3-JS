const start = parseFloat(prompt("Introduzca un valor de inicio:"))
const end = parseFloat(prompt("Introduzca un valor de finalización:"))

if(start && end){
    exercise10(start, end)
}else if(start){
    alert("ERROR: El segundo dato introducido no es válido.")
}else if(end){
    alert("ERROR: El primer dato introducido no es válido.")
}else{
    alert("ERROR: Ninguno de los datos introducidos es válido.")
}

function exercise10(start, end){
    if(Number.isInteger(start) && Number.isInteger(end) && Math.sign(start) == 1 && Math.sign(end) == 1){
        if(start > end){
            let init = start
            start = end
            end = init
            document.write("Inicio: " + start + "<br>Final: "+ end)
        }else{
            document.write("Inicio: " + start + "<br>Final: "+ end)
        }
    }else{
        alert("ERROR: Solo se admiten números positivos y enteros.")
    }
}