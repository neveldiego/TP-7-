const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]

const duplicar =(arr)=>{
    const newarr=[];
    arr.forEach(element => {
       let doble = element*2;
       newarr.push(doble);
    });
    return newarr;
}
console.log(duplicar(arr));