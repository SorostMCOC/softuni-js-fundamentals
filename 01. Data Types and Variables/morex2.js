function solve(input) {
  if (
    input % 2 === 1 &&
    (input % 3 === 1 || input % 3 === 2) &&
    input % input === 0
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}

solve(7);
solve(8);
solve(81);
solve(17);
