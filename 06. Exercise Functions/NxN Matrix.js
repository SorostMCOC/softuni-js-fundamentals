/*function matrix(a){
    let print = '';
    for(i = 0; i < a;i++){
        print = '';
        for(x = 0; x < a;x++){
            print += ' ' + a;
        }
        console.log(print);
    }
}*/

function matrix(a) {
  let str = [];
  for (let i = 0; i < a; i++) {
    let row = [];
    for (let j = 0; j < a; j++) {
      row.push(a);
    }
    str.push(row.join(" "));
  }
  console.log(str.join("\n"));
}

matrix(7);
