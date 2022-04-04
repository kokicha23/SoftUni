function solve(num, precision) {
    if (precision > 15) {
        precision = 15
    }

    let fixedNumber = num.toFixed(precision)
    console.log(parseFloat(fixedNumber));
}

solve(3.1415926535897932384626433832795, 2)
solve(10.5, 3)