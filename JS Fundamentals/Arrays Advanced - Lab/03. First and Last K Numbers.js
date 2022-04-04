function solve(input) {
    let numberK = input.shift();
    let arrL = input.length;

    let firstNumbers = input.slice(0, numberK).join(' ');
    let lastNumbers = input.slice(arrL - numberK, arrL).join(' ');

    console.log(firstNumbers);
    console.log(lastNumbers);
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
solve([4, 5, 6, 7, 8, 9]);