function solve(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    let a = Number(arr1[i]);
    let b = Number(arr2[i]);
    let c;
    if (i % 2 == 0) {
      arr3[i] = a + b;
    } else if (i % 2 == 1) {
      c = arr1[i] + arr2[i];
      arr3[i] = Number(c);
    }
  }
  console.log(arr3.join(' - '));
}

solve(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);

solve(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
