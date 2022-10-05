function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let resource = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!obj.hasOwnProperty(resource)) {
      obj[resource] = quantity;
    } else {
      obj[resource] += quantity;
    }
    i++;
  }
  Object.entries(obj).forEach((x) => console.log(`${x[0]} -> ${x[1]}`));
}

solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
