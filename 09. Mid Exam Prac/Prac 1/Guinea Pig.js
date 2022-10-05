function solve(input){
    food = Number(input[0]);
    hay = Number(input[1]);
    cover = Number(input[2]);
    weight = Number(input[3]);    
    food = food*1000;
    hay = hay*1000;
    cover = cover*1000;
    weight = weight*1000;
    days = 1;
    while(days <= 30){
        food = food - 300;
        if(days % 2 == 0){
            hay = hay - (food * 0.05);
        }
        if(days % 3 == 0){
            cover = cover - (weight/3);
        }
        days++;
        if(food < 0 || hay < 0 || cover < 0){
            console.log(`Merry must go to the pet store!`);
            break;
        }

    }
    if(food >= 0 && hay >= 0 && cover >= 0){
        food = food/1000;
        hay = hay/1000;
        cover = cover/1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
}


solve(["10", "5", "5.2", "1"])
