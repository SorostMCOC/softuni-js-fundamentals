function solve(str) {
    let index = 1;
    let end = str.length;
    let text = [];
    text.push(str[0]);
    while(index < end){
        if(str[index] !== str[index - 1]){
            text.push(str[index]);
        } 
        index++;
    }
    console.log(text.join(''))
}

solve("aaaaabbbbbcdddeeeedssaa");
