function sequence(n,k){
    let newArr = [1];
    let sum = 0;
    for(let i = 1; i < n; i++ ){
        let sequenceK = newArr.slice(-k);
        for(let el of sequenceK){
            sum += Number(el);
        }
        newArr.push(sum);
        sum = 0;
    }
    console.log(newArr.join(" "));
}

sequence(6,3)
sequence(8,2)