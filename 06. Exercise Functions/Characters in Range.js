function stringToASCII(one,two){
    let strOne = one.charCodeAt(0);
    let strTwo = two.charCodeAt(0);
    let printSum = '';
    if(strOne > strTwo){
        strOne = two.charCodeAt(0);
        strTwo = one.charCodeAt(0);
    }
    asciiToSTR(strOne,strTwo)
    function asciiToSTR(strOne,strTwo){
        let string;
        for(i = strOne + 1; i < strTwo; i++){
            string = String.fromCharCode(i);
            printSum += " " + string;
        }
        console.log(printSum);
    }
}

stringToASCII('a','d')
stringToASCII('#',':')
stringToASCII('C','#')