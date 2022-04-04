function solve(firstNumber,secondNumber,thirdNumber) {
    let reslut;
    if (firstNumber>secondNumber && firstNumber>thirdNumber)
    {
        reslut=firstNumber;
    }
    else if (secondNumber>firstNumber && secondNumber>thirdNumber)
    {
        reslut=secondNumber;
    }
    else if (thirdNumber>secondNumber && thirdNumber>firstNumber)
    {
        reslut=thirdNumber;
    }
    console.log(`The largest number is ${reslut}.`)
}
solve(5, -3, 16)