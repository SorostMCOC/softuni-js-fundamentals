function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapacity = array.shift().split(" ").map(Number);
  let commands;
  for(let i = 0; i < array.length;i++){
    commands = array[i].split(" ");
    if(commands[0] === "Add"){
        let num = Number(commands[1]);
        add(num);
    }else{
        let num2 = Number(commands[0]);
        passengers(num2);
    }
  }

  function add(num){
    wagons.push(num);
  }

  function passengers(input){
    for(let x = 0; x < wagons.length;x++){
        wagons[x] = Number(wagons[x]);
        if((wagons[x] + input) <= maxCapacity){
            wagons[x] = wagons[x] + input;
            break;
        }
    }
  }
  console.log(wagons.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
