/*function solve(arr) {
  let checker = arr.shift().split(' ');
  let count = 1;
  let results = {};
  let lowercased = arr.map(name => name.toLowerCase());
  for (let i = 0; i < checker.length; i++) {
    let currentCheck = checker[i];
    for (let x = 0; x <= lowercased.length; x++) {
      let currentWord = arr[x];
      if (currentCheck == currentWord) {
        if (!results.hasOwnProperty(currentWord)) {
          results[currentWord] = count;
        }else {
          results[currentWord] += count;
        }
      }
    }
  }
  Object.entries(results)
    .sort((x, y) => y[1] - x[1])
    .forEach((x) => console.log(`${x[0]} - ${x[1]}`));
}*/

function solve(arr){
    let words = arr.shift().split(' ');
    let result = new Map();
    for(let word of words){
        result.set(word,0);
    }
    for(let word of arr){
        if(result.has(word)){
            let newCount = result.get(word);
            result.set(word,newCount + 1);
        }
    }
    let sorted = Array.from(result).sort((x,y) => y[1] - x[1]);
    for(let [key,value] of sorted){
        console.log(key,'-',value);
    }
}

solve([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
