const capitalizar = (cadena) => {
    const palabras = cadena.split(' ');
    const capitalizadas = palabras.map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return capitalizadas.join(' ');
  };
  
  console.log(capitalizar(process.argv[2]));