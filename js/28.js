function exercise28(numero){
    var sumaTotal=0
    for(i=0;i<=10;i++){
        sumaTotal+=i*numero
    }
    document.write(sumaTotal)
}

do{
    var numIntroducido=prompt("Introduce un nÃºmero entero")
}while(numIntroducido!=parseInt(numIntroducido) || numIntroducido<0)

exercise28(numIntroducido)