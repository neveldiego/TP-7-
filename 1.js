function contrasenaValida(contrasena) {
    if (contrasena == "2Fj(jjbFsuj" || contrasena == "eoZiugBfg9") {
        console.log("contraseña correcta");

    } else { console.log("contraseña incorrecta"); }
}
contrasenaValida(process.argv[2])