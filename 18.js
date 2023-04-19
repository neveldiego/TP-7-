let arr = [1, 2, 3, 4, 5];


const max = (arr)=> {
    let mayor = 0;
    for(i=0; i <= arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i];           
        }  
    }
    return mayor;
}
console.log(max(arr));
