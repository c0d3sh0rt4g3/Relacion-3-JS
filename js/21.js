let mark = parseFloat(prompt("¿Cual es tu nota?"))
if (Number.isInteger(mark) && Math.sign(mark) == 1 && mark <= 10){
    exercise21(mark)
}else if(mark == 0){
    document.write("Insuficiente")
}else{
    alert("ERROR: Ese dato introducido no es válido, solo se admiten números enteros menores o iguales que 10.")
}

function exercise21(mark){
    if(mark <= 4){
        document.write("Insuficiente")
    }else if (mark == 5){
        document.write("Suficiente")
    }else if (mark == 6){
        document.write("Bien")
    }else if (mark == 7 ||mark == 8){
        document.write("Notable")
    }else if (mark == 9 || mark == 10){
        document.write("Sobresaliente")
    }else {
        document.write("Esa nota no es válida.")
    }
}