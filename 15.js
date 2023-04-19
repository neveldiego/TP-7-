const transcribir = (cadena) => {
   let arn ="";
   cadena = cadena.toUpperCase();
   for(i=0; i<cadena.length; i++){
    switch (cadena[i]) {
        case "G": arn +="C";
        break;
        case "C": arn +="G";
        break;
        case "T": arn +="A";
        break;
        case "A": arn +="U";
        break;
        default: console.log("Inctroduzca una cadena de AND valida")
        return "";
    }
    

   }
   return arn;
}
console.log(transcribir(process.argv[2]));