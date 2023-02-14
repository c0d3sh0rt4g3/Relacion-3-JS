let inputNumber = parseFloat(prompt("Dame un número: "))
if (inputNumber){
    document.write("El resultado es: " + exercise12(inputNumber))
}else if (inputNumber == 0){
    document.write(inputNumber, " es par.")
}else{
    alert("El dato introducido no es válido")
}

function exercise12(inputNumber){
    if(Number.isInteger(inputNumber)){
        if(inputNumber % 2 == 0){
            return false
        } else if(inputNumber % 2 != 0){
            return true
        }
    }else{
        alert("Ese número es decimal.")
    }
}
