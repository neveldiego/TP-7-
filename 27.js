let arr = [0, 1, 2, 3, 4];

const numeroAPalabras =(arr)=>{
    return arr.map(element => {
        switch(element){
            case 0: return "cero";
            case 1: return "uno";
            case 2: return "dos";
            case 3: return "tres";
            case 4: return "cuatro";
            case 5: return "cinco";
            case 6: return "seis";
            case 7: return "siete";
            case 8: return "ocho";
            case 9: return "nueve";
            default: "numero no valido";
        }}
    );
};
console.log(numeroAPalabras(arr));