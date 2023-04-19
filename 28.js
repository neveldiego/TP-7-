let arr = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "dsd"];

const numeroAPalabras =(arr)=>{
    return arr.map(element => {
        switch(element){
            case "cero": return 0;
            case "uno": return 1;
            case "dos": return 2;
            case "tres": return 3;
            case "cuatro": return 4;
            case "cinco": return 5;
            case "seis": return 6;
            case "siete": return 7;
            case "ocho": return 8;
            case "nueve": return 9;
            default: return -1;
        }}
    );
};
console.log(numeroAPalabras(arr));