function solve(arr) {
    let map = new Map();
    for(let items of arr){
        let tokens = items.split(' ');
        let item = tokens[0];
        let quantity = Number(tokens[1]);
        if(map.has(item)){
            let current = map.get(item);
            let newQuantity = current += quantity;
            map.set(item,newQuantity);
        }else{
            map.set(item,quantity);
        }
    }
    for(let print of map){
        console.log(`${print[0]} -> ${print[1]}`);
    }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
