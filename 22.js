const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]

const pares = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(i);
            
        }
        
    }return newArr;
}

console.log(pares(arr));