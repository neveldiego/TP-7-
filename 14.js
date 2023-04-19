let arr =[1, 2, 3, 4, 5, 6];
const sumarArreglo =(arr, num1, num2)=>{
    let contar = 0;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    for (let i = num1; i <= num2; i++){
        contar += arr[i];
        }
    return contar;
    }
    
    console.log(sumarArreglo(arr, process.argv[2], process.argv[3]));
