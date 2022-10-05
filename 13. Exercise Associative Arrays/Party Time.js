/*function solve(arr) {
  let party = arr.indexOf("PARTY");
  let list = arr.splice(0, party);
  arr.shift();
  let count = 0;
  let noShow = [];
  let vip = [];
  for (let i = 0; i < list.length; i++) {
    let skorbut = list[i];
    if (arr.indexOf(skorbut) >= 0) {
    } else {
        let firstCh = Number(skorbut[0]);
        if(isNaN(firstCh)){
            noShow.push(skorbut);
            count++;
        }else{
            vip.push(skorbut);
            count++;
        }
    }
  }
  console.log(count);
  vip.forEach((x) => console.log(x))
  noShow.forEach((x) => console.log(x))
}*/

function solve(arr){
  let vipList = [];
  let regularList = [];
  let count = 0;
  for(let guest of arr){
    let isVip = Number(guest[0]);
    if(guest === "PARTY"){
      break;
    }else{
      if(isNaN(isVip)){
        regularList.push(guest)
      }else{
        vipList.push(guest);
      }
    }
  }
  let party = arr.indexOf("PARTY");
  for(let i = party;i < arr.length;i++){
    if(vipList.includes(arr[i])){
      let indexOne = vipList.indexOf(arr[i]);
      vipList.splice(indexOne,1);
    }else if(regularList.includes(arr[i])){
      let indexTwo = regularList.indexOf(arr[i]);
      regularList.splice(indexTwo,1);
    }
  }
  count = vipList.length + regularList.length;
  console.log(count);
  if(vipList.length > 0){
    console.log(vipList.join('\n'));
  }
  if(regularList.length > 0){
    console.log(regularList.join('\n'));
  }
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log(`-------`);
solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
