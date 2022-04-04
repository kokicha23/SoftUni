function factorialDivision(number1, number2) {
    const factorial = number => {
        let sum = 1;

        for (let i = number; i >= 1; i--) {
            sum *= i;
        }

        return sum;
    };

    let num1Factorial = factorial(number1);
    let num2Factorial = factorial(number2);
    let result = num1Factorial / num2Factorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);