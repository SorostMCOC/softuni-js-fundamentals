function geometry(radius, height){
    let volume = 3.1415926535898*(radius*radius)*(height/3);
    console.log(volume.toFixed(4));
    let area = 3.1415926535898*radius*(radius + Math.sqrt(height*height + radius*radius));
    console.log(area.toFixed(4));
}

geometry(3,5)
geometry(3.3 , 7.8)