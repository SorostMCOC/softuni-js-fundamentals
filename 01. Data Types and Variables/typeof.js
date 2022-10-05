/*function echo(param){
    let str = typeof param;
    console.log(str);
    if(str === "string" || str === "number"){
        console.log(str);
    }else{
        console.log(`Parameter is not suitable for printing.`);
    }
}

echo(["Hello, JavaScript"]);

echo(["7"]); */

function echo(input){
    const dataType = typeof(input);
    console.log(dataType);
    if(dataType == 'string' || dataType == 'number'){
        console.log(dataType);
    }else{
        console.log(`Parameter is not suitable for printing`)
    }
}

echo(["Hello, JavaScript"]);

echo(["7"]);