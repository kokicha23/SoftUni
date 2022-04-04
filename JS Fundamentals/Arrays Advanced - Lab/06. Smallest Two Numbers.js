function solve(input) {
    let sortedArr = input.slice(0).sort((a, b) => {
        return a - b;
    });

    let smallestTwoNumbers = sortedArr.slice(0, 2);
    console.log(smallestTwoNumbers.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);