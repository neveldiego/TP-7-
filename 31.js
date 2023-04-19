

const distancia = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
    return count;
  };
  console.log(distancia(process.argv[2], process.argv[3]));