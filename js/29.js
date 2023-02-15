function tabla(numero){
    var listaResultados = []
    for(i=0;i<=10;i++){
        listaResultados.push(i*numero)
    }
    return listaResultados
}

function tablaIniFinal(listaTabla,ini,final){
    for(i=ini;i<=10 && i<=final;i++){
        document.write(`${listaTabla[i]}<br>`)
    }
}

do{
    var numIntroducido=prompt("Introduce un número entero")
}while(numIntroducido!=parseInt(numIntroducido) || numIntroducido<0)

resultado1=tabla(numIntroducido)

do{
    var iniIntroducido=prompt("Introduce un número entero")
}while(iniIntroducido!=parseInt(iniIntroducido) || iniIntroducido<0)

do{
    var finalIntroducido=prompt("Introduce un número entero")
}while(finalIntroducido!=parseInt(finalIntroducido) || finalIntroducido<0)

tablaIniFinal(resultado1,iniIntroducido,finalIntroducido)