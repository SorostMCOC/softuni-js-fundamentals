function そふつうに(text,censor) {
    while(text.includes(censor)){
        text = text.replace(censor,'*'.repeat(censor.length));
    }
    console.log(text);

}

そふつうに("A small sentence with some words", "small");
