function solve(arr1, arr2) {
  newArr = [];
  let count = Number(arr2[0]);
  for (i = 0; i < count; i++) {
    newArr.push(arr1[i]);
  }
  let removing = Number(arr2[1]);
  for (x = 0; x < removing; x++) {
    newArr.shift();
  }
  let counter = 0;
  for (let el of newArr) {
    if (Number(el) === Number(arr2[2])) {
      counter++;
    }
  }
  console.log(`Number ${arr2[2]} occurs ${counter} times.`);
}

solve(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);

solve(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);
