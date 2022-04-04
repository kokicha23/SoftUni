function solve(startingYield) {
    let extractedSpice = 0
    let consumedSpice = 0
    let days = 0

    for (; startingYield >= 100; startingYield -= 10) {
        extractedSpice += startingYield - 26
        consumedSpice += 26
        days++
    }

    extractedSpice -= (extractedSpice > consumedSpice) ? 26 : 0
    console.log(`${days}\n${extractedSpice}`)
}

solve(111)
solve(450)