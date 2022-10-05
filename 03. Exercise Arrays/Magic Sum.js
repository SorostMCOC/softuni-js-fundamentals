function solve(array,magic){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            let num1 = Number(array[i]);
            let num2 = Number(array[j]);
            let sum = num1 + num2;
            if(sum === magic && i !== j && num1 > 0 && num2 > 0){
                console.log(`${num1} ${num2}`);
                array[j] = 0;
            }
        }
    }
}


solve([1, 7, 6, 2, 19, 23],8)
solve([14, 20, 60, 13, 7, 19, 8], 27)
solve([1, 2, 3, 4, 5, 6], 6)