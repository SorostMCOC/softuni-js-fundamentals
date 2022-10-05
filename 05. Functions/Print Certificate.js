function printCertificate(grade, nameArr){
    printHeader();
    printName(nameArr);
    formatGrade(grade);

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~'); 
    }
    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }
    function formatGrade(grade){
        let desc;
        let formattedGrade = grade.toFixed(2)
        if(grade < 3.00){
            desc = "Fail";
            formattedGrade = 2;
        }else if(grade >= 3.00 && grade < 3.50){
            desc = "Poor";
        }else if(grade >= 3.50 && grade < 4.50){
            desc = "Good";
        }else if(grade >= 4.50 && grade < 5.50){
            desc = "Very good";
        }else{
            desc = "Excellent";
        }
        console.log(`${desc} (${formattedGrade})`);
    }
      
      
}

printCertificate(5.25, ['Peter','Carter'])