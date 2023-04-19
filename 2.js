const calcularImpuestos = (edad, ingresos) =>{
    if(edad>=18 & ingresos>= 1000){
        let impuesto = ingresos*0.4;
        console.log(impuesto);
    }else {console.log(0);};
    
}

calcularImpuestos(process.argv[2], process.argv[3]);