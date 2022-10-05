function sum(a,b,c){
    let d = a + b;
    let final;
    subtract(d,c);

    function subtract(d,c){
        final = d - c;
        console.log(final);
    }
}


sum(23,6,10)
sum(1,17,30)
sum(42,58,100)