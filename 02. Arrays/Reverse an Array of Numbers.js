function solve(input, arr){
    let printSum = '';
    for(i = input; i > 0; i--){
        let currentNum = Number(arr[i - 1]);
        printSum += currentNum + ' ';
    }
    console.log(printSum);
}

solve(3, [10,20,30,40])
solve(4, [-1,20,99,5])