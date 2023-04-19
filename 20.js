const password =(contraseña)=>{
    contraseña = contraseña.toLowerCase();
    contraseña = contraseña.replace("a", "4");
    contraseña = contraseña.replace("e", "3");
    contraseña = contraseña.replace("i", "1");
    contraseña = contraseña.replace("o", "0");
    contraseña = contraseña.replace(" ", "");
    return contraseña;
}
console.log(password(process.argv[2]))