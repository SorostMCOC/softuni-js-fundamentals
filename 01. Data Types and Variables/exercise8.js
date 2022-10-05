function solve(num1, operator, num2){
    let sum = 0;
    if(operator === '+'){
        sum = num1 + num2;
    }else if(operator === '-'){
        sum = num1 - num2;
    }else if(operator === '/'){
        sum = num1/num2;
    }else{
        sum = num1*num2;
    }
    console.log(sum.toFixed(2));
}


solve(5,'+',10)
solve(25.5, '-', 3)

