function solve(arr) {
    let repeats = {};
    let count = 1;
    for(let i = 0; i < arr.length;i++){
        let word = arr[i];
        if(!repeats.hasOwnProperty(word)){
            repeats[word] = count;
        }else{
            repeats[word] += count;
        }
    }
    Object.entries(repeats)
    .sort((x, y) => y[1] - x[1])
    .forEach((x) => console.log(`${x[0]} -> ${x[1]} times`));

}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
