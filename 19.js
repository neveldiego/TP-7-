const arr = [7, 2, 3, 4, 5];
const min = (arr) => {
    const nuevoArray = arr.slice().sort(); 
    const menor = nuevoArray[0]; 
    return menor; 
  };
  
  
  console.log(min(arr)); 