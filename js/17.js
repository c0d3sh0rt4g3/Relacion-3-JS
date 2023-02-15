var number = parseFloat(prompt("Introduzca un número"))

if(number){
    exercise17(number)
}else{
    alert("ERROR: EL número introducido no es válido.")
}
function exercise17(number){
    while(number <= 0){
        if(Number.isInteger(number)){
            number = parseFloat(prompt("Introduzca un número"))
        }else{
            alert("ERROR: Solo se admiten enteros.")
        }
    }
}