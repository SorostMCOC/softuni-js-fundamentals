function sorting(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    console.log(result.join(' '));
}

sorting([7, 8, 9, 7, 2, 3,4, 1, 2]);
