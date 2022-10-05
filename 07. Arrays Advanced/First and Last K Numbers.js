/*function k(array){
    let sliced = [];
    for(let i = 1; i <= array[0];i++){
        sliced = array.slice(i,(i+array[0]));
        if((i + array[0]) > array.length){
            break;
        }else{
            console.log(sliced.join(" "));
        }
    }
}*/

function k(array){
    let sliced = array.shift();
    let firstK = array.slice(0,sliced);
    let lastK = array.slice(-sliced);
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}

k([2, 7, 8, 9])
k([3, 6, 7, 8, 9])