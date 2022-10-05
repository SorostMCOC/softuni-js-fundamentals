function solve(arr){
    let printSum = '';
    for(i = arr.length; i > 0;i--){
        let currentLetter = (arr[i - 1]);
        printSum += currentLetter + ' ';
    }
    console.log(printSum);
}

solve(['a','b','c','d','e'])
solve(['abc', 'def', 'hig', 'klm', 'nop'])
solve(['33', '123', '0', 'dd'])