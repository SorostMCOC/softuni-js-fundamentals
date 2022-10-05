function sum(array){
    let first = array.shift();
    let last = array.pop();
    first = Number(first);
    last = Number(last);
    console.log(first + last);
}

sum(['20','30','40'])