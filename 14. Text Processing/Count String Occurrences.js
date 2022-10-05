function そふつうに(sentence,word) {
    let count = 0;
    let words = sentence.split(" ");
    for (const noob of words) {
        if(noob === word){
            count++;
        }
    }
    console.log(count);
}

そふつうに(
  "This is a word and it also is a sentence",

  "is"
);
