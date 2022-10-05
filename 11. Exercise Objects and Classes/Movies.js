function solve(arr) {
    let movies = [];
    arr.forEach((el) => {
        if(el.includes("addMovie")){
            el = el.replace("addMovie ","");
            movies.push({name:el});
        }else if(el.includes('onDate')){
            let [name,date] = el.split(' onDate ');
            movies.forEach(movie => {
                if(movie.name === name){
                    movie.date = date;
                }
            })
        }else if(el.includes('directedBy')){
            let [name,director] = el.split(' directedBy ');
            movies.forEach(movie => {
                if(movie.name === name){
                    movie.director = director;
                }
            });
        }
    });
    movies.forEach((el) => {
        if(el.name && el.date && el.director){
            console.log(JSON.stringify(el));
        }
    });
}

solve([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
