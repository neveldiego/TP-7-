const numeroDeAes = (palabra, caracter)=>{
    let contador = 0;
    for(i=0; i< palabra.length; i++){
        if(palabra[i] === caracter){
            contador++;
        }
        
    }
    return contador
}
console.log(numeroDeAes(process.argv[2], process.argv[3]))