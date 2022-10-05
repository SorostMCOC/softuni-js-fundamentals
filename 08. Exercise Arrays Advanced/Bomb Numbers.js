/*function solve(arr1,arr2){
    let bomb = arr2[0];
    for(let i = 0; i < arr1.length; i++){
        let currentNum = Number(arr1[i]);
        if(bomb === currentNum){
            arr1.splice(i-arr2[1],arr2[1]);
            let index = arr1.indexOf(bomb);
            arr1.splice(index+1,arr2[1]);
            index = arr1.indexOf(bomb);
            arr1[index] = 999;
            arr1 = arr1.filter(x => x !== 999);

        }
    }
    let sum = 0;
    for(let el of arr1){
        let currentNumber = Number(el);
        sum += currentNumber;
    }
    console.log(sum);
}*/

function solve(arr1,arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[0]){
            arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0,arr2[1] * 2 + 1);  
            i = 0;  
        }
    }
    console.log(arr1.reduce((a,b) => a + b, 0));
}

/*function solve(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}*/

solve([1, 2, 2, 4, 2, 2,2, 9],[4, 2])
solve([1, 4, 4, 2, 8, 9, 1],[9, 3])
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])