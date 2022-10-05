function solve(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[x] === arr2[y]) {
        console.log(arr1[x]);
      }
    }
  }
}

solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
