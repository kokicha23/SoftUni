function solve(input) {

    let numArr = input.map(Number);
    let resultArr = [];

    for (let el of numArr) {
        if (el < 0) {
            resultArr.unshift(el);
        } else {
            resultArr.push(el);
        }
    }

    for (let el of resultArr) {
        console.log(el);
    }
}

solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);