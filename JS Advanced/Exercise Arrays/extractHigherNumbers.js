function solve(arr) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < arr[1]) {
            let currentNumber = arr[i];
            let nextNumber = arr[i + 1]

            if (currentNumber < nextNumber) {
                finalArr.push(nextNumber)
            }
            finalArr.unshift(arr[0])
            return finalArr;

        }
        else {
            finalArr.unshift(arr[0])
            return finalArr;
        }
    }
}
solve([1, 
    2, 
    3,
    4])