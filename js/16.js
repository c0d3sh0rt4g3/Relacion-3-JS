const num = prompt("Introduzca un número para saber su factorial:")
exercise16(num)
    
function exercise16(num){
    if(num > 0){
        for (var i = num - 1; i >= 1; i--) {
            num *= i
        }
        document.write("El factorial será " + num)
    }else if(num == 0){
        document.write("El factorial será 0")
    }else{
        alert("El dato introducido no es válido.")
    }
}