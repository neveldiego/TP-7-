const sumarRango = (num1, num2) =>{
    let suma = 0;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    for (i = num1 ; i <= num2; i++){
        suma += i;
        }
    return suma;
    }
    console.log(sumarRango(process.argv[2], process.argv[3]))