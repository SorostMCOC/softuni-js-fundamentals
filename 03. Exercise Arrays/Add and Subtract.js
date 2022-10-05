function solve(arr){
    let printSumOne = 0;
    let printSumTwo = 0;
    for(let i = 0;i < arr.length;i++){
        let n = Number(arr[i]);
        printSumOne += n;
        if(n % 2 == 0){
            arr[i] = n + i;
        }else{
            arr[i] = n - i;
        }
    }
    for(let x = 0; x < arr.length;x++){
        let m = Number(arr[x]);
        printSumTwo += m;
    }
    console.log(arr);
    console.log(printSumOne);
    console.log(printSumTwo);
}


solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])