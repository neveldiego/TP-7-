const likes = (num) => {
    if (num < 1000){
        return toString(num);
    }else if(num<100000){
        return Math.floor(num/1000) + "K";
    }else {
        return Math.floor(num/1000000) + "M"
    }
    
}
console.log(likes(process.argv[2]));