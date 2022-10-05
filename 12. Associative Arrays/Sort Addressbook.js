function solve(arr) {
  let addressBook = {};
  for (let i = 0; i < arr.length; i++) {
    let [name, address] = arr[i].split(":");
    addressBook[name] = address;
  }
  Object.entries(addressBook)
    .sort((x, y) => x[0].localeCompare(y[0]))
    .forEach((x) => console.log(`${x[0]} -> ${x[1]}`));
}

solve([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
