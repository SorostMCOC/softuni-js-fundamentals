function solve(arr){
    let newArr = [arr].join(" ");
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < newArr.length; i++){
        el = Number(newArr[i]);
        if(el % 2 === 0){
            evenSum += el;
        }else{
            oddSum += el;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435)