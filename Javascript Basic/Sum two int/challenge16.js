function doesTheSum(num1, num2){  
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "input invalido"
    }
    else if(num1 === num2){
        return (num1 + num2) * 3
    } else{
        return num1 + num2
    }
}

console.log(doesTheSum(10,10))