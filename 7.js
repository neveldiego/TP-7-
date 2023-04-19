const contarRango = (num1, num2) =>{
let contar = 0;
num1 = parseInt(num1)
num2 = parseInt(num2)
for (i = num1 + 1; i < num2; i++){
    contar++;
    }
return contar;
}

console.log(contarRango(process.argv[2], process.argv[3]));