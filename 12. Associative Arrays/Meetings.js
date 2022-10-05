function solve(arr) {
  let meetings = {};
  for (let i = 0; i < arr.length; i++) {
    let [day, name] = arr[i].split(" ");
    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      meetings[day] = name;
    }
  }
  Object.entries(meetings).forEach((x) => console.log(`${x[0]} -> ${x[1]}`));
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
solve([
  "Friday Bob",

  "Saturday Ted",

  "Monday Bill",

  "Monday John",

  "Wednesday George",
]);
