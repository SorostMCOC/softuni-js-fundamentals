function solve(arr) {
  let parking = {};
  for (let command of arr) {
    let [task, plate] = command.split(", ");
    if (task === "IN") {
      parking[plate] = plate[2] + plate[3] + plate[4] + plate[5];
    } else {
      delete parking[plate];
    }
  }
  if (Object.keys(parking).length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    Object.entries(parking)
      .sort()
      .forEach((x) => console.log(x[0]));
  }
}

solve([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
console.log(`---------`);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
