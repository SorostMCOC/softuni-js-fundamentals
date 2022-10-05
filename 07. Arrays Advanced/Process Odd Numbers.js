function solve(arr){
    let result = arr.filter((el,i) => i % 2 == 1);
    result = result.map(x => x*2);
    result = result.reverse();
    console.log(result.join(' '));

}

solve([10,15,20,25])
solve([3,0,10,4,7,3])