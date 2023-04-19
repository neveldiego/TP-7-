const capitalizar = (palabra)=>{
    
palabraMayuscula =palabra[0].toUpperCase() + palabra.substring(1);
return palabraMayuscula;
}

console.log(capitalizar(process.argv[2]))