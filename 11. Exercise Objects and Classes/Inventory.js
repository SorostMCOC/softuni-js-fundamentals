function solve(arr) {
  let heroes = [];
  for(let i = 0; i < arr.length;i++){
    let [name,level,items] = arr[i].split(" / ");
    heroes.push({"Hero":name, level:Number(level),items:items});
  }
  heroes
    .sort((a,b) => a.level - b.level)
    .forEach(element => {
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    });
  
}
solve([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
