let arr = ["arboles", "Casas", "heladera", "Aguacate"]

const empiezaConA=(arr)=> {
    return arr.filter(letra => letra[letra.length - 1] === "s");
}
console.log(empiezaConA(arr))