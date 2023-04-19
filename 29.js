let arr = ["", "*", "", "*"];

const numAsteriscos = (arr) => {
    return arr.reduce((count, element) => {
      return count + (element === "*" ? 1 : 0);
    }, 0);
  };
  console.log(numAsteriscos(arr));