var number = parseFloat(prompt("Introduzca un número"))
var number2 = parseFloat(prompt("Introduzca otro número"))

if(number){
    exercise18(number, number2)
}else{
    alert("ERROR: EL número introducido no es válido.")
}
function exercise18(number, number2){
    while(number > number2){
        if(Number.isInteger(number)){
            number = parseFloat(prompt("Introduzca un número"))
        }else{
            alert("ERROR: Solo se admiten enteros.")
        }
    }
}