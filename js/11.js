let inputNumber = parseFloat(prompt("Dame un número: "))
if (inputNumber){
    document.write("El resultado es: " + exercise11(inputNumber))
}else if (inputNumber == 0){
    document.write(inputNumber, " es par.")
}else{
    alert("El dato introducido no es válido")
}

function exercise11(inputNumber){
    if(Number.isInteger(inputNumber)){
        if(inputNumber % 2 == 0){
            return 1
        } else if(inputNumber % 2 != 0){
            return 0
        }
    }else{
        alert("Ese número es decimal.")
    }
}
