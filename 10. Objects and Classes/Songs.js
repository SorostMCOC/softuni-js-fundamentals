function solve(arr){
    let songCount = arr.shift();
    let typeListLast = arr.pop();
    class Song {
        constructor(typeList,name,time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
        play(){
            console.log(`${this.name}`);
        }
    }
    for(let i = 0; i < songCount; i++){
        let songData = arr[i].split('_');
        let typeList,name,time;
        [typeList,name,time] = [songData[0],songData[1],songData[2]];
        let song = new Song(typeList,name,time);
        if(typeList == typeListLast){
            song.play();
        }else if(typeListLast == "all"){
            song.play();
        }  
    }
}

solve([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
solve([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])