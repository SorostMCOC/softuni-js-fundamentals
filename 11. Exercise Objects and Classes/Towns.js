function solve(arr) {
    class Town {
        constructor(town,latitude,longitude){
            this.town = town,
            this.latitude = latitude,
            this.longitude = longitude
        }
        go(){
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }
    for(let x = 0; x < arr.length; x++){
        let [town,latitude,longitude] = arr[x].split(' | ');
        
        latitude = Number(latitude);
        longitude = Number(longitude);
        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);
        let townie = new Town(town,latitude,longitude);
        townie.go(); 
    }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
