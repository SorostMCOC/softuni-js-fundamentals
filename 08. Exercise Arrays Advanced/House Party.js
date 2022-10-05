function party(array) {
  let command;
  let goingList = [];
  for (let i = 0; i < array.length; i++) {
    command = array[i].split(" ");
    if (command[2] !== "not") {
      if (!goingList.includes(command[0])) {
        goingList.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    } else {
      if (goingList.includes(command[0])) {
        goingList = goingList.filter((x) => x !== command[0]);
      } else {
        console.log(`${command[0]} is not in the list!`);
      }
    }
  }
  console.log(goingList.join("\n"));
}

party([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
party([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
