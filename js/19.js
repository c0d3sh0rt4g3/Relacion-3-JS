var start = parseFloat(prompt("Introduzca un número"))
var end = parseFloat(prompt("Introduzca otro número"))
var number = parseFloat(prompt("Introduzca otro número más"))

if(number){
    exercise19(start, end, number)
}else{
    alert("ERROR: EL número introducido no es válido.")
}
function exercise19(start, end, number){
    while(number < start || number > end){
        if(Number.isInteger(number)){
            number = parseFloat(prompt("Introduzca un número"))
        }else{
            alert("ERROR: Solo se admiten enteros.")
        }
    }
}