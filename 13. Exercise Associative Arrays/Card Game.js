function solve(arr) {
  let players = new Map();
  let finalResults = {};
  let cardTooStronk = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardMultiplier = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  for (let line of arr) {
    let tokens = line.split(": ");
    let name = tokens.shift();
    let cardString = tokens[0];
    let deckArr = cardString.split(", ");
    if (!players.has(name)) {
      players.set(name, new Set());
    }
    for (let card of deckArr) {
      players.get(name).add(card);
    }
  }
  for (let [key, value] of players) {
    let sum = 0;
    for (let hand of value) {
      let cardInfo = hand.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");
      if (cardPower >= 2 && cardPower <= 10) {
        sum += Number(cardPower) * cardMultiplier[cardType];
      } else {
        sum += cardTooStronk[cardPower] * cardMultiplier[cardType];
      }
    }
    finalResults[key] = sum;
  }
  Object.entries(finalResults).forEach((x) => console.log(`${x[0]}: ${x[1]}`));
}

solve([
  "Peter: 2C, 4H, 9H, AS, QS",

  "Tomas: 3H, 10S, JC, KD, 5S, 10S",

  "Andrea: QH, QC, QS, QD",

  "Tomas: 6H, 7S, KC, KD, 5S, 10C",

  "Andrea: QH, QC, JS, JD, JC",

  "Peter: JD, JD, JD, JD, JD, JD",
]);
console.log(`----------`);
solve([
  "John: 2C, 4H, 9H, AS, QS",

  "Slav: 3H, 10S, JC, KD, 5S, 10S",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Slav: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "John: JD, JD, JD, JD",
]);
