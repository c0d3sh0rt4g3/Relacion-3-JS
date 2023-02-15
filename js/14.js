const start = parseFloat(prompt("Introduzca el número de inicio"))
const end = parseFloat(prompt("Introduzca el número de fin"))
if(start > end){
  alert("ERROR: El número de inicio no puede ser mayor que el de finalización.")
}else if(start && end){
  exercise14(start, end)
}else{
  alert("Solo se admiten numeros enteros y mayores que 0")
}
function exercise13(number){
  if(Number.isInteger(number) && Math.sign(number) == 1){
    if (number < 2) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }else{
      return false
  }
}

function exercise14(start, end) {
    for (let number = start; number <= end; number++) {
      if (exercise13(number)) {
        document.write(number + "<br>")
      }
    }
  }