const stringPrompted = prompt("Introduzca una cadena de texto")
const isLetterRegex = /^[a-zA-Z]+$/
if(isLetterRegex.test(stringPrompted)){
        exercise02(stringPrompted)
    }else{
        alert("ERROR: La cadena no admite números ni carácteres especiales.")
    }

function exercise02(stringPrompted){
    
    if(stringPrompted == stringPrompted.toUpperCase()){
        document.write(stringPrompted + " está en mayúsculas")
    }else if(stringPrompted == stringPrompted.toLowerCase()){
        document.write(stringPrompted + " está en minúsculas")
    }else{
        document.write(stringPrompted + " tiene letras en mayúsculas y minúsculas.")
    }
}