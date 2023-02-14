let base = parseFloat(prompt("Introduzca la base:"))
let height = parseFloat(prompt("Introduzca la base:"))
if(base && height){
    exercise09(base, height)
}else{
    alert("ERROR: Datos no válidos introducidos.")
}
function exercise09(base, height) {
    if(Number.isInteger(base) && Number.isInteger(height) && Math.sign(base) == 1 && Math.sign(height) == 1){
        document.write("#".repeat(base) + "<br>")
        
        for (let i = 2; i < height; i++) {
        document.write("#" + " ".repeat(base - 2) + "#" + "<br>")
        }
        
        if (height > 1) {
        document.write("#".repeat(base) + "<br>")
        }
    }else{
        alert("ERROR: Solo se admiten números positivos y enteros.")
    }
}  
