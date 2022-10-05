function factorial(a,b){
    let sum1 = a;
    let sum2 = b;
    for(let i = 1; i < a; i++){
        sum1 *= (a - i);
    }
    for(let x = 1; x < b; x++){
        sum2 *= (b - x);
    }
    let final = sum1/sum2;
    console.log(final.toFixed(2));
}

factorial(5,2)