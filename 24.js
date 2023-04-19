let arr = ["arbol", "Casa", "heladera", "Aguacate"]

const empiezaConA=(arr)=> {
    return arr.filter(letra => letra.charAt(0).toLowerCase() === "a");
}
console.log(empiezaConA(arr))