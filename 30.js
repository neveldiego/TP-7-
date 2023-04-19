let arreglo = [
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ]

const numAsteriscos = (arreglo) => {
    let arr = arreglo.flat();
    return arr.reduce((count, element) => {
      return count + (element === "*" ? 1 : 0);
    }, 0);
  };
  console.log(numAsteriscos(arreglo));