function validator(password){
    let charCodes = [];
    for(let i = 0; i < password.length; i++){
        let code = password.charCodeAt(i);
        charCodes.push(code);
        
    }
    let current;
    let letters = 0;
    let digits = 0;
    let length = 0;
    let symbols = 0;
    for(let x = 0; x < charCodes.length; x++){
        current = charCodes[x];
        if(current >= 0 && current <= 47 || current >= 58 && current <= 64 || current >= 91 && current <= 96 || current >= 123){
            length++;
            symbols++;
        }else if(current >= 65 && current <= 90 || current >= 97 && current <= 122){
            letters++;
            length++;
        }else{
            digits++;
            length++;
        }
    }
    if(length >= 6 && length <= 10 && digits >= 2){
        console.log(`Password is valid`);
    }else if(symbols > 0 && digits > 2 && length >= 6 && length <= 10){
        console.log(`Password must consist only of letters and digits`);
    }else if(symbols > 0 && digits > 2 && (length < 6 || length > 10)){
        console.log(`Password must be between 6 and 10 characters`);
        console.log(`Password must consist only of letters and digits`);
    }else if(symbols > 0 && digits < 2 && length >= 6 && length <= 10){
        console.log(`Password must consist only of letters and digits`);
        console.log(`Password must have at least 2 digits`);
    }else if(symbols > 0 && digits < 2 && (length < 6 || length > 10)){
        console.log(`Password must be between 6 and 10 characters`);
        console.log(`Password must consist only of letters and digits`);
        console.log(`Password must have at least 2 digits`);
    }
    else if(length >= 6 && length <= 10 && digits < 2){
        console.log(`Password must have at least 2 digits`);
    }else if((length < 6 || length > 10) && digits < 2){
        console.log(`Password must be between 6 and 10 characters`);
        console.log(`Password must have at least 2 digits`);
    }else if((length < 6 || length > 10) && digits > 2){
        console.log(`Password must be between 6 and 10 characters`);
    }
}

validator('MyPass123')
validator('logIn')
validator('Pa$s$s')