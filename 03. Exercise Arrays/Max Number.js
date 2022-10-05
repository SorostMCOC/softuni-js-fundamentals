function solve(arr) {
  let arr2 = [];
  for (x = 0; x < arr.length; x++) {
    let currentNum = Number(arr[x]);
    let boolean = true;
    for (let i = x + 1; i < arr.length; i++) {
      let secondNum = Number(arr[i]);
      if (currentNum <= secondNum) {
        boolean = false;
      }
    }
    if (boolean) {
      arr2.push(currentNum);
    }
  }
  console.log(arr2.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
