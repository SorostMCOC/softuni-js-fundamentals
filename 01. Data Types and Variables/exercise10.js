function solve(input) {
  let spice = Number(input);
  let days = 0;
  let extracted = 0;
  let eaten = 0;
  while (spice >= 100) {
    days++;
    extracted += spice;
    eaten += 26;
    spice -= 10;
  }
  eaten += 26;
  extracted = extracted - eaten;
  console.log(days);
  console.log(extracted);
}

solve(111);
solve(450);
