function そふつうに(text){
    let arr = [];
    let newArr = [];
    let newText = text.split(' ');
    for(let char of newText){
        if(char.startsWith('#') && char.length > 1){
            arr.push(char);
        }
    }
    for(let word of arr){
        word = word.replace('#','');
        let boo = true;
        for(let c of word){
            if(Number(c)){
                boo = false;
                break;
            }
        }
        if(boo){
            console.log(word);
        }
    }
}

そふつうに('Nowadays everyone uses # to tag a #special word in #socialMedia')