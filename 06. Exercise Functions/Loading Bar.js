function bar(percentage){
    let bars = percentage/10;
    if(bars == 0){
        console.log(`${percentage}% [..........]`);
        console.log(`Still loading...`);
    }
    if(bars == 10){
        console.log(`${percentage}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
    if(bars > 0 && bars < 10){
        let completed = '%'.repeat(bars);
        let incomplete = '.'.repeat(10 - bars);
        console.log(`${percentage}% [${completed}${incomplete}]`);
        console.log(`Still loading...`);
    }
}