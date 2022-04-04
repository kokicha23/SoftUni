function addAndSubstract(number1, number2, number3) {
    const sum = (num1, num2) => num1 + num2;
    const substract = (num1, num2) => num1 - num2;

    let result = substract(sum(number1, number2), number3);
    console.log(result);

}

addAndSubstract(23, 6, 10);