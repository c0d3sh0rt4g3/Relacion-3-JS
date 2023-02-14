let numbOfPlants = parseFloat(prompt("¿De cuántas plantas quiere la pirámide?"))
if (numbOfPlants){
  exercise05(numbOfPlants)
}else if(numbOfPlants == 0){
  alert("Has introducido un 0 por tanto no se creará ninguna pirámide.")
}else{
  alert("El dato introducido no es válido")
}
function exercise05(numbOfPlants) {
  if(Number.isInteger(numbOfPlants) && Math.sign(numbOfPlants) == 1){
    for (let i = 0; i < numbOfPlants; i++) {
      let plant = "<br>"
      for (let j = 1; j < numbOfPlants - i; j++) {
        plant = plant + " "
      }

      for (let j = 0; j < i + 1; j++) {
        plant = plant + "*"
      }
      document.write(plant)
    }
  }else{
    alert("ERROR: Solo se admiten números enteros y positivos.")
  }
} 