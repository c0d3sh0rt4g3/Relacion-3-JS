let height = parseFloat(prompt("¿De cuántas plantas quiere la pirámide?"))
let characterToFill = prompt("Introduzca el caracter del que quiera que esté compuesto la pirámide:")
if (height){
  exercise08(height)
}else if(height == 0){
  alert("Has introducido un 0 por tanto no se creará ninguna pirámide.")
}else{
  alert("El dato introducido no es válido")
}
function exercise08(height) {
  if(Number.isInteger(height) && Math.sign(height) == 1){
    for (var i = 1; i <= height; i++) {
        document.write(characterToFill.repeat(i) + "<br>")
      }
  }else{
    alert("ERROR: Solo se admiten números enteros y positivos.")
  }
} 