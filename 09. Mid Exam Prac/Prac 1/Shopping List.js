function solve(array){
    let list = array.shift().split('!')
    let command;
    for(let i = 0;i < array.length;i++){
        command = array[i].split(' ');
        let doing = command[0];
        let ingredientOne = command[1];
        let ingredientTwo = command[2];
        switch(doing){
            case "Urgent":
                if(list.includes(ingredientOne)){
                    break;
                }else{
                    list.splice(0,0,ingredientOne);
                    break;
                }
            case "Unnecessary":
                if(list.includes(ingredientOne)){
                    list.splice((list.indexOf(ingredientOne)),1);
                    break;
                }else{
                    break;
                }
            case "Correct":
                if(list.includes(ingredientOne)){
                    list[list.indexOf(ingredientOne)] = ingredientTwo;
                    break;
                }else{
                    break;
                }
            case "Rearrange":
                if(list.includes(ingredientOne)){
                    list.splice((list.indexOf(ingredientOne)),1);
                    list.push(ingredientOne);
                    break;
                }else{
                    break;
                }
            case "Go":
                console.log(list.join(', '));
        }
    }

}

solve((["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]))