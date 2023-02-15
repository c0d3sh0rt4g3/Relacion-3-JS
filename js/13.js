const number = parseFloat(prompt("Introduzca un número para saber si es primo:"))
if (number){
    if(exercise13(number) == true){
        document.write(number + " es primo.")
    }else if(exercise13(number) == false){
        document.write(number + " no es primo.")
    }else{
        alert("ERROR: Solo se admiten enteros y positivos.")
    }
}else if(number == 0){
    document.write(number + " no es primo.")
}else{
    alert("ERROR: El dato introducido no es un número.")
}

function exercise13(number) {
    if (number < 2) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }