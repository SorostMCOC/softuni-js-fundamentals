function solve(str){
    let text = str[0];
    let sentence = [];
    for(let i = 1; i < str.length;i++){
        let letter = str[i];
        if(letter == letter.toLowerCase()){
            text += letter;
        }else{
            sentence.push(text);
            text = letter;
        }
    }
    sentence.push(text);
    console.log(sentence.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan') // print as ', '