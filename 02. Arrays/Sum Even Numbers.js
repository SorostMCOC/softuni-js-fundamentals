/*function solve(arr){
    let currentNum = 0;
    let printSum = 0;
    for(i = 0; i < arr.length;i++){
        currentNum = arr[i];
        let parsedNum = parseInt(currentNum, 10);
        if(parsedNum % 2 === 0){
            printSum += parsedNum;
        }
    }
    console.log(printSum);
}*/

function solve(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let printSum = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      printSum += num;
    }
  }
  console.log(printSum);
}

solve(["1", "2", "3", "4", "5", "6"]);
solve(["3", "5", "7", "9"]);
solve(["2", "4", "6", "8", "10"]);
