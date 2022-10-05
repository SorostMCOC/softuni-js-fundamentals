function solve(array){
    let neighbourhood = array.shift().split('@').map(Number);
    let cupid = 2;
    let command;
    let jump;
    let currentIndex = 0;
    let sum = neighbourhood.length;
    for(let i = 0; i < array.length; i++){
        command = array[i].split(' ');
        jump = Number(command[1]);
        if(command[0] === "Jump"){
            for(let x = 0; x <= jump; x++){
                if(x === jump){

                    if((currentIndex + jump) > neighbourhood.length - 1){
                        currentIndex = 0;
                        neighbourhood.splice(0,1,(neighbourhood[0] - cupid));
                        if(neighbourhood[0] === 0){
                            console.log(`Place ${currentIndex} has Valentine's day.`);
                            sum -= 1;
                        }else if(neighbourhood[0] < 0){
                            neighbourhood[0] = 0;
                            console.log(`Place ${currentIndex} already had Valentine's day.`);
                        }
                    }else if((currentIndex + jump) <= neighbourhood.length - 1){
                        currentIndex = currentIndex + jump;
                        neighbourhood.splice(currentIndex,1,(neighbourhood[currentIndex] - cupid));
                        if(neighbourhood[currentIndex] === 0){
                            console.log(`Place ${currentIndex} has Valentine's day.`);
                            sum -= 1;
                        }else if(neighbourhood[currentIndex] < 0){
                            neighbourhood[currentIndex] = 0;
                            console.log(`Place ${currentIndex} already had Valentine's day.`);
                        }
                    }
                }
            }
        }else{
            console.log(`Cupid's last position was ${currentIndex}.`);
            if(sum == 0){
                console.log(`Mission was successful.`);
            }else if(sum > 0){
                console.log(`Cupid has failed ${sum} places.`);
            }
            break;
        }
    }
}

//solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])
solve(["10@10@10@2","Jump 1","Jump 2","Love!"])
