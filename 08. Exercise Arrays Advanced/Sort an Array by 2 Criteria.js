function solve(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.localeCompare(y)
        })
        .forEach(x => console.log(x))
}


solve(['alpha', 'beta', 'gamma'])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])