var opcion = prompt("¿Cómo desea ingresar las notas? \n 1. De una en una. \n 2. Todas juntas separadas por comas.")
if(opcion == 1){
  notasClase1()
}else if(opcion == 2){
  notasClase2()
}else{
  document.write("Opción no válida.")
}
function notasClase1() {
  var notas = []
  var totalNotas = 0
  var aprobados = 0
  var suspensos = 0
  var nota = parseInt(prompt("Ingrese una nota:"))
  while (nota >= 0) {
    notas.push(nota)
    totalNotas += nota
    if (nota >= 5) {
      aprobados++
    } else {
      suspensos++
    }
    nota = parseInt(prompt("Ingrese otra nota:"))
  }
  mediaClase(aprobados, suspensos, totalNotas, notas)
}
function notasClase2(){
  var notas = []
  var totalNotas = 0
  var aprobados = 0
  var suspensos = 0
  var notasString = prompt("Ingrese todas las notas separadas por comas:");
  notas = notasString.split(",")
  for (var i = 0; i < notas.length; i++) {
    var nota = parseInt(notas[i])
    totalNotas += nota
    if (nota >= 5) {
      aprobados++
    } else {
      suspensos++
    }
  }
  mediaClase(aprobados, suspensos, totalNotas, notas)
}
function mediaClase(aprobados, suspensos, totalNotas, notas){
  var media = totalNotas / notas.length
  document.write("Aprobados: " + aprobados + "<br>")
  document.write("Suspensos: " + suspensos + "<br>")
  document.write("Media: " + media.toFixed(2))
}