function solve(arr1,arr2){
    let printSum = 0;
    let match = 0;
    for(let i = 0; i < arr1.length; i++){
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);
        if(num1 === num2){
            printSum += num1;
            match++;
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if(match == arr1.length){
        console.log(`Arrays are identical. Sum: ${printSum}`);
    }
}

solve(['10','20','30'], ['10','20','30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])