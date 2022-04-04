function oddAndEvenSum(number) {
    let numStr = number.toString();

    let oddNums = [];
    let evenNums = [];

    for (let i = 0; i < numStr.length; i++) {
        let currentElement = Number(numStr[i]);

        if (currentElement % 2 === 0) {
            evenNums.push(currentElement);
        } else {
            oddNums.push(currentElement);
        }
    }

    let oddSum = sumArrElements(oddNums);
    let evenSum = sumArrElements(evenNums);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function sumArrElements(arr) {
        let sum = 0;
        for (num of arr) {
            sum += num;
        }
        return sum;
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
