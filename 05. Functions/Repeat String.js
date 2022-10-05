function solve(string, times){
    let printSum = '';
    for(let i = 0; i < times; i++){
        printSum += string;
    }
    return printSum;
}


console.log(solve("abc", 3))