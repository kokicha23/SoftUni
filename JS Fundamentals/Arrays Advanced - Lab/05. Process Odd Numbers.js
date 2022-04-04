function solve(input) {
    let arrL = input.length;
    let doubledArr = [];

    for (let i = 0; i < arrL; i++) {
        if (i % 2 !== 0) {
            doubledArr.push(input[i] * 2);
        }
    }

    console.log(doubledArr.reverse().join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);