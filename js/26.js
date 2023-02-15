function exercise26(numero){
    for(i=0;i<=10;i++){
        document.write(i*numero+"<br>")
    }
}

do{
    var numIntroducido=prompt("Introduce un nÃºmero entero")
}while(numIntroducido!=parseInt(numIntroducido) || numIntroducido<0)

exercise26(numIntroducido)