function solve(input) {
  let lost = Number(input[0]);
  let helmet = Number(input[1]);
  let sword = Number(input[2]);
  let shield = Number(input[3]);
  let armor = Number(input[4]);
  let totalprice = 0;
  for (i = 1; i <= lost; i++) {
    if (i % 2 === 0) {
      totalprice += helmet;
    }
    if (i % 3 === 0) {
      totalprice += sword;
    }
    if (i % 6 === 0) {
      totalprice += shield;
    }
    if (i % 12 === 0) {
      totalprice += armor;
    }
  }
  console.log(`Gladiator expenses: ${totalprice.toFixed(2)} aureus`);
}

solve([7, 2, 3, 4, 5]);
solve([23, 12.5, 21.5, 40, 200]);
