function solve(arr) {
  let companyIDs = new Map();
  for (let info of arr) {
    let [company, id] = info.split(" -> ");
    if (!companyIDs.has(company)) {
      companyIDs.set(company, new Set());
    }
    companyIDs.get(company).add(id);
  }
  let sorted = new Map([...companyIDs].sort());
  for (let [key, value] of sorted) {
    console.log(key);
    for (let employee of value) {
      console.log(`-- ${employee}`);
    }
  }
}

solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log(`-------------`);
solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
