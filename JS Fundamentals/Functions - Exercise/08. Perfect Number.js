function perfectNumber(number) {

    let numberIsPerfect = isPerfect(number);
    if (numberIsPerfect) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

    function isPerfect(number) {
        let divisors = [];
        let divisorSum = 0;

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }

        for (let divisor of divisors) {
            divisorSum += divisor;
        }

        if (divisorSum === number) {
            return true;
        }
        return false;
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);