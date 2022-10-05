function solve(word,text) {
    text = text.toLowerCase();
    word = word.toLowerCase();
    let words = text.split(' ');
    for (const wordd of words) {
        if(word === wordd){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}

solve(
  "Javascript",

  "JavaScript is the best programming language"
);
