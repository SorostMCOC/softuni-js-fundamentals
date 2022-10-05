function そふつうに(replacing, text) {
    let replaced = replacing.split(', ')
    for(let word of replaced){
        let stars = '*'.repeat(word.length);
        text = text.replace(stars,word);
    }
    console.log(text);
}

/*そふつうに(
  "great",

  "softuni is ***** place for learning new programming languages"
);*/

そふつうに(
  "great, learning",

  "softuni is ***** place for ******** new programming languages"
);
