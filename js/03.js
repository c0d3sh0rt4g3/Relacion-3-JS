const phrase = prompt("Introduzca una frase:")
const isLetterRegex = /^[a-z A-Z]+$/
if(isLetterRegex.test(phrase)){
    exercise03(phrase)
}else{
    alert("No se admiten números ni caracteres especiales.")
}
function exercise03(phrase){
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