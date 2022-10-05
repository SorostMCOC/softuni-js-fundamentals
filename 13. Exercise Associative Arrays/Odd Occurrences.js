function solve(text) {
  let arr = text.toLowerCase().split(" ");
  let result = new Map();
  let final = "";
  for (let word of arr) {
    if (result.get(word) == undefined) {
      result.set(word, 1);
    } else {
      let newRes = result.get(word);
      result.set(word, newRes + 1);
    }
  }
  let newArr = Array.from(result);
  for (let [key, value] of newArr) {
    if (value % 2 == 1) {
      final += key + " ";
    }
  }
  console.log(final);
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log(`-----------`)
solve("Cake IS SWEET is Soft CAKE sweet Food");
