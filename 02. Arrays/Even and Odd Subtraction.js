function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let printSum = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      printSum += num;
    } else {
      printSum -= num;
    }
  }
  console.log(printSum);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
