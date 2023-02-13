let inputNumber = parseFloat(prompt("Dame un número: "))
if (inputNumber){
    exercise01(inputNumber)
}else if (inputNumber == 0){
    document.write(inputNumber, " es par.")
}else{
    alert("El dato introducido no es válido")
}

function exercise01(inputNumber){
    if(Number.isInteger(inputNumber)){
        if(inputNumber % 2 == 0){
            document.write(inputNumber, " es par.")
        } else if(inputNumber % 2 != 0){
            document.write(inputNumber, " es impar.")
        }
    }else{
        alert("Ese número es decimal.")
    }
}
    