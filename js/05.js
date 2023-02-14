let numbOfPlants = parseFloat(prompt("¿De cuántas plantas quiere la pirámide?"))
if (numbOfPlants){
    pyramid(numbOfPlants)
}else{
    alert("El dato introducido no es válido")
}
function pyramid(numbOfPlants) {
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
} 