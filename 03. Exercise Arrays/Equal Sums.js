function solve(arr){
    let boolean = false;
    let currentIndex;
    for(let a = 0; a < arr.length; a++){ // middle
        let sumLeft = 0;
        let sumRight = 0;
        for(let b = a; b >= 0; b--){  // left side
            let numLeft = Number(arr[b]);
            sumLeft += numLeft;
        }
        for(let c = a; c < arr.length; c++){ // right side
            let numRight = Number(arr[c]);
            sumRight += numRight;
        }
        if(sumLeft === sumRight){
            boolean = true;
            currentIndex = a;
        }
    }
    if(boolean){
        console.log(currentIndex);
    }else{
        console.log(`no`);
    }
}

solve([1, 2, 3, 3])
solve([1, 2])
solve([1])
solve([1, 2, 3])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])