function solve(str){
    let result = str.split('\\');
    let file = result.pop();
    let fileNew = file.split('.');
    let extension = fileNew.pop();
    fileNew.join('.');
    console.log(`File name: ${fileNew.join('.')}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx')