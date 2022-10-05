function solve(array){
    let dungeon = array[0].split('|');
    let health = 100;
    let coins = 0;
    let rooms = 0;
    for(let i = 0; i < dungeon.length;i++){
        let command = dungeon[i].split(' ');
        let room = command[0];
        let points = command[1];
        rooms++;
        if(room === "potion"){
            points = Number(command[1]);
            if(health == 100){
                console.log(`You healed for 0 hp.`);
            }else if((health + points) <= 100){
                health = health + points;
                console.log(`You healed for ${points} hp.`);
            }else if((health + points) > 100){
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${health} hp.`)
        }
        if(room === "chest"){
            points = Number(command[1]);
            coins += points;
            console.log(`You found ${points} coins.`);
        }if(room !== "potion" && room !== "chest"){
            health = health - points;
            if(health > 0){
                console.log(`You slayed ${room}.`);
            }else{
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${rooms}`);
                break;
            }
        }
    }
    if(rooms >= dungeon.length){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])