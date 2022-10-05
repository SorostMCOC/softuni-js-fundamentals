function solve(arr) {
    let phoneBook = {};
    for(let i = 0; i < arr.length;i++){
        let [name,phone] = arr[i].split(' ');
        phoneBook[name] = phone;

    }
    Object.entries(phoneBook).forEach(x => console.log(`${x[0]} -> ${x[1]}`));
}

solve([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
