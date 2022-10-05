function solve(arr) {
  let info = {};
  for (let i = 0; i < arr.length; i++) {
    info.name = arr[i];
    info.num = arr[i].length;
    console.log(`Name: ${info.name} -- Personal Number: ${info.num}`);
  }
}

solve([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
solve(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
