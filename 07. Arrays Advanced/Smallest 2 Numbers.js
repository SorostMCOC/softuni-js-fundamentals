function solve(array){
    let result = array.sort((a,b)=>a-b);
    console.log(`${result[0]} ${result[1]}`);
}

solve([30,15,50,5])