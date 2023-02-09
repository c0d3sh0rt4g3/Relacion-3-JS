function main(){
    const exerciseNum = parseInt(prompt("Introduzca el ejercicio que desee ejecutar(1-32):"))
    switch(exerciseNum){
        case 1:
            exercise01()
            break
        case 2:
            exercise02()
            break
        case 3:
            exercise03()
            break
    }
}
function exercise01(){
    let number = parseInt(prompt("Give me a number: "))
    if (number){
        if(number % 2 == 0){
            document.write(number, " es par.")
        } else if(number % 2 != 0){
            document.write(number, " es impar.")
        }
    }else{
        document.write("El dato introducido no es un número.")
    }
}
function exercise02(){
    const stringPrompted = prompt("Introduzca una cadena de texto")
    const isLetterRegex = /^[a-zA-Z]+$/
    if(isLetterRegex.test(stringPrompted)){
        if(stringPrompted == stringPrompted.toUpperCase()){
            document.write(stringPrompted + " está en mayúsculas")
        }else if(stringPrompted == stringPrompted.toLowerCase()){
            document.write(stringPrompted + " está en minúsculas")
        }else{
            document.write(stringPrompted + " tiene letras en mayúsculas y minúsculas.")
        }
    }else{
        alert("ERROR: La cadena no admite números ni carácteres especiales.")
    }
}
function exercise03(){
    const phrase = "La ruta nos aporto otro paso natural"
    const phraseNoSpace = phrase.toLowerCase().replaceAll(" ", "")
    const phraseNoSpaceArray = phraseNoSpace.split("")
    const phraseNoSpaceArrayReverse = phraseNoSpaceArray.reverse()
    const phraseNoSpaceReverse = phraseNoSpaceArrayReverse.join("")
    if(phraseNoSpace == phraseNoSpaceReverse){
        document.write( phrase + " es un palíndromo.")
    }else{
        document.write( phrase + " no es un palíndromo.")
    }
}

main()