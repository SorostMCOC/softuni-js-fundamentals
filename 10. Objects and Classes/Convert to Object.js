function solve(convert){
    let obj = JSON.parse(convert);
    let entries = Object.entries(obj)
    for(let [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
}


solve('{"name": "George", "age": 40, "town": "Sofia"}')