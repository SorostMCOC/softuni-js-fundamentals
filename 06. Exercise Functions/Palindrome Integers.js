function palindrome(array){

    for(let el of array){
        let current = String(el);
        let reversed = String(el).split('').reverse().join('');
        let num1 = Number(current);
        let num2 = Number(reversed);
        if(num1 === num2){
            console.log('true');
        }else{
            console.log('false');
        }
    }

}
palindrome([123,323,421,121])
palindrome([32,2,232,1010])