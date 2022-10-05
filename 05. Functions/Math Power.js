function solve(number, times){
    let output = number;
    for(i = 1; i < times; i++){
        output *= number;
    }
    console.log(output);
}

solve(2,8)
solve(3,4)