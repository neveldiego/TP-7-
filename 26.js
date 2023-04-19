let arreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];

const imprimirMatriz = (arreglo) => {
    let arr = arreglo.flat();
    arr.forEach(element => {
       console.log(element) 
    });
}

imprimirMatriz(arreglo);