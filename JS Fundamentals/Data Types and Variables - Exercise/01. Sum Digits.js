function solve(number) {

    let stringNum = number.toString()
    let totalSum = 0

    for (let i = 0; i < stringNum.length; i++){
        totalSum += Number(stringNum[i])
    }

    console.log(totalSum)
}

solve(245678)