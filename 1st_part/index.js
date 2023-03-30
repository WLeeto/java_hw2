
function naturals(n) {
    let result = []
    let arrayNum = 0
    next:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next
            }      
        }

    result[arrayNum] = i
    ++arrayNum
    }
    return result
}

console.time("naturals")
console.log(naturals(process.argv[2]))
console.timeEnd("naturals")
