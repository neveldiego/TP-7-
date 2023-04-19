const fizzbuzz = (num)=>{
    if(num % 3 == 0 && num % 5 == 0){
        return "fizzBuzz";
    }else if(num % 5 == 0){
        return "buzz";
    }else if (num % 3 == 0){
        return "fizz";
    }else{ return "nada que ver"}
}
console.log(fizzbuzz(process.argv[2]));