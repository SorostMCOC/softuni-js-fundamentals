function solve(grade){
    if(grade < 3.00){
        console.log(`Fail (${Math.floor(grade)})`);
    }else if(grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`);
    }else if(grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade >= 4.50 && grade < 5.50){
        console.log(`Very Good (${grade.toFixed(2)})`);
    }else{
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

solve(3.33)
solve(4.50)
solve(2.99)