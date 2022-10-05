function solve(arr1,arr2){
    let inputs;
    let command;
    while(command !== "print"){
        for(i = 0; i < arr2.length; i++){
            inputs = arr2[i].split(' ');
            command = inputs[0];
            let firstNum = Number(inputs[1]);
            let secondNum = Number(inputs[2]);
            let tooMany = inputs;
            tooMany.shift();
            switch(command){
                case "add":
                    add(firstNum,secondNum);
                    break;
                case "contains":
                    contains(firstNum);
                    break;
                case "addMany":
                    addMany(tooMany);
                    break;
                case "remove":
                    remove(firstNum);
                    break;
                case "shift":
                    shifting(firstNum);
                    break;
                case "sumPairs":
                    sumPairs(arr1);
                
            }
        }
    }

    function add(index,el){
        arr1.splice(index,0,Number(el));
    }
    function contains(el){
        console.log(arr1.indexOf(Number(el)));
    }
    function addMany(many){
        let index = many[0];
        many.shift();
        for(let x = 0; x < many.length;x++){
            let currentNum = Number(many[x]);
            arr1.splice((index + x),0,currentNum); 
        }
    }
    function remove(index){
        arr1.splice(index,1);
    }
    function shifting(count){
        for(let y = 0; y < count;y++){
            arr1.push(arr1[0]);
            arr1.shift();
        }
    }
    function sumPairs(array){
        let sum = [];
        let sumNumber = 0;
        if(array.length % 2 !== 0){
            array.push(0);
        }
        for(z = 0; z < array.length; z++){
            sumNumber = array[z] + array[z+1];
            z++;
            sum.push(sumNumber);
        }
        arr1 = sum;
    }

    if(command === "print"){
        console.log(`[ ${arr1.join(', ')} ]`);
    }
}

solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
solve([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
solve([1, 2, 3, 4, 5],["addMany 4 6 7 8 9 10", "addMany 0 0", "addMany 0 -2 -1","addMany 13 200 300 400 100 150 250 32","print"])