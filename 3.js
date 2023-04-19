const bmi = (peso, altura) => {
    let indice = (peso /(altura**2));
    switch (true){
        case indice < 18.5: 
        console.log("Bajo de peso");
        break;
        case indice > 18.5 && indice < 24.9: 
        console.log("Normal");
        break;
        case indice > 25 & indice < 29.9: 
        console.log("Sobrepeso");
        break;
        case indice >= 30: 
        console.log("Obeso");
        break;
        default: console.log("ingrese valores correctos")
    }
}
bmi(process.argv[2], process.argv[3]);