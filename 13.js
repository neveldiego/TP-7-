let arr = [1, 2, 3, 0, 11, 0, 7, 0, 74]
let newArr=[]
const eliminarCeros = ()=>{
    for(i=0; i<=arr.length; i++){
        if( arr[i] !== 0){
            newArr.push(arr[i])
            }
    }
    console.log(newArr)
}
eliminarCeros()