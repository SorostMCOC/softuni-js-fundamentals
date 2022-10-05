function solve(arr1, arr2) {
    let storeStock = {};
    for(let x = 0;x < arr1.length; x++){
        storeStock[arr1[x]] = Number(arr1[x+1]);
        x++;
    }
    let food;
    let num;
    for(let i = 0;i < arr2.length; i++){
        food = arr2[i];
        num = Number(arr2[i+1]);
        i++;
        if(storeStock.hasOwnProperty(food)){
            storeStock[food] += num;
        }else{
            storeStock[food] = num;
        }
    }
    let entries = Object.entries(storeStock);
    for(let [key,value] of entries){
        console.log(`${key} -> ${value}`);
    }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
