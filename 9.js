const numeroDeAes = (palabra)=>{
    let contador = 0;
    for(i=0; i< palabra.length; i++){
        if(palabra[i] === "a"){
            contador++;
        }
        
    }
    return contador
}
console.log(numeroDeAes(process.argv[2]))