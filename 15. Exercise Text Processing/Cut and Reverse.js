function solve(str) {
    arr = str.split('').reverse();
    let cut = arr.length/2;
    let partOne = arr.splice(0,cut);
    console.log(arr.join(''));
    console.log(partOne.join(''));
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
