function solve(goldArray) {
    const goldValue = 67.51
    const bitcoinValue = 11949.16

    let stolenAmount = 0
    let totalGold = 0

    let money = 0
    let day = 0

    goldArray.forEach(goldAmount => {
        day++
        if (day % 3 === 0) {
            stolenAmount = goldAmount * 0.30
            totalGold += goldAmount - stolenAmount
        } else {
            totalGold += goldAmount
        }
    });

    money += totalGold * goldValue
    console.log(money)
}

solve([100, 200, 300])
solve([50, 100])