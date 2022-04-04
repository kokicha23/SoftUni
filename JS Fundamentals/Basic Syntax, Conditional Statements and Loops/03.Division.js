function solve(num) {
    let divisable_numbers = [10, 7, 6, 3, 2]
    let divised_number = 0
    let divided = false

    divisable_numbers.forEach(element => {
        if (num % element === 0 && !divided) {
            divised_number = element
            divided = true
        }
    });

    if (divised_number !== 0) {
        console.log(`The number is divisible by ${divised_number}`)
    } else {
        console.log("Not divisible")
    }
}

solve(30)
solve(15)
solve(12)
solve(1643)