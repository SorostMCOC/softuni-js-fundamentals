function perfect(number){
    let sum = 0;
    for(i = 0; i < number - 1; i++){
        if(number % i == 0){
            sum += i;
            if(sum == number){
                console.log(`We have a perfect number!`);
                break;
            }
        }
    }
    if(sum != number){
        console.log(`It's not so perfect.`);
    }
}

perfect(6)
perfect(28)
perfect(1236498)
