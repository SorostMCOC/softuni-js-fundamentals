function solve(arr){
    let condensed = [];
    for(let el of arr){
        condensed.push(el);
    }
    while(condensed.length > 1){
        let tempArr = [];
        for(let i = 0; i < condensed.length - 1; i++){
            tempArr[i] = condensed[i] + condensed[i + 1];
        }
        condensed = tempArr;
    }
    console.log(condensed.join());
}

solve([2,10,3])
solve([5,0,4,1,2])