/*function simplCalculator(num1,num2,string){
    let sum = 0;
    switch(string){
        case "multiply":
            sum = (num1, num2) => num1*num2;
            break;
        case "divide":
            sum = (num1, num2) => num1 / num2;
            break;
        case "add":
            sum = (num1, num2) => num1 + num2
            break;
        case "subtract":
            sum = (num1, num2) => num1 - num2;
            break;
    }
    console.log(sum(num1,num2));
}*/

function simplCalculator(num1,num2,string){
    let sum = 0;
    switch(string){
        case "multiply":
            multiply(num1,num2);
            break;
        case "divide":
            divide(num1,num2);
            break;
        case "add":
            add(num1,num2);
            break;
        case "subtract":
            subtract(num1,num2);
            break;
    }

    function multiply(num1,num2){
        sum = num1*num2;
        console.log(sum);

    }
    function divide(num1,num2){
        sum = num1/num2;
        console.log(sum);

    }
    function add(num1,num2){
        sum = num1+num2;
        console.log(sum);

    }
    function subtract(num1,num2){
        sum = num1 - num2;
        console.log(sum);

    }
}

simplCalculator(5,10,"multiply")