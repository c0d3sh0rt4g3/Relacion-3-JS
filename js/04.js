function exercise04() {
    let numbOfPlants = 5
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
pyramid()